const studentID = sessionStorage.getItem("studentID");
const projectID = sessionStorage.getItem("projectID");

const profileTest = document.querySelector("#test-profile");
//console.log(studentList[studentID].key_projects[projectID]);

profileTest.innerHTML = studentList[studentID].key_projects[projectID].title;
document.title = studentList[studentID].full_name;
