const navButton = document.getElementById("icon");

navButton.addEventListener("click", () => {
  if (navButton.classList.contains("close")) {
    navButton.classList.remove("close");
    navButton.classList.add("ham");
  } else {
    navButton.classList.remove("ham");
    navButton.classList.add("close");
  }
});