const button = document.getElementById('btn');
let subscribed = false;

button.addEventListener('click', function () {
    if (subscribed) {
        subscribed = false;
        button.innerHTML = 'SUBSCRIBE';
        button.style.backgroundColor = '#c00';
        button.style.color = '#fff';
    } else {
        subscribed = true;
        button.innerHTML = 'SUBSCRIBED';
        button.style.backgroundColor = '#444'
        button.style.color = '#aaa'
    }
})