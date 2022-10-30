const btnToggle = document.getElementById("btn-toggle");
btnToggle.addEventListener("click", () => {
  const menuContainerToggle = document.getElementById("menu-container-toggle");
  if (menuContainerToggle.style.display === "grid") {
    menuContainerToggle.style.display = "none";
    btnToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  } else {
    menuContainerToggle.style.display = "grid";
    btnToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }
});

let theme = "light";

const btnThemeLg = document.getElementById("btn-theme-lg");
btnThemeLg.addEventListener("click", () => {
  if (theme === "dark") {
    // dark mode
    document.querySelector("header").style.background = "#171b1d";
    document.getElementById("menu-container").style.background = "#171b1d";

    theme = "light";
  } else {
    // light mode
    document.getElementById("menu-container").style.background = "#cacaca";
    document.querySelector("header").style.background = "#cacaca";
    theme = "dark";
  }
});
const btnThemeSm = document.getElementById("btn-theme-sm");
btnThemeSm.addEventListener("click", () => {
  if (theme === "dark") {
    // dark mode
    document.querySelector("header").style.background = "#171b1d";
    document.getElementById("menu-container-toggle").style.background =
      "#171b1d";
    document.getElementById("drop-down-item-lg").style.background = "#171b1d";
    document.getElementById("drop-down-item-sm").style.background = "#171b1d";
    document.getElementById('droop-down-item-lg').style.background = '#cacaca'

    theme = "light";
  } else {
    // light mode
    document.getElementById("menu-container-toggle").style.background =
      "#cacaca";
    document.querySelector("header").style.background = "#cacaca";
    document.getElementById("drop-down-item-sm").style.background = "#cacaca";
    theme = "dark";
  }
});
