const addTask = function (){

   let getValue=  document.getElementById("todo-input").value;
   console.log(getValue);
   if(getValue == ""){
    
  alert("Please add a task, Task cannot be empty");
   }
   else{
    const setList = document.createElement("li");
    let setListItem = document.createTextNode(getValue); 
  
     setList.appendChild(setListItem);
    
     document.getElementById("mytodo").appendChild(setList);

     document.getElementById("todo-input").value = ''
   }
}

const clearTask = function (){
    let parent = document.getElementById("mytodo");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
}
}
