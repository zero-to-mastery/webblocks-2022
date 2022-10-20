const translateBtn = document.querySelector("#translate-btn");
const textarea = document.querySelector("textarea");
const langSelection = document.querySelector("select");

translateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if( textarea.value !== '') {
    textToSpeech(textarea.value);
  }
});

speechSynthesis.addEventListener('voiceschanged', changeLang)

/* langSelectio.addEventListener('click', (e) => {
 changeLang(lang.value);   
}) */


const textToSpeech = (text) => {
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

const changeLang = (option) => {
    for (let lang of speechSynthesis.getVoices()) {

    }
}