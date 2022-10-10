const signInBtn = document.querySelector(".signInBtn");
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");

const showAlertbox = () => {
	if (emailInput.value === "" || passwordInput.value === "") {
		alert("please input form details properly !");
	} else {
		alert("inputs are filled. Your form is valid");
	}
};

signInBtn.addEventListener("click", showAlertbox);
