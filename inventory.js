export default class inventory {
    constructor() 
    {
        this.gridsize = 3;
        this.size = 64; //radius//
        this.xpos = 50
        this.ypos = 400
        this.inventory = [];
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


}
}