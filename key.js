export default class key {
    constructor(a,b) 
    {
        this.gridsize = 3;
        this.size = 64; //radius//
        this.xpos = a;
        this.ypos = b;
        this.size = 40;
        this.collected = false;
    }
    draw(ctx)
        {   
            
            const imagePath = './images/key2.png';
            const img = new Image();
            img.src = imagePath;
            ctx.drawImage(img, this.xpos, this.ypos,  this.size,  this.size); // Scale image to fit canvas

            
        }

    check = (player, inventory) =>{

        if(this.collected == false)
        {
        var playerpos = player.getpos();
        if ((playerpos[0] + 18) <= this.xpos + this.size)
        {
            if ((playerpos[0] + 18) >= this.xpos)
            {
                if ((playerpos[1]+21) <= this.ypos+ this.size)
                {
                    if ((playerpos[1]+21) >= this.ypos){
                        this.collected = true;
                        inventory.inventory.push("key");
                    }else{this.collected = false;}
                }else{this.collected = false;}
            }else{this.collected = false;}
        }else{this.collected = false;}
        }

    }

    changepos(x,y)
    {
        this.xpos = x;
        this.ypos = y;

    }
}
