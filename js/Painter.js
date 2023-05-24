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


    constructor(canvasSizeX, canvasSizeY) {

        this.floorStack = new Array();
        this.centerStack = new Array();
        this.frontStack = new Array();
        this.uiStack = new Array();

        this.xSize = canvasSizeX;
        this.ySize = canvasSizeY;

        this.zoomCurrent = 6;
        this.zoomTarget = 1.14;
        this.zoomSpeed = 1
        this.zoomDelta = 0;
        this.xContextAdj = 0;
        this.yContextAdj = 0;
    }
    cameraZoom() {

    }
    drawBackground(paletteColor) {

        const bgContext = document.getElementById("background").getContext("2d");
        bgContext.imageSmoothingEnabled = false;

        bgContext.fillStyle  = paletteColor;
        bgContext.fillRect(0, 0, this.xSize, this.ySize);
    }
    drawFloor() {

        const floorContext = document.getElementById("floorLayer").getContext("2d");
        floorContext.imageSmoothingEnabled = false;

        floorContext.fillStyle = "rgba(0,255,0,1)";
        floorContext.fillRect(456, 345, 24 * (this.zoomCurrent) , 24 * (this.zoomCurrent));

        floorContext.drawImage(floor_1, 456, 345, 32 * (this.zoomCurrent) , 24 * (this.zoomCurrent));
    }
    drawCenter() {

        const centerContext = document.getElementById("centerLayer").getContext("2d");
        centerContext.imageSmoothingEnabled = false;
        
        //centerContext.scale(this.zoomCurrent, this.zoomCurrent);
        centerContext.fillStyle = "rgba(255,255,0,1)";
        centerContext.fillRect(234, 345, 24 * (this.zoomCurrent), 24 * (this.zoomCurrent));

        for ( let object of this.centerStack ) {
            centerContext.drawImage(object.getFrame(),object.posX ,object.posY ,object.sizeX * (this.zoomCurrent), object.sizeY * (this.zoomCurrent));
        }
    }
    drawFront() {

        const frontContext = document.getElementById("frontLayer").getContext("2d");
        frontContext.imageSmoothingEnabled = false;

        //frontContext.scale(this.zoomCurrent, this.zoomCurrent);
        frontContext.fillStyle = "rgba(255,0,255,1)";
        frontContext.fillRect(345, 345,24 * (this.zoomCurrent), 24 * (this.zoomCurrent));
    }
    drawUI() {

        const uiContext = document.getElementById("uiLayer").getContext("2d");
        uiContext.imageSmoothingEnabled = false;

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