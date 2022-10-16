const getCurrentDate = () => {
    const date = document.querySelector(".date");
    let todayDate = new Date();
    let day = todayDate.getDate();
    let month = todayDate.getMonth() + 1;
    let year = todayDate.getFullYear();

    todayDate = `${day} - ${month} - ${year}`

   date.textContent = todayDate
}

const getCurrentTime = () => {
    // gets the clock from HTML
    const clock = document.querySelector(".clock");
    //sets the current time to the current time right now
    let currentTime = new Date();
    // gets all the components we need from the date
    let crrentUTChours = currentTime.getHours();
    let currentUTCminutes = currentTime.getMinutes();
    let currentUTCseconds = currentTime.getSeconds();
    // (condition ? if true : if false) (this lets you add the 0 if the value is less than 0 i.e. 07)
    crrentUTChours = (crrentUTChours < 10) ? "0" + crrentUTChours : crrentUTChours;
    currentUTCminutes = (currentUTCminutes < 10) ? "0" + currentUTCminutes : currentUTCminutes;
    currentUTCseconds = (currentUTCseconds < 10) ? "0" + currentUTCseconds : currentUTCseconds;
    // sets current time to a format we want
    currentTime = `${crrentUTChours} : ${currentUTCminutes} : ${currentUTCseconds}`
    // sets current time on the page
    clock.textContent = currentTime;
    // avoids the page from crashing and to update the code every second
    let t = setTimeout(function(){getCurrentTime() }, 1000);
}

getCurrentDate();
getCurrentTime();