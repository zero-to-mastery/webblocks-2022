const priceInput = document.querySelector('[name = price]');
const quantityInput = document.querySelector('[name = quantity]');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantity-label');
const errorMsg = document.querySelector('.error-msg');

const calculatePieCost = () => {
  const price = priceInput.value;
  const quantity = quantityInput.value;
  const cost = price * quantity;

  total.innerText = `$${cost.toFixed(2)}`;
};

const updateQuantityLabel = () => {
  const quantity = quantityInput.value;
  quantityLabel.innerText = quantity;
};

calculatePieCost();

priceInput.addEventListener('input', calculatePieCost);
quantityInput.addEventListener('input', calculatePieCost);
quantityInput.addEventListener('input', updateQuantityLabel);
