
export default class chestobjective 
{
    constructor(x,y) 
    {
        this.xpos = x;
        this.ypos = y;
        this.colliding = false;
        this.usingkey = false;
        this.open = false;
    }
    draw(ctx)
        {

            ctx.save();
            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.rect(this.xpos, this.ypos, 40, 40);
            ctx.fillStyle = "#000000";
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }


    check(player,inventory,ctx)
    {

        this.checkcollision(player);
        this.checkifusingkey(inventory);

        if(this.colliding == true){
            if(this.usingkey == true){
                this.open = true; 
                console.log("chest is open");
                ctx.save();
                ctx.beginPath();
                ctx.lineWidth = 5;
                ctx.rect(100, 100, 600, 600);
                ctx.fillStyle = "#111111";
                ctx.fill();
                ctx.stroke();
                ctx.restore();
            }
        }
    }
    checkcollision(player)
    {
        //playersize = 37,43
        var playerpos = player.getpos();
        if ((playerpos[0] + 18) <= this.xpos + 40)
        {
            if ((playerpos[0] + 18) >= this.xpos)
            {
                if ((playerpos[1]+21) <= this.ypos+ 40)
                {
                    if ((playerpos[1]+21) >= this.ypos){this.colliding = true;}else{this.colliding = false;}
                }else{this.colliding = false;}
            }else{this.colliding = false;}
        }else{this.colliding = false;}


    }
    checkifusingkey(inventory)
    {
       
            this.usingkey = inventory.getitemchecks();
        
    }
}