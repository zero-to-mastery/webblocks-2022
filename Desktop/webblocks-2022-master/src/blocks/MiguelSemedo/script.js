const answer = document.getElementById('answer');
const inputField = document.querySelector('input');
const btn = document.getElementById('btn');
const eightBall = document.getElementById('eightBall');

const possibleAnswersArray = [
	'It is certain',
	'It is decidedly so',
	'Without a doubt',
	'Yes definitely',
	'You may rely on it',
	'As I see it, yes',
	'Most likely',
	'Outlook good',
	'Yes',
	'Signs point to yes',
	'Reply hazy, try again',
	'Ask again later',
	'Better not tell you now',
	'Cannot predict now',
	'Concentrate and ask again',
	'Don’t count on it',
	'My reply is no',
	'My sources say no',
	'Outlook not so good',
	'Very doubtful',
];

// Get Random Number form Array
let randomAnswer = '';

function askQuestion() {
	if (inputField.value === '') {
		answer.textContent = 'Please Write Your Question';
	} else {
		eightBall.classList.add('shake');
		inputField.value = '';
		randomAnswer = Math.floor(Math.random() * possibleAnswersArray.length);
		setTimeout(() => {
			eightBall.classList.remove('shake');
			answer.textContent = possibleAnswersArray[randomAnswer];
		}, 2000);
	}
}
// Event Listeners
btn.addEventListener('click', askQuestion);
