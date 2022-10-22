const toggleButtons = document.getElementsByClassName("toggle");

for (var i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].onclick = toggle;
}
function toggle() {
  if (this.getAttribute("aria-checked") == "true") {
    this.setAttribute("aria-checked", "false");
  } else {
    this.setAttribute("aria-checked", "true");
  }
}
