/* Invert x-index for cards after active */

document.addEventListener("DOMContentLoaded",function() {
    let cardsAfter = document.getElementsByClassName('after');
    if(cardsAfter != null) {
        zIndex = -1;
        for(let z = 0; z < cardsAfter.length; z++) {
            cardsAfter[z].style.zIndex = zIndex;
            zIndex--;
        } 
    }    
})

