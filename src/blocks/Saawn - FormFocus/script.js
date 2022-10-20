const firstField = document.querySelector(".field");
const secondField = document.querySelector(".field + .field");
const firstInput = document.querySelector(".field > input");
const fields = Array.from(document.querySelectorAll('.field'));
const inputs = Array.from(document.querySelectorAll(".field > input"));

function blurAll() {
  fields.forEach(function(f) {
    f.classList.remove('active', 'semi-active');
  })
}

function advanceFocus(event) {
  blurAll();
  const thisField = event.target.closest(".field");
  const nextField = thisField.nextElementSibling;
  const prevField = thisField.previousElementSibling;
  thisField.classList.add("active");
  if (nextField) nextField.classList.add("semi-active");
  if (prevField) prevField.classList.add("semi-active");
}

inputs.forEach(function (f) {
  f.addEventListener("focus", advanceFocus);
});

firstField.classList.add("active");
secondField.classList.add("semi-active");
firstInput.focus();