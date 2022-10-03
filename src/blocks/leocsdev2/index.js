let height = 0

const btnToTop = document.querySelector('.btn-back-to-top')

// Set the current browser height on load and when resizing
window.onload = window.onresize = function () {
  height = window.innerHeight
  console.log('height: ', height)
}

// Show button if viewport is > 100vh.
// Otherwise, hide.
window.onscroll = function () {
  if (window.scrollY > height / 2) {
    btnToTop.style.display = 'inline-block'
  } else {
    btnToTop.style.display = 'none'
  }
}

// Back to top when button is clicked
btnToTop.addEventListener('click', function () {
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0
  // For Safari
  document.body.scrollTop = 0
})
