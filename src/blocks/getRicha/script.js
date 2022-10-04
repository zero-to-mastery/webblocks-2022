const emojis = document.querySelectorAll('.emoji');
let selectedRating = 0;

emojis.forEach((emoji) => {
  emoji.addEventListener('click', () => {
    selectedRating = emoji.dataset.id;
    emojis.forEach((emoji) => emoji.classList.remove('active'));
    emoji.classList.add('active');
  });
});