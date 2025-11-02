const studentID = sessionStorage.getItem("studentID");
const projectID = sessionStorage.getItem("projectID");
console.log(studentID + " " + projectID);

// Get all HTML element
const youTube = document.querySelector("#youtube");
const projectImg = document.querySelector("#project-img");
const projectTitle = document.querySelector("#project-title");
const projectDescription = document.querySelector("#project-description");

const pfp = document.querySelector("#pfp");
const fullName = document.querySelector("#full-name");
const skillPrime = document.querySelector("#skill1");
const skillSecondary = document.querySelector("#skill2");
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
skillPrime.innerHTML = studentList[studentID].primary_specialization;
//skill secondary need a for-loop for 1-2 skills edge case
bio.innerHTML = studentList[studentID].bio;
website.href = studentList[studentID].website;

//============================================================================
// For student works section, re-use "item" format function from mainscript.js
let myContent = "";
for (let i = 0; i < studentList[studentID].key_projects.length; i++) {
  myContent += `
    <div class="item s${studentID} p${i}" id="item${i}">
     <img
        class="project-img"
        src="${studentList[studentID].key_projects[i].project_cover_image}"
        alt="project id ${i}"
      />
      <div class="name-plate"><p>${studentList[studentID].key_projects[i].title}</p></div>
    </div>
    `;
}

const myProject = document.querySelector(".scroll-container");
myProject.innerHTML += myContent;

// Function call project from project page, by setting new session data
const itemsArray = document.querySelectorAll(".item");
console.log("itemsArray length is " + itemsArray.length);

for (let i = 0; i < itemsArray.length; i++) {
  let myString = itemsArray[i].classList.toString();
  let studentIDnew = myString.charAt(6);
  let projectIDnew = myString.charAt(9);

  itemsArray[i].addEventListener("click", function () {
    sessionStorage.setItem("studentID", studentIDnew);
    sessionStorage.setItem("projectID", projectIDnew);

    window.location.href = "profileMock.html";
  });
}
