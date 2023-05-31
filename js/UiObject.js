class UiObject {

    state;
    xPos;
    yPos;
    xSize;
    ySize;
    xOffset;
    yOffset;

    objectType;
    frameSkip;
    currentAnimation;
    currentFrame;
    maxFrame;

    constructor(typeOfObject) {

        this.objectType = typeOfObject;
        this.currentFrame = 0;
        this.frameSkip = 0;

        switch (typeOfObject) {
            case "cursor" : {

                this.state = "idle";
                this.currentAnimation = cursor1;
                this.maxFrame = this.currentAnimation.length;

                this.xPos = 500;
                this.yPos = 300;
                this.xSize = 12;
                this.ySize = 8;
                this.xOffset = this.xSize / 2;
                this.yOffset = this.ySize / 2;

                gamePainter.uiStack[0] = this;
            }
        }

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
    
    xCursorTarget;
    yCursorTarget;

    constructor() {

        super("cursor");
        
        this.xCursorTarget = this.xPos;
        this.yCursorTarget = this.yPos;
    }
}
