const moveScore = document.getElementById("score");

let score = 0;
let overflow = 0; //create if you want to display something in background

document.addEventListener("DOMContentLoaded", () => {
  //variables
  score = sessionStorage.getItem("moves");

  //score
  moveScore.textContent = "In " + score + " moves!";
  sessionStorage.clear();

  console.log("Win DOM Loaded");
})