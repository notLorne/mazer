class Scene {
    //Attributes

    xCursor;
    yCursor;

    xGridPos;
    yGridPos;

    collisionStack;
    drawingGrid;
    mapGrid;
    currentSeed;

    collisionGrid;
    xCollisionGrid;
    yCollisionGrid;

    zoomLevel;

    constructor() {

        this.xCursor = -1;
        this.yCursor = -1;

        this.collisionStack = new Array();

        this.mapGrid = new Maze(50, 50, 500, 1);
        console.log(this.mapGrid)
        
        this.xCollisionGrid = -256;
        this.yCollisionGrid = -276;

        for ( let k = 0; k < 3; ++k ) {
            for ( let j = 0; j < 3; ++j ) {
                this.collisionStack[(k * 3) + j] = new CollisionZone((k * 3) + j, 
                                                                    "floor", 
                                                                    512, 
                                                                    384,
                                                                    this.xCollisionGrid + (k * 512),
                                                                    this.yCollisionGrid + (j * 384));
                gamePainter.addToStack(2, this.collisionStack[(k * 3) + j]);
            }
        }
        console.log(gamePainter.frontStack); // OK


    }
    //Methods
    shiftGridPosition() {

    }

    testCursor() {
        console.log("input click")
    }

    //Getters & setters


}

//The scene could be the block that brings every graphical and logical stuff together without actually 
//dealing with the gameplay.
//Maze could be contained here. Since the mazi is here, the collision zones should be here too. and the painting
//could be then made on the collision zones that would drive the entire logic of walking around.
// the scene would also have all the design elements then.
