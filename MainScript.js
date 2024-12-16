// with this Game you control a blob character where the objective is
// to eat the small blobs on the screen, trying to achieve the highest
// score you can. while doing so you are also going to be dodging black pellets
// that are shot from 4 different sides of the screen. making it difficult.
// controls for the game are the WASD keys
// The live server extension is required to run this program if using VS Code

import Player from "./Player.js"
import Objectives from "./objectives.js"
import Cannonmanager from "./CannonManager.js"

const ctx = canvas.getContext("2d");
const Restartbutton  = document.getElementById("restart");

const upbutton  = document.getElementById("up");
const downbutton  = document.getElementById("down");
const leftbutton  = document.getElementById("left");
const rightbutton  = document.getElementById("right");

const playerClass = new Player();
const objectiveClass = new Objectives();
const cannonmanagerClass = new Cannonmanager();

objectiveClass.createblobs();

function frame(){
    if (playerClass.alive){
        playerClass.update(ctx); // updates the players position
        ctx.clearRect(0,0,canvas.width,canvas.height);
        objectiveClass.check(playerClass); // checks if the player has consumed any of the blobs
        objectiveClass.drawblobs(ctx); // draws all blobs on to the canvas
        
        cannonmanagerClass.shoot(playerClass); // creates a bullet to shoot from the 4 cannons
        cannonmanagerClass.move(ctx); // moves all bullets
        cannonmanagerClass.drawbullets(ctx); // draws all bullets to the canvas
        cannonmanagerClass.draw(ctx); // draws all cannons to the canas
        cannonmanagerClass.checkplayerstatus(playerClass); // checks if any bullets has hit the player

        playerClass.draw(ctx);
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


leftbutton.addEventListener("mousedown", () => {
    playerClass.left = true
});

leftbutton.addEventListener("mouseup", () => {
    playerClass.left = false;

});

rightbutton.addEventListener("mousedown", () => {
    playerClass.right = true
});

rightbutton.addEventListener("mouseup", () => {
    playerClass.right = false;

});

upbutton.addEventListener("mousedown", () => {
    playerClass.up = true
});

upbutton.addEventListener("mouseup", () => {
    playerClass.up = false;

});

downbutton.addEventListener("mousedown", () => {
    playerClass.down = true
});

downbutton.addEventListener("mouseup", () => {
    playerClass.down = false;
});

requestAnimationFrame(frame)