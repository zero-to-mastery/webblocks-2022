const button = document.querySelector("button");
const radioButtons = document.querySelectorAll("input[type='radio'");
const ratingElement = document.querySelector("#rating-msg");
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
    document.querySelector(".thank-you-section").style.display = "grid";
    document.querySelector("#rating-section").style.display = "none";
  } else {
    alert("Please select a rating!");
  }
});
