let clockSound = new Audio(".\\resources\\clock-sound.mp3");

setInterval(() => {
    date = new Date()
    hrTime = date.getHours()
    minTime = date.getMinutes()
    secTime = date.getSeconds()

    hRotation = (30 * hrTime) + (minTime / 2);
    mRotation = (6 * minTime);
    sRotation = (6 * secTime);

    hour.style.transform = `rotate(${hRotation}deg)`
    minute.style.transform = `rotate(${mRotation}deg)`
    second.style.transform = `rotate(${sRotation}deg)`
    clockSound.play();
}, 1000)
