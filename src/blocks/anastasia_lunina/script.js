const button = document.querySelector("#button");
const video = document.querySelector(".myVideo");
const input = document.querySelector(".input");

const adho = document.querySelector(".adho");
const shavasana = document.querySelector(".shavasana");
const sukhasana = document.querySelector(".stretch");
const trikonasana = document.querySelector(".trikonasana");
const virabhadrasana = document.querySelector(".virabhadrasana");

button.addEventListener("click", showVideo);

function showVideo(e) {
    e.preventDefault();
    toggleButton()

    document.querySelector("#player").play();

    let userChoice = document.querySelector("#select").value;

    if (userChoice == "Shavasana") {
        if (shavasana.style.display = "none") {
            shavasana.style.display = "block";
          } else {
            shavasana.style.display = "none";
          }
    }
    else if (userChoice == "Trikonasana") {
        if (trikonasana.style.display = "none") {
            trikonasana.style.display = "block";
          } else {
            trikonasana.style.display = "none";
          }

    }
    else if (userChoice == "Virabhadrasana") {
        if (virabhadrasana.style.display = "none") {
            virabhadrasana.style.display = "block";
          } else {
            virabhadrasana.style.display = "none";
          }
    }
    else if (userChoice == "Adho Mukha Svanasana") {
        if (adho.style.display = "none") {
            adho.style.display = "block";
          } else {
            adho.style.display = "none";
          }
    }
    else if (userChoice == "Sukhasana") {
        if (sukhasana.style.display = "none") {
            sukhasana.style.display = "block";
          } else {
            sukhasana.style.display = "none";
          }
}

    let minutes_input = Number(document.querySelector(".minutes").value);
    let seconds_input = Number(document.querySelector(".seconds").value);
    let total_time = (minutes_input * 60) + seconds_input;

    function calculateTime() {
        let countdown = document.querySelector("#countdown");

        let minutes = Math.floor(total_time / 60);
        let seconds = total_time % 60;
        total_time--;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        
        countdown.textContent = `${minutes} : ${seconds}`;
        if (total_time < 0) {
                stopTimer();
                total_time = 0;
                shavasana.style.display = "none";
                trikonasana.style.display = "none";
                virabhadrasana.style.display = "none";
                adho.style.display = "none";
                sukhasana.style.display = "none";
                toggleButton();
                document.querySelector("#player").pause();
        }
    }

    let timerId = setInterval(calculateTime,1000);

    function stopTimer() {
        clearInterval(timerId);
        // video.style.display = "none";
       document.querySelector("#player").play();
    //    
    }
}

// Disable / Enable Button
function toggleButton() {
    button.disabled = !button.disabled;
}


// Animations
let move = 30

gsap.to("img", { ease: "bounce", duration: 2, delay: 1.5, y: move });




