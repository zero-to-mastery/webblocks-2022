const root = document.documentElement;

const background = document.querySelector(".container");
const carousel = document.querySelector(".carousel-container");
const carouselWrapper = document.querySelector(".carousel-wrapper");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const toggleCarouselType = document.querySelector(".toggle-type");
const toggleBackgroundBtn = document.querySelector(".toggle-bg");

const width = Number(carousel.getAttribute("width") || "600");
const height = Number(carousel.getAttribute("height") || "400");

let activeIndex = -1;
let carouselType = "slide";
let toMoveBy = 0;
let prevSlide;
let nextSlide;

root.style.setProperty("--width", `${width}px`);
root.style.setProperty("--height", `${height}px`);

for (let i = 0; i < carouselItems.length; i++) {
  if (carouselItems[i].classList.contains("active")) {
    activeIndex = i;
  }
}

// Toggles the background to dark and light modes
function toggleBackground() {
  background.classList.toggle("bg-dark");
  toggleBackgroundBtn.classList.toggle("toggle-bg-dark");
}

function removeClass(element, className) {
  element.classList.remove(className);
}

function addClass(element, className) {
  element.classList.add(className);
}

// Move the slide by a given value
function translateSlide(translateBy, transitionTime) {
  carouselWrapper.style.transform = `translateX(-${translateBy}px)`;
  carouselWrapper.style.transition = `${transitionTime}s`;
}

// Remove controls when there are no more slides
// (after the last slide and before the first slide)
function checkIndexAndToggleClass() {
  if (activeIndex === 0) {
    addClass(prevBtn, "hide");
  } else if (activeIndex === carouselItems.length - 1) {
    addClass(nextBtn, "hide");
  }
}

// Change the carousel effect
function changeCarouselType(e) {
  if (e.target.checked) {
    carouselType = "fade";
    translateSlide(0, 0);
  } else {
    carouselType = "slide";
    translateSlide(activeIndex * width, 0);
  }
  carousel.classList.toggle("fade");
}

// Verify if an element has the given class name
function checkIfElementHasClass(element, className) {
  return element.classList.contains(className);
}

// Mark active state for the next slide and remove it
// for the previous slide
function modifyActiveState(currentIndex, nextIndex) {
  const prevSlide = carouselItems[currentIndex];
  const nextSlide = carouselItems[nextIndex];
  prevSlide.classList.remove("active");
  nextSlide.classList.add("active");
}

/* 
  Move to the next slide
  incrementBy - parameter to determine which slide
                will be active
  If incrementBy takes a positive value, the next
  slide to the right will be acive
  If incrementBy takes a negative value, the previous
  slide will be the active slide
 */
function moveToNextSlide(incrementBy) {
  modifyActiveState(activeIndex, activeIndex + incrementBy);
  activeIndex += incrementBy;
  if (carouselType !== "fade") {
    translateSlide(activeIndex * width, 0.5);
  }
  checkIndexAndToggleClass();
}

checkIndexAndToggleClass();

function moveCarouselSlideToLeft() {
  if (checkIfElementHasClass(nextBtn, "hide")) {
    removeClass(nextBtn, "hide");
  }
  moveToNextSlide(-1);
}

function moveCarouselSlideToRight() {
  if (checkIfElementHasClass(prevBtn, "hide")) {
    removeClass(prevBtn, "hide");
  }
  moveToNextSlide(1);
}

// Event listeners
prevBtn.addEventListener("click", moveCarouselSlideToLeft);
nextBtn.addEventListener("click", moveCarouselSlideToRight);
toggleCarouselType.addEventListener("change", changeCarouselType);
toggleBackgroundBtn.addEventListener("click", toggleBackground);
