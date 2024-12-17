export default class key {
    constructor(a,b) 
    {
        this.gridsize = 3;
        this.size = 64; //radius//
        this.xpos = a;
        this.ypos = b;
    }
    draw(ctx)
        {
            const imagePath = './key2.png';
            const img = new Image();
            img.src = imagePath;
            ctx.drawImage(img, this.xpos, this.ypos, 40, 40); // Scale image to fit canvas
        }

}