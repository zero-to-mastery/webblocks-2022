let css = document.querySelector("h4");
let colone = document.querySelector(".colone");
let coltwo = document.querySelector(".coltwo");
let body = document.getElementById("gradient");
function setColorGradient() {
  body.style.background =
    "linear-gradient(to right, " + colone.value + ", " + coltwo.value + " )";
  css.textContent = body.style.background + ";";
}
colone.addEventListener("input", setColorGradient);
coltwo.addEventListener("input", setColorGradient);
