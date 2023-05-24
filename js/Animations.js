//Player animations.

const playerStillFront = new Array();
playerStillFront[0] = new Image(); playerStillFront[0].src = "assets/playerStillFront_0.png";

const playerStillBack = new Array();
playerStillBack[0] = new Image(); playerStillBack[0].src = "assets/playerStillBack_0.png";

const playerStillSide = new Array();
playerStillSide[0] = new Image(); playerStillSide[0].src = "assets/playerStillSide_0.png";

const playerRunningFront = new Array();
for ( let k = 0; k < 8; ++k ) {
    playerRunningFront[k] = new Image();
    playerRunningFront[k].src = "assets/playerRunningFront_" + k + ".png";
}

const playerRunningBack = new Array();
for ( let k = 0; k < 8; ++k ) {
    playerRunningBack[k] = new Image(); 
    playerRunningBack[k].src = "assets/playerRunningBack_" + k + ".png";
}

const playerRunningSide = new Array();
for ( let k = 0; k < 8; ++k ) {
    playerRunningSide[k] = new Image(); 
    playerRunningSide[k].src = "assets/playerRunningSide_" + k + ".png";
}

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