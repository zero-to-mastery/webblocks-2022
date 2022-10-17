const petName = document.getElementById('name');
const species = document.getElementById('species');
const age = document.getElementById('age');
const toy = document.getElementById('toy');

let state = {
  name: '',
  age: '',
  species: '',
  toy: '',
};

petName.addEventListener('change', (e) => {
  state = { ...state, name: e.target.value };
});

species.addEventListener('change', (e) => {
  state = { ...state, species: e.target.value };
});

age.addEventListener('change', (e) => {
  state = { ...state, age: e.target.value };
});

toy.addEventListener('change', (e) => {
  state = { ...state, toy: e.target.value };
});

const submit = document.getElementById('add_pet');
const petList = document.getElementById('pet_list');
const alert = document.getElementById('alert');
let petCount = 0;

submit.addEventListener('click', (e) => {
  e.preventDefault();

  if (state.name == '' && state.age == '' && state.species == '' && state.toy == '') {
    alert.classList.add('show');
    return;
  }

  petCount++;
  const paragraph = document.createElement('p');
  paragraph.setAttribute('class', 'pet_para');
  paragraph.setAttribute('id', `pet_para_${petCount}`);
  petList.insertAdjacentElement('beforeend', paragraph);

  const currentPet = document.getElementById(`pet_para_${petCount}`);
  const text = `Pet: ${state.name}, species: ${state.species}, age: ${state.age}, favorite toy: ${state.toy}`;
  currentPet.textContent = text;
  // Cleanup on second attempt
  alert.classList.remove('show');
});
