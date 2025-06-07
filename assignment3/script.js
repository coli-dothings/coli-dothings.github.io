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
const allIconsArray = document.querySelectorAll(".icon");
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
}

//=====================================================================
// Play animation onclick logic
// Selecting all icons of the same sets
const icon1x1 = document.querySelectorAll(".i1x1");
const icon1x2 = document.querySelectorAll(".i1x2");
const icon1x2sw = document.querySelectorAll(".i1x2sw");
const icon1x3 = document.querySelectorAll(".i1x3");
const icon1x4 = document.querySelectorAll(".i1x4");
const icon2x3 = document.querySelectorAll(".i2x3");
const icon2x4 = document.querySelectorAll(".i2x4");
const icon2x3sw = document.querySelectorAll(".i2x3sw");
const icon3x3 = document.querySelectorAll(".i3x3");
console.log(icon1x1, icon2x4);

// On an icon of any given set is cliked, run function animateClass
// with the parameter containing the set of same icons (e.g. icon1x1)
// the list containing the CSS class animation (e.g. i1x1List)
// and the index number indicating the HTML div-icon that set is on (i)
for (let i = 0; i < icon1x1.length; i++) {
  icon1x1[i].addEventListener("click", function anim() {
    animateClass(icon1x1, i1x1List, i);
  });
}

for (let i = 0; i < icon1x2.length; i++) {
  icon1x2[i].addEventListener("click", function anim() {
    animateClass(icon1x2, i1x2List, i);
  });
}

for (let i = 0; i < icon1x2sw.length; i++) {
  icon1x2sw[i].addEventListener("click", function anim() {
    animateClass(icon1x2sw, i1x2swList, i);
  });
}

for (let i = 0; i < icon1x3.length; i++) {
  icon1x3[i].addEventListener("click", function anim() {
    animateClass(icon1x3, i1x3List, i);
  });
}

for (let i = 0; i < icon1x4.length; i++) {
  icon1x4[i].addEventListener("click", function anim() {
    animateClass(icon1x4, i1x4List, i);
  });
}

for (let i = 0; i < icon2x3.length; i++) {
  icon2x3[i].addEventListener("click", function anim() {
    animateClass(icon2x3, i2x3List, i);
  });
}

for (let i = 0; i < icon2x3sw.length; i++) {
  icon2x3sw[i].addEventListener("click", function anim() {
    animateClass(icon2x3sw, i2x3swList, i);
  });
}

for (let i = 0; i < icon2x4.length; i++) {
  icon2x4[i].addEventListener("click", function anim() {
    animateClass(icon2x4, i2x4List, i);
  });
}

for (let i = 0; i < icon3x3.length; i++) {
  icon3x3[i].addEventListener("click", function anim() {
    animateClass(icon3x3, i3x3List, i);
  });
}

function animateClass(set, list, i) {
  // Clear existing animation if user click on icon before prev animation is finished
  // resulting in not "eating" the user's input
  removeClass(set, list, i);
  // if animation is playing, removed then re-add the same animation
  // e.i. remove then add back the same CSS class
  // the browser will not recognize the change
  // offsetHeight force a page repaint that the browser recognize
  // while visually change nothing
  set[i].offsetHeight;

  // Function is to play 1 of 2 possible animation variation randomly
  // The variation 2 being rarer
  // Using rng to roll between 0 to 99 as a weighted dice for 2 var
  let rng = Math.floor(Math.random() * 100);
  console.log("anim rng", rng);
  if (rng < 80) {
    set[i].classList.add(list[1]);
    console.log("is var1", set[i]);
  } else {
    set[i].classList.add(list[2]);
    console.log("is var2", set[i]);
  }
}
// Initially the entire bulk of rng gen -> set/add class was
// built into each set instances. But it felt too clunky
// This is the best I could optimize it down to. I'm glad I did

//--------------------------------------------------------------------
// Remove CSS animation class after it finished

// animationend event listener. Same parameters function as above
// but to remove class after the CSS animation had ended
for (let i = 0; i < icon1x1.length; i++) {
  icon1x1[i].addEventListener("animationend", function noAnim() {
    removeClass(icon1x1, i1x1List, i);
  });
}

for (let i = 0; i < icon1x2.length; i++) {
  icon1x2[i].addEventListener("animationend", function noAnim() {
    removeClass(icon1x2, i1x2List, i);
  });
}

for (let i = 0; i < icon1x2sw.length; i++) {
  icon1x2sw[i].addEventListener("animationend", function noAnim() {
    removeClass(icon1x2sw, i1x2swList, i);
  });
}

for (let i = 0; i < icon1x3.length; i++) {
  icon1x3[i].addEventListener("animationend", function noAnim() {
    removeClass(icon1x3, i1x3List, i);
  });
}

for (let i = 0; i < icon1x4.length; i++) {
  icon1x4[i].addEventListener("animationend", function noAnim() {
    removeClass(icon1x4, i1x4List, i);
  });
}

for (let i = 0; i < icon2x3.length; i++) {
  icon2x3[i].addEventListener("animationend", function noAnim() {
    removeClass(icon2x3, i2x3List, i);
  });
}

for (let i = 0; i < icon2x3sw.length; i++) {
  icon2x3sw[i].addEventListener("animationend", function noAnim() {
    removeClass(icon2x3sw, i2x3swList, i);
  });
}

for (let i = 0; i < icon2x4.length; i++) {
  icon2x4[i].addEventListener("animationend", function noAnim() {
    removeClass(icon2x4, i2x4List, i);
  });
}

for (let i = 0; i < icon3x3.length; i++) {
  icon3x3[i].addEventListener("animationend", function noAnim() {
    removeClass(icon3x3, i3x3List, i);
  });
}

// Check whether the icon contain the variation animate class
function removeClass(set, list, i) {
  if (set[i].classList.contains(list[1])) {
    // if this icon contain class "i1x1-var1"
    set[i].classList.remove(list[1]);
    console.log("remove var1", set[i]);
  }
  if (set[i].classList.contains(list[2])) {
    // if this icon contain class "i1x1-var2"
    set[i].classList.remove(list[2]);
    console.log("remove var2", set[i]);
  }
}

//----------------------------------------------------------------------
// Play metal sound for icon 1x1 black
// Because it is not a sound-playing/control component on a soundboard
// Just a plug-in port for instrument
const iconBlack = document.querySelectorAll(".i1x1b");
console.log(iconBlack);

// Play metal clicking sound
for (let i = 0; i < iconBlack.length; i++) {
  iconBlack[i].addEventListener("click", playMetal);
}
// Play metal audio without initiating in HTML
function playMetal() {
  var audio = new Audio("Metal_Click.wav");
  audio.play();
}

//======================================================================
//BG track toggle mute

//Deny sound onclick close window
//Text appear after clicking close window too many times
