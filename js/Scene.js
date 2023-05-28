class Scene {
    //Attributes
    sceneId;

    sceneCursor;
    xCursor;
    yCursor;

    xGridPos; //position on the mapGrid x and y
    yGridPos; //this one starts one the green dot for now.
    selectedGridId; //This is the id of the next section that was clicked on. define in which direction map goes.
    // xCurrentGridCenter;
    // yCurrentGridCenter;

    collisionStack;
    drawingGrid;
    mapGrid;
    currentSeed;

    collisionGrid;
    xCollisionGrid;
    yCollisionGrid;

    zoomLevel;

    constructor() {

        this.sceneCursor = new Cursor()

        this.xCursor = 0;
        this.yCursor = 0;

        this.collisionStack = new Array();

        this.mapGrid = new Maze(50, 50, 500, 1);
        console.log(this.mapGrid.xStart + " " + this.mapGrid.yStart);

        this.xGridPos = this.mapGrid.xStart;
        this.yGridPos = this.mapGrid.yStart;
        console.log(this.xGridPos + " " + this.yGridPos);
        
        this.xCollisionGrid = xGridOrigin; // CONST from app.js
        this.yCollisionGrid = yGridOrigin; // They are moved so that the cursor is always in the middle of the street.

        this.updateGridPosition();
    }

    //Methods
    updateGridPosition() {

        switch(this.selectedGridId) {
            case 0 : {
                if (this.mapGrid.mazeGrid[this.xGridPos - 1][this.yGridPos - 1] != 0) {
                    this.xGridPos -= 1;
                    this.yGridPos -= 1;
                }
                break;
            }
            case 1 : {
                if (this.mapGrid.mazeGrid[this.xGridPos - 1][this.yGridPos] != 0) {
                    this.xGridPos -= 1;
                }
                break;
            }
            case 2 : {
                if (this.mapGrid.mazeGrid[this.xGridPos - 1][this.yGridPos + 1] != 0) {
                    this.xGridPos -= 1;
                    this.yGridPos += 1;
                }
                break;
            }
            case 5 : {
                if (this.mapGrid.mazeGrid[this.xGridPos][this.yGridPos + 1] != 0) {
                    this.yGridPos += 1;
                }
                break;
            }
            case 8 : {
                if (this.mapGrid.mazeGrid[this.xGridPos + 1][this.yGridPos + 1] != 0) {
                    this.xGridPos += 1;
                    this.yGridPos += 1;
                }
                break;
            }
            case 7 : {
                if (this.mapGrid.mazeGrid[this.xGridPos + 1][this.yGridPos] != 0) {
                    this.xGridPos += 1;
                }
                break;
            }
            case 6 : {
                if (this.mapGrid.mazeGrid[this.xGridPos + 1][this.yGridPos - 1] != 0) {
                    this.xGridPos += 1;
                    this.yGridPos -= 1;
                }
                break;
            }
            case 3 : {
                if (this.mapGrid.mazeGrid[this.xGridPos][this.yGridPos - 1] != 0) {
                    this.yGridPos -= 1;
                }
                break;
            }
        }

        console.log(this.mapGrid.mazeGrid[1][1]);
        
        this.collisionStack = new Array();
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
        console.log(this.xGridPos + " " + this.yGridPos);
        gamePainter.updateDrawGrid(this.xGridPos, this.yGridPos, this.mapGrid.mazeGrid)
    }

    testCollision(x, y) {
        let activeTile = -1;
        for ( let zone of this.collisionStack ) {
            zone.state = ( x > zone.posX &&
                            x < zone.posX + zone.sizeX &&
                            y > zone.posY &&
                            y < zone.posY + zone.sizeY ) ? "active" : "idle";
            activeTile = ( x > zone.posX &&
                            x < zone.posX + zone.sizeX &&
                            y > zone.posY &&
                            y < zone.posY + zone.sizeY ) ? zone.id : activeTile;
            
        }
        console.log(activeTile + " x:" + this.xCursor + " y:" + this.yCursor );
        this.selectedGridId = activeTile;
    }

    setCursor(xNewCursor, yNewCursor) {

        gamePainter.addToStack(3,)

    }
    //Getters & setters


}

//The scene could be the block that brings every graphical and logical stuff together without actually 
//dealing with the gameplay.
//Maze could be contained here. Since the mazi is here, the collision zones should be here too. and the painting
//could be then made on the collision zones that would drive the entire logic of walking around.
// the scene would also have all the design elements then.
