const button = document.querySelector("button");
const links = document.querySelector(".social-media-links");

button.addEventListener('click', showIcons);

function showIcons() {
  button.style.display="none";
  links.style.display="flex";
}