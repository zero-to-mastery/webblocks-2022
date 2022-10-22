const container = document.getElementById('container');
const code = document.getElementById('code');
container.addEventListener('wheel', ()=>{
    // Genrate random gradient
    const randomColor = () => Math.floor(Math.random() * 255);
    const randomGradient = `linear-gradient(45deg, rgb(${randomColor()}, ${randomColor()}, ${randomColor()}), rgb(${randomColor()}, ${randomColor()}, ${randomColor()}))`;
    container.style.background = randomGradient;
    code.textContent = "background: "+randomGradient;
})