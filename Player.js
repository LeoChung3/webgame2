
export default class Player {
    constructor() {
        this.alive = true;
        this.points = 0;
        this.size = 25; //radius//
        this.xpos = 400
        this.ypos = 400
        this.speed = 5
        this.left = false
        this.right = false
        this.up = false
        this.down = false

    }

    update(ctx){

        // moves the player according to what button was pressed 

        if (this.up){
            this.ypos -= this.speed
        }
        if (this.left){
            this.xpos -= this.speed
        }
        if (this.down){
            this.ypos += this.speed
        }
        if (this.right){
            this.xpos += this.speed
        }
        this.border(ctx);
    }
    draw(ctx){

        // draws the player on to the canvas 

        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(this.xpos, this.ypos, this.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(("points:"+this.points), 0, 25);
    }
    getpos(){

        // returns the position of the player 

        return [this.xpos,this.ypos]
    }

    getsize(){

        // returns the radius of the player
        return this.size
    }

    addpoints(){

        // adds one point to the player

        this.points += 1
    }
    restart(){

        // when starting a new point, these variables are reset, the points, the position and its status
        
        this.points = 0
        this.xpos = 400
        this.ypos = 400
        this.alive = true;
    }

    border(ctx){
        
        // this creates a border for the player, not allowing it to go outside the canvas
        
        if (this.xpos <= 24){
            this.xpos = 25;
        }
        if (this.ypos <= 24){
            this.ypos = 25;

        }
        if (this.xpos >= canvas.width - 24){
            this.xpos = canvas.width - 25;
        }
        if (this.ypos >= canvas.height - 24){
            this.ypos = canvas.height - 25;
        }
    }
}