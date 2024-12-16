import Blob from "./blobs.js";

export default class Objective {
    constructor() {
        this.NumberofBlobs = 0;
        this.blobs = [];
    }

    drawblobs = (ctx) =>{

        // draws all the blobs in the list on to the screen

        for (const i in this.blobs){
            let blob = this.blobs[i];
            ctx.save();
            ctx.beginPath();
            let position = blob.getpos();
            ctx.fillStyle = "#4de32b";
            ctx.lineJoin = "round";
            ctx.lineWidth = 1;
            ctx.arc(position[0],position[1], 15, 0, 2 * Math.PI);
            ctx.fill();
            ctx.strokeStyle = "white";
            ctx.stroke();
            ctx.restore();
        }
    }

    createblobs = () =>{

        // resets the blob list and creates a new batch of blobs for the game

        this.blobs.length = 0;
        this.NumberofBlobs = 0;
        while (this.NumberofBlobs <= 35){
            let randomx = Math.floor(Math.random() * (775 - 1) ) + 1;
            let randomy = Math.floor(Math.random() * (775 - 1) ) + 1;
            const B = new Blob(randomx, randomy)
            this.blobs.push(B)
            this.NumberofBlobs += 1
        }
    }

    check = (player) =>{

        // checks if the blob was eaten by the player by finding the distance between the centre points of the blobs
        // and the player. If the distance is less than the radius of the player, the blob is eaten and removed
        // from the list

        for (const i in this.blobs){
            let blob = this.blobs[i];
            let blobposition = blob.getpos();
            let playerposition = player.getpos();
            var x = blobposition[0] - playerposition[0]
            var y = blobposition[1] - playerposition[1]
            var distance = Math.hypot(x,y);
            if (distance <= player.getsize()){
                delete this.blobs[i];
                this.NumberofBlobs -= 1
                player.points += 1
            }
        if (this.NumberofBlobs <= 8){
            this.createblobs();
        }
        }
    }
    restart(){
        
        // calls upon the createblobs function when starting a new game 

        this.createblobs();
    }
}