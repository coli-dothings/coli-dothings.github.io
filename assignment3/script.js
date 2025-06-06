//Audio list items will be called randomly onclick
const audioList = [
  "SB_4444 Radio.mp3",
  "SB_Appregio strings.mp3",
  "SB_Bell tolls.mp3",
  "SB_Distant explode.mp3",
  "SB_Drums.mp3",
  "SB_Electric.mp3",
  "SB_Engine.mp3",
  "SB_Ex strings.mp3",
  "SB_Fire.mp3",
  "SB_Gong.mp3",
  "SB_HF Bowed.mp3",
  "SB_HF inflight.mp3",
  "SB_Oh Riser.mp3",
  "SB_Piano .mp3",
  "SB_String swells.mp3",
  "SB_Strings long.mp3",
  "SB_The Deeps .mp3",
  "SB_Truck.mp3",
  "SB_Trumpet.mp3",
  "SB_Water.mp3",
  "SB_Wind.mp3",
];
console.log(audioList);

//Animation list is seperate for each icon.
//Each conatain 3 respective CSS animate class
const i1x1List = ["i1x1-idle", "i1x1-var1", "i1x1-var2"];
const i1x2List = ["i1x2-idle", "i1x2-var1", "i1x2-var2"];
const i1x2swList = ["i1x2sw-idle", "i1x2sw-var1", "i1x2sw-var2"];
const i1x3List = ["i1x3-idle", "i1x3-var1", "i1x3-var2"];
const i1x4List = ["i1x4-idle", "i1x4-var1", "i1x4-var2"];
const i2x3List = ["i2x3-idle", "i2x3-var1", "i2x3-var2"];
const i2x3swList = ["i2x3sw-idle", "i2x3sw-var1", "i2x3sw-var2"];
const i2x4List = ["i2x4-idle", "i2x4-var1", "i2x4-var2"];
const i3x3List = ["i3x3-idle", "i3x3-var1", "i3x3-var2"];
console.log(i1x1List);

//Num of times icon had been clicked
let numClicked = 0;

//-----------------------------------------------------------------
// Play audio onclick logic
// Selecting all icons
var allIconsArray = document.querySelectorAll(".icon");
console.log(allIconsArray);

//Add listening event onclick to all icons in array
for (let i = 0; i < allIconsArray.length; i++) {
  allIconsArray[i].addEventListener("click", playIcon);
}
function playIcon() {
  //Return a random number between 0 and audiolist length-1
  let audioIndex = Math.floor(Math.random() * audioList.length);
  console.log(audioIndex);

  //create a new audio element without initiating in HTML
  var rngAudio = new Audio(audioList[audioIndex]);
  //Play a random audio from the list using the random index
  rngAudio.play();

  //Count num of times any icon had been clicked
  numClicked++;
  console.log("this is numclicked", numClicked);

  //Set which animation variant will be played
  // using weighted probability
  // let rng = Math.floor(Math.random() * 100);
  // if (rng < 80) {
  //   let variant = 1;
  // } else {
  //   let variant = 2;
  // }
  // console.log(variant);
}

//-----------------------------------------------------------------
// Play animation onclick logic
// Selecting all icons of the same sets
const icon1x1 = document.querySelectorAll(".i1x1");
const icon1x2 = document.querySelectorAll(".i1x2");
const icon1x2sw = document.querySelectorAll(".i1x2sw");
const icon1x3 = document.querySelectorAll(".i1x3");
const icon1x4 = document.querySelectorAll(".i1x4");
const icon2x3 = document.querySelectorAll(".i2x3");
const icon2x3sw = document.querySelectorAll(".i2x3sw");
const icon3x3 = document.querySelectorAll(".i3x3");
console.log(icon1x1, icon1x2);

//Add onclick listening and direct to a different animate function
// for (let i = 0; i < icon1x1.length; i++) {
//   icon1x1[i].addEventListener("click", anim);
// }

//BG track toggle mute

//Deny sound onclick close window
//Text appear after clicking close window too many times
