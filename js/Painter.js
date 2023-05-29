class Painter {

    floorStack;
    centerStack;
    frontStack;
    uiStack;
    xSize;
    ySize;

    zoomCurrent;
    zoomTarget;
    zoomDelta;
    zoomSpeed;
    zoomDone;
    xContextAdj;
    yContextAdj;

    drawGrid;
    xGridAbsPosition;
    yGridAbsPosition;

    constructor(canvasSizeX, canvasSizeY) {

        this.floorStack = new Array();
        this.centerStack = new Array();
        this.frontStack = new Array();
        this.uiStack = new Array();

        this.xSize = canvasSizeX;
        this.ySize = canvasSizeY;

        this.zoomCurrent = 4;
        this.zoomTarget = 0;
        this.zoomSpeed = 1
        this.zoomDelta = 0;
        this.xContextAdj = 0;
        this.yContextAdj = 0;

        this.drawGrid = Array(12).fill().map(() => Array(12).fill(0));
        console.log(this.drawGrid);
    }
    cameraZoom() {
    }
    updateDrawGridPosition() {
        
    }
    updateDrawGrid(posX, posY, grid) { // OK for now, this should be called every time the position is changed,
                                        // not every time the game is updated.
                                        //THIS IS FOR LOGICAL COMPONENTS, does not draw or need acutal position.
        let gridMultiplier = 4; // CONST - every map space is a 4x4 grid of 128px x 96px.

        let xCounterGrid = 0;
        let yCounterGrid = 0;

        for ( let xRead = posX - 1; xRead <= posX + 1; ++xRead ) {
            for ( let yRead = posY - 1; yRead <= posY + 1; ++yRead) {

                for ( let k = 0; k < gridMultiplier; ++k ) {
                    for ( let j = 0; j < gridMultiplier; ++j ) {
                        this.drawGrid[(yCounterGrid * gridMultiplier) + k][(xCounterGrid * gridMultiplier) + j] = 
                                                                                                grid[xRead][yRead];
                    }
                }      
                yCounterGrid += 1;
            }
            yCounterGrid = 0;
            xCounterGrid += 1;
        }
    }
    drawBackground(paletteColor) {

        const bgContext = document.getElementById("background").getContext("2d");
        bgContext.imageSmoothingEnabled = false;

        bgContext.fillStyle  = paletteColor;
        bgContext.fillRect(0, 0, this.xSize, this.ySize);
    }
    drawFloor(xOffsetGrid, yOffsetGrid) { // Maybe using the real coordinates would be easier and faster.

        const floorContext = document.getElementById("floorLayer").getContext("2d");
        floorContext.imageSmoothingEnabled = false;

        let xDrawGridStart = -256 + xOffsetGrid;
        let yDrawGridStart = -276 + yOffsetGrid;

        let tileSizeX = 32 * (this.zoomCurrent);
        let tileSizeY = 24 * (this.zoomCurrent);
        //start here with objects from stack
        for ( floorTiles of this.floorStack ) {

        }
        for ( let y = 0; y < this.drawGrid.length; ++y ) {
            for ( let x = 0; x < this.drawGrid[0].length; ++x ) {

                if ( this.drawGrid[y][x] != 0) {
                    floorContext.drawImage(floor_1, xDrawGridStart + ( x * tileSizeX ), 
                                                    yDrawGridStart + ( y * tileSizeY ), 
                                                    tileSizeX, 
                                                    tileSizeY);
                }
                //Floor color and opacity. The floor should be provided by the floorstack.
                if ( this.drawGrid[y][x] != 0) {
                    floorContext.fillStyle = getPaletteColor(42, 0.45); //colorCode and transparency here/
                    floorContext.fillRect(xDrawGridStart + (x * tileSizeX ), 
                                            yDrawGridStart + (y * tileSizeY ), 
                                            tileSizeX, 
                                            tileSizeY);
                }
            }
        }
    }
    drawCenter() {

        const centerContext = document.getElementById("centerLayer").getContext("2d");
        centerContext.imageSmoothingEnabled = false;

        for ( let object of this.centerStack ) {
            centerContext.drawImage(object.getFrame(),object.posX ,object.posY ,object.sizeX * (this.zoomCurrent), object.sizeY * (this.zoomCurrent));
        }
    }
    drawFront() {

        const frontContext = document.getElementById("frontLayer").getContext("2d");
        for ( let object of this.frontStack ) {
            if ( object.state == "active") {
                frontContext.fillStyle = "rgba(255,0,0,1)";
            } else {
                frontContext.fillStyle = "rgba(255,0,0,0.1)";
            }
            //frontContext.fillStyle = "rgba(255,0,0,0.1)";
            frontContext.fillRect(object.posX, object.posY, object.sizeX, object.sizeY );
        }
        //frontContext.scale(this.zoomCurrent, this.zoomCurrent);
        // frontContext.fillStyle = "rgba(255,0,255,1)";
        // frontContext.fillRect(345, 345,12 * (this.zoomCurrent), 12 * (this.zoomCurrent));
    }
    drawUI() {
        //In the UI stack, everything is at a static position in the array. Since the same modules are 
        //reused no matter what is happening. This way, The cursor slot can be modified all the time without 
        //wondering about its ID and position in the array.
        //UI stack component :
        // 0 : cursor
        const uiContext = document.getElementById("uiLayer").getContext("2d");
        uiContext.imageSmoothingEnabled = false;

        for ( let asset of this.uiStack ) {
            uiContext.drawImage(asset.getFrame(), asset.xPos - (asset.xOffset * this.zoomCurrent), 
                                                asset.yPos - (asset.yOffset * this.zoomCurrent), 
                                                asset.xSize * this.zoomCurrent, 
                                                asset.ySize * this.zoomCurrent);
        }
        //draw image test. WORKING
    }
    clearBackground() {
        const bgContext = document.getElementById("background").getContext("2d");
        bgContext.clearRect(0, 0, this.xSize, this.ySize);
    }
    clearFloor() {
        const floorContext = document.getElementById("floorLayer").getContext("2d");
        floorContext.clearRect(0, 0, this.xSize, this.ySize);
    }
    clearCenter() {
        const centerContext = document.getElementById("centerLayer").getContext("2d");
        centerContext.clearRect(0, 0, this.xSize, this.ySize);
    }
    clearFront() {
        const frontContext = document.getElementById("frontLayer").getContext("2d");
        frontContext.clearRect(0, 0, this.xSize, this.ySize);
    }
    clearUI() {
        const uiContext = document.getElementById("uiLayer").getContext("2d");
        uiContext.clearRect(0, 0, this.xSize, this.ySize);
    }
    clearText() {
        const textContext = document.getElementById("textLayer").getContext("2d");
        textContext.clearRect(0, 0, this.xSize, this.ySize);
    }
    addToStack(stackRef, object) {
        //Different values for stackRef => 0 = floorStack, 1 = centerStack, 2 = frontStack, 3 = uiStack, 4 = textAreaStack.
        switch(stackRef) {
            case 0: this.floorStack.push(object); break;
            case 1: this.centerStack.push(object); break;
            case 2: this.frontStack.push(object); break;
            case 3: this.uiStack.push(object); break;
        }
    }
    flushStash(stackRef) {
        //Different values for stackRef => 0 = floorStack, 1 = centerStack, 2 = frontStack, 3 = uiStack, 4 = textAreaStack.
        switch(stackRef) {
            case 0: this.floorStack = new Array(); break;
            case 1: this.centerStack = new Array(); break;
            case 2: this.frontStack = new Array(); break;
            case 3: this.uiStack = new Array(); break;
        }
    }
    colorFormatter(R, G, B, a) {
        return (a != undefined) ?   "rgba(" + R + "," + G + "," + B + "," + a + ")" : 
                                    "rgb(" + R + "," + G + "," + B + ")" ;
        
    }

    //Setters, getters
    getCurrentZoomLevel() {
        return this.zoomCurrent;
    }
    setTargetZoomLevel(targetLevel) {
        this.zoomTarget = targetLevel;
        this.zoomDone = false;
    }
    setSpeedZoomLevel(newDelta) {
        this.zoomDelta = newDelta;
    }
}