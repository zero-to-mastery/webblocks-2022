let songIndex = 0; //index of songs array for current music playing

//point to element in DOM
const music = document.querySelector("#audio");
const songTitle = document.querySelector(".song-title");
const artist = document.querySelector(".artist");
const coverImg = document.querySelector(".cover-img");
const timeBar = document.querySelector(".time-bar");
const progressTime = document.querySelector(".progress-time");
const songDuration = document.querySelector(".song-duration");
const playPauseBtn = document.querySelector(".play-pause-btn");
const playPauseSpan = document.querySelector(".play-pause-span");
const skipPreviousBtn = document.querySelector(".previous");
const skipNextBtn = document.querySelector(".next");

//event listener for clickable elements (btn & timebar)
playPauseBtn.addEventListener("click", () => {
  if (playPauseSpan.innerHTML === "play_circle") {
    playPauseSpan.innerHTML = "pause_circle";
    music.play(); //play() and pause() are native methods of audio tag
  } else {
    playPauseSpan.innerHTML = "play_circle";
    music.pause();
  }
});

skipPreviousBtn.addEventListener("click", () => {
  if (songIndex === 0) {
    songIndex = songs.length - 1; //if it's playing the first song,go to last song of array with index (songs.length - 1)
  } else {
    songIndex--;
  }
  setMusic(songIndex); //put this new song as audio source
  music.autoplay = true; //click play btn
});

skipNextBtn.addEventListener("click", () => {
  if (songIndex === songs.length - 1) {
    //if it's playing the last song,go back to first song with index 0
    songIndex = 0;
  } else {
    songIndex++;
  }
  setMusic(songIndex);
  music.autoplay = true;
});

//when you click on timebar, 'change' will automatically assign the time value to currentTime property of the song
timeBar.addEventListener("change", () => {
  music.currentTime = timeBar.value;
});

const setMusic = (i) => {
  timeBar.value = 0;
  let song = songs[i];
  songIndex = i;
  music.src = song.source;
  songTitle.innerHTML = song.songTitle;
  artist.innerHTML = song.artist;
  coverImg.src = song.cover;
  progressTime.innerHTML = "00:00";
  //setTimeout is needed to slightly delay accessing to music since it takes a little while to load it
  setTimeout(() => {
    timeBar.max = music.duration;
    songDuration.innerHTML = formatTime(music.duration); //duration is a native property of audio tag
  }, 300);
};

//setInterval calls an action every 500ms (half a second) to update value in time-bar and progress-time
setInterval(() => {
  //currentTime is a native property of audio tag
  timeBar.value = music.currentTime; //sets time in time-bar
  progressTime.innerHTML = formatTime(music.currentTime); //sets time in text
}, 500);

//function needed to better format the time
const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = Math.floor(time % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};

setMusic(0);
