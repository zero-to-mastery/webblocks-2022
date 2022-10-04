let currentMusic = 0; //index of songs array for current music playing

 //point to element in DOM
const music = document.querySelector('#audio');
const songTitle = document.querySelector('.song-title');
const artist = document.querySelector('.artist');
const timeBar = document.querySelector('.time-bar');
const progressTime = document.querySelector('.progress-time');
const songDuration = document.querySelector('.song-duration');
const playPauseBtn = document.querySelector('.play-pause-btn');
const playPauseSpan = document.querySelector('.play-pause-span');
const skipPreviousBtn = document.querySelector('.previous');
const skipNextBtn = document.querySelector('.next');

//event listener when btn is clicked to toggle between icons & play and pause actions
playPauseBtn.addEventListener('click', () => {
  if (playPauseSpan.innerHTML === "play_circle") {
    playPauseSpan.innerHTML = "pause_circle";
    music.play(); //play() and pause() are native methods of audio tag
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

    progressTime.innerHTML = '00:00'
    //setTimeout is needed to slightly delay accessing to music since it takes a little while to load it
    setTimeout(() => {
        timeBar.max = music.songDuration;
        songDuration.innerHTML = formatTime(music.duration); //duration is a native property of audio tag
    }, 300)
}

//setInterval calls an action every 500ms (half a second) to change value in time-bar and progress-time
setInterval(() => {
    //currentTime is a native property of audio tag
    timeBar.value = music.currentTime; //sets time in time-bar
    progressTime.innerHTML = formatTime(music.currentTime); //sets time in text
}, 500)

setMusic(0);






//function needed to better format the time
const formatTime = (time) => {
    let minutes = Math.floor(time / 60)
    if ( minutes < 10 ) {
        minutes = `0${minutes}`;
    }
    let seconds = Math.floor(time % 60)
    if ( seconds < 10 ) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}
