/* When content loads */
document.addEventListener("DOMContentLoaded",function() {
    
    /* Add event listener to cards */
    const cards = document.getElementsByClassName('card');
    for(let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', makeActive);
    }

    /* Add event listener to buttons */
    const buttons = document.getElementsByClassName('btn');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', slideCards);
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
    disableButton();
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

/**
 * This functions changes card on button click
 */
function slideCards() {
    const cards = document.getElementsByClassName('card');
    const direction = this.getAttribute('data-slide');
    const currentCard = document.getElementsByClassName('active-card')[0].getAttribute('data-position');
    
    switch (direction) {
        case "left":
            cards[currentCard-2].click();
            break;
        case "right":
            cards[currentCard].click();
            break;
        default:
            throw `Direction not valid: ${direction}`;
    }
}

/**
 * This function disables buttons when first or last card is active
 */
function disableButton() {
    const buttons = document.getElementsByClassName('btn');
    const position = document.getElementsByClassName('active-card')[0].getAttribute('data-position');
    if(position == 1) {
        buttons[0].disabled = true;
    } else if(position == 7) {
        buttons[1].disabled = true;
    } else {
            buttons[0].disabled = false;
            buttons[1].disabled = false;
        }
    }