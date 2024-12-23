export default class inventory {
    constructor() 
    {
        this.gridsize = 3;
        this.size = 64; //radius//
        this.xpos = 50
        this.ypos = 400
        this.inventory = [];
        this.inventorysize = 3;
        this.selected = 0;
        this.usingitem = false;
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
    draw(ctx, keya1, shovel)
        {
            const imagePath = './images/inventory_grid.png';
            const img = new Image();
            img.src = imagePath;
            
            for (let i = 0; i <= this.inventorysize; i++) {
                    ctx.drawImage(img, (i * 40), 760, 40, 40); // Scale image to fit canvas
        
            }
            for (const i in this.inventory)
            {
                if(this.inventory[i] == "key")
                    {
                        keya1.changepos((i * 40) + 3, 760 + 3)
                        keya1.draw(ctx);
                    }

                if(this.inventory[i] == "heart")
                    {
                       const imagePath = './images/heart.png';
                       const img = new Image();
                       img.src = imagePath;
                       ctx.drawImage(img, i * 40, 760, 40, 40);
                    }

                if(this.inventory[i] == "shovel")
                    {
                        shovel.changepos((i * 40) + 3, 760 + 3)

                        const imagePath = './images/shovel.png';
                        const img = new Image();
                        img.src = imagePath;
                        ctx.drawImage(img, i * 40, 760, 40, 40);
                    }

                if(this.inventory[i] == "heart2")
                    {
                        const imagePath = './images/heart22.png';
                        const img = new Image();
                        img.src = imagePath;
                        ctx.drawImage(img, i * 40, 760, 40, 40);
                    }
            
             }
            ctx.save();
            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.rect((this.selected * 40), 760, 40, 40);
            ctx.stroke();
            ctx.restore();
            // for (const i in this.inventory)
            // {
            //     console.log(this.inventory[i])
            //     console.log("end");
            // }

        }
    useitem()
    {
        this.usingitem = true;
    }
    notuseitem()
    {
        this.usingitem = false;
    }

    selectplus()
    {
        if(this.selected == this.inventorysize) { this.selected = 0;}
        else{this.selected += 1;}
    }
    selectminus()
    {
        if(this.selected == 0) { this.selected = this.inventorysize;}
        else{this.selected -= 1;}
    }

    getitemchecks(a)
    {

        if(this.inventory[this.selected] == a)
            {
                if(this.usingitem == true)
                {
                    return true;
                }
                else{return false;}
            }
        if(this.inventory[this.selected] == a)
            {
                if(this.usingitem == true)
                {
                    return true;
                }
                else{return false;}
            }
            
    }
}