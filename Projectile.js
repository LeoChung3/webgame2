export default class Projectile {
    constructor(x,y,playerx,playery) {
        this.xpos = x + 5
        this.ypos = y + 10
        this.playerX = playerx  
        this.playerY = playery
        this.movex = 0
        this.movey = 0
        this.movingdistance()
    }
    movingdistance(){

        // this function finds the distance between the player and the projectile when it is created

        this.movex += this.playerX - this.xpos
        this.movey += this.playerY - this.ypos
    }
    move(){

        // moves the bullet towards the last known position of the player when the bullet was made

        this.xpos += this.movex / 175
        this.ypos += this.movey / 175
    }

    getpos(){

        // returns the position of the bullet
        
        return [this.xpos, this.ypos]
    }
    checkplayer(player,size){

        // checks if the bullet has touched the player
        // it finds the distance of the centre points of the bullet and player, and if it is smaller
        // than the distance of the radius of both player and bullet combined, it has hit the player
        // causing the players status to go from alive to dead
        
        let playerposition = player.getpos();
        var x = this.xpos - playerposition[0]
        var y = this.ypos - playerposition[1]
        var distance = Math.hypot(x,y);
        if (distance <= (player.getsize())+size){
            player.alive = false;
            }

    }
}