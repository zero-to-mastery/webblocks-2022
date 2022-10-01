const element = document.getElementById("text");
const rotate = document.getElementById("rotate");
element.addEventListener("click", (event)=>{
    rotate.classList.toggle("start");
    element.classList.toggle("end");
    let text = element.innerText;
    if(text==="Start!"){
        element.innerText = "Stop!";
    }else{
        element.innerText = "Start!";
    }
})