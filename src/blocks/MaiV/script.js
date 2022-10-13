//play

//const music = document.querySelector("#audio");
const play = document.querySelector("#play");
const rewind = document.querySelector("#rewind");
const forward = document.querySelector("#forward");

const seek_slider = document.querySelector('.seek_slider');
const total_duration = document.querySelector('.total_duration');
let curr_track = document.createElement('audio');

let isPlaying = false;
let track_index = 0;
let updateTimer;

// play.addEventListener("click", () => {
//     if (play.innerHTML === "play_circle") {
//         play
//     }
// })

const music_list = [
    {
        id: 0,
        songTitle: "Rather Be",
        artist: "Clean Bandit",
        music: 'music/Rather Be.mp3',
        image: "https://i.scdn.co/image/ab67616d0000b2735419c0986ee778b7489da418",
    }
]


loadTrack(track_index);

function loadTrack(track_index){
    // clearInterval(updateTimer);
    // reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();
}

function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}


function playTrack(){
    curr_track.play();
    isPlaying = true;
    play.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
}

function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    play.innerHTML = '<i class="bi bi-file-play-fill"></i>';
}