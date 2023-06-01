class Scene {
    //Attributes
    sceneId;

    sceneCursor;
    xCenter;
    yCenter;
    xTarget;
    yTarget;
    xDeltaPos;
    yDeltaPos;

    xGridPos; //position on the mapGrid x and y
    yGridPos; //this one starts one the green dot for now.
    selectedGridId; //This is the id of the next section that was clicked on. define in which direction map goes.

    collisionStack;
    drawingGrid;
    mapGrid;
    currentSeed;

    collisionGrid;
    xCollisionGrid;
    yCollisionGrid;

    zoomLevel;

    constructor() {

        this.xCenter = gameWidth / 2; //const
        this.yCenter = gameHeight / 2; //const

        console.log(this.xCenter + " " + this.yCenter); 
        this.sceneCursor = new Cursor();

        this.collisionStack = new Array();

        this.mapGrid = new Maze(50, 50, 500, 1);
        //console.log(this.mapGrid.xStart + " " + this.mapGrid.yStart);

        this.xGridPos = this.mapGrid.xStart;
        this.yGridPos = this.mapGrid.yStart;
        //console.log(this.xGridPos + " " + this.yGridPos);
        
        this.xCollisionGrid = xGridOrigin; // CONST from app.js
        this.yCollisionGrid = yGridOrigin; // They are moved so that the cursor is always in the middle of the screen.

        this.updateGridPosition();
    }
    //Methods
    getPositionDelta() {

        this.xDeltaPos = this.sceneCursor.xPos -500;
        this.xTarget = this.xDeltaPos;

        this.yDeltaPos = this.sceneCursor.yPos -300;
        this.yTarget = this.yDeltaPos;

        console.log(this.xDeltaPos + " " + this.yDeltaPos);
    }
    moveGrid() {

        this.xCollisionGrid += (this.xDeltaPos < 0) ? 1 : -1;
        this.yCollisionGrid += (this.yDeltaPos < 0) ? 1 : -1;
        this.xDeltaPos += (this.xDeltaPos < 0) ?  4 : -4;
        this.yDeltaPos += (this.yDeltaPos < 0) ?  4 : -4;

        if (Math.abs(this.xDeltaPos) < 6 ) {
            this.xDeltaPos = 0;
        }
        if (Math.abs(this.yDeltaPos) < 6 ) {
            this.yDeltaPos = 0;
        }
        //console.log(this.xDeltaPos + " " + this.yDeltaPos);
    }
    // testNextGridSpace() {

    //     switch(this.selectedGridId) {
    //         case 1 : {
    //             if (this.mapGrid.mazeGrid[this.xGridPos - 1][this.yGridPos] != 0) {
    //                 this.xGridPos -= 1;
    //             }
    //             break;
    //         }
    //         case 5 : {
    //             if (this.mapGrid.mazeGrid[this.xGridPos][this.yGridPos + 1] != 0) {
    //                 this.yGridPos += 1;
    //             }
    //             break;
    //         }
    //         case 7 : {
    //             if (this.mapGrid.mazeGrid[this.xGridPos + 1][this.yGridPos] != 0) {
    //                 this.xGridPos += 1;
    //             }
    //             break;
    //         }
    //         case 3 : {
    //             if (this.mapGrid.mazeGrid[this.xGridPos][this.yGridPos - 1] != 0) {
    //                 this.yGridPos -= 1;
    //             }
    //             break;
    //         }
    //     }
    // }
    updateGridPosition() { //this only happens when a new grid needed, not right after click... its also just the logical grid
        
        //Reset floor collision zones.
        this.collisionStack = new Array();
        //Create new collision zones.
        for ( let k = 0; k < 3; ++k ) {
            for ( let j = 0; j < 3; ++j ) {
                this.collisionStack[(k * 3) + j] = new CollisionZone((k * 3) + j, 
                                                                    "floor", 
                                                                    512, 
                                                                    384,
                                                                    this.xCollisionGrid + (k * 512),
                                                                    this.yCollisionGrid + (j * 384));
            }
        }
        gamePainter.updateDrawGrid(this.xGridPos, this.yGridPos, this.mapGrid.mazeGrid)
    }
    testCollision(x, y) {

        let activeTile = -1;
        for ( let zone of this.collisionStack ) {
            // zone.state = ( x > zone.posX &&
            //                 x < zone.posX + zone.sizeX &&
            //                 y > zone.posY &&
            //                 y < zone.posY + zone.sizeY ) ? "active" : "idle";
            activeTile = ( x > zone.posX &&
                            x < zone.posX + zone.sizeX &&
                            y > zone.posY &&
                            y < zone.posY + zone.sizeY ) ? zone.id : activeTile;
            
        }
        this.selectedGridId = activeTile;
        return ( activeTile >= 0 ) ? activeTile : -1;
    }
    setCursor(xNewCursor, yNewCursor) {

        this.sceneCursor.xPos = xNewCursor;
        this.sceneCursor.yPos = yNewCursor;
    }
    //Getters & setters


}

//The scene could be the block that brings every graphical and logical stuff together without actually 
//dealing with the gameplay.
//Maze could be contained here. Since the mazi is here, the collision zones should be here too. and the painting
//could be then made on the collision zones that would drive the entire logic of walking around.
// the scene would also have all the design elements then.
