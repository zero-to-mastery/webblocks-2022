const btn = document.getElementById("btn");
let textTo = document.getElementById("text");
let suggestions = document.getElementById("suggestions");
console.log(btn);

btn.addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())

    .then((data) => (textTo.textContent = data.activity));

  console.log(suggestions);
  suggestions.classList.add("hide");
});
