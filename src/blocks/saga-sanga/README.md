# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Screenshot Image](./images/desktop-preview.jpg)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Upon creating this project I learnt how to create custom styles and interactions for radio buttons.

An example code snippet is below:

```css
/* Radio button custom style */

input[type="radio"] {
  cursor: pointer;
  width: 2.75rem;
  height: 2.75rem;
  position: absolute;
  appearance: none;
  margin: 0;
  color: currentColor;
  border-radius: 50%;
  display: grid;
  place-content: center;
}

input[type="radio"]::after {
  content: attr(no-rating);
  z-index: 2;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  display: grid;
  place-content: center;
  padding-top: 3px;
  color:hsl( var(--clr-white) );
  transform: scale(0);
  background-color: hsl( var(--clr-medium-grey) );
}

input[type="radio"]:checked::after {
  transform: scale(1);
}
```

My code for the event listener:

```js
button.addEventListener('click', () => {
  for (let radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedRank = radioButton.value;
      break;
    }
  }
  if (selectedRank) {
    ratingElement.innerText = `You selected ${selectedRank} out of 5`;
    thankYouSection.style.display = "grid";
  } else {
    alert("Please select a ranting!");
  }
});
```

## Author

- GitHub - [Saga-sanga](https://github.com/Saga-sanga)
- Frontend Mentor - [@Saga-Sanga](https://www.frontendmentor.io/profile/Saga-sanga)
- Twitter - [@RecksonKhiangte](https://twitter.com/RecksonKhiangte)

