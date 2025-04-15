const myVideo = document.querySelector("#my-video");
//---------------------------------------------------------
// here is the logic for playing sound.
// fetch the play button
const playButton = document.querySelector("#play-button");
console.log(playButton);
//playing sound on click
playButton.addEventListener("click", playAudio);

// the play logic
function playAudio() {
  myVideo.play();
}
//---------------------------------------------------------
// here is the logic for pausing sound.
// fetch the play button
const pauseButton = document.querySelector("#pause-button");
console.log(playButton);
//playing sound on click
pauseButton.addEventListener("click", pauseAudio);

// the play logic
function pauseAudio() {
  myVideo.pause();
}
//---------------------------------------------------------
// here is my logic for toggle play pause in one button
// fetching the button
const playPauseButton = document.querySelector("#play-pause-btn");
//toggle on off
playPauseButton.addEventListener("click", toggleVideo);

const playPauseImg = document.querySelector("#play-pause-img");

function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  }
}
