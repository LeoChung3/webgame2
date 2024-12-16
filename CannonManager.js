import Cannons from "./Cannons.js"

// this class controls all the cannons in the Gamepad, making it more conventional to control
// in one place

export default class Cannonmanager  {
    constructor() {
        this.cannonsClass1 = new Cannons(0,canvas.height/2);
        this.cannonsClass2 = new Cannons(canvas.width/2,0);
        this.cannonsClass3 = new Cannons(canvas.width,canvas.height/2);
        this.cannonsClass4 = new Cannons(canvas.width/2,canvas.height);
        this.startingTime;
        this.lastTime;
        this.totalElapsedTime;
        this.elapsedSinceLastLoop;
        this.timesincelastbullet = 0;
        this.bullettime = 1125;
    }

    draw(ctx){

        // draws all cannons on to the game

        this.cannonsClass1.draw(ctx);
        this.cannonsClass2.draw(ctx);
        this.cannonsClass3.draw(ctx);
        this.cannonsClass4.draw(ctx);
    }

    shoot = (player) => {

        // finds the time between each shot, giving a time in between
        // and then creates the bullet

        if(!this.startingTime){
            this.startingTime=new Date();
        }
        if(!this.lastTime){
            this.lastTime=new Date();
        }
        this.elapsedSinceLastLoop=(new Date() - this.lastTime);
        this.lastTime= new Date() ;
        this.timesincelastbullet += this.elapsedSinceLastLoop;
        if (this.timesincelastbullet >= this.bullettime){
            this.cannonsClass1.createbullet(player);
            this.cannonsClass2.createbullet(player);
            this.cannonsClass3.createbullet(player);
            this.cannonsClass4.createbullet(player);
            this.timesincelastbullet = 0
        }

    }

    drawbullets(ctx){

        // draws the bullets on to the screen

        this.cannonsClass1.Drawprojectiles(ctx);
        this.cannonsClass2.Drawprojectiles(ctx);
        this.cannonsClass3.Drawprojectiles(ctx);
        this.cannonsClass4.Drawprojectiles(ctx);
    }

    move(ctx){

        // moves the bullets for all cannons

        this.cannonsClass1.MoveProjectiles(ctx);
        this.cannonsClass2.MoveProjectiles(ctx);
        this.cannonsClass3.MoveProjectiles(ctx);
        this.cannonsClass4.MoveProjectiles(ctx);
    }

    checkplayerstatus(player){

        // checks if any of the cannons killed the player

        this.cannonsClass1.checkplayer(player);
        this.cannonsClass2.checkplayer(player);
        this.cannonsClass3.checkplayer(player);
        this.cannonsClass4.checkplayer(player);

    }

    Restart(){

        // restarts all the cannons 

        this.cannonsClass1.Restart();
        this.cannonsClass2.Restart();
        this.cannonsClass3.Restart();
        this.cannonsClass4.Restart();
    }
}