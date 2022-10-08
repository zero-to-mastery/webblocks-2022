const toggleBtn = document.querySelector('.toggle__btn')
const navBg = document.querySelector('.bg__img')
const toggleOpen = document.querySelector('.toggle__open')
const toggleClose = document.querySelector('.toggle__close')
let navOpen = false;


toggleBtn.addEventListener('click', (e) => {
  navOpen = !navOpen
  
  if (navOpen) {
    navBg.classList.add('appear')
    toggleOpen.classList.add('hide')
    toggleClose.classList.remove('hide')

  } else {
    navBg.classList.remove('appear')
    toggleClose.classList.add('hide')
    toggleOpen.classList.remove('hide')
  }
})