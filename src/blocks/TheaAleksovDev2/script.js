const button = document.querySelector(".generate-hex")
const hexValue = document.querySelector(".hex-code")
const body = document.querySelector("body")

const chars = ["0","1","2","3","4","5","6","7",'8','9',"A","B","C","D","E","F"]

function generateRandomHex(){
    newHex = "#"
    for(let i=0; i<6; i++){
        random = Math.floor(Math.random() * 16)
        newHex += chars[random]
    }
    return newHex
}

button.addEventListener('click',()=>{
    const hex = generateRandomHex()
    body.style.backgroundColor = hex
    hexValue.textContent= hex
    button.style.borderColor = hex

})