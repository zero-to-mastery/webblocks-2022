const formContainer = document.querySelector(".signUp__form-container");
const signUpBtn = document.querySelector(".signUp-btn");
const customer = document.getElementById("customer-name");
const password = document.getElementById("customer-password");
const rePassword = document.getElementById("customer-re-password");
const ack = document.getElementById("success");

signUpBtn.addEventListener("click", () => {
  if (password.value === rePassword.value) {
    formContainer.style.display = "none";
    ack.innerHTML = `<p>Thank you <span>${customer.value}</span>, you have successfully signed up!</p>`;
    ack.style.display = "flex";
    return;
  }
  rePassword.value = "";
  alert("Sorry, please try again. Your Passwords don't match");
});
