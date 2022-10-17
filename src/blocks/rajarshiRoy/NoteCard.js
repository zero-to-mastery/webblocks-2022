
/* 

| This is a custom HTML component which will mimick a short sticky note on the page
 -- basically kind of a card.
 -- With a heading and description
*/

const template = document.createElement('template');
template.innerHTML = `

<link rel="stylesheet" type="text/css" href="style.css">



<div class="card">
  <div class="header">
    <h4>The Heading</h4>
  </div>

  <div class="container">
    <p class="note"><slot /></p> <!-- Making it the default one ->
  </div>
</div>

`


class NoteCard extends HTMLElement {

    constructor(){
        super();
        this.state = {
          headerText : this.getNoteAttribute("heading"),
          headingColor : this.getNoteAttribute("headingColor"), // TODO : Please fix the repitation with proper destructuring !!
          textColor : this.getNoteAttribute("textColor")
        }
    }

    connectedCallback(){
      this.render();     //call the render once it's get mounted
    }

  getNoteAttribute(attribute){
  return this.hasAttribute(attribute) ?
  ((this.getAttribute(attribute) !== (null || undefined || '')) ? this.getAttribute(attribute) : '') : ''; 
  }

    render() {

        const { headerText,headingColor,textColor } = this.state;
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        //Header Rendering
        const headerElement = this.shadowRoot.querySelector(".header>h4");
        headerElement.setAttribute("style",`color:${headingColor};`);
        headerElement.innerText = headerText;

        //Paragraph Rendering
        const text =  this.shadowRoot.querySelector(".note");
        text.setAttribute("style",`color:${textColor};`);
      }

      
}
window.customElements.define("note-card",NoteCard);