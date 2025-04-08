let a = 10;
let b = 20;

function add(a, b) {
  let c = a + b;
  //console.log(c);
  return c;
}
// add is function name. a, b is the parameter must be called

let total = add(2, 4);
//console.log(total);

/*===============================================================
DOM practice
=================================================================*/

const myButton = document.querySelector("#mybutton");
myButton.addEventListener("click", handleClick);
const myCat = document.querySelector("catpng");

function handleClick() {
  console.log("Clicked");
  myCat.classList.toggle("round"); //error command fix this idk
}

const topHeading = document.querySelector("h1");
console.log(topHeading.textContent);
topHeading.textContent = "New heading from JS";
topHeading.style.color = "red";

const header = document.querySelector("header");
console.log(header.textContent);
console.log(header.innerHTML);
let course = "OART10113";
header.innerHTML += `<h1>My course is ${course} </h1>`;
// += mean to add onto the text below

const allParas = document.querySelectorAll("p");
//console.log(allParas);
for (let i = 0; i < allParas.length; i++) {
  //console.log(allParas[i].textContent);
  allParas[i].style.border = "1px solid blue";
  allParas[i].style.backgroundColor = "beige";
}

const mySubHeading = document.querySelector("#first-subheading");
console.log(mySubHeading);
console.log(mySubHeading.textContent);

const allSubHeadings = document.querySelectorAll("h2");
console.log(allSubHeadings);
for (let i = 0; i < allSubHeadings.length; i++) {
  console.log(allSubHeadings[i].textContent);
}
