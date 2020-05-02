import {Pt, Group, Line, Create, Sound, Triangle, Const, Geom} from 'pts/dist/es5';
import {PtsCanvas} from "react-pts-canvas";
import Star from "./Star";

class HomeAnimation extends PtsCanvas{
    constructor() {
        super();
        this.stars = [];
        this.tempOpacity = 0.4;
        this.startTime = new Date().getTime();

        this.lastStar = null;
        this.currentStar = null;
    }

    _create() {
        if (this.stars.length === 0) {
            this.stars = Create.distributeRandom( this.space.innerBound, 150 );
            this.stars = this.stars.map(pts => new Star(pts));
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
        if (this.lastStar === this.currentStar){
            if ((Date.now() - this.startTime) >= 50) {
                this.startTime = Date.now();

                if (this.tempOpacity >= 1) {
                    this.tempOpacity = 1;
                } else {
                    this.tempOpacity += 0.035;
                }
            }
        } else {
            this.leftPts = this.lastStar;

            this.stars.forEach(star => {
                if (this.lastStar === star){
                    star.visited = true;
                    console.log("leaving and setting opacity", this.tempOpacity);
                    star.currentOpacity = this.tempOpacity;
                }
            });
            this.tempOpacity = 0.4;
        }
    }

    // Override PtsCanvas' animate function
    animate(time, ftime) {
        let p = this.space.pointer;

        this.stars.sort( (a,b) =>
            a.pts.$subtract(p).magnitudeSq() - b.pts.$subtract(p).magnitudeSq()
        );

        // console.log("Opacity set for [0]", this.stars[0].leftOpacity, this.tempOpacity);
        this.lastStar = this.stars[0];


        this.stars.forEach(star => {
            if (star.currentOpacity > 0.4){
                // console.log(star.leftOpacity, "star", star);
                this.form.fillOnly(`rgba(255, 255, 255, ${star.leftOpacity})`).point(star.pts, 2.5, "circle");

                // star.updateLeftOpacity();

                if ((Date.now() - this.startTime) >= 50) {
                    star.updateCurrentOpacity();
                }

            } else {
                this.form.fillOnly(`rgba(255, 255, 255, ${star.startingOpacity}`).point(star.pts, 2.5, "circle");
            }
        });

        this.updateOpacity();

        this.stars[0].leftOpacity = this.tempOpacity;
        this.currentStar = this.stars[0];
    }
}

export default HomeAnimation;