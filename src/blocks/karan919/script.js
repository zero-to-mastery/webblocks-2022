window.addEventListener("keyup", (e) => {
  if (e.key == "g") {
    const goku = document.getElementById("goku");
    goku.classList.add("grow");
    playSound("sounds/its_kakarrot.mp3");
    setTimeout(() => {
      goku.classList.remove("grow");
    }, 2000);
  } else if (e.key == "n") {
    const naruto = document.getElementById("naruto");
    playSound("sounds/naruto_laughing.mp3");
    naruto.classList.add("grow");
    setTimeout(() => {
      naruto.classList.remove("grow");
    }, 2000);
  }
});

function playSound(sound) {
  // Create the audio
  var audio = new Audio(sound);

  // Play the audio
  audio.play();
}
