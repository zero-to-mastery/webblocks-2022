const els = {
  navFull: document.querySelector('.nav-full'),
  navMobile: document.querySelector('.nav-mobile'),
  hamburger: document.querySelector('.fa-burger'),
  dropdown: document.querySelector('.dropdown')
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

els.hamburger.addEventListener('click', () => {
  els.dropdown.classList.toggle('hidden')
})

window.addEventListener('resize', (e) => {
  toggleNav();
})

toggleNav();