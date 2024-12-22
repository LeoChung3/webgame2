
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

            const imagePath = './images/chest.png';
            const img = new Image();
            img.src = imagePath;
            ctx.drawImage(img, this.xpos, this.ypos, 40, 40);
        }


    check(player,inventory,ctx)
    {

        this.checkcollision(player,inventory);
        this.checkifusingkey(inventory);

        if(this.colliding == true){
            if(this.usingkey == true){
                console.log("aaaaaaaaaaaaaaaaa")
                this.open = true; 
                var heartalreadyobtained = false;
                    for (const i in inventory.inventory)
                    {
                        if (inventory.inventory[i] == "heart")
                        {
                            heartalreadyobtained = true;
                        }
                    }
                    if (heartalreadyobtained == false)
                    {
                        inventory.inventory.push("heart");
                    }

                ctx.save();
                ctx.beginPath();
                ctx.lineWidth = 5;
                ctx.rect(100, 100, 600, 600);
                ctx.fillStyle = "#ffffff";
                ctx.fill();
                ctx.stroke();
                ctx.restore();



                const imagePath = './images/heart.png';
                const img = new Image();
                img.src = imagePath;
                ctx.drawImage(img, 150, 150, 450, 450); // Scale image to fit canvas

                ctx.font = "30px Arial";
                ctx.fillStyle = "red";
                ctx.fillText("===you found my heart :D, i love you <3===", 110, 600);
                ctx.fillText("==i fill this gift with love for you, i know im==", 110, 630);
                ctx.fillText("far away, and you didnt want anything but", 110, 660);
                ctx.fillText("i hope you're happy with something like this", 110, 690);

            }
        }
    }
    checkcollision(player,inventory)
    {
        //playersize = 37,43
        var playerpos = player.getpos();
        if ((playerpos[0] + 18) <= this.xpos + 40)
        {
            if ((playerpos[0] + 18) >= this.xpos)
            {
                if ((playerpos[1]+21) <= this.ypos+ 40)
                {
                    if ((playerpos[1]+21) >= this.ypos){
                        this.colliding = true;
                    }else{this.colliding = false;}
                }else{this.colliding = false;}
            }else{this.colliding = false;}
        }else{this.colliding = false;}


    }
    checkifusingkey(inventory)
    {
       
            this.usingkey = inventory.getitemchecks("key");
        
    }
}
