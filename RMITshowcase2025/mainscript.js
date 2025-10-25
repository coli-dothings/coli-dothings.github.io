console.log("main script log: " + studentList[0].key_projects[0].title);
// testing for global value between files

// indexing through each student profile
for (let i = 0; i < studentList.length; i++) {
  // search through each project
  console.log("student no " + i);
  for (let ii = 0; i < studentList[i].key_projects.length; ii++) {
    // create a switch case for each project to organize
    console.log("student " + i + "'s project " + ii);
    /*
    switch (studentList[i].key_projects[ii].project_type) {
      case "sound":
        console.log(studentList[i].key_projects[ii].title + " is sound type");
        break;

      default:
        console.log("NS");
        break;
    }*/
  }
}
