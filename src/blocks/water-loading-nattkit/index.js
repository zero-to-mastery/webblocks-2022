const loadingElem = document.getElementById("loading");
var loadingState = 0;
setInterval(function() {
  if (loadingState === 100) {
    return;
  }
  loadingState += 5;
  loadingElem.style.height = loadingState+"%";
}, 1000);