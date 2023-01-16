// slides
let slideIndex = 0;
showSlides(slideIndex);

// next & prev
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// toc dot
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 0} //after the last slide go back to the firs one
  if (n < 0) {slideIndex = slides.length} //in plusSlides, when its showSlides(0), make it the last slide
  //set all slides to 'display: none'
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //set all dots to its orginal form
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //show current slides and dot
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

// When the user scrolls the page, execute navTop() and scroll()
window.onscroll = function() {navTop(); scroll()};

// stick navbar to the top
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop; // Get the offset position of the navbar
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navTop() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// back to top button
const topBtn = document.getElementById("topBtn");
// When the user scrolls down 400px from the top of the document, show the button
function scroll() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}
// back to top when click
const topFunction = () => {
 	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// background color change while hover cards
const changeBG = (e) => {
	let color = window.getComputedStyle(e).backgroundColor
	document.getElementById('pickBackground').style.background = color
}

// background picked
const pickBG = (e) => {
	let color = window.getComputedStyle(e).backgroundColor
	// set letter paper color
	let letter = document.getElementById('letter')
	letter.style.background = color
	if (color === 'rgb(2, 49, 94)') {
		letter.style.color = 'white'
	} else {
		letter.style.color = 'black'
	}
	// set chosen card border
	let cards = document.getElementsByClassName('bg-card')
	// remove existed border
	for (item of cards) {
		if (item.classList.contains('chosen')){
			item.classList.remove('chosen')
		}
	}
	// add border to the pick
	e.classList.add('chosen')
}

// put text to paper
const getText = () => {
	let text =  document.getElementById('inputbox').value;
	text = text.replaceAll('/n','<br>');
	document.getElementById('letterContent').innerHTML = text;
	console.log('work!',text);
}

// change letter font size
const size = (size) => {
	let letter =  document.getElementById('letterContent');
	let fontSize = parseInt(window.getComputedStyle(letter).fontSize);
	if (size === 'down'){
		if (fontSize > 13) {
			letter.style.fontSize = (fontSize - 3) + 'px'
		}
	} else if (size === 'up'){
		if (fontSize < 40) {
			letter.style.fontSize = (fontSize + 3) + 'px'
		}
	}
}

// change letter alignment
const alignText = (value) => {
	let letter =  document.getElementById('letterContent');
	let alignment = 'left';
	switch (value) {
		case 'L':
			alignment = 'left'
			break
		case 'C':
			alignment = 'center'
			break
		case 'R':
			alignment = 'right'
			break
		case 'J':
			alignment = 'justify'
			break
	}
	letter.style.textAlign = alignment;
}

// Quote Generator
const randomQuote = () => {
	// quote paper
	const paperColor = [['#02315E', 'white'], ['#BBC6C8', 'black'], ['#E5E3E4', 'black'], ['#DDBEAA', 'black'], ['#e5ba84', 'black']]
	let quotePaper = document.getElementById('quotePaper')
	let randomPaper = paperColor[Math.floor(Math.random()*paperColor.length)]
	quotePaper.style.background = randomPaper[0];
	quotePaper.style.color = randomPaper[1];
	// quotes
	const quotePool = [
	'Great minds discuss ideas; average minds discuss events; small minds discuss people.<br>- Eleanor Roosevelt',
	'Those who dare to fail miserably can achieve greatly.<br>- John F. Kennedy',
	'You must be the change you wish to see in the world.<br>- Mahatma Gandhi',
	'This too shall past',
	'Life is either a daring adventure or nothing at all.<br>- Helen Keller',
	'It does not matter how slowly you go as long as you do not stop.<br>- Confucius',
	'Remember that not getting what you want is sometimes a wonderful stroke of luck.<br>- Dalai Lama',
	'Life is what we make it, always has been, always will be.<br>- Grandma Moses',
	'The journey of a thousand miles begins with one step.<br>- Lao Tzu',
	'A year from now you may wish you had started today.<br>- Karen Lamb',
	'The way to get started is to quit talking and begin doing.<br>- Walt Disney',
	'Change will not come if we wait for some other person or some other time. We are the ones we’ve been waiting for. We are the change that we seek.<br>- Barack Obama',
	'Be who you are and say what you feel, because those who ind don\'t matter and those who matter don\'t mind.<br>- Dr. Seuss',
	'The best way to predict the future is to create it.<br>- Peter Drucker',
	'In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing.<br>- Theodore Roosevelt',
	'Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.<br>- Oprah Winfrey',
	'Love yourself first, and everything else falls in line. You really have to love yourself to get anything done in this world.<br>- Lucille Ball',
	'Almost everything will work again if you unplug it for a few minutes, including you.<br>- Anne Lamott',
	'Nourishing yourself in a way that helps you blossom in the direction you want to go is attainable, and you are worth the effort.<br>- Deborah Day',
	'Love yourself enough to set boundaries. Your time and energy are precious. You get to choose how you use it. You teach people how to treat you by deciding what you will and won’t accept.<br>- Anna Taylor',
	'We cannot direct the wind, but we can adjust the sails.<br>- Dolly Parton',
	'Keep good company, read good books, love good things and cultivate soul and body as faithfully as you can.<br>- Louisa May Alcott',
	'Talk to yourself like you would to someone you love.<br>- Brené Brown',
	'It is so important to take time for yourself and find clarity. The most important relationship is the one you have with yourself.<br>- Diane Von Furstenberg',
	'Adopt the pace of nature: her secret is patience.<br>- Ralph Waldo Emerson'
	]
	let quote = document.getElementById('quote')
	quote.innerHTML = quotePool[Math.floor(Math.random()*quotePool.length)]
}