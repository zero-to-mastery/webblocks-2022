
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");

const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";


//Submit Form
form.addEventListener('submit',addItem);

clearBtn.addEventListener('click',clearAll);

window.addEventListener('DOMContentLoaded', setupItems);

// ****** FUNCTIONS **********

function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString() //will give new id to every object kind of a cheese 
    if(value !== '' && !editFlag){

       createListItems(id,value);

        displayAlert('Item Added!!','success');

        container.classList.add("show-container"); //showing container

        //adding to Local storage
        addToLocalStorage(id,value);

        setBackToDefault();
    }

    else if(value !== '' && editFlag){

        editElement.innerHTML = value;
        displayAlert("Edited!", "success");

        editLocalStorage(editID, value);

        setBackToDefault();
    }

    else{

        displayAlert('Enter A Value First','danger')
    }
}

//alert display

function displayAlert(text,action){

    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    
    setTimeout(function(){ //removing the above alert 
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    },1000)
}

function clearAll(){
    const items = document.querySelectorAll('.grocery-item');

    if(items.length > 0){

        items.forEach(function(item){

            list.removeChild(item);
        });
    }

    container.classList.remove("show-container"); //removing this class to remove the clear all button 
    displayAlert("List Cleared!", "danger");

    setBackToDefault();     
    localStorage.removeItem('list');
}

function deleteItem(e){

    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;

    list.removeChild(element);

    if(list.children.length === 0 ){
        
        container.classList.remove("show-container");
    }

    displayAlert("Item Removed!", "danger");
    setBackToDefault();

    removeFromLocalStorage(id);
}

function editItem(e){

    const element = e.currentTarget.parentElement.parentElement;

    editElement = e.currentTarget.parentElement.previousElementSibling; //the parentElement will give the button and then previous Element will take us to the title
    
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;

    submitBtn.textContent = "edit";
}


function setBackToDefault(){ 
    grocery.value = "";
    editFlag = false;
    editID- '';
    submitBtn.textContent = "submit";
}

//Local storage function
function addToLocalStorage(id, value){

    const grocery = {id:id,value:value};
    let items = getLocalStorage();

    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));
    
    
}

function removeFromLocalStorage(id){

    let items = getLocalStorage();

    items = items.filter(function(item){
    
        if(item.id !== id){
            return item;
        }
    });

    localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value){

    let items = getLocalStorage();
    items = items.map(function(item){
        
        if(item.id == id){
            item.value = value;
        }
        return item;
    });

    localStorage.setItem("list", JSON.stringify(items));
}


function getLocalStorage(){

    return localStorage.getItem("list")?JSON.parse(localStorage.getItem('list')):[];
}

// SETUP ITEMS 

function setupItems(){

    let items = getLocalStorage();

    if(items.length > 0){
        items.forEach(function(item){
            createListItems(item.id,item.value);
        });

        container.classList.add("show-container");
    }
}

function createListItems(id, value){

    const element = document.createElement('article');
    element.classList.add('grocery-item');

    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);

    element.innerHTML = `
    <p class="title">${value}</p>
    <div class="btn-container">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
    </div>`;

    const deleteBtn = element.querySelector('.delete-btn');    
    const editBtn = element.querySelector('.edit-btn'); 

    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click',editItem)
    //appending 
    list.appendChild(element);
}
