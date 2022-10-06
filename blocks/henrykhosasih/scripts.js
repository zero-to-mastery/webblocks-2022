const DEFAULT_SHOW_STATE = false;
let show = DEFAULT_SHOW_STATE;

const button = document.getElementById("show-button");
const expiry = document.getElementById("expiry");
const cvc = document.getElementById("cvc");

button.addEventListener("click", handleClick);

function handleClick() {
	toggleButtonText();
	toggleCardDetails();
}

function toggleButtonText() {
	if (show) {
		button.innerText = "👁 Show";
	} else {
		button.innerText = "🙀 Hide";
	}
	show = !show;
}

function toggleCardDetails() {
	if (show) {
		expiry.innerText = "Expiry 01/25";
		cvc.innerText = "CVC 890";
	} else {
		expiry.innerText = "Expiry ••/••";
		cvc.innerText = "CVC •••";
	}
}
