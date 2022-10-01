const modal  = document.querySelector('.modal')
const close = document.querySelector('.close-btn')
const btn = document.querySelector('button')
const closeModal = function(){
    modal.classList.add('hidden')
}
const openModal = function(){
    modal.classList.remove('hidden')
}

btn.addEventListener('click',openModal)
close.addEventListener('click',closeModal)

document.addEventListener('keydown',function(e){
  
    if(e.key == 'Escape' && !modal.classList.contains('hidden'))
    {
        closeModal();
    }
})