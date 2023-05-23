class Actor {

    id;
    state;

    posX;
    posY;
    destinationX;
    destinationY;

    constructor(xPos, yPos) {

        this.posX = xPos;
        this.posY = yPos;
        this.destinationX = this.posX;
        this.destinationY = this.posY;

    }
}

class Player extends Actor {
    
    constructor() {
        super(120, 120);
        this.id = 1; //CONST, player will always be 1. Or something else maybe?
        this.state = "idle";
    }

}