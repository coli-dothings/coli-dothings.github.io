function checkWeather() {
  let myTemp = document.querySelector("#myTemp");
  let body = document.querySelector("body");
  let outer = document.querySelector(".outer");
  console.log("I am being clicked");
  let temp = myTemp.value;
  console.log(temp);
  if (temp < 10) {
    console.log("it is freezing");
    body.style.backgroundColor = "gray";
    outer.style.backgroundColor = "black";
  } else if (temp >= 10 && temp < 20) {
    console.log("nice and pleasant");
    body.style.backgroundColor = "blue";
    outer.style.backgroundColor = "yellow";
  } else if (temp >= 20 && temp < 35) {
    console.log("a bit hot innit");
    body.style.backgroundColor = "orange";
    outer.style.backgroundColor = "red";
  } else if (temp > 35) {
    console.log("literally burnin mate");
    body.style.backgroundColor = "red";
    outer.style.backgroundColor = "black";
  }
}
