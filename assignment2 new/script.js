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
console.log(myAudio);

//------------------------------------------------------------------------------
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
}
//pause audio logic
function pauseAudio() {
  myAudio.pause();
  playPauseImg.src = "Icons-01.png";

  //remove the class so the item stop spin
  disc.classList.remove("spin");
  console.log(disc);

  //make the right BG color black
  document.body.style.setProperty("--BG-right-color", "black");
}

//----------------------------------------------------------------------------
//Moving to next track and prev track logic
const nextTrackButton = document.querySelector("#nexttrack-btn");
const prevTrackButton = document.querySelector("#prevtrack-btn");

//declare an index to search through audio list
let trackIndex = 0;

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

//------------------------------------------------------------------------
//loading new track, reset values and
//updating html based on which track load logic

//declare details that need update
const trackNumber = document.querySelector("#track-number");
const trackName = document.querySelector("#track-name");

function loadTrack(trackIndex) {
  //clear the previous seek timer before reset
  clearInterval(updateTimer);
  resetValues();

  //Load new track
  myAudio.src = audioList[trackIndex].src;
  myAudio.load();

  //Update details
  //Show which number track is playing and length of playlist
  trackNumber.textContent =
    "PLAYING " + (trackIndex + 1) + " OF " + audioList.length;
  //update name
  trackName.textContent = audioList[trackIndex].name;
  //update BG color
  document.body.style.setProperty(
    "--BG-right-color",
    audioList[trackIndex].color
  );
  console.log(audioList[trackIndex].color);

  //-------------------------------------------------------------
  //Ok ngl these 2 lines be sketch as hell fix this after all done
  //set interval for updating the progress slider after last one cleared
  updateTimer = setInterval(progressUpdate, 1000);

  //move to the next track when the current finishes
  myAudio.addEventListener("ended", nextTrack);
}

//fetch the numbers on the progress bar
const currentTime = document.querySelector("#current-time");
const totalDuration = document.querySelector("#total-duration");

//fetch the sliders' values
const progressSlider = document.querySelector(".progress-slider");
const volumeSlider = document.querySelector(".volume-slider");

function resetValues() {
  currentTime.textContent = "00:00";
  totalDuration.textContent = "00:00";
}
