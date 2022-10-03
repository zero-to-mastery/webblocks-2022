//Init
const consoleShow = document.getElementById("console-show");
const consoleWrite = document.getElementById("input-write");
let messages = [];


//Get current time
const getCurrentTime = () => {
    const currentdate = new Date();
    let h = currentdate.getHours();
    let m = currentdate.getMinutes();
    m = m <= 9 ? (`0${m}`) : m;
    const datetime = `${h}:${m}`
    
    return datetime
}

//Add message 
const addMessage = (e) => {
    if(e.keyCode === 13){
        messages.push(`<p>${getCurrentTime()} ${e.target.value}</p>`);
        e.target.value = ''
        showAllMessages();
    }
}
consoleWrite.addEventListener('keyup', addMessage);

//initial messeges
messages.push(`<p>${getCurrentTime()} Hi !</p>`);
messages.push(`<p>${getCurrentTime()} How are you today?</p>`);
messages.push(`<p>${getCurrentTime()} You can write to me, but i can't wrtie to you yet ... :(</p>`);

//Show all message
const showAllMessages = () => {
    consoleShow.innerHTML = '';
    for (msg of messages){
        consoleShow.innerHTML += msg;
    }
}

showAllMessages();
