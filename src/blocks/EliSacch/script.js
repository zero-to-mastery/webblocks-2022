document.addEventListener("DOMContentLoaded",function() {
    let cardsAfter = document.getElementsByClassName('after');
    zIndex = -1;
    for(let z = 0; z < cardsAfter.length; z++) {
        cardsAfter[z].style.zIndex = zIndex;
        zIndex--;
    }   
})