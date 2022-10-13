//play
const play = document.querySelector("#play");
const song = document.querySelector(".song");
const artist = document.querySelector(".artist");
const image = document.querySelector(".image-play");
const rewind = document.querySelector("#rewind");
const forward = document.querySelector("#forward");
const curr_time = document.querySelector(".current-time");
const total_duration = document.querySelector(".total-duration");
const seek_slider = document.querySelector(".seek_slider");
const curr_track = document.createElement("audio");

let isPlaying = false;
let track_index = 0;
let updateTimer;


const music = [
  {
    id: 0,
    songTitle: "All Out",
    artist: "Shotkallar715",
    music: "music/All Out Master.mp3",
    image: "images/xwm1.jpeg",
  },
  {
    id: 1,
    songTitle: "For the Gang",
    artist: "Shotkallar715",
    music: "music/For the Gang.mp3",
    image: "images/xwm2.jpeg",
  },
  {
    id: 2,
    songTitle: "Know my name",
    artist: "Shotkallar715",
    music: "music/Know my name.mp3",
    image: "images/xwm3.jpeg",
  },
];

loadTrack(track_index);

function loadTrack(track_index) {
  clearInterval(updateTimer);

  curr_track.src = music[track_index].music;
  curr_track.load();

  song.textContent = music[track_index].songTitle;
  artist.textContent = music[track_index].artist;
  image.src = music[track_index].image;

  updateTimer = setInterval(setUpdate, 1000);
}

function playpauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  play.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  play.innerHTML = '<i class="bi bi-file-play-fill"></i>';
}

function next() {
  if (track_index < music.length - 1) {
    track_index += 1;
  } else {
    track_index = 0;
  }
  loadTrack(track_index);
  playTrack();
}

function previous() {
  if (track_index > 0) {
    track_index -= 1;
  } else {
    track_index = music.length - 1;
  }
  loadTrack(track_index);
  playTrack();
}

//jump to a specific part in the track
function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setUpdate() {
  let seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    //isNaN function returns true if the argument is not a number, otherwise it is false
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      curr_track.duration - durationMinutes * 60
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
