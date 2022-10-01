//* Adapted from: Magical Rainbow Gradients by Josh W Comeau
//? https://www.joshwcomeau.com/react/rainbow-button/

//? Want to create your custom gradient? Try Josh's Gradient Generator!
//? https://www.joshwcomeau.com/gradient-generator/
const gradientColors = [
	"hsl(338deg 92% 53%)",
	"hsl(338deg 84% 50%)",
	"hsl(338deg 85% 47%)",
	"hsl(338deg 86% 45%)",
	"hsl(28deg 86% 43%)",
	"hsl(64deg 83% 35%)",
	"hsl(150deg 65% 49%)",
	"hsl(150deg 65% 50%)",
	"hsl(150deg 69% 52%)",
	"hsl(150deg 72% 53%)",
	"hsl(64deg 79% 38%)",
	"hsl(28deg 84% 45%)",
	"hsl(338deg 86% 45%)",
];
const paletteSize = gradientColors.length;

const colorNames = [
	"--magic-rainbow-color-0",
	"--magic-rainbow-color-1",
	"--magic-rainbow-color-2",
];

colorNames.forEach((name, idx) => {
	CSS.registerProperty({
		//? The name of our property, should match what we use in our CSS:
		name,

		//? How we want to interpolate that value, when it changes:
		syntax: "<color>",

		//? Whether it should inherit its value from the cascade
		//? (like `font-size` does), or not (like `position` doesn't)
		inherits: false,

		initialValue: gradientColors[idx],
	});
});

//? Number of milliseconds for each update
const intervalDelay = 1000;
let cycleIndex = 0;

function animateGradient(element) {
	window.setInterval(() => {
		//* Shift every color up by one position.
		//? `% paletteSize` is a handy trick to ensure
		//? that values "wrap around"; if we've exceeded
		//? the number of items in the array, it loops
		//? back to 0.
		const nextColors = [
			gradientColors[(cycleIndex + 1) % paletteSize],
			gradientColors[(cycleIndex + 2) % paletteSize],
			gradientColors[(cycleIndex + 3) % paletteSize],
		];

		//* Apply these new colors, update the DOM.
		colorNames.forEach((name, index) => {
			element.style.setProperty(name, nextColors[index]);
		});

		//* Increment the cycle count, so that we advance
		//* the colors in the next loop.
		cycleIndex++;
	}, intervalDelay);
}

animateGradient(document.getElementById("btn"));
