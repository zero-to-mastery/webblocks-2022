const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")
const button = document.querySelector("button")
const result = document.querySelector(".result")

button.addEventListener('click',()=>{
    if(input1.value && input2.value){
        const random = Math.floor(Math.random() * 101)
        result.textContent = `${random}% matching!`
    }else{
        alert("Please fill in all the fields")
    }
})