// Store the elements
let card = document.getElementsByClassName("flip-card");
let content = document.getElementsByClassName("card-content");

// Toggle the flip of the card
function toggleCard() {
    content[0].classList.toggle("flip");
}

// Check if there is an element to add event listener, or throw error
if (card[0] != null) {
    card[0].addEventListener("click", toggleCard);
}
else {
    console.log("Error: Null Element");
}