const push = document.querySelector('.push')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const open = document.querySelector('.open')
const quote =document.getElementById('quote')


push.addEventListener('click', (e) => {
  left.classList.add('open-door');
  right.classList.add('open-door');
  push.classList.add('hidden');
  open.classList.add('show');
  push.removeEventListener('click', () => {});
})

const api_url = "https://api.adviceslip.com/advice"

const fetchData =  () => {
  fetch(api_url).then(response => response.json())
    .then((data) => {
      quote.innerText = data.slip.advice;
    })
}

fetchData()