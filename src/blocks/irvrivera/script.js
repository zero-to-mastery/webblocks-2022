let btn8 = document.querySelector("button");
let Answer = document.querySelector("h2");

const result = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook is good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Do not count on it",
  "My reply is no",
  "My sources say no",
  "Outlook is not so good",
  "Very doubtful",
];

function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let Answer = Math.floor(step2) + min;

  return Answer;
}

btn8.addEventListener("click", () => {
  let index = getRandomNumber(0, result.length - 1);
  Answer.innerText = result[index];
});
