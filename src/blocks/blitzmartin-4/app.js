const translateBtn = document.querySelector("#translate-btn");
const input = document.querySelector("input");

translateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if( input.value !== '') {
    textToSpeech(input.value);
    input.value = "";
  }
});


const textToSpeech = (text) => {
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.lang='en-GB';
  speechSynthesis.speak(utterance);
}


