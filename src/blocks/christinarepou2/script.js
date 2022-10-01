var button = document.getElementById("item-btn");
var shopping_list = document.getElementById("list-temp");
var tempContent = shopping_list.content;
document.body.appendChild(tempContent);
var counter = 1;
function addItem() {
    var list = document.getElementById("list");

    var label = document.createElement('label');
    label.setAttribute ("for", 'list-item'+counter); 
    label.setAttribute("id", "label"+counter);
    var item_name = document.getElementById("item").value;
    var quantity = document.getElementById("quantity").value;
    label.innerHTML = quantity+ " "+item_name; 
    const newCheckbox = document.createElement ("input"); 
    var div_item = document.createElement('div');
    newCheckbox.setAttribute ("type", 'checkbox'); 
    newCheckbox.setAttribute ("id", 'list-item'+counter); 
    newCheckbox.setAttribute ("onclick", 'removeItem("'+counter+'")');
    counter++;
    list.appendChild (div_item);
    div_item.appendChild(newCheckbox);
    div_item.appendChild (label); 
    
}

function removeItem(id) {
    var label = document.getElementById("label"+id);
    var checkbox = document.getElementById("list-item"+id);
    label.remove();
    checkbox.remove();
}