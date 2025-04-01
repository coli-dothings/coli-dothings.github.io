console.log("Hello");
console.log("How are you lil man");
//this is a comment
//second one too

//const var cant be changed, let can be change
let myName = "Mai Anh";
console.log("Hello", myName);
myName = "Sarah";
console.log("Hello", myName);
//Update line by line
let no = "s12345";
console.log("Hello", no);
//let myCity = prompt("Where do you live?");
//console.log("I live in", myCity);
//prompt update every line

console.log("End of demo 1");
//comand block, code exist within only curly

//number var
let e = 3;
let k = "100b";
let a = parseInt(k);
let j = e + a;
console.log(j);

//string var
let myNick = "Coli";
const myNameID = "Mai Anh";
const msg = `this is
muli line msg ${myNameID}
<h1> also theres headline</h1>`;
console.log(msg);

//boolean var
let isThisTrue = true;
//objects
const myStudentRecord = {
  name: "Sam",
  id: 1234,
  course: "DESIGN",
  isLocal: false,
};
console.log(myStudentRecord.course);

//array
let sNames = ["John", "French", "no2", "Alice"];
console.log(sNames[3]);
for (let i = 0; i < sNames.length; i++) {
  console.log("HELLO", sNames[i]);
}

//if statement
let grade = 70;
if (grade > 70) {
  console.log("You got HD");
} else {
  console.log("You passed the course");
}

let weather = "rainy";
if (weather === "sunny") {
  console.log("sun day!");
} else {
  console.log("no sun day");
}

/* 
== equal value
=== equal value AND type
a = 10, b = "10"
a == b TRUE
a === b FALSE
*/
