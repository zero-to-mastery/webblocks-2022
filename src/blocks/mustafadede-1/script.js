"use strict";
const colorBoxes = document.querySelectorAll("#color-box");
const navbar = document.querySelector("nav");
const p = document.querySelector(".theme-p");
const colors = ["#1c3879", "#B73E3E", "#FF884B"];
colorBoxes.forEach((box, index) => {
  box.style.backgroundColor = colors[index];
  box.addEventListener("click", function () {
    p.style.color = colors[index];
    navbar.style.backgroundColor = colors[index];
  });
});
