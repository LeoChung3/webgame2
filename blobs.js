export default class Blob {
    constructor(x,y) {
        this.xpos = x
        this.ypos = y
    }
    getpos(){
        return [this.xpos, this.ypos]
    }
}