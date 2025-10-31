const studentID = sessionStorage.getItem("studentID");
const projectID = sessionStorage.getItem("projectID");
console.log(studentID + projectID);

/*
const profileTest = document.querySelector("#test-profile");
//console.log(studentList[studentID].key_projects[projectID]);

profileTest.innerHTML = studentList[studentID].key_projects[projectID].title;
document.title = studentList[studentID].full_name;
*/

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
const website = document.querySelector("#website"); //Take href for this

// Assign data
youTube.src = studentList[studentID].key_projects[projectID].youtube_link;
projectImg.src =
  studentList[studentID].key_projects[projectID].project_cover_image;
projectTitle.innerHTML = studentList[studentID].key_projects[projectID].title;
//projectDescription.innerHTML = studentList[studentID].key_projects[projectID].

pfp.src = studentList[studentID].profile_pic;
fullName.innerHTML = studentList[studentID].full_name;
skillPrime.innerHTML = studentList[studentID].primary_specialization;
//skill secondary need a for-loop for 1-2 skills edge case
bio.innerHTML = studentList[studentID].bio;
website.href = studentList[studentID].website;

// For student works section, re-use "item" format function from mainscript.js
