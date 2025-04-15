const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

//---------------------------------------------------------
// here is the logic for playing sound.
// fetch the play button
const playButton = document.querySelector("#play-button");
console.log(playButton);
//playing sound on click
playButton.addEventListener("click", playAudio);

// the play logic
function playAudio() {
  airportAudio.play();
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
  airportAudio.pause();
}
//---------------------------------------------------------
// here is the logic for playing sound.
// fetch the play button
const popSound = document.querySelector("#pop-sound");
const popButton = document.querySelector("#pop-button");
console.log(playButton);
//playing sound on click
popButton.addEventListener("click", popAudio);

// the play logic
function popAudio() {
  popSound.play();
}
