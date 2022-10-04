let currentMusic = 0; //index of songs array for current music playing

 //point to element in DOM
const music = document.querySelector('#audio');
const song = document.querySelector('.song');
const artist = document.querySelector('.artist');
const currentTime = document.querySelector('.current-time');
const songDuration = document.querySelector('.song-duration');
const playPauseBtn = document.querySelector('.play-pause-btn');
const playPauseSpan = document.querySelector('.play-pause-span');
const skipPreviousBtn = document.querySelector('.previous');
const skipNextBtn = document.querySelector('.next');

//event listener and toggle between play and pause icon
playPauseBtn.addEventListener('click', () => {
  if (playPauseSpan.innerHTML === "play_circle") {
    playPauseSpan.innerHTML = "pause_circle";
  } else {
    playPauseSpan.innerHTML = "play_circle";
  }
})