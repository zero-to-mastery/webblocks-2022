const contentElem = document.querySelector("#content");
const countryElem = document.querySelector("#country");
const flagElem = document.querySelector("#flag");
const drivingSideElem = document.querySelector("#driving-side");
const loaderElem = document.querySelector("#loader");

async function generateMessage() {
	const country = await getCountry();
	const [facts] = await getFactsFromCountry(country);
	displayFacts(facts);
}

async function getCountry() {
	const response = await fetch("https://api.country.is/");
	const data = await response.json();
	return Promise.resolve(data.country);
}

async function getFactsFromCountry(country) {
	const response = await fetch(
		`https://restcountries.com/v3.1/alpha/${country}`
	);
	const data = await response.json();
	return Promise.resolve(data);
}

function displayFacts(facts) {
	countryElem.textContent = facts.name.common;
	flagElem.src = facts.flags.svg;
	drivingSideElem.textContent = facts.car.side;
	loaderElem.style.display = "none";
	contentElem.style.display = "flex";
}

generateMessage();
