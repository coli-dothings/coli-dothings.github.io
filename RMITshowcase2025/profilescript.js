const profileNum = sessionStorage.getItem("profileNum");
const profileTest = document.querySelector("#test-profile");

profileTest.innerHTML = "Profile Num " + profileNum;
document.title = "Student " + profileNum;
