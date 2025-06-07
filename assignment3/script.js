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
  "SB_Balloon.mp3",
  "SB_heart.mp3",
  "SB_Synth.mp3",
  "SB_Wet celery.mp3",
  "SB_Tram.mp3",
  "SB_Nightfrost.mp3",
  "SB_Phosphor.mp3",
  "SB_Brutal.mp3",
  "SB_Andro.mp3",
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

  // Apply changes to window text box (and hidden interactions)
  updateWindow();
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

  // For idle-animation
  if (set[i].classList.contains(list[0])) {
    // if this icon contain class "i1x1-idle"
    set[i].classList.remove(list[0]);
  }
}

//----------------------------------------------------------------------
// Play metal sound for icon 1x1b
// Because it is not a sound-playing/control component on a soundboard
// Just a metal plug-in port for instrument
const iconBlack = document.querySelectorAll(".i1x1b");
console.log(iconBlack);

// Play metal clicking sound logic
for (let i = 0; i < iconBlack.length; i++) {
  iconBlack[i].addEventListener("click", playMetal);
}
// Play metal audio without initiating in HTML
function playMetal() {
  var audio = new Audio("Metal_Click.wav");
  audio.play();
}

//----------------------------------------------------------------------
// Idle animation logic

// New list containing all idle animation at index 0 of anim list
// Coupled with the respective icon set
const allIdleStates = [
  {
    idle: i1x1List[0],
    icon: icon1x1,
  },
  {
    idle: i1x2List[0],
    icon: icon1x2,
  },
  {
    idle: i1x2swList[0],
    icon: icon1x2sw,
  },
  {
    idle: i1x3List[0],
    icon: icon1x3,
  },
  {
    idle: i1x4List[0],
    icon: icon1x4,
  },
  {
    idle: i2x3List[0],
    icon: icon2x3,
  },
  {
    idle: i2x3swList[0],
    icon: icon2x3sw,
  },
  {
    idle: i2x4List[0],
    icon: icon2x4,
  },
  {
    idle: i3x3List[0],
    icon: icon3x3,
  },
];
// At this point I realized I could' optimize the above CSS animation
// code, using a nested list in this fashion.
// But upon attempt it created a nesting code disaster that I can not think
// is considered good coding practice. So I will not.

// Every 500ms, play the idle animation of 1 random icon
setInterval(idlePlay, 500);

// Play random icon logic
function idlePlay() {
  // Pick a random icon set (e.g. all i1x1, all i1x2, ...)
  let rngSet = Math.floor(Math.random() * allIdleStates.length);
  // Pick a random icon div from the chosen set (e.g. #box1 div.icon.i1x4)
  let rngIcon = Math.floor(Math.random() * allIdleStates[rngSet].icon.length);
  // console.log("before", allIdleStates[rngSet].icon[rngIcon]);
  // Add the CSS class
  allIdleStates[rngSet].icon[rngIcon].classList.add(allIdleStates[rngSet].idle);
  // console.log("after", allIdleStates[rngSet].icon[rngIcon]);
}
// Due to CSS class execution order, random idle anim can not replace
// existing/in-play onclick animation

//============================================================================
// Background track logic
// Because the Bg track is set to autoplay loop to be seamless,
// mute is the best toggle option

// Select icon image and bg track
const eyeIcon = document.querySelector("#eye-icon");
const BgTrack = document.querySelector("#bg-track");

// Toggle mute background track logic
eyeIcon.addEventListener("click", toggleBGMute);
function toggleBGMute() {
  if (BgTrack.muted) {
    BgTrack.muted = false;
    eyeIcon.src = "w_open_eye.gif";
    console.log("playing bg audio");
  } else {
    BgTrack.muted = true;
    eyeIcon.src = "w_closed_eye.gif";
    console.log("muted bg audio");
  }
}

//=============================================================================
// Window text box interactions
const windowText = document.querySelector("#window-text");
const flavorText = document.querySelector("#flavor-text");
let denyCounter = 0;

// close window icon
const closeWindowButton = document.querySelector("#close-window-btn");
closeWindowButton.addEventListener("click", closeWin);

function closeWin() {
  // on click, play an indicating deny sound
  var denyAudio = new Audio("DenySFX.mp3");
  denyAudio.play();
  // each click add to a count
  denyCounter++;
  // if over certain count, change text and root color
  if (denyCounter > 5) {
    windowText.textContent = "You can not get rid of me";
  }
  if (denyCounter > 12) {
    windowText.textContent = ":)";
    document.body.style.setProperty("--window-text-color", "darkred");
  }
}

// function is called everytime a soundboard icon is cliked (line-77)
function updateWindow() {
  // Display how many times audio has been played
  windowText.innerHTML = "You've played " + numClicked + " sound(s)!";
  // Set text to black in the scenario color had been changed
  document.body.style.setProperty("--window-text-color", "black");

  // set events at higher numClicked milestones
  // Mainly text, occasionally sound and root color change
  if (numClicked === 10) {
    windowText.innerHTML += " You feel something shifted forwards";
    flavorText.innerHTML =
      "[...] <br /> The detective paused and gave a cursory glance behind him. Then, hauling himself over the ledge lightly, he wedged himself through a gap—a decommissioned air duct, the parts had been removed but the hole remained with spotty patchworks, enough for a seven year old to fit through—and drop into the pitch black room down below.";
  }
  if (numClicked === 25) {
    windowText.innerHTML += " You feel something changed. Something slimy.";
    flavorText.innerHTML = `Feeling of killed a man (blocked) <br /><br />
Feeling of drowned, eaten by a fish <br /><br />
Fish hooked, barbed, inescapable, not let go <br /><br />
Feeling of the first thing killed (fish) <br /><br />
Fishmonger called fishwife when female <br /><br />
Fishmonger job. Butcher fish same as human <br /><br />
Big fish knife. Murder weapon <br /><br />
Isolation <br /><br />
All people are fish <br /><br />
Fish can be killed. Chop fish like chop humans. Flinch at contact <br /><br />
Shrines. Feeling repulsed. They Are judging you. <br /><br />
Fish eyes look like dead eyes <br /><br /><br />
How can I push through water with these hands made to grasp
`;
  }
  if (numClicked > 30 && numClicked < 50) {
    windowText.innerHTML += " You feel cold.";
    flavorText.innerHTML =
      "You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel like burning. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. Maybe you're drowning. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You try to calm, but your lungs fought to breathe. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold. You feel cold.";
    BgTrack.src = "BG_track_scary.mp3";
    document.body.style.setProperty("--text-color", "grey");
  }
  if (numClicked === 50) {
    windowText.innerHTML += " That's half of a hundred! Congrats!";
    flavorText.innerHTML = "...";
    BgTrack.src = "BG_track.mp3";
    document.body.style.setProperty("--text-color", "rgb(217, 217, 217)");
  }
  if (numClicked === 55) {
    windowText.innerHTML += " You feel something jumped.";
    flavorText.innerHTML =
      "[...] <br /> While eyeing the men that were busy apprehending the appointed criminal, he slipped back inside the crime scene. Methodically, he gave everything a second scan over, looking without touching. His eyes rested before the closet. He thought he had missed something dearly.";
  }
  if (numClicked === 60) {
    windowText.innerHTML += " You feel something shifted forwards.";
    flavorText.innerHTML =
      "[...] <br />They did get to a few red herrings during the initial investigation that were resolved during the sleeping act, but— why would there be a red herring here? The young man opened the wooden doors carefully with a handkerchief. Clean money confirmed to trace back to the dead man, in neat little stacks, stashed behind the stacks of clothes. Hidden out of paranoia but easily accessible enough that it must've meant a transaction. Buyer, for one that never happened. He gave that answer himself during the explanation.";
  }
  if (numClicked === 70) {
    windowText.innerHTML += " You feel something jumped forwards.";
    flavorText.innerHTML =
      "[...]<br />Removing the front plate as opposed to the lid revealed a light sensor, and a visible countdown timer. Exactly 5 seconds after the meet up time. No trigger set on the lid. He narrowed his eyes on the countdown. The bomber wanted the timer to be seen by opening the lid— Sadistic, and meticulously planned, which never spelled good things for him. <br /><br />The first moves were to cut off the sensors and locate the power source. Whoever made this was paranoid enough to set a few traps around the detonator, and he had a pretty good suspicion on who that might be. A sigh escaped him. He’s going to have to find a roundabout way to contact the Inspector about this later. His finger surely didn’t shake when it accidentally grazed over an open wire, because he was taught fear like that would kill him. He knew it would kill him. Maybe he could borrow the bumbling man’s voice again. He switched to using his flashlight once the photosensors were clear, and kept a close ear on the low humming of electrical current. He wondered what dinner awaits him. ";
  }
  if (numClicked === 100) {
    // Only play this once
    var congratAudio = new Audio("Celebration.mp3");
    setTimeout(playCongrat, 2000);
    function playCongrat() {
      congratAudio.play();
    }
    console.log("congrats audio");
  }
  if (numClicked >= 100) {
    windowText.innerHTML +=
      " Woah! You've reached 100! That's... I didn't expect you to! There's nothing planned beyond this point though the system is very modular, so adding more wouldn't be an issue. Thanks for playing! <3";
    flavorText.innerHTML =
      "Hurray!<br /> Hurray!<br /> (Nothing goes beyond this razor edge we brought ourselves, yet we enjoyed something along the way didn't we? I hope you did.) <br /><br />Thank you for playing!";
  }
}
