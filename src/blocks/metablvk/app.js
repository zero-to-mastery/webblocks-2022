/**
 * A simple text editor
 */
const editor = document.querySelector('.editor');
const textArea = document.createElement('p');
const controls = document.createElement('div');

// Build strong button for bolding text
const strongBtn = document.createElement('button');
strongBtn.appendChild(document.createTextNode('B'));
strongBtn.classList.add('btn');

controls.appendChild(strongBtn);

// Build text area
let text = "I'm a simple text editor...";
textArea.appendChild(document.createTextNode(text));
textArea.classList.add('text-area');
// Build editor
editor.appendChild(controls);
editor.appendChild(textArea);

/**
 * TODO:
 * - Allow basic user input and display cursor
 * - Add in ability to make text strong, or emphasized
 */

strongBtn.addEventListener('click', () => {
  strongBtn.classList.toggle('btn-active');
});
const typing = (e) => {
  // logic goes here.
  switch (e.key) {
    case 'Backspace':
      text = text.slice(0, text.length - 1);
      break;
    case 'Enter':
      text += '\n';
      break;
    case 'Shift':
      // No logic, because it will capitalize the text automatically.
      break;
    default:
      text += e.key;
  }

  textArr = text.split('\n');
  // remove the previous children
  while (textArea.lastChild) {
    textArea.removeChild(textArea.lastChild);
  }
  // update the dom with the current children
  textArr.forEach((text, i) => {
    if (i !== 0) {
      textArea.appendChild(document.createElement('br'));
    }
    textArea.appendChild(document.createTextNode(text));
  });
};

window.addEventListener('click', (e) => {
  // if event.target equals editor add cursor, and ability to type
  // else unfocus editor if focused
  if (e.target === editor || e.target === textArea || e.target === strongBtn) {
    window.addEventListener('keydown', typing);
    textArea.classList.add('cursor');
  } else {
    console.log('Outside of editor clicked');
    textArea.classList.remove('cursor');
  }
});
