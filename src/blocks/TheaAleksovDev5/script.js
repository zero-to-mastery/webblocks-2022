const buttons = document.querySelectorAll("button")
const body = document.querySelector("body")
const quote = document.querySelector(".quote")

const quotes = [
    "Nothing is impossible. The word itself says ‘I’m possible’.",
    "If plan A doesn’t work, there are 25 more letters in the alphabet!",
    "Believe you can and you’re halfway there.",
    "Difficult roads often lead to beautiful destinations.",
    "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
    "“It’s fun to do the impossible.” – Walt Disney",
    "Small changes can make a difference.",
    "Mistakes are proof that you are trying",
    "Only I can change my life. No one else can do it for me.",
    "Life is 10% what happens to us, 90% how we react to it."
]

buttons.forEach((button) =>{
    
    button.addEventListener("click",()=>{
        buttons.forEach(button=>{
            button.textContent =""
        })
        button.innerHTML = `<i class="fa-solid fa-check"></i>`
        body.style.backgroundColor = button.style.backgroundColor       
        const random = Math.floor(Math.random()*10) 
        quote.textContent = `"${quotes[random]}"`
    })
})