let x = 0;
let y = 0;
let index = 0;
let dirX = 1;
let dirY = 1;
const speed = 1.5;
const colors = ["orange", "cyan", "blue", "green", "red", "yellow", "grey"];
const dvd = document.getElementById("dvd");
dvd.style.backgroundColor = colors[index];
const dvdWidth = dvd.clientWidth;
const dvdHeight = dvd.clientHeight;

function getNextColor() {
  if (index === colors.length - 1) {
    index = 0;
  } else {
    ++index;
  }
  return colors[index];
}
function animate() {
  const screenHeight = document.body.clientHeight;
  const screenWidth = document.body.clientWidth;

  if (y + dvdHeight >= screenHeight || y < 0) {
    dirY *= -1;
    dvd.style.backgroundColor = getNextColor();
  }
  if (x + dvdWidth >= screenWidth || x < 0) {
    dirX *= -1;

    dvd.style.backgroundColor = getNextColor();
  }
  x += dirX * speed;
  y += dirY * speed;
  dvd.style.left = x + "px";
  dvd.style.top = y + "px";
  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);
