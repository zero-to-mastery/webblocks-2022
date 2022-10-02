document.getElementById('current-year').innerHTML = new Date().getFullYear();

// switches between light and dark mode
function darkModeToggleSwitch() {
  var item = document.body
  item.classList.toggle('dark-mode')
}