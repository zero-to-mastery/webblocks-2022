const form = document.querySelector("#login-form");

form &&
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		console.log(form);
		form.style.display = "none";

		const message = document.querySelector("#message");

		message.style.display = "block";
	});
