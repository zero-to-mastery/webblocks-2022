const element = document.getElementById("text");
const w1 = document.getElementById("wheel1");
const w2 = document.getElementById("wheel2");
const car = document.getElementById("car-body");
var to;
element.addEventListener("click", (event)=>{
    let text = element.innerText;
    if(text==="GO!"){
        clearTimeout(to);
        element.innerText="Come Back!";
        w1.classList.add("go");
        w2.classList.add("go");
        car.classList.add("car");
        to=setTimeout(()=>{
            element.innerText="GO!"; 
            w1.classList.remove("go");
            w2.classList.remove("go");
            car.classList.remove("car"); 
        },5000);
    }else{
        clearTimeout(to);
        element.innerText="GO!";
        w1.classList.remove("go");
        w2.classList.remove("go");
        car.classList.remove("car");
    }
    
    
})