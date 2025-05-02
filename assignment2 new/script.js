//audio list
const audioList = [
  {
    color: "#002630",
    name: "Hes",
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Hes.mp3",
  },
  {
    color: "#00052d",
    name: "Dry Down ft. Ben Shaath",
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Dry-Down-feat-Ben-Snaath.mp3",
  },
  {
    color: "#200023",
    name: "Leapt",
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Leapt.mp3",
  },
  {
    color: "#200001",
    name: "Water Feature",
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Water-Feature.mp3",
  },
];

const myAudio = document.querySelector("#my-audio");

//---------------------------------------------------------------------------------
//loading new track, reset values and
//updating html style based on which track load logic

//declare details that need update
const trackNumber = document.querySelector("#track-number");
const trackName = document.querySelector("#track-name");

//fetch the timer numbers on the progress bar
const currentTimeNum = document.querySelector("#current-time");
const totalDurationNum = document.querySelector("#total-duration");

//fetch the sliders' values
const progressSlider = document.querySelector(".progress-slider");
const volumeSlider = document.querySelector(".volume-slider");

//declare an index to search through audio list
let trackIndex = 0;

//load new track logic
function loadTrack(trackIndex) {
  //Load new track
  myAudio.src = audioList[trackIndex].src;
  myAudio.load();

  //Update details
  //Show which number track is playing and length of playlist
  trackNumber.textContent =
    "PLAYING " + (trackIndex + 1) + " OF " + audioList.length;
  //update name
  trackName.textContent = audioList[trackIndex].name;
}

//------------------------------------------------------------------------------
//Custom controls section
//play pause logic
const playPauseButton = document.querySelector("#playpause-btn");
console.log(playPauseButton);

//listen for click
playPauseButton.addEventListener("click", togglePlay);

//fetching btn image
const playPauseImg = document.querySelector("#playpause-img");

//run function when click happen
function togglePlay() {
  if (myAudio.paused || myAudio.ended) {
    playAudio();
  } else {
    pauseAudio();
  }
}

//fetch disc image to spin while audio play
const disc = document.querySelector(".disc");

//play audio logic
function playAudio() {
  myAudio.play();
  playPauseImg.src = "Icons-04.png";

  //spin the disc img while audio is playing
  //Using the animated spin class from css
  disc.classList.add("spin");
  console.log(disc);

  //make the right-BG color track color when play
  document.body.style.setProperty(
    "--BG-right-color",
    audioList[trackIndex].color
  );
  console.log("play");
}
//pause audio logic
function pauseAudio() {
  myAudio.pause();
  playPauseImg.src = "Icons-01.png";

  //remove the class so the item stop spin
  disc.classList.remove("spin");
  console.log(disc);

  //make the right-BG color black when paused
  document.body.style.setProperty("--BG-right-color", "black");
  console.log("pause");
}

//----------------------------------------------------------------------------
//Moving to next track and prev track logic
const nextTrackButton = document.querySelector("#nexttrack-btn");
const prevTrackButton = document.querySelector("#prevtrack-btn");

//listen for click
nextTrackButton.addEventListener("click", nextTrack);
prevTrackButton.addEventListener("click", prevTrack);

function nextTrack() {
  //Advance index by 1
  //Go to first track if this is last track
  if (trackIndex < audioList.length - 1) {
    trackIndex++;
  } else {
    trackIndex = 0;
  }

  //Load and play new track. Set play-pause button to play state
  loadTrack(trackIndex);
  playAudio();
}

function prevTrack() {
  //Decrease index by 1
  //Go to last track if this is first track
  if (trackIndex > 0) {
    trackIndex--;
  } else {
    trackIndex = audioList.length - 1;
  }

  //Load and play new track. Set play-pause button to play state
  loadTrack(trackIndex);
  playAudio();
}

//----------------------------------------------------------------------------------------
//move to the next track when the current finishes
myAudio.addEventListener("ended", autoPlayNext);

//stop auto play if end of playlist
function autoPlayNext() {
  if (trackIndex < audioList.length - 1) {
    nextTrack();
  } else {
    pauseAudio();
  }
}

//----------------------------------------------------------------------------------------
//Progress bar logic
//listen for when user changes the slider
progressSlider.addEventListener("change", setProgress);

//update progress bar when time update
myAudio.addEventListener("timeupdate", progressUpdate);

//Calculate the time of the audio should be set to
//based on the user manual input on the progress slider
//if user set slider to 50 => audio current time set to halfway point
function setProgress() {
  let setTo = myAudio.duration * (progressSlider.value / 100);

  //set the audio to that time/progress position
  myAudio.currentTime = setTo;
}

//logic to let progress bar be update by audio running
function progressUpdate() {
  let progressPos = 0;

  //Occasionally on track change delay the duration is NaN
  //Add this if statement fix that
  if (!isNaN(myAudio.duration)) {
    progressPos = myAudio.currentTime * (100 / myAudio.duration);
    //set progress bar
    progressSlider.value = progressPos;

    //Calculate the time left using current time divided by 60
    //The remainder is the seconds. All round up to interger
    let currentMinutes = Math.floor(myAudio.currentTime / 60);
    let currentSeconds = Math.floor(myAudio.currentTime % 60);

    //Calculate the total duration using duration time divided by 60
    //The remainder is the seconds. All round up to interger
    let durationMinutes = Math.floor(myAudio.duration / 60);
    let durationSeconds = Math.floor(myAudio.duration % 60);

    // Add a zero if the number is one digit
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    // Add a zero if the number is one digit
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    // Display the updated duration
    currentTimeNum.textContent = currentMinutes + ":" + currentSeconds;
    totalDurationNum.textContent = durationMinutes + ":" + durationSeconds;
  }
}

//---------------------------------------------------------------------------------------
//Volume bar logic
//listen when user change volume slider
volumeSlider.addEventListener("change", setVolume);

//set volume based on slider percentage, same as progress slider
function setVolume() {
  myAudio.volume = volumeSlider.value / 100;
}

//----------------------------------------------------------------------------------------
//Playlist track select logic
//select the track body element
const trackBody1 = document.querySelector("#track-body-1");
//play selected track
trackBody1.addEventListener("click", function chooseTrack() {
  playTrack(0);
});

const trackBody2 = document.querySelector("#track-body-2");
trackBody2.addEventListener("click", function chooseTrack() {
  playTrack(1);
});

const trackBody3 = document.querySelector("#track-body-3");
trackBody3.addEventListener("click", function chooseTrack() {
  playTrack(2);
});

const trackBody4 = document.querySelector("#track-body-4");
trackBody4.addEventListener("click", function chooseTrack() {
  playTrack(3);
});

//select Play All button
//Since the whole system is set to auto play by default
//Play All functionally just set audio to play to the first one in list
const playAllButton = document.querySelector("#play-all");
playAllButton.addEventListener("click", function chooseTrack() {
  playTrack(0);
});

//logic to play selected track
function playTrack(no) {
  trackIndex = no;
  console.log(trackIndex);

  //for some reason calling loadTrack() function here breaks it
  //so I put it in manually
  myAudio.src = audioList[trackIndex].src;
  myAudio.load();
  trackNumber.textContent =
    "PLAYING " + (trackIndex + 1) + " OF " + audioList.length;
  trackName.textContent = audioList[trackIndex].name;

  playAudio();
}

//----------------------------------------------------------------------------------------
//Clicky CD case sound logic
//Selecting ALL buttons in document
var allButtonsArray = document.querySelectorAll("button");
console.log(allButtonsArray);
//set clicky sound source
const clickyCD = document.querySelector("#clicky-cd");

//add a clicky sound function to all of them
for (let i = 0; i < allButtonsArray.length; i++) {
  allButtonsArray[i].addEventListener("click", clickyAudio);
}
function clickyAudio() {
  clickyCD.play();
}

//---------------------------------------------------------------------------------------
//Insert CD sound logic
//Selecting all track body from playlist section
//Using same selection method as CSS
var allTrackBodyArray = document.querySelectorAll(".playlist-left div");
console.log(allTrackBodyArray);

const insertCD = document.querySelector("#insert-cd");

//add the insert cd sound function to all of them
for (let i = 0; i < allTrackBodyArray.length; i++) {
  allTrackBodyArray[i].addEventListener("click", insertCDAudio);
}
function insertCDAudio() {
  insertCD.play();
}

//----------------------------------------------------------------------------------------
//Final line. Load the first track to the player.
loadTrack(trackIndex);
