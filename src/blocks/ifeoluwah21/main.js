const submitBtnHandler = document.querySelector('button.btn');
const form = document.querySelector(`form`);
const itemName = form.querySelector(`.name`);
const itemPrice = form.querySelector(`.amount`);
const itemDate = form.querySelector(`.date`);
const bars = document.querySelectorAll("[data-month]")

const DATA_STORE = {
    items: [],
    get totalPrice() {
        const result = this.items.reduce((acc, cur) => acc + cur.price, 0);
        return result;
    }
}

const generateItemDetailCard = (name, price, month, year) => {
    const section = document.querySelector('.item-section')
    const article = document.createElement(`article`);
    article.classList.add("item");
    article.innerHTML = `
    <div class="item__date">
        <p>${month}</p>
        <p>${year}</p>
    </div>
    <div class="item__details">
        <p>$${price.toFixed(2)}</p>
        <p>${name}</p>
    </div>`
    section.appendChild(article)
}

const addToStore = (name, price, date) => {
    const transformedDate = new Date(date);
    const itemDetails = {
        name,
        price: +price,
        month: transformedDate.getMonth(),
        monthName: transformedDate.toLocaleString('en-US', { month: 'long' }),
        year: transformedDate.getFullYear()
    }
    DATA_STORE.items.push(itemDetails);
    return itemDetails;
}

const updatedBar = (bars, store) => {
    bars.forEach(bar => {
        const amountInMonth = store.items.reduce((acc, curr) => {
            if (bar.dataset.month == curr.month) {
                acc = acc + curr.price
            }
            return acc;
        }, 0)
        const height = amountInMonth / store.totalPrice * 100;
        bar.style.height = `${height}%`
    })
}

const resetInput = (name, price, date) => {
    name.value = "";
    price.value = "";
    date.value = "";
}

form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    if (itemName.value.trim() === `` || itemPrice.value.trim() === `` || itemDate.value.trim() === ``) {
        return
    }
    console.log(`submitted`);
    const { name, price, monthName: month, year } = addToStore(itemName.value, itemPrice.value, itemDate.value);
    generateItemDetailCard(name, price, month, year);
    updatedBar(bars, DATA_STORE)
    resetInput(itemName, itemPrice, itemDate);
})