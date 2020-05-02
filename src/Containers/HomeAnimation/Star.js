class Star {
    constructor(pts) {
        this.pts = pts;
        this.visited = false;
        this.leftOpacity = 0;
    }

    updateLeftOpacity(startTime, leftOpacity){
        this.leftOpacity = leftOpacity;
        if ((Date.now() - startTime) >= 100) {
            if (this.leftOpacity <= 0) {
                // console.log("end fade");
                this.leftOpacity = 0;
                this.leftPts = null;
            } else {
                this.leftOpacity -= 0.07;
            }
        }
    }
}

export default Star;