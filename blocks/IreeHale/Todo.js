//create variable connected to the class items in the index file
let input = document.getElementById("search");
let add = document.getElementById("add");
let container = document.getElementById("container2");
//create add btn functionality to add to do items
add.addEventListener("click", function addToContainer(){
    const p = document.createElement('p');
    if ( input.value === "") {
        alert("add a To-Do please.");
    }else{
        p.innerText = input.value;
        container.appendChild(p);
    }

    p.addEventListener("click", function lineThrough(){
        p.style.textDecoration = "line-through"
    });

    p.addEventListener("dblclick", function removeItem(){
        container.removeChild(p);
    })
});