function toggleSpinner() {
  let element = document.getElementById("spinner-div");
  element.classList.toggle("spinner-show")

  setTimeout(() => {
    element.classList.remove("spinner-show")
  }, 3000)
}