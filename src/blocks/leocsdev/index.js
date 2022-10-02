let height = 0
const navBar = document.querySelector('.navbar')

// Set the current browser height on load and when resizing
window.onload = window.onresize = function () {
  height = window.innerHeight
}

// Set the navbar bottom or navbar top
window.onscroll = function () {
  if (window.window.scrollY > height) {
    navBar.classList.remove('navbar-bottom')
    navBar.classList.add('navbar-top')
  } else {
    navBar.classList.remove('navbar-top')
    navBar.classList.add('navbar-bottom')
  }
}
