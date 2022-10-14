

const elements = {
  btn: document.querySelector('.btn'),
  modalCont: document.querySelector('.modal-container'),
  closeBtn: document.querySelector('a'),
  form: document.querySelector('form'),
  firstInput: document.querySelector('input[name="first"]'),
  lastInput: document.querySelector('input[name="last"]'),
  emailInput: document.querySelector('input[name="email"]'),
  oppInput: document.querySelector('input[name="opportunities"]'),
  thankYou: document.querySelector('.thank-you')
}


const toggleModal = () => {
  elements.modalCont.classList.toggle('hidden');
  elements.btn.classList.toggle('hidden');
}

const displayThankYou = (info) => {
  console.log(info);
  const h2 = document.createElement('h2');
  h2.textContent = `Thanks for signing up, ${info.first}!`;
  const p = document.createElement('p');
  p.textContent = `We've sent a confirmation email to ${info.email}`;
  elements.thankYou.append(h2, p);
  elements.modalCont.classList.toggle('hidden');
  elements.thankYou.classList.toggle('hidden');
  elements.thankYou.classList.toggle('flex');
}



elements.btn.addEventListener('click', toggleModal)
elements.closeBtn.addEventListener('click', toggleModal)

elements.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formDetails = {
    first: elements.firstInput.value,
    last: elements.lastInput.value,
    email: elements.emailInput.value,
    opp: elements.oppInput.checked
  }
  displayThankYou(formDetails);
})