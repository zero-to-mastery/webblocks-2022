const container=document.querySelector(".container");
const thank=document.querySelector(".thank");
const submit=document.getElementById("submit")
const rating=document.getElementById("rating")
const number=document.querySelectorAll(".btn")
submit.addEventListener("click",()=>{
    thank.classList.remove("hidden")
    container.style.display="none"
})
number.forEach((rate)=>{
    rate.addEventListener("click",()=>{
        console.log(rate.innerHTML)
        rating.innerHTML=rate.innerHTML
    })
})