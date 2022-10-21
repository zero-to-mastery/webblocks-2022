const trackListing = document.getElementsByClassName('track-link');

const nowPlaying = document.querySelector('.now-playing');
const trackArt = document.querySelector('.track-art');
const trackName = document.querySelector('.track-name');
const trackArtist = document.querySelector('.track-artist');

const playPauseBtn = document.querySelector('.play-pause-track');
const nextBtn = document.querySelector('.next-track');
const prevBtn = document.querySelector('.prev-track');

const seekSlider = document.querySelector('.seek-slider');
const currTime = document.querySelector('.current-time');
const totalDuration = document.querySelector('.total-duration');
const volumeSlider = document.querySelector('.volume-slider');

let trackIndex = 0;
let isPlaying = false;
let updateTimer;

let currTrack = document.createElement('audio');

const trackList = [
  {
    id: 1,
    name: 'Scorpio Harvest',
    artist: 'DJ Chai',
    image: 'https://audio-app-pw.s3.amazonaws.com/scorpioharvest.jpg',
    path: 'https://audio-app-pw.s3.amazonaws.com/Chai_ScorpioHarvest2015.mp3'
  },
  {
    name: 'FnF Fall Classic',
    artist: 'DJ Chai',
    image: 'https://audio-app-pw.s3.amazonaws.com/flower.jpg',
    path: 'https://audio-app-pw.s3.amazonaws.com/FnF_Fall_Classic.mp3'
  },
  {
    name: 'Just Another Tuesday',
    artist: 'DJ Chai',
    image: 'https://audio-app-pw.s3.amazonaws.com/techno.jpg',
    path: 'https://audio-app-pw.s3.amazonaws.com/Just_Tuesday.mp3',
  },
];

const addEventListenersToTrackLinks = (trackListing) => {
  const tracksArr = Array.prototype.slice.call(trackListing);
  tracksArr.forEach(link => {
    link.addEventListener('click', function() {
      const index = trackList.findIndex((track) => track.name === link.innerHTML);
      loadTrack(index);
      playTrack();
    });
  });
}

const loadTrack = (trackIndex) => {
  clearInterval(updateTimer);
  resetValues();

  currTrack.src = trackList[trackIndex].path;
  currTrack.load();

  trackArt.style.backgroundImage = 'url(' + trackList[trackIndex].image + ')';
  trackName.textContent = trackList[trackIndex].name;
  trackArtist.textContent = trackList[trackIndex].artist;
  nowPlaying.textContent = 'PLAYING ' + (trackIndex + 1) + ' OF ' + trackList.length;

  updateTimer = setInterval(seekUpdate, 1000);
  currTrack.addEventListener('ended', nextTrack);

  randomBGColor();
}

const randomBGColor = () => {
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;
  let color = 'rbg(' + red + ',' + green + ',' + blue + ')';

  document.body.style.background = color;
}

const resetValues = () => {
  currTime.textContent = '00:00';
  totalDuration.textContent = '00:00';
  seekSlider.value = 0;
}

const playPauseTrack = () => {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

const playTrack = () => {
  currTrack.play();
  isPlaying = true;

  playPauseBtn.innerHTML = "<i class='fa fa-pause-circle fa-3x'></i>";
}

const pauseTrack = () => {
  currTrack.pause();
  isPlaying = false;

  playPauseBtn.innerHTML = "<i class='fa fa-play-circle fa-3x'></i>";
}

const nextTrack = () => {
  if (trackIndex < trackList.length -1) {
    trackIndex += 1;
  } else trackIndex = 0;

  loadTrack(trackIndex);
  playTrack();
}

function prevTrack() {
  if (trackIndex > 0) {
    trackIndex--;
  } else trackIndex = trackList.length -1;

  loadTrack(trackIndex);
  playTrack();
}

const seekTo = () => {
  currTrack.currentTime = currTrack.duration * (seekSlider.value / 100);;
}

const setVolume = () => {
  currTrack.volume = (volumeSlider.value / 100);
}

const seekUpdate = () => {
  let seekPosition = 0;

  if (!isNaN(currTrack.duration)) {
    seekPosition = currTrack.currentTime * (100/currTrack.duration);
    seekSlider.value = seekPosition;

    let currMinutes = Math.floor(currTrack.currentTime / 60);
    let currSeconds = Math.floor(currTrack.currentTime - currMinutes * 60);
    let durationMinutes = Math.floor(currTrack.duration / 60);
    let durationSeconds = Math.floor(currTrack.duration - durationMinutes * 60);

    if (currSeconds < 10) { currSeconds = '0' + currSeconds };
    if (currMinutes < 10) { currMinutes = '0' + currMinutes };
    if (durationSeconds < 10) { durationSeconds = '0' + durationSeconds };
    if (durationMinutes < 10) { durationMinutes = '0' + durationMinutes };

    currTime.textContent = currMinutes + ':' + currSeconds;
    totalDuration.textContent = durationMinutes + ':' + durationSeconds;  
  }
}

loadTrack(trackIndex);
window.onload = addEventListenersToTrackLinks(trackListing);
