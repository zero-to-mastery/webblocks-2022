const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];
// Show loader
function loading() {
	loader.hidden = false;
	quoteContainer.hidden = true;
}

// Hide Loader
function complete() {
	quoteContainer.hidden = false;
	loader.hidden = true;
}
// Showing new Quotes
function newQuote() {
	loading();
	// Picking a random quote from apiQuotes array
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	// Check if author filed is blank and replace it with "Unknown"
	if (!quote.author) {
		authorText.textContent = 'Unknown';
	} else {
		authorText.textContent = quote.author
	}
	// Check Quote length yo determine styling
	if (quote.text.lenght > 90) {
		quoteText.classList.add('long-quote');
	} else {
		quoteText.classList.remove('long-quote');
	}
	// Set Quote, Hide Loader
	quoteText.textContent = quote.text;
	complete();
}

// Getting Quotes From API
async function getQuotes() {
	loading();
	const apiURL = 'https://type.fit/api/quotes';
	try {
		const response = await fetch(apiURL);
		apiQuotes = await response.json();
		newQuote();
	} catch (error) {
		// Oops, caught an error here
	}
}
// Tweet Quote
function tweetQuote() {
	const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
	window.open(twitterURL, '_blank');
}

// Event Listners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();