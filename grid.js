export default class grid {
    constructor() 
    {
        this.gridsize = 40;
        this.size = 25; //radius//
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
    drawgrid(ctx)
        {
            const imagePath = './images/ground1.png';
            const img = new Image();
            img.src = imagePath;
            
            for (let i = 0; i <= 19; i++) {
                for (let i2 = 0; i2 <= 19; i2++) {
                    ctx.drawImage(img, i * 40, i2 * 40, 40, 40); // Scale image to fit canvas

                }
            }
        }

}