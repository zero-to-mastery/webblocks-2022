const buttons = document.querySelectorAll('.ripple');

buttons.forEach(btn => {
	btn.addEventListener('click', function (e) {
		// Postion relative to viewport 
		const x = e.clientX;
		const y = e.clientY;

		// Position of the button ifself (x, y)
		const btnLeft = e.target.offsetLeft;
		const btnTop = e.target.offsetTop;

		const xInside = x-btnLeft;
		const yInside = y-btnTop;

		const circle = document.createElement('span');
		circle.classList.add('circle');
		circle.style.top = yInside + 'px';
		circle.style.left = xInside + 'px';

		this.appendChild(circle);

		// Remove span from DOM after animation is done
		setTimeout(() => circle.remove(), 500);
	})
})