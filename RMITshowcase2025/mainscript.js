// Creating content for item
let contentThreeD = "";
let contentUXUI = "";
let contentSound = "";
let contentVideo = "";
let contentGraphics = "";

// General content test
let formattedContentAll = "";

// indexing through each student profile
for (let i = 0; i < studentList.length; i++) {
  for (let ii = 0; ii < studentList[i].key_projects.length; ii++) {
    // Format content
    /*formattedContentAll += `
    <div class="item" id="item${i}">
     <img
        class="project-img"
        src="${studentList[i].key_projects[ii].project_cover_image}"
        alt="project id ${i}"
      />
      <div class="name-plate"><p>${studentList[i].full_name}</p></div>
    </div>
    `;*/

    // create a switch case for each project to organize
    // "project_type": "sound/3D/UXUI/video/graphics",
    switch (studentList[i].key_projects[ii].project_type) {
      //Use [i] to get student's info
      //Use [ii] to get project's info
      case "3D":
        console.log(studentList[i].key_projects[ii].title + " is 3D type");
        contentThreeD += `
    <div class="item" id="item${i}">
     <img
        class="project-img"
        src="${studentList[i].key_projects[ii].project_cover_image}"
        alt="project id ${i}"
      />
      <div class="name-plate"><p>${studentList[i].key_projects[ii].title}</p></div>
    </div>
    `;
        break;

      case "UXUI":
        console.log(studentList[i].key_projects[ii].title + " is uxui type");
        contentUXUI += `
    <div class="item" id="item${i}">
     <img
        class="project-img"
        src="${studentList[i].key_projects[ii].project_cover_image}"
        alt="project id ${i}"
      />
      <div class="name-plate"><p>${studentList[i].key_projects[ii].title}</p></div>
    </div>
    `;
        break;

      case "sound":
        console.log(studentList[i].key_projects[ii].title + " is sound type");
        contentSound += `
    <div class="item" id="item${i}">
     <img
        class="project-img"
        src="${studentList[i].key_projects[ii].project_cover_image}"
        alt="project id ${i}"
      />
      <div class="name-plate"><p>${studentList[i].key_projects[ii].title}</p></div>
    </div>
    `;
        break;

      case "video":
        console.log(studentList[i].key_projects[ii].title + " is uxui type");
        contentVideo += `
    <div class="item" id="item${i}">
     <img
        class="project-img"
        src="${studentList[i].key_projects[ii].project_cover_image}"
        alt="project id ${i}"
      />
      <div class="name-plate"><p>${studentList[i].key_projects[ii].title}</p></div>
    </div>
    `;
        break;

      case "graphics":
        console.log(studentList[i].key_projects[ii].title + " is graphic type");
        contentGraphics += `
    <div class="item" id="item${i}">
     <img
        class="project-img"
        src="${studentList[i].key_projects[ii].project_cover_image}"
        alt="project id ${i}"
      />
      <div class="name-plate"><p>${studentList[i].key_projects[ii].title}</p></div>
    </div>
    `;
        break;

      default:
        console.log("switch case BREAK");
        break;
    }
  }
}
/*const testDisplay = document.querySelector("#scroll-test");
testDisplay.innerHTML += formattedContentAll;*/

const threeDDisplay = document.querySelector("#three-d-scroll");
threeDDisplay.innerHTML += contentThreeD;

const uxuiDisplay = document.querySelector("#uxui-scroll");
uxuiDisplay.innerHTML += contentUXUI;

const soundDisplay = document.querySelector("#sound-scroll");
soundDisplay.innerHTML += contentSound;

const videoDisplay = document.querySelector("#video-scroll");
videoDisplay.innerHTML += contentVideo;

const graphicsDisplay = document.querySelector("#graphics-scroll");
graphicsDisplay.innerHTML += contentGraphics;
// Move the switch case content here
