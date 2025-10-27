//console.log("main script log: " + studentList[0].key_projects[0].title);
// testing for global value between files

// indexing through each student profile
for (let i = 0; i < studentList.length; i++) {
  for (let ii = 0; ii < studentList[i].key_projects.length; ii++) {
    // create a switch case for each project to organize
    // "project_type": "sound/3D/UXUI/video/graphics",
    console.log("student " + i + "'s project " + ii);

    switch (studentList[i].key_projects[ii].project_type) {
      //Use [i] to get student's info
      //Use [ii] to get project's info
      case "sound":
        console.log(
          studentList[i].full_name +
            "'s " +
            studentList[i].key_projects[ii].title +
            " is sound type"
        );
        break;

      case "graphics":
        console.log(
          studentList[i].key_projects[ii].title + " is graphics type"
        );
        break;

      case "3D":
        console.log(studentList[i].key_projects[ii].title + " is 3D type");
        break;

      case "UXUI":
        console.log(studentList[i].key_projects[ii].title + " is uxui type");
        break;

      case "video":
        console.log(studentList[i].key_projects[ii].title + " is uxui type");
        break;

      default:
        console.log("switch case RETURN");
        break;
    }
  }
}
