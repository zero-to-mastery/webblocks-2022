// DOMs
const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const inputAge = document.querySelector('#age')
const inputComment = document.querySelector('#comment')
const errorMsg = document.querySelector('.error-msg')
const formSurvey = document.querySelector('#survey-form')

formSurvey.addEventListener('submit', function (e) {
  let name = inputName.value
  let email = inputEmail.value
  let age = inputAge.value
  let comment = inputComment.value

  if ([name, email, age, comment].includes('')) {
    e.preventDefault()
    showErrorMsg(errorMsg, 'All fields are required')
  }
})

// Error message helper
function showErrorMsg(loginErrorDOM, errorMsg) {
  loginErrorDOM.style.display = 'block'

  loginErrorDOM.innerHTML = `
    ${errorMsg}
  `

  setTimeout(function () {
    loginErrorDOM.style.display = 'none'
  }, 3000)
}
