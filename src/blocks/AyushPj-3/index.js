const Name=document.getElementById("Name")
const email=document.getElementById("email")
const phone=document.getElementById("phone");
const btn=document.getElementById("btn")

let emailcheck=false
let phonecheck=false
let namecheck=false

Name.addEventListener("blur",()=>{
let regex=/^([A-Za-z]+)([\w\s]+){2,10}$/
let str=Name.value
if(regex.test(str)){
    let namevalid=document.getElementById("namevalid")
    namevalid.innerHTML=""
    namecheck=true
}
else{
    let namevalid=document.getElementById("namevalid")
    namevalid.innerHTML="Your name should start with an alphabet"
    namecheck=false
}
})

email.addEventListener("blur",()=>{
let regex=/^([A-Za-z0-9]+)@([A-Za-z]+)\.([a-z]){3,6}$/
let str=email.value
if(regex.test(str)){
    let emailvalid=document.getElementById("emailvalid")
    emailvalid.innerHTML=""
    emailcheck=true
}
else{
    let emailvalid=document.getElementById("emailvalid")
    emailvalid.innerHTML="Your email should be valid"
    emailcheck=false
}
})

phone.addEventListener("blur",()=>{
let regex=/^(91)?([0-9]){10}$/
let str=phone.value
if(regex.test(str)){
    let phonevalid=document.getElementById("phonevalid")
    phonevalid.innerHTML=""
    phonecheck=true
}
else{
    let phonevalid=document.getElementById("phonevalid")
    phonevalid.innerHTML="Your Phone number should be of 10 digit"
    phonecheck=false
}
})

btn.addEventListener("click",()=>{
    if(emailcheck && namecheck && phonecheck){
        let alert1=document.getElementById("alert")
        let str=`<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Your form is being submitted</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
      alert1.innerHTML=str
    }
    else{
        let alert1=document.getElementById("alert")
        let str=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Enter Valid Input</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
      alert1.innerHTML=str
}
})