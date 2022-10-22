var first_color = document.querySelector(".first_color");
var second_color = document.querySelector(".second_color");
var third_color = document.querySelector(".third_color");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ first_color.value 
	+ ", " 
	+ second_color.value 
	+ ", " 
	+ third_color.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

first_color.addEventListener("input", setGradient);
second_color.addEventListener("input", setGradient);
third_color.addEventListener("input", setGradient);