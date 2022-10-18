const container = document.querySelector(".container")

function Animal(name, age, contactPhone, image){
    this.name = name;
    this.age = age;
    this.contactPhone = contactPhone;
    this.image = image
}

function addAdoption(animalObj){
    container.innerHTML += `
    <div class="animal">
    <img class="image" src=${animalObj.image}>
    <h1 class="name">${animalObj.name} (${animalObj.age} old)</h1>
    <h2 class="contact"><i class="fa-solid fa-phone"></i> ${animalObj.contactPhone}</h2>
    </div class="animal">`
}


addAdoption(new Animal("Lily","3 months","012-345678","./images/1.jpeg"))
addAdoption(new Animal("Bella","1 year","098-765432","./images/2.jpeg"))
addAdoption(new Animal("Chloe","9 months","045-678900","./images/3.jpg"))