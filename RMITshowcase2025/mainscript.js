// Creating content for item
let contentThreeD = "";
let contentUXUI = "";
let contentSound = "";
let contentVideo = "";
let contentGraphics = "";

// All content formatted
//let formattedContentArray = [];
let itemID = 0;

// indexing through each student profile
/*
for (let i = 0; i < studentList.length; i++) {
  for (let ii = 0; ii < studentList[i].key_projects.length; ii++) {
    // "project_type": "sound/3D/UXUI/video/graphics",
    switch (studentList[i].key_projects[ii].project_type) {
      //Use [i] to get student's info
      //Use [ii] to get project's info
      case "3D":
        contentThreeD += `
    <div class="item s${i} p${ii}" id="item${itemID}">
     <img
        class="project-img"
        src="${studentList[i].key_projects[ii].project_cover_image}"
        alt="project id ${i}"
      />
      <div class="name-plate"><p>${studentList[i].key_projects[ii].title}</p></div>
    </div>
    `;
        itemID++;
        break;

      case "UXUI":
        contentUXUI += `
    <div class="item s${i} p${ii}" id="item${itemID}">
     <img
        class="project-img"
        src="${studentList[i].key_projects[ii].project_cover_image}"
        alt="project id ${i}"
      />
      <div class="name-plate"><p>${studentList[i].key_projects[ii].title}</p></div>
    </div>
    `;
        itemID++;
        break;

      case "sound":
        contentSound += `
    <div class="item s${i} p${ii}" id="item${itemID}">
     <img
        class="project-img"
        src="${studentList[i].key_projects[ii].project_cover_image}"
        alt="project id ${i}"
      />
      <div class="name-plate"><p>${studentList[i].key_projects[ii].title}</p></div>
    </div>
    `;
        itemID++;
        break;

      case "video":
        contentVideo += `
    <div class="item s${i} p${ii}" id="item${itemID}">
     <img
        class="project-img"
        src="${studentList[i].key_projects[ii].project_cover_image}"
        alt="project id ${i}"
      />
      <div class="name-plate"><p>${studentList[i].key_projects[ii].title}</p></div>
    </div>
    `;
        itemID++;
        break;

      case "graphics":
        contentGraphics += `
    <div class="item s${i} p${ii}" id="item${itemID}">
     <img
        class="project-img"
        src="${studentList[i].key_projects[ii].project_cover_image}"
        alt="project id ${i}"
      />
      <div class="name-plate"><p>${studentList[i].key_projects[ii].title}</p></div>
    </div>
    `;
        itemID++;
        break;

      default:
        console.log("switch case BREAK");
        break;
    }
  }
}
*/
let uxuicount = 0;
let vidcount = 0;
let soundcount = 0;
for (let i = 0; i < studentList.length; i++) {
  switch (studentList[i].key_projects[0].project_type) {
    //Use [i] to get student's info
    //Use [0] to get project's info
    case "3D":
      contentThreeD += `
    <div class="item s${i} p${0}" id="item${itemID}">
     <img
        class="project-img"
        src="${studentList[i].key_projects[0].project_cover_image}"
        alt="project id ${i}"
      />
      <div class="name-plate"><p>${
        studentList[i].key_projects[0].title
      }</p></div>
    </div>
    `;
      itemID++;
      break;

    case "UXUI":
      contentUXUI += `
    <div class="item s${i} p${0}" id="item${itemID}">
     <img
        class="project-img"
        src="${studentList[i].key_projects[0].project_cover_image}"
        alt="project id ${i}"
      />
      <div class="name-plate"><p>${
        studentList[i].key_projects[0].title
      }</p></div>
    </div>
    `;
      itemID++;
      uxuicount++;
      break;

    case "sound":
      contentSound += `
    <div class="item s${i} p${0}" id="item${itemID}">
     <img
        class="project-img"
        src="${studentList[i].key_projects[0].project_cover_image}"
        alt="project id ${i}"
      />
      <div class="name-plate"><p>${
        studentList[i].key_projects[0].title
      }</p></div>
    </div>
    `;
      itemID++;
      soundcount++;
      break;

    case "video":
      contentVideo += `
    <div class="item s${i} p${0}" id="item${itemID}">
     <img
        class="project-img"
        src="${studentList[i].key_projects[0].project_cover_image}"
        alt="project id ${i}"
      />
      <div class="name-plate"><p>${
        studentList[i].key_projects[0].title
      }</p></div>
    </div>
    `;
      itemID++;
      vidcount++;
      break;

    case "graphics":
      contentGraphics += `
    <div class="item s${i} p${0}" id="item${itemID}">
     <img
        class="project-img"
        src="${studentList[i].key_projects[0].project_cover_image}"
        alt="project id ${i}"
      />
      <div class="name-plate"><p>${
        studentList[i].key_projects[0].title
      }</p></div>
    </div>
    `;
      itemID++;
      break;

    default:
      console.log("switch case BREAK");
      break;
  }
}

console.log("u" + uxuicount + " v" + vidcount + " s" + soundcount);
//const testDisplay = document.querySelector("#test-scroll");

const threeDDisplay = document.querySelector("#three-d-scroll");
const uxuiDisplay = document.querySelector("#uxui-scroll");
const soundDisplay = document.querySelector("#sound-scroll");
const videoDisplay = document.querySelector("#video-scroll");
const graphicsDisplay = document.querySelector("#graphics-scroll");

threeDDisplay.innerHTML += contentThreeD;
uxuiDisplay.innerHTML += contentUXUI;
soundDisplay.innerHTML += contentSound;
videoDisplay.innerHTML += contentVideo;
graphicsDisplay.innerHTML += contentGraphics;

//================================================================================
// Data transfer

const itemsArray = document.querySelectorAll(".item");
console.log("itemsArray length is " + itemsArray.length);

for (let i = 0; i < itemsArray.length; i++) {
  let myString = itemsArray[i].classList.toString();
  let studentIDnew;
  let projectIDnew;
  if (myString.length > 10) {
    studentIDnew = myString.charAt(6) + "" + myString.charAt(7);
    projectIDnew = myString.charAt(10);
  } else {
    studentIDnew = myString.charAt(6);
    projectIDnew = myString.charAt(9);
  }

  itemsArray[i].addEventListener("click", function () {
    sessionStorage.setItem("studentID", studentIDnew);
    sessionStorage.setItem("projectID", projectIDnew);

    window.location.href = "profileMock.html";
  });
}

//================================================================================
// Decoration
// play fish anim every 1.5 min
const fish = document.querySelector("#fish");

setInterval(fishAnim, 90000);
function fishAnim() {
  fish.classList.remove("fishAnim");
  fish.offsetHeight;
  fish.classList.add("fishAnim");
}
