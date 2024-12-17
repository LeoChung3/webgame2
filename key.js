export default class key {
    constructor(a,b) 
    {
        this.gridsize = 3;
        this.size = 64; //radius//
        this.xpos = a;
        this.ypos = b;
        this.collected = false;
    }
    draw(ctx)
        {   
            
                const imagePath = './images/key2.png';
                const img = new Image();
                img.src = imagePath;
                ctx.drawImage(img, this.xpos, this.ypos, 40, 40); // Scale image to fit canvas

            
        }

    check = (player, inventory) =>{

        // checks if the blob was eaten by the player by finding the distance between the centre points of the blobs
        // and the player. If the distance is less than the radius of the player, the blob is eaten and removed
        // from the list
        if(this.collected == false)
        {
            let playerposition = player.getpos();
            var x = (this.xpos + 20) - playerposition[0]
            var y = (this.ypos + 20) - playerposition[1]
            var distance = Math.hypot(x,y);
            if (distance <= player.getsize())
            {
                this.collected = true;
                inventory.inventory.push("key")
            }
        }

    }

    changepos(x,y)
    {
        this.xpos = x;
        this.ypos = y;

    }
}
