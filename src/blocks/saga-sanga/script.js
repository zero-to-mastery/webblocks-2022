const button = document.querySelector("button");
const radioButtons = document.querySelectorAll("input[type='radio'");
const ratingElement = document.querySelector("#rating-msg");
const thankYouSection = document.querySelector(".thank-you-section");
let selectedRank;

button.addEventListener('click', () => {
  for (let radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedRank = radioButton.value;
      break;
    }
  }
  if (selectedRank) {
    ratingElement.innerText = `You selected ${selectedRank} out of 5`;
    thankYouSection.style.display = "grid";
  } else {
    alert("Please select a ranting!");
  }
});
