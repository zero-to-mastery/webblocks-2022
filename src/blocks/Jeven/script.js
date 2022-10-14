let animals = document.querySelector(".animals");

animals.addEventListener("click", animal => {
    if(animal.target.classList.length < 3){
        // Animate target
        animal.target.classList.add("animation");
        // Animate heart
        animal.target.nextElementSibling.classList.toggle("notVisible")

        setTimeout(() => {
            animal.target.nextElementSibling.classList.toggle("notVisible")
            animal.target.classList.remove("animation");
        }, 1200);
    }
})
