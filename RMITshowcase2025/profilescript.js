const studentID = sessionStorage.getItem("studentID");
const projectID = sessionStorage.getItem("projectID");
console.log("profile page " + studentID + " " + projectID);
// Set heading to student name
document.title = studentList[studentID].full_name;
// Get all HTML element
const youTube = document.querySelector("#youtube");
const projectImg = document.querySelector("#project-img");
const projectTitle = document.querySelector("#project-title");
const projectDescription = document.querySelector("#project-description");

const pfp = document.querySelector("#pfp");
const fullName = document.querySelector("#full-name");
const skillPrime = document.querySelector("#primary");
const skillSecondary = document.querySelector("#secondary");
const bio = document.querySelector("#bio");
const website = document.querySelector("#website");

// Assign data
const profileData = studentList[studentID].key_projects[projectID];

// Check whether youtube link is empty/null
if (!profileData.youtube_link) {
  youTube.remove();
  console.log("removed youtube div");
} else {
  youTube.src = profileData.youtube_link;
}

projectImg.src = profileData.project_cover_image;
projectTitle.innerHTML = profileData.title;

pfp.src = studentList[studentID].profile_pic;
fullName.innerHTML = studentList[studentID].full_name;
skillPrime.innerHTML = studentList[studentID].primary_specialization;
for (let i = 0; i < studentList[studentID].secondary_skills.length; i++) {
  skillSecondary.innerHTML += `<p class="skill" id="secondary${i}">${studentList[studentID].secondary_skills[i]}</p>`;
}
bio.innerHTML = studentList[studentID].bio;
if (!studentList[studentID].website) {
  website.remove();
  console.log("removed website");
} else {
  website.href = studentList[studentID].website;
}

//=====================================================
// Read more on description
const readMore = document.querySelector("#read-more-toggle");
const split = 30;
if (!profileData.project_description) {
  projectDescription.innerHTML = "no description";
  projectDescription.classList.add("na");
  console.log("no description");
  readMore.remove();
} else {
  insertSpan();
  readMore.addEventListener("click", readMoreToggle);
}
function insertSpan() {
  if (profileData.project_description.length < split) {
    readMore.remove();
  } else {
    let fullText = profileData.project_description;
    let firstPart = fullText.substring(0, split);
    let secondPart = fullText.substring(split);
    projectDescription.innerHTML = `${firstPart}<span id="dots">...</span><span id="more">${secondPart}</span>`;
    var dots = document.querySelector("#dots");
  }
}

function readMoreToggle() {
  var moreText = document.querySelector("#more");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    readMore.innerHTML = "more";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    readMore.innerHTML = "Show less";
  }
}

//============================================================================
// Get works container, formatt project item then input html
const worksContainer = document.querySelector("#works-container");
for (let i = 0; i < studentList[studentID].key_projects.length; i++) {
  worksContainer.innerHTML += formatted(i);
}
function formatted(index) {
  let i = index;
  return `
    <div class="item s${studentID} p${i}" id="item${i}">
    <div class="img-container">
     <img
        class="project-img"
        src="${studentList[studentID].key_projects[i].project_cover_image}"
        alt="project id ${i}"
      />
      </div>
      <div class="name-plate"><p>${studentList[studentID].key_projects[i].title}</p></div>
    </div>
    `;
}

// Function call project from project page, by setting new session data
const itemsArray = document.querySelectorAll(".item");

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

//flower
const flower = document.querySelector(".flower");
flower.addEventListener("click", function () {
  var splash = new Audio("splash.mp3");
  splash.play();
});
