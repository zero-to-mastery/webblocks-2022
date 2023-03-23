var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("but");

function setBg(){
    var randomcolor1 = randomColor = Math.floor(Math.random()*16777215).toString(16);
    var randomcolor2 = randomColor = Math.floor(Math.random()*16777215).toString(16);
    color1.value = "#" + randomcolor1;
    color2.value = "#" + randomcolor2;
    setGradient();
}

button.addEventListener ("click", setBg)

color1.value ="#ff0000";
color2.value = "#ffff00";

function display(){
css.innerHTML = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));";
}
display()
function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    css.textContent = body.style.background + ";";
}

// // body.style.background = "red";
// color1.addEventListener("input", function() {
//     setGradient();

// })

// color2.addEventListener("input", function(){
//     setGradient();
// })

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);