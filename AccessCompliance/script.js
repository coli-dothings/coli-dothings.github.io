const NavButton = document.querySelector("#nav-btn");
const sideDrawer = document.querySelector("nav");
console.log(sideDrawer);
let isOpen = false;
NavButton.addEventListener("click", openDrawer);

function openDrawer() {
  console.log("i am clicked");
  if (!isOpen) {
    sideDrawer.style.translate = "-200px";
    isOpen = true;
    console.log(isOpen);
  } else {
    sideDrawer.style.translate = "0px";
    isOpen = false;
    console.log(isOpen);
  }
}

const my3DVideo = document.querySelector("#model-video");
my3DVideo.playbackRate = 0.25;
