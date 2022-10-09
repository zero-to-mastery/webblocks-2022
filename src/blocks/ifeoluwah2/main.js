const flag = document.querySelector("img");
const name = document.querySelector(`.name`);
const population = document.querySelector(`.population`);
const region = document.querySelector(".region");
const tld = document.querySelector(`.tld`);
const capital = document.querySelector(`.capital`);
const currencies = document.querySelector(`.currency`);

const form = document.querySelector(`.form`);
const input = form.querySelector(`#search`);

const transformCard = (data) => {
    flag.setAttribute("src", data.flag);
    flag.setAttribute("alt", data.name);
    name.innerHTML = data.name;
    population.innerHTML = data.population.toLocaleString();
    region.innerHTML = data.region;
    tld.innerHTML = data.tld,
        capital.innerHTML = data.capital,
        currencies.innerHTML = data.currency
}

const fetchDetails = async (name) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await res.json()
    const transformedData = {
        name: data[0].name.common,
        flag: data[0].flags.png,
        population: data[0].population,
        region: data[0].region,
        capital: data[0].capital.join(", "),
        tld: data[0].tld.join(", "),
        get currency() {
            const result = [];
            for (let key in data[0].currencies) {
                result.push(data[0].currencies[key].name);
            }
            return result.join(", ");
        }

    }

    console.log(transformedData, transformedData.currency, data)
    transformCard(transformedData)
}

form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    if (input.value.trim() === "") {
        return;
    }
    fetchDetails(input.value.toLowerCase());
})