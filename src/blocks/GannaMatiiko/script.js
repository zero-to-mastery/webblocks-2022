const coordsEl = document.getElementById('coords');
const country = document.getElementById('country');
const city = document.getElementById('city');
const state = document.getElementById('state');
const apiKey = 'ed38ba92ff1ecc31122b704b94d82b20';
let latitude;
let longitude;

const successCallback = (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    let apiURL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${apiKey}`;
    fetch(apiURL)
        .then(res => res.json())
        .then(data => {
            country.textContent = `${data[0].country}`;
            city.textContent = `${data[0].name}`;
            state.textContent = `${data[0].state}`;
        })
};

const errorCallback = (error) => {
    console.log('!!', error);
    coordsEl.textContent = `${error.message}, check if you allowed sharing your geolocation`;
};

if (!navigator.geolocation) {
    info.textContent = 'Geolocation is not supported by your browser';
  } else {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }