console.log("hello");

let rating = document.querySelector(".rating");

Array(5).fill("⭐").map((elem) => rating.innerText += elem);