import {Pt} from 'pts/dist/es5';

class Star {
    constructor(pts, smallScreen) {
        this.smallScreen = smallScreen;

        this.startingPts = new Pt(pts[0], pts[1]);
        this.pts = pts;
        this.visited = false;
        this.startingOpacity = Math.random()*0.3 + 0.1;
        this.opacity = this.startingOpacity;

        this.falling = false;
    }

    getOpacityToScreenSize(){
        // setting fade speed (opacity decrease) for different screens
        if (this.smallScreen){
            return 0.025;
        } else {
            return 0.0125;
        }
    }

    fadeAwayOpacity(){
        let tempOpacity = this.getOpacityToScreenSize();

        // while falling
        if (this.falling){
            // while not faded away completely
            if (this.opacity <= 0){
                // if faded away, stop falling
                this.falling = false;
            }else{
                // if not faded, fade
                this.opacity -= tempOpacity;
            }
        // when opacity comes back to normal, don't fade away anymore, as visited attribute is false
        } else if (this.opacity <= this.startingOpacity) {
            this.opacity = this.startingOpacity;
            this.visited = false;
        // If it's not falling, but staying in one place, fade quicker
        } else {
            this.opacity -= 0.05;
        }
    }

    fallStep(){
        if (this.falling){
            this.pts[0] += 2;
            this.pts[1] += 0.3;
        }

        if (this.pts[0] - this.startingPts[0] >= 1000){
            this.falling = false;
        }
    }

    returnToOrigin(){
        if (!this.falling){
            this.pts = new Pt(this.startingPts[0], this.startingPts[1]);
        }
    }
}

export default Star;