// DATA JS. Compile JSON data of each student here, and linked in both HTML pages for global scope
// remember to add student ID back into the list, as well as links

const jsonList = [
  `{
  "full_name": "Mai Anh Vo",
  "profile_pic": "profile/profile.webp",
  "primary_specialization": "Illustrations",
  "secondary_skills": ["Sound Design", "Web Design"],
  "bio": "mock bio 1",
  "graduation_year": "2025",
  "website": "https://www.instagram.com/coli_artsnstuffs/",

  "key_projects": [
    {
      "title": "Crow and Raven exploration",
      "project_type": "graphics",
      "project_cover_image": "projects/project1.webp",
      "youtube_link": ""
    },
    {
      "title": "KAMIGOROSHI re-sound deisgn",
      "project_type": "sound",
      "project_cover_image": "projects/project2.webp",
      "youtube_link": "https://youtu.be/tjJ8NZKgpX4"
    },
    {
      "title": "WARA WAR@",
      "project_type": "UXUI",
      "project_cover_image": "projects/project3.webp",
      "youtube_link": "https://youtu.be/avoY90IKX7I?si=U_BqG70pw39fBcoO"
    }
  ]
}`,
  `{
  "full_name": "student 2",
  "profile_pic": "profile/profile.webp",
  "primary_specialization": "specialization 1",
  "secondary_skills": ["skill 1", "skill 2"],
  "bio": "mock bio 2",
  "graduation_year": "2026",
  "website": "https://www.instagram.com/coli_artsnstuffs/",

  "key_projects": [
    {
      "title": "Long title of project 1",
      "project_type": "3D",
      "project_cover_image": "projects/project1.webp",
      "youtube_link": ""
    },
    {
      "title": "Long title of project 2",
      "project_type": "video",
      "project_cover_image": "projects/project2.webp",
      "youtube_link": "https://youtu.be/amTsBProNo4?si=X8NgW_cXcQG99n2g"
    },
    {
      "title": "Long title of jazz piano 3",
      "project_type": "sound",
      "project_cover_image": "projects/project3.webp",
      "youtube_link": "https://youtu.be/NCKmnppmkfg?si=IB5eTHLsKKz2hN1Z"
    }
  ]
}`,
];

var studentList = [];
for (let i = 0; i < jsonList.length; i++) {
  studentList[i] = JSON.parse(jsonList[i]);
}

console.log("json list length is " + jsonList.length);
