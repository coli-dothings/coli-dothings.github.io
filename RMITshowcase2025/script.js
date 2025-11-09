// Get box in grid, put an item per box
const boxGrid = document.querySelectorAll(".box");
console.log(boxGrid.length);

for (let i = 0; i < boxGrid.length; i++) {
  switch (studentList[i].key_projects[0].project_type) {
    case "3D":
      boxGrid[i].innerHTML = formatted(i);
      boxGrid[i].classList.add("box-3d");
      boxGrid[i].querySelector(".project-img").loading = "lazy";
      break;
    case "UXUI":
      boxGrid[i].innerHTML = formatted(i);
      boxGrid[i].classList.add("box-uxui");
      break;
    case "sound":
      boxGrid[i].innerHTML = formatted(i);
      boxGrid[i].classList.add("box-sound");
      break;
    case "video":
      boxGrid[i].innerHTML = formatted(i);
      boxGrid[i].classList.add("box-video");
      boxGrid[i].querySelector(".project-img").loading = "lazy";
      break;
    case "graphics":
      boxGrid[i].innerHTML = formatted(i);
      boxGrid[i].classList.add("box-graphics");
      boxGrid[i].querySelector(".project-img").loading = "lazy";
      break;
    default:
      console.log("case break");
      break;
  }
}

function formatted(index) {
  let i = index;
  return `
    <div class="item s${i} p${0}" id="item${i}">
    <div class="img-container">
     <img
        class="project-img"
        src="${studentList[i].key_projects[0].project_cover_image}"
        alt="project id ${i}"
      />
      </div>
      <div class="name-plate"><p>${
        studentList[i].key_projects[0].title
      }</p></div>
    </div>
    `;
}
//================================================================================
// Data transfer

const itemsArray = document.querySelectorAll(".item");
console.log("itemsArray length is " + itemsArray.length);

for (let i = 0; i < itemsArray.length; i++) {
  let myString = itemsArray[i].classList.toString();
  let studentID;
  let projectID;
  if (myString.length > 10) {
    studentID = myString.charAt(6) + "" + myString.charAt(7);
    projectID = myString.charAt(10);
  } else {
    studentID = myString.charAt(6);
    projectID = myString.charAt(9);
  }

  itemsArray[i].addEventListener("click", function () {
    var bubble = new Audio("bubble.mp3");
    bubble.play();
    sessionStorage.setItem("studentID", studentID);
    sessionStorage.setItem("projectID", projectID);
    setTimeout(() => {
      window.location.href = "profileMock.html";
    }, 500);
  });
}

//================================================================================
// Decoration
// play fish anim every 0.8 min
const fish = document.querySelector("#fish");
const fish2 = document.querySelector("#fish2");
const fishMirrored = document.querySelector("#mirror");

setInterval(fishAnim, 50000);
function fishAnim() {
  fish.classList.remove("fishAnim");
  fish2.classList.remove("fishAnimReverse");
  fishMirrored.classList.remove("mirror");
  setTimeout(() => {
    fish.classList.add("fishAnim");
    fish2.classList.add("fishAnimReverse");
    fishMirrored.classList.add("mirror");
  }, 10);
}

// play bubble random every 1s
// play anim, once animationend, remove class animation
const allBubble = document.querySelectorAll(".bub");
setInterval(playBubble, 1000);
function playBubble() {
  let rng = Math.floor(Math.random() * allBubble.length);
  allBubble[rng].classList.add("bubAnim");
}
for (let i = 0; i < allBubble.length; i++) {
  allBubble[i].addEventListener("animationend", function () {
    allBubble[i].classList.remove("bubAnim");
  });
}

// frog
const frog = document.querySelector(".frog");
const bgTrack = document.querySelector("#bg-track");
frog.addEventListener("click", toggleAudio);
function toggleAudio() {
  if (bgTrack.muted) {
    bgTrack.muted = false;
    frog.classList.add("frogAnim");
  } else {
    bgTrack.muted = true;
    frog.classList.remove("frogAnim");
  }
}

//flower
const flowers = document.querySelectorAll(".flower");
for (let i = 0; i < flowers.length; i++) {
  flowers[i].addEventListener("click", function () {
    var splash = new Audio("splash.mp3");
    splash.play();
  });
}
//================================================================================
// Header dialog
const blocker = document.querySelector("#blocker");
const dialogText = document.querySelector("#dialog-text");
const dialogBox = document.querySelector("#dialog-box");
const dialogHeader = document.querySelector("#dialog-header");
const flavorText = document.querySelector("#flavor-text");

if (Number(localStorage.clickCount) >= 5) {
  blocker.remove();
  dialogBox.style.display = "none";
  dialogHeader.style.display = "block";
} else {
  blocker.addEventListener("click", clickCounter);
  dialogBox.addEventListener("click", clickCounter);
}

function clickCounter() {
  if (localStorage.clickCount) {
    localStorage.clickCount = Number(localStorage.clickCount) + 1;
  } else {
    localStorage.clickCount = 1;
  }
  updateDialog();
}

function updateDialog() {
  let clickNum = Number(localStorage.clickCount);
  if (clickNum >= 5) {
    blocker.remove();
    dialogBox.style.display = "none";
    dialogHeader.style.display = "block";
  } else {
    switch (clickNum) {
      case 1:
        dialogText.innerHTML =
          "Welcome to the RMIT Digital Media Showcase 2025!</br></br> A living pond of creativity where ideas surface and mingle.";
        break;
      case 2:
        dialogText.innerHTML =
          "Each project drifts into view with its own rhythm, shaped by time, reflection, and collaboration.";
        break;
      case 3:
        dialogText.innerHTML =
          "Across UX, 3D, sound, and video, these works form a shared ecology of digital media practice.";
        break;
      case 4:
        dialogText.innerHTML =
          "Fluid, diverse, and alive. </br></br>Look closely! What you see on the surface is only part of the story!";
        break;
      default:
        break;
    }
  }
}
//localStorage.clear();

setTimeout(changeFlavor, 60000);
function changeFlavor() {
  flavorText.innerHTML = "it's Digital Media Showcase of 2025!";
}
