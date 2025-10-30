// DATA JS. Compile JSON data of each student here, and linked in both HTML pages for global scope
// remember to add student ID back into the list, as well as links

const jsonList = [
  `{
  "ID":"s4021256",
  "full_name": "Mai Anh Vo",
  "profile_pic": "profile/profile.webp",
  "primary_specialization": "Illustrations",
  "secondary_skills": ["Sound Design", "Web Design"],
  "bio": "mock bio 1 by Mai Anh Vo",
  "graduation_year": "2025",
  "website": "https://www.instagram.com/coli_artsnstuffs/",

  "key_projects": [
    {
      "title": "Crow and Raven exploration",
      "project_type": "graphics",
      "project_cover_image": "s4021256/projects/project1.webp",
      "youtube_link": ""
    },
    {
      "title": "KAMIGOROSHI re-sound deisgn",
      "project_type": "sound",
      "project_cover_image": "s4021256/projects/project2.webp",
      "youtube_link": "https://www.youtube.com/embed/tjJ8NZKgpX4"
    },
    {
      "title": "WARA WAR@",
      "project_type": "UXUI",
      "project_cover_image": "s4021256/projects/project3.webp",
      "youtube_link": "https://www.youtube.com/embed/avoY90IKX7I?si=U_BqG70pw39fBcoO"
    }
  ]
}`,
  `{
  "ID":"s1234567",
  "full_name": "student 2",
  "profile_pic": "profile/profile.jpg",
  "primary_specialization": "specialization 1",
  "secondary_skills": ["skill 1", "skill 2"],
  "bio": "mock bio 2 by student 2",
  "graduation_year": "2026",
  "website": "https://www.w3schools.com/howto/howto_js_add_class.asp",

  "key_projects": [
    {
      "title": "Long title of project 1",
      "project_type": "3D",
      "project_cover_image": "s1234567/projects/project1.jpg",
      "youtube_link": ""
    },
    {
      "title": "Long title of project 2",
      "project_type": "video",
      "project_cover_image": "s1234567/projects/project2.jpg",
      "youtube_link": "https://www.youtube.com/embed/amTsBProNo4?si=X8NgW_cXcQG99n2g"
    },
    {
      "title": "Long title of jazz piano 3",
      "project_type": "sound",
      "project_cover_image": "s1234567/projects/project3.jpg",
      "youtube_link": "https://www.youtube.com/embed/NCKmnppmkfg?si=IB5eTHLsKKz2hN1Z"
    }
  ]
}`,
];

var studentList = [];
for (let i = 0; i < jsonList.length; i++) {
  studentList[i] = JSON.parse(jsonList[i]);
}

console.log("json list length is " + jsonList.length);

//======================================================================
// Profile update page

// Test html page transfer
/*
const itemsArray = document.querySelectorAll(".item");

// Add click event to transfer to page
for (let i = 0; i < itemsArray.length; i++) {
  itemsArray[i].addEventListener("click", function displayProfile() {
    chooseProfile(i);
  });
}

function chooseProfile(i) {
  sessionStorage.setItem("profileNum", i);
  window.location.href = "profile.html";
}
*/
