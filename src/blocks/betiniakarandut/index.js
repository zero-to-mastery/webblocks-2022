const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
	if(!toggle.classList.contains("forward")) {
		toggle.classList.add("forward");
		toggle.classList.remove("reverse");
	} else{
		toggle.classList.add("reverse");
		toggle.classList.remove("forward");
	}
})