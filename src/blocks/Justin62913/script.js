let answers = ["It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes", "Signs point to yes",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again"];


let eightBall = document.getElementsByClassName("eight-ball");
let eight = document.getElementById("eight");
let eightAnswer = document.getElementById("eight-ball-answer");
let question1 = document.getElementById("question1");
let buttonClick = document.getElementById("btn-click")


buttonClick.addEventListener("click", function (){
    if(question1.value < 1){
        alert("Please Ask a question")
    }else {
        document.getElementById("question1").value = "";
        let num = Math.floor(Math.random() * Math.floor(answers.length))
        eightAnswer.innerHTML = answers[num];
        setTimeout(() => {
            eightAnswer.innerHTML = ""
        }, 2000)
    }

})












