console.log("Welcome to my notes")
showNotes()
let btn = document.getElementById("addBtn");
btn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let obj={
        title: addTitle.value,
        txt:addTxt.value
    }
    notesObj.push(obj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value="";
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
                <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text"> ${element.txt}</p>
                            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                        </div>
                    </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = 'Nothing to show add notes';
    }

}

function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1)
    localStorage.setItem("notes",JSON.stringify(notesObj))
    showNotes()
}

let search=document.getElementById("searchVal")
search.addEventListener("input",func)
function func(){
    let inputVal=search.value;
    console.log(inputVal)
    let noteCard=document.getElementsByClassName("noteCard")
    Array.from(noteCard).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })

}
