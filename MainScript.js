// with this Game you control a blob character where the objective is
// to eat the small blobs on the screen, trying to achieve the highest
// score you can. while doing so you are also going to be dodging black pellets
// that are shot from 4 different sides of the screen. making it difficult.
// controls for the game are the WASD keys
// The live server extension is required to run this program if using VS Code

import Player from "./Player.js"
import Objectives from "./objectives.js"
import Cannonmanager from "./CannonManager.js"
import grid from "./grid.js"
import inventory from "./inventory.js"
import key from "./key.js"

const ctx = canvas.getContext("2d");
const Restartbutton  = document.getElementById("restart");

const upbutton  = document.getElementById("up");
const downbutton  = document.getElementById("down");
const leftbutton  = document.getElementById("left");
const rightbutton  = document.getElementById("right");

const playerClass = new Player();
const objectiveClass = new Objectives();
const cannonmanagerClass = new Cannonmanager();
const gridclass = new grid();
const inventoryclass = new inventory();
const keyclass = new key(300,250);



objectiveClass.createblobs();

function frame(){
    if (playerClass.alive){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        
        playerClass.update(ctx); // updates the players position
        gridclass.drawgrid(ctx);
        keyclass.draw(ctx);       
        ctx.font = "40px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("commit 12", 0, 50);
        playerClass.draw(ctx);
        inventoryclass.draw(ctx);
    }
    if (!playerClass.alive){

        //  if the player is dead, this part of the code is ran instead of the above
        
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.font = "30px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("You Died", 340, 400);
        ctx.fillText("Click Restart Game", 270, 450);
    }
    requestAnimationFrame(frame)

}
    
window.addEventListener("keydown", function (event)
{
    if (event.key == "w"){
        playerClass.up = true
    }
    if (event.key == "a"){
        playerClass.left = true
    }
    if (event.key == "s"){
        playerClass.down = true
    }
    if (event.key == "d"){
        playerClass.right= true
    }
})

window.addEventListener("keyup", function (event)
{
    if (event.key == "w"){
        playerClass.up = false
    }
    if (event.key == "a"){
        playerClass.left = false
    }
    if (event.key == "s"){
        playerClass.down = false
    }
    if (event.key == "d"){
        playerClass.right = false
    }
})

Restartbutton.addEventListener("click", () => {
    console.log("restart")
    cannonmanagerClass.Restart();
    playerClass.restart();
    objectiveClass.restart()
});


leftbutton.addEventListener("touchstart", (event) => {
    event.preventDefault(); // Prevent scrolling

    playerClass.left = true
});

leftbutton.addEventListener("touchend", (event) => {
    event.preventDefault(); // Prevent scrolling

    playerClass.left = false;

});

rightbutton.addEventListener("touchstart", (event) => {
    event.preventDefault(); // Prevent scrolling

    playerClass.right = true
});

rightbutton.addEventListener("touchend", (event) => {
    event.preventDefault(); // Prevent scrolling

    playerClass.right = false;

});

upbutton.addEventListener("touchstart", (event) => {
    event.preventDefault(); // Prevent scrolling

    playerClass.up = true
});

upbutton.addEventListener("touchend", (event) => {
    event.preventDefault(); // Prevent scrolling

    playerClass.up = false;

});

downbutton.addEventListener("touchstart", (event) => {
    event.preventDefault(); // Prevent scrolling

    playerClass.down = true
});

downbutton.addEventListener("touchend", (event) => {
    event.preventDefault(); // Prevent scrolling

    playerClass.down = false;
});

requestAnimationFrame(frame)