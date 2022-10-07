clock = document.querySelector('#clock')
t = 8

const time = () => {
    currtime = new Date()
    h = currtime.getHours();
    min = currtime.getMinutes();
    sec = currtime.getSeconds();
    if (min < 10) {
        min = "0" + min;
    }
    alarm = document.querySelector('#Alarm')

    // Set(sec
    if (sec < 10) {
        sec = "0" + sec;
    }

    if (h > 12)
        mer = 'PM'
    else
        mer = 'AM'
    str = h + ':' + min + ':' + sec + ' ' + mer;
    const time = document.querySelector('#time')
    time.innerText = str;

    if (h == t)
        alert('Alarm is ringing!!')
}

time();

var onesec = 1000
setInterval(time, onesec);

alarm.addEventListener('change', () => {
    t = alarm.value;
})
