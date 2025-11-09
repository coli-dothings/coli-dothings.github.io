// Get box in grid, put an item per box
const boxGrid = document.querySelectorAll(".box");
console.log(boxGrid.length);

for (let i = 0; i < boxGrid.length; i++) {
  switch (studentList[i].key_projects[0].project_type) {
    case "3D":
      boxGrid[i].innerHTML = formatted(i);
      boxGrid[i].classList.add("box-3d");
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
      break;
    case "graphics":
      boxGrid[i].innerHTML = formatted(i);
      boxGrid[i].classList.add("box-graphics");
      break;
    default:
      console.log("case break");
      break;
  }
  //   if (i > 8) {
  //     boxGrid[i].querySelector(".project-img").loading = "lazy";
  //   }
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
    sessionStorage.setItem("studentID", studentID);
    sessionStorage.setItem("projectID", projectID);
    window.location.href = "profileMock.html";
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
