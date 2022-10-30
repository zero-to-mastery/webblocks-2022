
const removeClasses = (allSlides) => {
  allSlides.forEach(el => {
    el.classList.remove("prev", "current");
  });
};

const addClasses = (slideArr, className) => {
  slideArr.forEach(el => {
    el.classList.add(className);
  });
};


const Carousel = () => {
  const slides = document.querySelectorAll(".slide");
  const slidesLength = slides.length / 2;
  let timerId;
  let prev = slidesLength-1;
  let curr = 0;

  // Filter slides elements where slide index matches value of data-id attribute
  const getSlides = (slideIndex) => {
    return [...slides].filter((item) => slideIndex == item.dataset.id);
  }
  
  // Change slide based on direction (previous(left) or next(right))
  const changeSlide = (direction) => {
    removeClasses(slides);
      
    prev = curr;
      
    if (direction === "right") {
      curr = (curr + 1) % (slidesLength); 
    } else {
      curr = (slidesLength + curr - 1) % (slidesLength);
    }
      
    const prevSlides = getSlides(prev);
    const currentSlides = getSlides(curr);

    addClasses(prevSlides, "prev");
    addClasses(currentSlides, "current");
  };

  const throttleButtons =  (func, direction, delay) => {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func(direction);
    }, delay)
  }
  
  const nextSlide = () => {
    throttleButtons(changeSlide, 'right', 300);
  };
    
  const previousSlide = () => {
    throttleButtons(changeSlide,'left', 300);
  };
    

  const init = () => {

    /* 
    Initialize carousel with first slide & 
    first slide-title as current display items 
    */
    slides[0].classList.add("current");
    slides[slidesLength].classList.add("current");
    
    const buttonLeft = document.querySelector(".btn-left");
    const buttonRight = document.querySelector(".btn-right");
    buttonLeft.addEventListener("click", previousSlide);
    buttonRight.addEventListener("click", nextSlide);
  };

  return { init };
};

window.addEventListener("load", Carousel().init);
