const paginationBtns = document.querySelectorAll(".slider__pagination");
const slideItems = document.querySelectorAll(".slider__item");
let slide = document.querySelector(".slider");
let i = 1;
const delay = 12000;

function activeCheck(list) {
  for (let element of list) {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    }
  }
}

function timeSlide() {
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
      timeSlide();
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

window.addEventListener("load", function () {
  timeSlide();
});
