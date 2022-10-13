var swipeContainer = document.getElementsByClassName('swipe-card__container')[0];
var leftButton = document.getElementsByClassName('swipe-card__btn--left')[0];
var rightButton = document.getElementsByClassName('swipe-card__btn--right')[0];
var content = document.getElementsByClassName('swipe-card__content');
var currentPosition = 0;
leftButton.addEventListener('click', swipeleft);
rightButton.addEventListener('click', swiperight);
function swipeleft() {
    if (currentPosition === -480) {return}
    currentPosition = currentPosition - 240;
    swipeContainer.style.transform = `translateX(${currentPosition}px)`;
    if (currentPosition === -240) {
        content[0].style.opacity = 0;
        content[1].style.opacity = 1;
    }
    if (currentPosition === -480) {
        content[1].style.opacity = 0;
        content[2].style.opacity = 1;
    }
}
function swiperight() {
    if (currentPosition === 0) {return}
    currentPosition += 240;
    swipeContainer.style.transform = `translateX(${currentPosition}px)`;
    if (currentPosition === -240) {
        content[2].style.opacity = 0;
        content[1].style.opacity = 1;
    }
    if (currentPosition === 0) {
        content[1].style.opacity = 0;
        content[0].style.opacity = 1;
    }
}