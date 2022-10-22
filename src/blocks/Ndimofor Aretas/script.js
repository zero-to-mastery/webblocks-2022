// LABEL ANIMATIONS
const labels = document.querySelectorAll('.form-label');

labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split('')
		.map(
			(letter, idx) =>
				`<span style='transition-delay:${idx * 40}ms'>${letter}</span>`
		)
		.join('');
});
