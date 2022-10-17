const quote = document.querySelector(".card__quote");

const btn = document.querySelector(".header button");

const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice", {
        method: `GET`
    });
    const data = await res.json();
    return data.slip.advice;
};

btn.addEventListener(`click`, (e) => {
    fetchAdvice().then(data => quote.innerHTML = data);
});