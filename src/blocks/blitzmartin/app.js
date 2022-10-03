let currentMusic = 0; //index of songs array for current music playing

 //point to element in DOM
const music = document.querySelector('#audio');
const song = document.querySelector('.song');
const artist = document.querySelector('.artist');
const currentTime = document.querySelector('.current-time');
const songDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const skipPreviousBtn = document.querySelector('.previous');
const skipNextBtn = document.querySelector('.next');