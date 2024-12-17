export default class inventory {
    constructor() 
    {
        this.gridsize = 3;
        this.size = 64; //radius//
        this.xpos = 50
        this.ypos = 400
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
    draw(ctx)
        {
            const imagePath = './inventory_grid.png';
            const img = new Image();
            img.src = imagePath;
            
            for (let i = 0; i < 3; i++) {
                    ctx.drawImage(img, (i * 40), 760, 40, 40); // Scale image to fit canvas

                
            }
        }

}