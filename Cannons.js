import Projectile from "./Projectile.js"

// this cannon class controls has all functions of the cannon

export default class Cannons {
    constructor(x,y) {
        this.size = 50;
        this.xpos = x + 1;
        this.ypos = y + 1;
        this.angle = 0;
        this.bulletsize = 10
        this.bullets = [];

    }
    getpos(){
        return [this.xpos, this.ypos]
    }

    draw(ctx){

        // draws the cannon on to the screen at their designated positions

        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "#c82124";
        ctx.arc(this.xpos, this.ypos, this.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }

    createbullet = (player) => {

        // creates a new bullet at the cannon and adds it to the list

        let playerposition = player.getpos();
        const B = new Projectile(this.xpos, this.ypos, playerposition[0],playerposition[1])
        this.bullets.push(B)
        

    }
    
    Drawprojectiles(ctx){

        // draws all bullets in the list to the screen 

        for (const i in this.bullets){
            let bullet = this.bullets[i];

            ctx.save();
            ctx.beginPath();
            let position = bullet.getpos();
            ctx.fillStyle = "#ffff00";
            ctx.arc(position[0],position[1], this.bulletsize , 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }

    }

    MoveProjectiles(){

        // calls the move function in each of the bullet inside the list 

        for (const i in this.bullets){
            let bullet = this.bullets[i];
            bullet.move();
        }
    }

    checkplayer(player){

        // checks if any of the bullet in the list has hit the player 

        for (const i in this.bullets){
            let bullet = this.bullets[i];
            bullet.checkplayer(player,this.bulletsize);
        }}

    Restart(){

        // resets the bullet list for a new game 

        this.bullets.length = 0;
    }

}