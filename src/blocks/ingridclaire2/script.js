const els = {
  navFull: document.querySelector('.nav-full'),
  navMobile: document.querySelector('.nav-mobile'),
  hamburger: document.querySelector('.fa-burger')
}

const toggleNav = () => {
  if (window.innerWidth < 600) {
    els.navFull.classList.add('hidden')
    els.navMobile.classList.remove('hidden')
  } else {
    els.navFull.classList.remove('hidden')
    els.navMobile.classList.add('hidden')
  }
}

window.addEventListener('resize', (e) => {
  toggleNav();
})

toggleNav();