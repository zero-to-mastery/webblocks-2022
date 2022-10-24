/* When content loads */
document.addEventListener("DOMContentLoaded",function() {
    
    /* Add event listener to cards */
    const cards = document.getElementsByClassName('card');
    for(let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', makeActive);
    }

    pushBack();
})

/**
 * This function inverts z-index for cards after active
 */
function pushBack() {
    let cardsAfter = document.getElementsByClassName('after');
    if(cardsAfter != null) {
        zIndex = -1;
        for(let z = 0; z < cardsAfter.length; z++) {
            cardsAfter[z].style.zIndex = zIndex;
            zIndex--;
        } 
    } 
}

/**
 * This function makes the clicked card active
 */
function makeActive() {
    const cards = document.getElementsByClassName('card');
    for(let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('active-card');
        cards[i].classList.remove('after');
        cards[i].style.zIndex = 0;
    }
    this.classList.add('active-card');
    
    let position = this.getAttribute('data-position');
    for(let i = position; i < cards.length; i++) {
        cards[i].classList.add('after');
    }
    pushBack();
}


