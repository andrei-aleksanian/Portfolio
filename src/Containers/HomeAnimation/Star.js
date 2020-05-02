class Star {
    constructor(pts) {
        this.pts = pts;
        this.visited = false;
        this.currentOpacity = 0.4;
        this.startingOpacity = Math.random()*0.3 + 0.1;
        this.leftOpacity = this.startingOpacity;
    }

    updateCurrentOpacity(){
        if (this.leftOpacity <= this.startingOpacity) {
            this.leftOpacity = this.startingOpacity;
            this.visited = false;
        } else {
            this.leftOpacity -= 0.035;
        }
    }

    updateOpacity(){
        if (this.leftOpacity >= 1) {
            this.leftOpacity = 1;
            this.visited = true;
        } else {
            this.leftOpacity += 0.035;
        }
    }
}

export default Star;