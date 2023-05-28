class UiObject {
    state;
    xPos;
    yPos;
    xSize;
    ySize;


    constructor(typeOfObject) {

        this.state = "idle";
        this.xPos = 500;
        this.yPos = 300;
        this.xSize = 12;
        this.ySize = 8;
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

class Cursor extends UiObject {
    
    constructor() {

        super(this.xPos) = 2;
    }
}
