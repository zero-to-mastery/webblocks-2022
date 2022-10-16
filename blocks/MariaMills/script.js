const paginationBtns = document.querySelectorAll(".slider__pagination");
const slideItems = document.querySelectorAll(".slider__item");
let slide = document.querySelector(".slider");

// Currently using this variable for my timedSlide function to iterate through the different slides
let i = 1;
//Change this value to change the automated delay, currently set to 12 seconds
const delay = 12000;

function activeCheck(list) {
  for (let element of list) {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    }
  }
}

function timedSlide() {
  setTimeout(function () {
    activeCheck(slideItems);
    slideItems[i].classList.add("active");
    activeCheck(paginationBtns);
    paginationBtns[i].classList.add("active");
    i++;
    if (i == slideItems.length) {
      i = 0;
    }
    if (i < slideItems.length) {
      timedSlide();
    }
  }, delay);
}

paginationBtns.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    activeCheck(paginationBtns);
    btn.classList.add("active");
    slideItems.forEach(function () {
      activeCheck(slideItems);
    });
    slideItems[index].classList.add("active");
  });
});

// Calling the timedSlide function on window load
window.addEventListener("load", function () {
  timedSlide();
});
