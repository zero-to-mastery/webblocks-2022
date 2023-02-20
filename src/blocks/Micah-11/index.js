const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click", function () {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    modeText.innerHTML = "Light mode";
  } else {
    modeText.innerHTML = "Dark mode";
  }
});
toggle.addEventListener("click", function () {
  sidebar.classList.toggle("close");
});
