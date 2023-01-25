const button = document.getElementById('guess');
let number = document.getElementById('random');
const randomNum = () =>{
    number.textContent= Math.floor(Math.random()*100)+1;
}

button.addEventListener("click", randomNum);