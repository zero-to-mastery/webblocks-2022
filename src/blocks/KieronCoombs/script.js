const box5 = document.getElementById('box5');
const span = document.getElementById('span');

box5.addEventListener('mouseenter', () => {
  span.appendChild(document.createTextNode('Image?'));
});

box5.addEventListener('mouseleave', () => {
  span.removeChild(span.firstChild);
});