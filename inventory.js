export default class inventory {
    constructor() 
    {
        this.gridsize = 3;
        this.size = 64; //radius//
        this.xpos = 50
        this.ypos = 400
        this.inventory = [];
        this.asd = false;
        this.cannotuse = false;
    }
    makegrid (ctx)
        {
            let str = '';
            
            
            for (let i = 0; i <= 19; i++) {
                for (let i = 0; i <= 19; i++) {
                    str = str + i;
                }
            }
            console.log(str)
        }
    draw(ctx, keya1)
        {
            const imagePath = './images/inventory_grid.png';
            const img = new Image();
            img.src = imagePath;
            
            for (let i = 0; i < 3; i++) {
                    ctx.drawImage(img, (i * 40), 760, 40, 40); // Scale image to fit canvas

        
            }
            for (const i in this.inventory)
            {
                if(this.inventory[i] == "key")
                    {
                        keya1.changepos((i * 40) + 3, 760 + 3)
                        keya1.draw(ctx);
                    }
            }
            if(this.cannotuse == true)
            {
                ctx.font = "40px Arial";
                ctx.fillStyle = "red";
                ctx.fillText("cannot use item here", 340, 400);
                console.log("asd")
            }

        }
    useitem()
    {
        console.log("11111")
        this.asd = true;
        this.cannotuse = true;
    }
    notuseitem()
    {
        console.log("11111")
        this.asd = false;
        this.cannotuse = false;
    }
}