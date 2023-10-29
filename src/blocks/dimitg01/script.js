document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
  // Define the coffee data
  const coffees = [
    { id: 1, name: "Espresso", price: 2.5 },
    { id: 2, name: "Latte", price: 3.0 },
    { id: 3, name: "Cappuccino", price: 3.5 },
    { id: 4, name: "Americano", price: 2.0 },
    { id: 5, name: "Mocha", price: 3.75 },
  ];

  renderCoffeeList(coffees);
  attachFormListener();
}

// Renders the coffee list to the DOM
function renderCoffeeList(coffees) {
  const coffeeListDiv = document.getElementById("coffeeList");

  coffees.forEach((coffee) => {
    const coffeeDiv = document.createElement("div");
    coffeeDiv.className = "coffee-item";
    coffeeDiv.innerHTML = `
      <div class="coffee-label">
          <input type="checkbox" id="coffee_${coffee.id}" data-price="${
      coffee.price
    }">
          <label for="coffee_${coffee.id}">${
      coffee.name
    } (£${coffee.price.toFixed(2)})</label>
      </div>
      <input type="number" id="quantity_${
        coffee.id
      }" placeholder="Quantity" value="1" min="1">
    `;
    coffeeListDiv.appendChild(coffeeDiv);
  });
}

// Attaches the submit event listener to the form
function attachFormListener() {
  const coffeeForm = document.getElementById("coffeeForm");
  coffeeForm.addEventListener("submit", handleFormSubmit);
}

// Handles the form submission event
function handleFormSubmit(event) {
  event.preventDefault();

  const total = calculateTotalOrderCost();

  const totalCostDiv = document.getElementById("totalCost");
  totalCostDiv.innerHTML = `<strong>Total Cost:</strong> £${total.toFixed(2)}`;
}

// Calculates the total cost based on selected items and their quantities
function calculateTotalOrderCost() {
  let total = 0;

  document
    .querySelectorAll('input[type="checkbox"]:checked')
    .forEach((checkedBox) => {
      const quantityElement = document.getElementById(
        `quantity_${checkedBox.id.split("_")[1]}`
      );
      const quantity = parseInt(quantityElement.value, 10);

      // Handle cases where the quantity might not be a number or less than 1
      if (isNaN(quantity) || quantity < 1) {
        console.error(`Invalid quantity for ${checkedBox.id}: ${quantity}`);
        return;
      }

      const price = parseFloat(checkedBox.getAttribute("data-price"));
      total += quantity * price;
    });

  return total;
}
