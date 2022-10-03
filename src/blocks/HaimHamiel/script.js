let canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 300;

let imageData = context.createImageData(canvas.width, canvas.height);
document.body.appendChild(canvas);

(function loop() {
  for (let i = 0; i < imageData.data.length; i++) {
    imageData.data[i] = (Math.random() * 255) | 0;
  }

  context.putImageData(imageData, 0, 0);
  requestAnimationFrame(loop);
})();
