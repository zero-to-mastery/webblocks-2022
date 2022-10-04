let currentMusic = 0; //index of songs array for current music playing

 //point to element in DOM
const music = document.querySelector('#audio');
const songTitle = document.querySelector('.song-title');
const artist = document.querySelector('.artist');
const timeBar = document.querySelector('.time-bar');
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
    music.play();
  } else {
    playPauseSpan.innerHTML = "play_circle";
    music.pause();
  }
});

const setMusic = (i) => {
    timeBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.source;
    songTitle.innerHTML = song.songTitle;
    artist.innerHTML = song.artist;

    currentTime.innerHTML = '00:00'
    //setTimeout is needed to slightly delay accessing to music since it takes a little while to load it
    setTimeout(() => {
        timeBar.max = music.songDuration;
        songDuration.innerHTML = formatTime(music.duration);
        console.log(music.songDuration);
    }, 300)

}

setMusic(0);

const formatTime = (time) => {
    let minutes = Math.floor(time / 60)
    if ( minutes < 10 ) {
        minutes = `0${minutes}`;
    }
    let seconds = Math.floor(time % 60)
    if ( seconds < 10 ) {
        seconds = `0${minutes}`;
    }
    return `${minutes} : ${seconds}`;
}