let root = document.documentElement;
let mover = document.querySelector(".mover");
let link = document.querySelector(".btn");

root.addEventListener("mousemove", (e) => {
  root.style.setProperty("--mouse-x", e.clientX + "px");
  root.style.setProperty("--mouse-y", e.clientY + "px");
});

link.addEventListener("click", function (event) {
  event.preventDefault();
  let svg = `<svg class="svg-2" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5 18.5V1.5" stroke-linejoin="bevel"/>
<path d="M18.5 26.5L1.5 26.5" stroke-linejoin="bevel"/>
<path d="M27.5 36.5V53.5" stroke-linejoin="bevel"/>
<path d="M36.5 26.5L53.5 26.5" stroke-linejoin="bevel"/>
<path class="svg_obj" d="M21.8787 22L12.6863 12.8076" stroke-linejoin="bevel"/>
<path class="svg_obj" d="M33 21.8789L42.1924 12.6865" stroke-linejoin="bevel"/>
<path class="svg_obj" d="M21 33.1211L11.8076 42.3135" stroke-linejoin="bevel"/>
<path class="svg_obj" d="M33.1213 33L42.3137 42.1924" stroke-linejoin="bevel"/>
</svg>`;

  let x = event.offsetX == undefined ? event.layerX : event.offsetX,
    y = event.offsetY == undefined ? event.layerY : event.offsetY;

  let span = document.createElement("span");
  span.className = "mouse";
  span.innerHTML = svg;
  s = span.style;
  s.top = y + "px";
  s.left = x + "px";
  var angle = Math.floor(Math.random() * 25) + "deg";
  s.transform = "rotate(" + angle + ")";
  this.appendChild(span);

  setTimeout(function () {
    span.remove();
  }, 1400);

  mover.classList.add("active");
  setTimeout(function () {
    mover.classList.remove("active");
  }, 250);
});
