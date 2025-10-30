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
for (let i = 0; i < studentList.length; i++) {
  for (let ii = 0; ii < studentList[i].key_projects.length; ii++) {
    // Format content
    /*
    formattedContentArray.push(`
    <div class="item" id="item${itemID}">
     <img
        class="project-img"
        src="${studentList[i].key_projects[ii].project_cover_image}"
        alt="project id ${i}"
      />
      <div class="name-plate"><p>${studentList[i].full_name}</p></div>
    </div>
    `) ;
    itemID++;*/

    // create a switch case for each project to organize
    // "project_type": "sound/3D/UXUI/video/graphics",
    switch (studentList[i].key_projects[ii].project_type) {
      //Use [i] to get student's info
      //Use [ii] to get project's info
      case "3D":
        console.log(studentList[i].key_projects[ii].title + " is 3D type");
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
        console.log(studentList[i].key_projects[ii].title + " is uxui type");
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
        console.log(studentList[i].key_projects[ii].title + " is sound type");
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
        console.log(studentList[i].key_projects[ii].title + " is uxui type");
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
        console.log(studentList[i].key_projects[ii].title + " is graphic type");
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
// ADD THE SAME CLASS AS ABOVE, REUSE FORMAT CODE

const itemsArray = document.querySelectorAll(".item");
console.log("itemsArray length is " + itemsArray.length);

for (let i = 0; i < itemsArray.length; i++) {
  let myString = itemsArray[i].classList.toString();
  let studentID = myString.charAt(6);
  let projectID = myString.charAt(9);
  //console.log(studentID);

  itemsArray[i].addEventListener("click", function () {
    sessionStorage.setItem("studentID", studentID);
    sessionStorage.setItem("projectID", projectID);

    window.location.href = "profile.html";
  });
}
