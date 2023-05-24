class Animations {

    static frameSkip;
    static sizeX;
    static sizeY;
    static currentFrame;
    static currentAnimation;
    static maxFrame;
    static xPos;
    static yPos;
    static zoomLevel;

    constructor(animationName) {

        this.currentFrame = 0;
        this.currentAnimation = animationName;
        this.maxFrame = this.currentAnimation.length - 1;
        this.sizeX = 12;
        this.sizeY = 20;
    }

    getFrame() {
        //skip frame must be return 15 frame per second.. so
        if (this.frameSkip < 1) {
            this.frameSkip ++;
        } else {
            this.currentFrame = (this.currentFrame == this.maxFrame) ? 0 : this.currentFrame + 1;
            this.frameSkip = 0;
        }
        return this.currentAnimation[this.currentFrame]; 
    }
}