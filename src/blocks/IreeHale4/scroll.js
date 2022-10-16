const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit> input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
    return Math.round(num*100)/100;
}

function celciustoFahrenheitAndKelvin() {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = fTemp;
    kelvinInput.value = kTemp;
}

function FahrenheitToCelciusAndKelvin() {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp * 459.67) * 5/9;
    celciusInput.value = cTemp;
    kelvinInput.value = kTemp;
}

function kelvinToCelciusAndFahrenheit() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9/5 * (kTemp - 273) +32;
    celciusInput.value = cTemp;
    fahrenheitInput.value = fTemp;
}

celciusInput.addEventListener('input', celciustoFahrenheitAndKelvin);
fahrenheitInput.addEventListener('input', FahrenheitToCelciusAndKelvin);
kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenheit);