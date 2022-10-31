let countEl=document.getElementById('count-el');
let welcome=document.getElementById('welcome');
let seat=document.getElementById('seat');
let saveEl=document.getElementById('save-el');
let count= 0;
function increment(){
    // let name= prompt('What is ur name');
    count+= 1;
    countEl.textContent= count;
    // welcome.innerText='Welcome ' + name + '.' ;
    // seat.textContent= 'Your seat number is no.'+ count
}
function save(){
    let message = count +' - ';
    saveEl.textContent += message;
    countEl.textContent=0;
    count=0;
}
function reset(){
    saveEl.textContent = 'Previous entries: ';
}
