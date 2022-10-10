let isThemeDark = false;

const toggleBtnEl = document.querySelector(".theme-toggle--button");

const backgroundEl = document.querySelector(".background");

const shapeEl = document.querySelector(".shape");

toggleBtnEl.addEventListener("click", toggleTheme);

function toggleTheme() {
    isThemeDark = !isThemeDark;
    const replacedClass = isThemeDark ? "moon" : "sun";
    const replacedWithClass = isThemeDark ? "sun" : "moon";
    shapeEl.classList.replace(replacedClass, replacedWithClass);
    backgroundEl.classList.toggle("dark");
}
