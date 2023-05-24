class Actor {

    id;
    state;
    posX;
    posY;
    sizeX;
    sizeY;
    destinationX;
    destinationY;

    frameSkip;
    currentFrame;
    currentAnimation;

    constructor(xPos, yPos) {

        this.posX = xPos;
        this.posY = yPos;
        this.destinationX = this.posX;
        this.destinationY = this.posY;
        this.currentFrame = 0;
        this.frameSkip = 0;
        //this.currentAnimation = animationName;
        //this.maxFrame = this.currentAnimation.length - 1;
        this.sizeX = 12;
        this.sizeY = 20;
        //console.log(playerRunningBack);
        //
    }
    updateActor() {
        this.posX = ( this.posX < 1000 ) ? this.posX += 6 : -24 ;

    }

    getFrame() { //Get seen from the  painter point of view.
        //skip frame must be return 15 frame per second.. so
        if (this.frameSkip < 1) {
            this.maxFrame = this.currentAnimation.length - 1;
            this.frameSkip ++;
        } else {
            this.currentFrame = (this.currentFrame == this.maxFrame) ? 0 : this.currentFrame + 1;
            this.frameSkip = 0;
        }
        return this.currentAnimation[this.currentFrame]; 
    }

}

class Player extends Actor {
    
    
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.id = 1; //CONST, player will always be 1. Or something else maybe?
        this.setState("idle");
        gamePainter.addToStack(1, this);

    }

    setState(newState) {

        this.state = newState;

        switch(this.state) {

            case "idle" : {
                this.frameSkip = 0;
                this.destinationX = this.posX;
                this.destinationY = this.posY;
                this.currentAnimation = playerRunningSide;
                this.maxFrame = this.currentAnimation.length;
            }
            case "run" : {

            }
        }
    }


}