let redDiv = document.getElementById("red");
let greenDiv = document.getElementById("green");
let yellowDiv = document.getElementById("yellow");

const changeLight = () => {
  redDiv.style.backgroundColor = "red";
  yellowDiv.style.backgroundColor = "white";
  greenDiv.style.backgroundColor = "white";
  setTimeout(() => {
    redDiv.style.backgroundColor = "white";
    yellowDiv.style.backgroundColor = "white";
    greenDiv.style.backgroundColor = "green";
    setTimeout(() => {
      redDiv.style.backgroundColor = "white";
      yellowDiv.style.backgroundColor = "yellow";
      greenDiv.style.backgroundColor = "white";
      setTimeout(() => {
        changeLight();
      }, 500);
    }, 3000);
  }, 4000);
};
changeLight();

