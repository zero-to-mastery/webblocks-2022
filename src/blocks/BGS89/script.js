
// Buttons
const startWatch = document.getElementById('start');
const stopWatch= document.getElementById('stop');
const resetWatch = document.getElementById('reset');

// Clock
let tensAppend= document.getElementById('tens');
let secondsAppend = document.getElementById('seconds');
let minutesAppend = document.getElementById('minutes');

// Counters
let tens = 0;
let seconds = 0;
let minutes = 0;
let intervalID;


function startTimer() {
    stopTimer();
    intervalID = setInterval(function () {
        tens ++;
        if (tens <= 9) {
            tensAppend.textContent = '0' + tens;
        }
        if (tens > 9) {
            tensAppend.textContent = tens;
        }
        if (tens > 99) {
            seconds ++ ;
            secondsAppend.textContent = '0' + seconds;   
            tens = 0;
            tensAppend.textContent = '0' + 0;
        }
        if (seconds > 9) {
            secondsAppend.textContent = seconds;
        }
        if (seconds > 59) {
            minutes ++ ;
            minutesAppend.textContent = '0' + minutes;
            seconds = 0;
            secondsAppend.textContent = '0' + 0;
        }
        if (minutes > 9) {
            minutesAppend.textContent = minutes;
        }
    }, 10);
}

function stopTimer() {
    clearInterval(intervalID);
}

function resetTimer() {
    stopTimer();
    tens = 0;
    seconds = 0;
    minutes = 0;
    tensAppend.textContent = '00';
    secondsAppend.textContent = '00';
    minutesAppend.textContent = '00';
}

startWatch.addEventListener('click', startTimer);
stopWatch.addEventListener('click',  stopTimer);
resetWatch.addEventListener('click', resetTimer);





