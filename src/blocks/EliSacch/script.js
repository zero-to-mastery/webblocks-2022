/* When content loads */
document.addEventListener("DOMContentLoaded",function() {
    
    /* Add event listener to cards */
    const cards = document.getElementsByClassName('card');
    for(let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', makeActive);
    }

    pushBack();
    spaceCards(3);
})

/**
 * This function makes the clicked card active
 */
function makeActive() {
    const cards = document.getElementsByClassName('card');
    for(let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('active-card');
        cards[i].classList.remove('after');
        cards[i].style.zIndex = 0;
        cards[i].style.translate = "-50%";
    }
    this.classList.add('active-card');
    
    const position = this.getAttribute('data-position');
    for(let i = position; i < cards.length; i++) {
        cards[i].classList.add('after');
    }
    pushBack();
    spaceCards(position-1);
}

/**
 * This function inverts z-index for cards after active
 */
 function pushBack() {
    const cardsAfter = document.getElementsByClassName('after');
    if(cardsAfter != null) {
        zIndex = -1;
        for(let z = 0; z < cardsAfter.length; z++) {
            cardsAfter[z].style.zIndex = zIndex;
            zIndex--;
        } 
    } 
}

/**
 * This function changes the horizontal position of the cards
 */
 function spaceCards(position) {
    const cards = document.getElementsByClassName('card');
    let moveLeft = -490;
    for(let i = position-1; i >= 0; i--) {
        cards[i].style.translate = `${moveLeft}px`;
        moveLeft -= 150;
    }
    let moveRight = 0;
    for(let i = position+1; i < cards.length; i++) {
        cards[i].style.translate = `${moveRight }px`;
        moveRight += 150;
    } 
}
