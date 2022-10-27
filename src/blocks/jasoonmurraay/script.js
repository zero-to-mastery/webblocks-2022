const toggleBtn = document.querySelector('.sidebar-toggler')
const sidebar = document.querySelector('.sidebar')
const arrow = document.querySelector('.arrowIcon')
const navbar = document.querySelector('.navbar')
let initWidth = window.innerWidth

function hideNav() {
    sidebar.classList.remove('open')
    navbar.classList.remove('open')
    toggleBtn.classList.remove('open')
    arrow.classList.remove('flipped')
}

function showNav() {
    sidebar.classList.add('open')
    navbar.classList.add('open')
    toggleBtn.classList.add('open')
    arrow.classList.add('flipped')
}

if (initWidth > 700) {
    showNav()
}

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open')
    arrow.classList.toggle('flipped')
    navbar.classList.toggle('open')
    toggleBtn.classList.toggle('open')
})

addEventListener('resize', () => {
    if (window.innerWidth >= 700 && initWidth < 700) {
        showNav()
    } else if (window.innerWidth < 700 && initWidth >= 700) {
        hideNav()
    }
    initWidth = window.innerWidth
})