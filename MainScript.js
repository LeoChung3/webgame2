// with this Game you control a blob character where the objective is
// to eat the small blobs on the screen, trying to achieve the highest
// score you can. while doing so you are also going to be dodging black pellets
// that are shot from 4 different sides of the screen. making it difficult.
// controls for the game are the WASD keys
// The live server extension is required to run this program if using VS Code

import Player from "./Player.js"
import grid from "./grid.js"
import inventory from "./inventory.js"
import key from "./key.js"
import chestobjective from "./chestobjective.js";
import heartobjective from "./heartobjective.js";

import shovel from "./shovel.js";
import cave from "./cave.js";

const ctx = canvas.getContext("2d");
const Restartbutton  = document.getElementById("restart");

const upbutton  = document.getElementById("up");
const downbutton  = document.getElementById("down");
const leftbutton  = document.getElementById("left");
const rightbutton  = document.getElementById("right");
const usebutton = document.getElementById("use");
const leftchoice = document.getElementById("leftchoice");
const rightchoice = document.getElementById("rightchoice");

const playerClass = new Player();
const gridclass = new grid();
const inventoryclass = new inventory();
const keyclass = new key(300,250);
const chest = new chestobjective(700, 400);
const heartobj = new heartobjective(380, 100)
const shovelclass = new shovel(50, 50)
const caveclass = new cave(100, 500)
function frame(){
    if (playerClass.alive){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        


        playerClass.update(ctx); // updates the players position
        
        
        
        
        gridclass.drawgrid(ctx);

        // ctx.font = "40px Arial";
        // ctx.fillStyle = "red";
        // ctx.fillText("commit 32", 0, 50);
        
        keyclass.check(playerClass, inventoryclass); 
        keyclass.draw(ctx);     
        
        chest.draw(ctx, inventoryclass);
        heartobj.draw(ctx, inventoryclass);
        caveclass.draw(ctx, inventoryclass);


        shovelclass.check(playerClass, inventoryclass);
        shovelclass.draw(ctx); 
        
        playerClass.draw(ctx);


        chest.check(playerClass, inventoryclass, ctx);
        heartobj.check(playerClass, inventoryclass, ctx);
        caveclass.check(playerClass, inventoryclass, ctx);
        
        inventoryclass.draw(ctx, keyclass, shovelclass);
        
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


usebutton.addEventListener("touchstart", (event) => {
    event.preventDefault(); // Prevent scrolling
    inventoryclass.useitem();
});

usebutton.addEventListener("touchend", (event) => {
    event.preventDefault(); // Prevent scrolling
    inventoryclass.notuseitem();
});
usebutton.addEventListener("mousedown", (event) => {
    event.preventDefault(); // Prevent scrolling
    inventoryclass.useitem();
});

usebutton.addEventListener("mouseup", (event) => {
    event.preventDefault(); // Prevent scrolling
    inventoryclass.notuseitem();
});
leftchoice.addEventListener("touchstart", (event) => {
    event.preventDefault(); // Prevent scrolling
    inventoryclass.selectminus();
});


rightchoice.addEventListener("touchstart", (event) => {
    event.preventDefault(); // Prevent scrolling
    inventoryclass.selectplus();
});

leftchoice.addEventListener("mousedown", (event) => {
    event.preventDefault(); // Prevent scrolling
    inventoryclass.selectminus();
});


rightchoice.addEventListener("mousedown", (event) => {
    event.preventDefault(); // Prevent scrolling
    inventoryclass.selectplus();
});



requestAnimationFrame(frame)