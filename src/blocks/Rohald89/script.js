const images = document.querySelectorAll('img');
const imageContainer = document.querySelector('.images');

imageContainer.addEventListener('click', flip);

function flip(e){
  const index = e.target.dataset.index;
  if(!index) return;
  const state = Flip.getState(images);

  imageContainer.className = `images state-${index}`;

  Flip.from(state, {
    duration: .9,
    ease: 'power1.inOut'
  })
}
