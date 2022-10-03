//Dom declarations
const toggleContainer = document.querySelector(".toggle-button-container");
const toggleClick = document.querySelector(".toggle-switch-container");
const toggleSwitch = document.querySelector(".toggle-switch");
const toggleChoice = document.querySelector("p");

toggleClick.addEventListener("click", () => {
  toggleContainer.classList.toggle("active");
  toggleClick.classList.toggle("active");
  toggleSwitch.classList.toggle("active-switch");
  toggleChoice.classList.toggle("active-switch-text");
  if (toggleChoice.textContent === "YES") {
    toggleChoice.textContent = "NO";
  } else {
    toggleChoice.textContent = "YES";
  }
});
