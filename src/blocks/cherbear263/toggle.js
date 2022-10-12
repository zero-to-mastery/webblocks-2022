function toggleClass() {
  // if toggle is checked, apply dark styling
  var Dark = document.getElementById("darkToggle").checked;
  var callout = document.getElementById("darkCallout");
  if (Dark) {
    document.body.classList.add("bgDark");
    document.querySelector("h1").classList.add("bgDark");
    document.getElementById("darkCallout").classList.add("calloutDark");
  } else {
    document.body.classList.remove("bgDark");
    document.querySelector("h1").classList.remove("bgDark");
  }
  // else apply light styling
}