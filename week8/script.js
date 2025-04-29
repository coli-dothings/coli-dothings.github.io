const videoList = [
  { id: 1, src: "stardust.mp4" },
  { id: 2, src: "zenscape.mp4" },
  {
    id: 3,
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
  },
];

const myVideo = document.querySelector("#my-video");

// play pause logic
// fetch the right btn
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

//listen for click
playPauseButton.addEventListener("click", togglePlay);

//fetching btn image
const playPauseImg = document.querySelector("#play-pause-img");

//run function when click happen
function togglePlay() {
  if (myVideo.paused || myVideo.ended) {
    playPauseImg.src;
    myVideo.play();
  } else {
    myVideo.paused();
    playPauseImg.src;
  }
}
//----------------------------------------------------------------------
// mute unmute logic
// fetch the right btn
const muteUnmuteButton = document.querySelector("#mute-unmute-button");

//listen for click
playPauseButton.addEventListener("click", togglePlay);

//fetching btn image
const muteUnmuteImg = document.querySelector("#mute-unmute-img");

//run function when click happen
function toggleSound() {
  if (myVideo.muted) {
    muteUnmuteImg.src;
    myVideo.muted = false;
  } else {
    myVideo.muted = true;
    muteUnmuteImg.src;
  }
}
//-------------------------------------------------------------------------
const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

fastForwardButton.addEventListener("click", fastForward);

function fastForward() {
  if (myVideo.playbackRate === 1.0) {
    myVideo.playbackRate = 2.0;
  } else {
    myVideo.playbackRate = 1.0;
  }
}
//--------------------------------------------------------------------------
//stepping logic
const step1Button = document.querySelector("#step-1-button");
console.log(step1Button);

step1Button.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 16.0;
}

const step2Button = document.querySelector("#step2-button");
console.log(step2Button);

step2Button.addEventListener("click", gotoStep2);

function gotoStep2() {
  myVideo.currentTime = 43.0;
}
//---------------------------------------------------------------------------
//progress bar logic
const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

myVideo.addEventListener("timeupdate", updateProgress);

function updateProgress() {
  const duration = (myVideo.currentTime / myVideo.duration) * 100;
  progressBar.style.width = duration + "%";
}
//---------------------------------------------------------------------------
//chose video logic
//Use this for selecting track logic
const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);

stardustButton.addEventListener("click", function chooseVideo() {
  playVideo(0);
});

const zenscapeButton = document.querySelector("#zenscape-vid-button");
console.log(zenscapeButton);

zenscapeButton.addEventListener("click", function chooseVideo() {
  playVideo(1);
});

const musicVideoButton = document.querySelector("#musicvideo-vid-button");
console.log(musicVideoButton);

musicVideoButton.addEventListener("click", function chooseVideo() {
  playVideo(2);
});

function playVideo(no) {
  myVideo.src = videoList[no].src;
  console.log(myVideo.src);
  myVideo.load();
  myVideo.play();
}
