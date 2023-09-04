// ✅ this will work, acquire input node once script is loading, and the reference is not change even node attribute change
// const input_password = document.querySelector(`input[type="password"]`);

function toggleShowHide() {
	// ✅ Acquire input node with id name, this works since id is fixed
	const input_password = document.getElementById(`inp_pw`);
	// ⛔ reference DOM node every click using type attribute will NOT work, as type will change after clicking
	// const input_password = document.querySelector(`input[type="password"]`);

	// Acquire the eye icon
	const eyeIcon = document.getElementsByClassName("fa-regular")[0];

	if (input_password.type === "password") {
		input_password.type = "text";
		input_password.focus();
		//toggle between "fa-eye-slash" & "fa-eye" class
		eyeIcon.classList.remove("fa-eye");
		eyeIcon.classList.add("fa-eye-slash");
	} else {
		input_password.type = "password";
		input_password.focus();
		//toggle between "fa-eye-slash" & "fa-eye" class
		eyeIcon.classList.remove("fa-eye-slash");
		eyeIcon.classList.add("fa-eye");
	}
}
