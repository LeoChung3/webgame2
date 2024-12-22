
export default class heartobjective 
{
    constructor(x,y) 
    {
        this.size = 80;
        this.xpos = x;
        this.ypos = y;
        this.colliding = false;
        this.heart = false;
        this.open = false;
    }
    draw(ctx)
        {

            const imagePath = './images/heartpedastool.png';
            const img = new Image();
            img.src = imagePath;
            ctx.drawImage(img, this.xpos, this.ypos, this.size, this.size);
        }


    check(player,inventory,ctx)
    {

        this.checkcollision(player);
        this.checkifusingheart(inventory);

        if(this.colliding == true){
            if(this.heart == true)
            {
                this.open = true; 

                ctx.save();
                ctx.beginPath();
                ctx.lineWidth = 5;
                ctx.rect(100, 100, 600, 600);
                ctx.fillStyle = "#ffffff";
                ctx.fill();
                ctx.stroke();
                ctx.restore();

                ctx.font = "30px Arial";
                ctx.fillStyle = "red";
                ctx.fillText("===you found my heart :D, i love you <3===", 110, 130);
                ctx.fillText("==i fill this gift with love for you, i know im==", 110, 160);
                ctx.fillText("far away, and you didnt want anything but", 110, 190);
                ctx.fillText("i hope you're happy with something like this", 110, 220);
                ctx.fillText("===you found my heart :D, i love you <3===", 110, 250);
                ctx.fillText("==i fill this gift with love for you, i know im==", 110, 280);
                ctx.fillText("far away, and you didnt want anything but", 110, 310);
                ctx.fillText("i hope you're happy with something like this", 110, 340);
                ctx.fillText("i hope you're happy with something like this", 110, 370);
                ctx.fillText("i hope you're happy with something like this", 110, 400);

            }
        }
    }
    checkcollision(player)
    {
        //playersize = 37,43
        var playerpos = player.getpos();
        if ((playerpos[0] + 18) <= this.xpos + this.size)
        {
            if ((playerpos[0] + 18) >= this.xpos)
            {
                if ((playerpos[1]+21) <= this.ypos+ this.size)
                {
                    if ((playerpos[1]+21) >= this.ypos){
                        this.colliding = true;
                    }else{this.colliding = false;}
                }else{this.colliding = false;}
            }else{this.colliding = false;}
        }else{this.colliding = false;}


    }
    checkifusingheart(inventory)
    {
            this.heart = inventory.getitemchecks("heart");        
    }
}
