const popup = document.querySelector(".popup");
const pop = document.querySelector("#popup-button")

pop.addEventListener("click", () => {

    popup.classList.add("fade-in-image");
    setTimeout(function() {
        popup.classList.remove("fade-in-image");
    }, 3000);
});
