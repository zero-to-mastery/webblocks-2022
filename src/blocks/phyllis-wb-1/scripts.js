const logo = document.getElementById('logo');
const homeBtn = document.getElementById('home-link');
const cartBtn = document.getElementById('cart-link');
const signInBtn = document.getElementById('sign-in-link');

const run = () => {
  logo.addEventListener('click', function() {
    // add behavior for link
    console.log('logo clicked');
  });
  
  homeBtn.addEventListener('click', function() {
    // add behavior for link
    console.log('home clicked');
  });
  
  cartBtn.addEventListener('click', function() {
    // add behavior for link
    console.log('cart clicked');
  });
  
  signInBtn.addEventListener('click', function() {
    // add behavior for link
    console.log('sign in clicked');
  });
};


window.onload = run;
