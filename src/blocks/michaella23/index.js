const btn = document.getElementById("btn")
let timer = document.getElementById("timer")
let affirmation = document.getElementById("affirmation")
let timeout;

timer.innerText = "3:00"

let countdown = new Date().getTime() + 3 * 60 * 1000

btn.addEventListener("click", count)

function count() {
    
    let t = setInterval(function update() {
    let now = new Date().getTime()
    let distance = countdown - now
    if (distance > 0) {
        let minutes = Math.floor(distance % (1000 * 60 * 60)/(1000 * 60))
        let seconds = Math.floor(distance % (1000 * 60)/1000)
        if((seconds+"").length === 1){
            seconds = "0"+seconds;
            }
        affirmation.textContent = "Breathe in... and out..."
        timer.textContent = `${minutes}:${seconds}` 
    } else {
        clearInterval(t)
        affirmation.textContent = "Ready to face the world!"       
        }
    }, 1000)
}