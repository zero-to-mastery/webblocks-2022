const datePicker = document.querySelector("#birthday");
const astroContent = document.querySelector("#astro-content");
const signElement = document.querySelector("#sign");
const descElement = document.querySelector("#description");
const luckyNumElement = document.querySelector("#lucky-num");
const compatibleSignElement = document.querySelector("#compatible-sign");
const luckyTimeElement = document.querySelector("#lucky-time");

datePicker.addEventListener("change", performAstro);

async function performAstro(e) {
	const birthday = new Date(e.target.value);
	const sign = findSign(birthday);
	const astroData = await fetchAstroData(sign);
	displayAstroReading(sign, astroData);
}

/*
 * Generate sign based on given birth date
 */
function findSign(date) {
	const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
	const signs = [
		"Aquarius",
		"Pisces",
		"Aries",
		"Taurus",
		"Gemini",
		"Cancer",
		"Leo",
		"Virgo",
		"Libra",
		"Scorpio",
		"Sagittarius",
		"Capricorn",
	];
	let month = date.getMonth();
	let day = date.getDate();
	if (month == 0 && day <= 20) {
		month = 11;
	} else if (day < days[month]) {
		month--;
	}
	return signs[month];
}

/**
 * Fetch astrological data from Aztro REST API
 * https://aztro.readthedocs.io/en/latest/
 */
async function fetchAstroData(sign) {
	const astroResponse = await fetch(
		`https://aztro.sameerkumar.website/?sign=${sign}&day=today`,
		{ method: "POST" }
	);
	const astroJSON = await astroResponse.json();
	return astroJSON;
}

function displayAstroReading(sign, astroData) {
	const { description, lucky_number, compatibility, lucky_time } = astroData;
	astroContent.style.display = "flex";
	signElement.innerText = `🌠 ${sign} 🌠`;
	descElement.innerText = description;
	luckyNumElement.innerText = lucky_number;
	compatibleSignElement.innerText = compatibility;
	luckyTimeElement.innerText = lucky_time;
}

/**
 * Disable selection date after today
 */
function setMaxDateToToday() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();

	if (dd < 10) {
		dd = "0" + dd;
	}

	if (mm < 10) {
		mm = "0" + mm;
	}

	today = yyyy + "-" + mm + "-" + dd;
	datePicker.setAttribute("max", today);
}

window.addEventListener("load", setMaxDateToToday());
