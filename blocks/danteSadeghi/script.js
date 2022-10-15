var myButton = document.querySelector("button");
var body = document.querySelector("body");

function randomizeBackgroundAndButtonColors() {
    var colorOne = generateRandomHexColor();
    var colorTwo = generateRandomHexColor();

    body.style.background = 
		"linear-gradient(to right, " 
		+ colorOne
		+ ", " 
		+ colorTwo
		+ ")";

    myButton.style.background = 
        "linear-gradient(to right, " 
        + colorTwo
        + ", " 
        + colorOne
        + ")";
}

function generateRandomHexColor() { // Generating random hex-value colors
	var x = Math.round(0xffffff * Math.random()).toString(16);
	var y = (6 - x.length);
	var z = "000000";
	var z1 = z.substring(0, y);
	var randomColor = '#' + z1 + x;
	return randomColor;
}

myButton.addEventListener("click", randomizeBackgroundAndButtonColors);