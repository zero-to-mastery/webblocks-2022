import gsap from "https://cdn.skypack.dev/gsap";

const BUTTON = document.querySelector(".button");
const CONTENT = document.querySelector(".button__content");
const SHINE = document.querySelector(".button__shine");

const buttonSet = gsap.quickSetter(BUTTON, "css");
const xySet = gsap.quickSetter(SHINE, "css");
const LIMIT = 10;

const UPDATE = ({ x, y }) => {
  const BOUNDS = CONTENT.getBoundingClientRect();
  const POS_X = ((x - BOUNDS.x) / BOUNDS.width) * 200;
  const POS_Y = ((y - BOUNDS.y) / BOUNDS.height) * 200;
  xySet({
    "--x": POS_X,
    "--y": POS_Y,
  });

  const xPercent = gsap.utils.mapRange(0, window.innerWidth, -LIMIT, LIMIT, x);

  const yPercent = gsap.utils.mapRange(0, window.innerHeight, -LIMIT, LIMIT, y);

  buttonSet({
    xPercent,
    yPercent,
  });
};

document.addEventListener("pointermove", UPDATE);
document.addEventListener("pointerdown", UPDATE);
