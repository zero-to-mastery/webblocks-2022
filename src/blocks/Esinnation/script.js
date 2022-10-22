const mtr = 3.281
const ltr = 0.264 
const kgm = 2.204 
const lenght = document.getElementById('lenght_val')
const volume = document.getElementById('volume_val')
const mass = document.getElementById('mass_val')
const input = document.getElementById('input')
const convertBtn = document.getElementById('convert_btn')

function convert(){
    lenght.textContent=`${input.value} meters = ${(multiply(mtr))} feet | ${input.value} feet = ${(divide(mtr))} meters`
    volume.textContent=`${input.value} liters= ${(multiply(ltr))} gallons | ${input.value} gallons = ${(divide(ltr))} liters`
    mass.textContent=`${input.value} kilos = ${(multiply(kgm))} pounds | ${input.value} pounds = ${(divide(kgm))} kilos`

}
function multiply(val){
    return ((input.value * val).toFixed(3))
}
function divide(val){
    return ((input.value / val).toFixed(3))
}
input.addEventListener('input', resizeInput); 
resizeInput.call(input); 
function resizeInput() {
    this.style.width = this.value.length + "ch";
}
input.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        convert()
    }
})
convertBtn.addEventListener('click',function(){
    convert()
})

