window.addEventListener("load",update);
function update() {
	let time = new Date(),
		hr = time.getHours(),
		min = time.getMinutes(),
		sec = time.getSeconds();
	
	// prepend 0s to single digits
	if (hr < 10)
		hr = "0" + hr;
	if (min < 10)
		min = "0" + min;
	if (sec < 10)
		sec = "0" + sec;
	
	let timeStr = `${hr}${min}${sec}`,
		digits = document.querySelectorAll(".digit"),
		digitArr = [];
	
	for (let d in digits) {
		d = +d;
		if (d < digits.length) {
			digitArr[d] = timeStr.substr(d,1);
			digits[d].className = "digit _" + digitArr[d];
		}
	}
	setTimeout(update,1000);
}