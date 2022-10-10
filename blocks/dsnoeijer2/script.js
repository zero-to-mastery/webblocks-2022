const items = document.querySelectorAll('.list-item');


for(let item of items) {
    const favorite = item.querySelector('.favorite');
    const svgElement = favorite.querySelector('#svg');

    // set color on page load based on localstorage
    if(localStorage.getItem(item.id)) {
        svgElement.style.fill = "red";   
    } else {
        svgElement.style.fill = "white";
    }

    // change color onclick and add/remove item from localstorage
    favorite.addEventListener('click', () => {
        if (localStorage.getItem(item.id)) {
            localStorage.removeItem(item.id);
            svgElement.style.fill = "white";
        } else {
            localStorage.setItem(item.id, true);
            console.log(svgElement)
            svgElement.style.fill = "red";
        }
    })
}
