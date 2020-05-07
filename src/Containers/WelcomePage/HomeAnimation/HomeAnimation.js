import {Create, Pt} from 'pts/dist/es5';
import {PtsCanvas} from "react-pts-canvas";
import Star from "./Star";

class HomeAnimation extends PtsCanvas{
    constructor() {
        super();
        this.smallScreen = window.screen.width < 1000;

        this.stars = [];
        this.GlowingOpacity = 0.4;

        this.firstLaunch = true;

        this.startTime = new Date().getTime();
        this.startFallTime = 0;

        this.currentStar = null;
        this.lastStar = null;
    }

    _create() {
        if (this.stars.length === 0) {
            if (this.smallScreen) {
                this.stars = Create.distributeRandom(this.space.innerBound, 150);
            } else {
                this.stars = Create.distributeRandom(this.space.innerBound, 200);
            }
            this.stars = this.stars.map(pts => new Star(pts, this.smallScreen));
        }
    }

    // Override PtsCanvas' start function
    start(space, bound) {
        this._create();
    }

    // Override PtsCanvas' resize function
    resize() {
        this._create();
    }

    updateOpacity(){
        if (this.currentStar.pts === this.lastStar.pts){
            // if the star is the same, keep increasing opacity
            if ((Date.now() - this.startTime) >= 30) {
                this.startTime = Date.now();
                if (this.GlowingOpacity >= 1) {
                    this.GlowingOpacity = 1;
                    this.firstLaunch = false;
                } else {
                    this.GlowingOpacity += 0.035;
                }
            }
        } else {
            // Tricky bit
            // We are setting a flag for opacity to decrease on the current glowing star on the next loop
            // But then actually changing the opacity of the last one, which means when we swap it
            // The next one is glowing, the current one is fading
            this.stars.forEach((star, i) => {
                if (this.currentStar.pts === star.pts) {
                    star.visited = true;
                }
            });
            // temp opacity back to default
            this.GlowingOpacity = 0.4;
        }
    }

    getFallTimerForScreen() {
        if (this.smallScreen){
            return (Date.now() - this.startFallTime) >= 1000;
        } else {
            return (Date.now() - this.startFallTime) >= 2000;
        }
    }

    // Override PtsCanvas' animate function
    animate(time, ftime) {
        let p = this.space.pointer;

        if (!this.firstLaunch) {
            this.stars.sort( (a,b) => {
                return a.pts.$subtract(p).magnitudeSq() - b.pts.$subtract(p).magnitudeSq();
            });
        }

        // Saving the new star touched
        this.currentStar = this.stars[0];

        // If last star is not initialised yet
        if (!this.lastStar){
            this.lastStar = this.currentStar;
        }

        this.stars.forEach(star => {
            this.form.fillOnly(`rgba(255, 255, 255, ${star.opacity})`).point(star.pts, 2, "circle");
            // fading logic on change of star
            // current star is actually also fading in real time, just being overwritten at the end of the animation
            // if it is not primary anymore, it doesn't get overwritten and it starts fading away
            if (star.visited){
                if ((Date.now() - this.startTime) >= 30) {
                    star.fadeAwayOpacity();
                }
            }

            if (star.falling){
                star.fallStep();
                this.form.fillOnly(`rgba(255, 255, 255, ${star.opacity})`).point(star.pts, 2, "circle");

                const lineStart = new Float32Array([
                    (star.pts[0] - star.startingPts[0]) > 200 ? star.pts[0] - 200 : star.startingPts[0],
                    (star.pts[1] - star.startingPts[1]) > 30 ? star.pts[1] - 30 : star.startingPts[1]
                ]);
                this.form.strokeOnly(`rgba(255, 255, 255, ${star.opacity}`, 1).line( [star.pts, lineStart] );
            } else {
                star.returnToOrigin();
            }
        });

        // falling on full opacity logic
        if (this.stars[0].opacity >= 1) {
            if (this.getFallTimerForScreen()){
                this.startFallTime = new Date().getTime();
                this.stars[0].falling = true;
            }
        }

        // checking if the star has changed
        this.updateOpacity();

        // glowing current star
        this.stars[0].opacity = this.GlowingOpacity;

        //saving this star as the last touched
        this.lastStar = this.stars[0];
    }
}

export default HomeAnimation;