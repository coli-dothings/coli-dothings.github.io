const video1 = document.querySelector("#vid1");

video1.addEventListener("click", playIcon);

function playIcon() {
  /* figure out a way to store every sources */
  video1.src = "Day4.mp4";
  video1.loop = false;
  console.log("clicked");
}
video1.addEventListener("ended", revertPlay);
function revertPlay() {
  video1.src = "Day2.mp4";
  video1.loop = true;
}

/*This means all animation must stored in sets of 2. For ease of recall */
