
export default class heartobjective 
{
    constructor(x,y) 
    {
        this.size = 80;
        this.xpos = x;
        this.ypos = y;
        this.colliding = false;
        this.heart1 = false;
        this.heart2 = false;
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
            if(this.heart1 == true)
            {
                this.open = true; 

                ctx.save();
                ctx.beginPath();
                ctx.lineWidth = 5;
                ctx.rect(100, 100, 620, 600);
                ctx.fillStyle = "#ffffff";
                ctx.fill();
                ctx.stroke();
                ctx.restore();

                ctx.font = "30px Arial";
                ctx.fillStyle = "red";
                ctx.fillText("you've used the red heart kami :D my love", 110, 130);
                ctx.fillText("I love you my baby, and I know this distance", 110, 160);
                ctx.fillText("between us is alot, but I promise you, we will", 110, 190);
                ctx.fillText("see each other again soon, with open arms", 110, 220);
                ctx.fillText("embracing one another, I love you my love<3", 110, 250);
                ctx.fillText("I hope to see your eyes staring in to me", 110, 280);
                ctx.fillText("I want to feel the warmth of your arms", 110, 310);
                ctx.fillText("your embrace is what I desire", 110, 340);
                ctx.fillText("I crave to kiss your lips over and over again", 110, 370);
                ctx.fillText("I miss hearing your voice in person, having", 110, 400);
                ctx.fillText("our calls gives me joy, giving me the boost to", 110, 430);
                ctx.fillText("get me going through my day, and when i cant", 110, 460);
                ctx.fillText("listen to you, i yearn for it throughout my time", 110, 490);
                ctx.fillText("i really love you my kami, and i just, hope that", 110, 520);
                ctx.fillText("something like this, really does show my love", 110, 550);
                ctx.fillText("your absense hurts, but i know that eventually", 110, 580);
                ctx.fillText("we'll be able to see each other again, and", 110, 610);
                ctx.fillText("again and again and again and again", 110, 640);
                ctx.fillText("kochanie, bardzo kocham cie, tesknie za toba", 110, 670);

            }
        }

        if(this.colliding == true){
            if(this.heart2 == true)
            {
                this.open = true; 

                ctx.save();
                ctx.beginPath();
                ctx.lineWidth = 5;
                ctx.rect(100, 100, 620, 600);
                ctx.fillStyle = "#ffffff";
                ctx.fill();
                ctx.stroke();
                ctx.restore();

                ctx.font = "30px Arial";
                ctx.fillStyle = "red";
                ctx.fillText("you've used the green heart kami :D my love", 110, 130);
                ctx.fillText("I love you my baby, and I know this distance", 110, 160);
                ctx.fillText("between us is alot, but I promise you, we will", 110, 190);
                ctx.fillText("see each other again, with open arms", 110, 220);
                ctx.fillText("embracing one another, I love you my love<3", 110, 250);
                ctx.fillText("I hope to see your eyes staring in to me", 110, 280);
                ctx.fillText("I want to feel the warmth of your arms", 110, 310);
                ctx.fillText("your embrace is what I desire", 110, 340);
                ctx.fillText("I crave to kiss your lips over and over again", 110, 370);
                ctx.fillText("I miss hearing your voice in person, having", 110, 400);
                ctx.fillText("our calls gives me joy, giving me the boost to", 110, 430);
                ctx.fillText("get me going through my day, and when i cant", 110, 460);
                ctx.fillText("listen to you, i yearn for it throughout my time", 110, 490);
                ctx.fillText("i really love you my kami, and i just, hope that", 110, 520);
                ctx.fillText("something like this, really does show my love", 110, 550);
                ctx.fillText("your absense hurts, but i know that eventually", 110, 580);
                ctx.fillText("we'll be able to see each other again, and", 110, 610);
                ctx.fillText("again and again and again and again", 110, 640);
                ctx.fillText("kochanie, bardzo kocham cie, tesknie za toba", 110, 670);

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
            this.heart1 = inventory.getitemchecks("heart");    
            this.heart2 = inventory.getitemchecks("heart2")    
    }
}
