let quotes = [
    "The purpose of our lives is to be happy." ,
    "Life is what happens when you're busy making other plans.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things."
]

const quote = document.querySelector(".quote")
const btn = document.querySelector(".btn")

btn.addEventListener('click',()=>{
    let random = Math.floor(Math.random() * 5)
    quote.textContent = quotes[random]
})
