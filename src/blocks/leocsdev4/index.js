// DOMs
const inputTitle = document.querySelector('#input-title')
const inputDateTime = document.querySelector('#date-time')
const formSetTime = document.querySelector('#form-set-time')
const title = document.querySelector('#title')
const btnClear = document.querySelector('#btn-clear')

let dateTimeValue = ''
let titleValue = ''

formSetTime.addEventListener('submit', function (e) {
  e.preventDefault()

  dateTimeValue = inputDateTime.value
  titleValue = inputTitle.value

  console.log('dateTime', dateTimeValue)

  if (dateTimeValue === '' || titleValue === '') {
    e.preventDefault()
    document.querySelector('#error').innerHTML = 'All Fields Required'
  } else {
    startCountdown(dateTimeValue)
    document.querySelector('#title').innerHTML = titleValue
    formSetTime.style.display = 'none'
    btnClear.style.display = 'block'
    document.querySelector('#error').style.display = 'none'
  }
})

function startCountdown(dateTime) {
  // Oroginal code from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown

  let countDownDate = new Date(`${dateTime}`).getTime()

  // Update the count down every 1 second
  let x = setInterval(function () {
    // Get todays date and time
    let now = new Date().getTime()

    // Find the distance between now and the count down date
    let distance = countDownDate - now

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Output the result in an element with id="countdown-timer"
    document.querySelector('#countdown-timer').innerHTML =
      days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's '

    console.log('x:', x)
    console.log('distance:', distance)

    // If the count down is over, show EXPIRED message
    // and render the set time form
    if (distance < 0) {
      clearInterval(x)

      document.querySelector('#countdown-timer').innerHTML = 'EXPIRED'
      formSetTime.style.display = 'block'
      btnClear.style.display = 'none'
    }
  }, 1000)
}

// Reset - Just reload the page for simplicity
btnClear.addEventListener('click', function () {
  console.log('clear')

  location.reload()
})
