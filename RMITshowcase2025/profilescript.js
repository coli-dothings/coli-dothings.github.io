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
// const skillPrime = document.querySelector("#skill1");
// const skillSecondary = document.querySelector("#skill2");
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
//projectDescription.innerHTML = profileData.project_description
//Need to add this in data.js and profile.html

pfp.src = studentList[studentID].profile_pic;
fullName.innerHTML = studentList[studentID].full_name;
// skillPrime.innerHTML = studentList[studentID].primary_specialization;
//skill secondary need a for-loop for 1-2 skills edge case
bio.innerHTML = studentList[studentID].bio;
website.href = studentList[studentID].website;

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
