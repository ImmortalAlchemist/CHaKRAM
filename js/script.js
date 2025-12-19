const player = document.getElementById("PC");

//collision lines
const line1 = document.getElementById("line1");
// const line2 = document.getElementById("line2");
// const line3 = document.getElementById("line3");
// const line4 = document.getElementById("line4");
// const line5 = document.getElementById("line5");
// const line6 = document.getElementById("line6");
// const line7 = document.getElementById("line7");
// const line8 = document.getElementById("line8");

//player variables
let playersize = 32;
let line1OffsetX = 7;
let line1OffsetY = 3;

//svg canvas size
let maxX = 640;
let maxY = 320;
let maxPlaceableX = maxX - 32;
let maxPlaceableY = maxY - 32;

let enemies = [[177, 130]];

//game variabless
let score = 0;
let moves = 0;

let mouseX = null;
let mouseY = null;



//ON START
document.addEventListener("DOMContentLoaded", () => {

  //initialize variables
  //player size
  document.getElementById("PC").setAttribute("height", (playersize + "px"));
  document.getElementById("PC").setAttribute("width", (playersize + "px"));

  //set canvas size to screen size (not perfectly tho)
  maxX = window.innerWidth;
  maxY = window.innerHeight;
  maxPlaceableX = maxX - 32;
  maxPlaceableY = maxY - 32;


  //set play field size
  document.getElementById("trails").setAttribute("viewBox", "0 0 " + maxX + " " + maxY);
  

  //add enemies
  for (let i = 0; i < 9; i++)
  {
    //random position
    let enemX = Math.floor(Math.random() * (maxPlaceableX - 32)) + 32;
    let enemY = Math.floor(Math.random() * (maxPlaceableY - 32)) + 32;

    //push XY to enemy position array
    enemies.push([enemX, enemY]);

    //instantiating the enemy object
    const newEnem = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    newEnem.setAttribute("r", 16);
    newEnem.setAttribute("cx", enemX);
    newEnem.setAttribute("cy", enemY);
    newEnem.setAttribute("fill", "red");

    //placing the object in scene (the anchor object could be anything in the svg)
    const currentEnem = document.getElementById("enem9");
    currentEnem.insertAdjacentElement("afterend", newEnem);
    newEnem.setAttribute("id", "enem" + i);
  }

  //DEBUG, show enemy positions
  console.log(enemies);

  console.log("DOM Loaded");
})



//ON MOUSE MOVE
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

//ON CLICK
document.addEventListener("mousedown", movePlayer);

//ON MOVE, its own function cause we'll trigger this elsewhere
function movePlayer()
{
  //increase moves
  moves += 1;
  
  //on first move, hide title
  if (moves == 1)
  {
    document.getElementById("title").style.display = "none";
  }

  //DEBUG, show mouse position
  console.log('Mouse X: ' + mouseX + '\nMouse Y: ' + mouseY);

  //pre-movement X/Y
  let preX = parseInt(player.getAttribute("hspace"));
  let preY = parseInt(player.getAttribute("vspace"));
  //post-movement X/Y
  let newX = mouseX - (playersize - 8);
  let newY = mouseY - (playersize - 8);

  //move player
  player.setAttribute("hspace", newX)
  player.setAttribute("vspace", newY)

  //display collision line
  line1.setAttribute("x1", preX + 16);
  line1.setAttribute("y1", preY + 16);
  line1.setAttribute("x2", newX + 16 + line1OffsetX);
  line1.setAttribute("y2", newY + 16 + line1OffsetY);

  //collisions
  let collisions = checkCollisions(preX, preY, newX, newY);
  console.log("collisions: " + collisions);
  score += collisions;

  if (score >= 10)
  {
    //win game
    sessionStorage.setItem("moves", moves);
    window.location.href = "win_screen.html";
  }
  else 
  {
    document.getElementsByTagName("body")[0].setAttribute("background", "images/score_" + score +".png");
  }
}





function checkCollisions(preX, preY, newX, newY)
{
  let coll = 0;

  enemies.forEach(enem => {
    if (doesLineInterceptCircle([preX+16, preY+16], [newX+16, newY+16], enem, 16)) {
      coll += 1;
      //document.querySelector("circle [cx='" + CSS.escape(enem[0]) + "']").style.display = "none";
      //console.log(document.querySelector("circle [cx='" + CSS.escape(enem[0]) + "']"));
      // console.log(enemies[enemies.indexOf(enem)]);
      // console.log(document.getElementById("enem" + enemies.indexOf(enem)));

      enem = [-3200, -3200];
    }
  });
  
  return coll;
}


//from: https://codereview.stackexchange.com/a/192500

// Function to check intercept of line seg and circle
    // A,B end points of line segment
    // C center of circle
    // radius of circle
    // returns true if touching or crossing else false   
    function doesLineInterceptCircle(A, B, C, radius) {
        var dist;
        const v1x = B[0] - A[0];
        const v1y = B[1] - A[1];
        const v2x = C[0] - A[0];
        const v2y = C[1] - A[1];
        // get the unit distance along the line of the closest point to
        // circle center
        const u = (v2x * v1x + v2y * v1y) / (v1y * v1y + v1x * v1x);
        
        
        // if the point is on the line segment get the distance squared
        // from that point to the circle center
        if(u >= 0 && u <= 1){
            dist  = (A[0] + v1x * u - C[0]) ** 2 + (A[1] + v1y * u - C[1]) ** 2;
        } else {
            // if closest point not on the line segment
            // use the unit distance to determine which end is closest
            // and get dist square to circle
            dist = u < 0 ?
                  (A[0] - C[0]) ** 2 + (A[1] - C[1]) ** 2 :
                  (B[0] - C[0]) ** 2 + (B[1] - C[1]) ** 2;
        }
        return dist < radius * radius;
     }