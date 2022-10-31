var input=document.querySelector("#enterTheTask");
var enter=document.querySelector("#enter");
var ul=document.querySelector("ul");
function appendLi(){
        var div=document.createElement("div");
        var li=document.createElement("li");
        var delButton=document.createElement("button");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(div);
        div.append(li,delButton);
        li.classList.add("items");
        div.style.display="flex";
        delButton.classList.add("delClass");
        delButton.innerHTML="Delete";
        input.value="";
}
function addWithButton(){
    if(input.value!==""){
        appendLi();
    }
}
function addWithEnter(element){
    if(input.value!=="" && element.keyCode===13){
        appendLi();
    }
}
function handleUIClick(element){
    doneTask(element);
    deleteListItem(element);
}
function doneTask(element)
{
    if(element.target.matches("li"))
    {
        element.target.classList.toggle("done");
    }
}
function deleteListItem(element)
{
    if(element.target.className==="delClass")
    {
        element.target.parentElement.remove();
    }
}
enter.addEventListener("click",addWithButton);
input.addEventListener("keypress",addWithEnter);
ul.addEventListener("click",handleUIClick);