import {Pt, Group, Line, Create, Sound, Triangle, Const, Geom} from 'pts/dist/es5';
import {PtsCanvas} from "react-pts-canvas";
import Star from "./Star";

class HomeAnimation extends PtsCanvas{
    constructor() {
        super();
        this.stars = [];
        this.tempOpacity = 0;
        this.startTime = new Date().getTime();

        this.lastPts = null;
        this.currentPts = null;

        this.leftPts = null;
        this.leftOpacity = 0;

        this.visitedPts = [];
    }

    _create() {
        if (this.stars.length === 0) {
            this.stars = Create.distributeRandom( this.space.innerBound, 100 );
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
        if (this.lastPts === this.currentPts){
            if ((Date.now() - this.startTime) >= 100) {
                this.startTime = Date.now();

                if (this.tempOpacity >= 1) {
                    this.tempOpacity = 1;
                } else {
                    this.tempOpacity += 0.07;
                }
            }
        } else {
            this.leftPts = this.lastPts;
            this.lastPts.visited = true;
            this.lastPts.leftOpacity = this.tempOpacity;
            this.visitedPts.push(this.lastPts);
            this.leftOpacity = this.tempOpacity;
            this.tempOpacity = 0;
        }
    }

    updateLeftOpacity(){
        if (this.leftPts){
            if ((Date.now() - this.startTime) >= 100) {

                if (this.leftOpacity <= 0) {
                    this.leftOpacity = 0;
                    this.leftPts = null;
                } else {
                    this.leftOpacity -= 0.07;
                }
            }
        }
    }

    // Override PtsCanvas' animate function
    animate(time, ftime) {
        let p = this.space.pointer;

        this.stars.sort( (a,b) =>
            a.pts.$subtract(p).magnitudeSq() - b.pts.$subtract(p).magnitudeSq()
        );

        this.currentPts = this.stars[0];

        // console.log(this.visitedPts);
        this.visitedPts.forEach(star => {
            this.form.fillOnly(`rgba(255, 255, 255, ${this.leftOpacity})`).point(pts, 2, "circle" );
        });



        if (this.leftPts){
            const pts = this.leftPts.pts;
            this.updateLeftOpacity();
            this.form.fillOnly(`rgba(255, 255, 255, ${this.leftOpacity})`).point(pts, 2, "circle" );
        }
        this.updateOpacity();

        this.form.fillOnly(`rgba(255, 255, 255, ${this.tempOpacity})`).point( this.currentPts.pts, 2, "circle" );
        const allPts = this.stars.map(star => star.pts);
        this.form.fillOnly(`rgba(255, 255, 255, 0.4)`).points( allPts, 2, "circle" );

        this.lastPts = this.stars[0];
    }
}

export default HomeAnimation;