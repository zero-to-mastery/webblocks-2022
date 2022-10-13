let colorDiv = document.querySelector(".color-box");
let buttonDiv = document.querySelector(".button-div");
let scoreDiv = document.querySelector(".score-div");
let gameDiv = document.querySelector(".game");
let actualColor = "";
let answers = [];
let correctAnswers = 0;

const getRandomColor = () => {
  let randomColor =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  return randomColor;
};

const rgb2hex = (rgb) =>
  `#${rgb
    .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
    .slice(1)
    .map((n) => parseInt(n, 10).toString(16).padStart(2, "0"))
    .join("")}`;

const pickColor = () => {
  let buttons = [];
  actualColor = getRandomColor();
  answers = [actualColor, getRandomColor(), getRandomColor()].sort(
    () => 0.5 - Math.random()
  );

  colorDiv.style.backgroundColor = actualColor;

  for (let answer of answers) {
    if (buttonDiv.childElementCount === 3) {
      buttonDiv.removeChild(buttonDiv.firstChild);
    }
    let newButton = document.createElement("button");
    newButton.classList.add("quiz-button");
    newButton.appendChild(document.createTextNode(answer));
    buttonDiv.appendChild(newButton);
    if (newButton.innerHTML === rgb2hex(colorDiv.style.backgroundColor)) {
      newButton.classList.add("correct");
      newButton.addEventListener("click", () => {
        correctAnswers++;
        pickColor();
        scoreDiv.innerHTML = "Score: " + correctAnswers;
        gameDiv.innerHTML = "That's right :)";
      });
    } else {
      newButton.classList.add("wrong");
      newButton.addEventListener("click", () => {
        correctAnswers = 0;
        scoreDiv.innerHTML = "Score: " + correctAnswers;
        gameDiv.innerHTML = "That's wrong :(";
      });
    }
  }
};
pickColor();
