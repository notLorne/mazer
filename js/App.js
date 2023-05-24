//Driver part
//Global Variables

var lastFrame = Date.now();
var timeDelta = -1;
var framePerSecond = 60;
var toUpdate;
var gameWidth = 1000;
var gameHeight = 600;
var documentBody;
var isReady;
var menuState;
var zoomTarget;
var currentZoom;
var zoomSpeed;

var textBoxStack = [];

//Game Objects
//Will adopt the same method as last time with at least two loops, gameplay and menu.
//Game functions

function zoomCamera() { // TO BE DELETED. IIT IS A TEST FUNCTION.
    if(gamePainter.zoomCurrent > 2) {
        gamePainter.zoomTarget = 0.4;
        console.log(gamePainter.getCurrentZoomLevel())
    }
    if(gamePainter.zoomCurrent < 0.5) {
        gamePainter.zoomTarget = 2.1;
        console.log(gamePainter.zoomCurrent)
    }
}
function textDisplay() {
    for ( textBox of textBoxStack ) {
        textBox.typing(timeDelta);   
    }
}
function gameloop() {

    timeDelta = Date.now() - lastFrame; 
    //
    if (timeDelta > (1000 / framePerSecond)) {

        //Clear frames for redraw.
        gamePainter.clearFloor();
        gamePainter.clearCenter();
        gamePainter.clearFront();
        gamePainter.clearUI();
        gamePainter.clearText();
        //zoomCamera();
        gamePainter.cameraZoom()

        //draw
        textDisplay();
        gamePainter.drawFloor();
        gamePainter.drawCenter();
        gamePainter.drawFront();
        gamePainter.drawUI();
        mazer.drawMaze()

        //Reset timeDelta
        lastFrame = Date.now();
        toUpdate = true;
        timeDelta = 0;
        
        //console.log(gamePainter.getCurrentZoomLevel())
    } else if (toUpdate) {
        //update game

        for( let object of gamePainter.centerStack ){
            if ( object instanceof Actor) {
                object.updateActor();
            }

        }
        toUpdate = false;
    } 

    //Listen to input.

    window.requestAnimationFrame(gameloop);
}
function menuloop() {

    timeDelta = Date.now() - lastFrame;
    
    //console.log(timeDelta);
    if (timeDelta > (1000 / framePerSecond)) {
        //draw

        //Reset timeDelta
        lastFrame = Date.now();
        toUpdate = true;
        timeDelta = 0;
    } else if (toUpdate) {

        //update
        toUpdate = false;
    } 

    //Listen

    window.requestAnimationFrame(menuloop);
}

textBoxStack.push(new TextBox("TITLE_title-_-16", "textLayer", 412, 12, "option",4,21,true));
textBoxStack.push(new TextBox("one line box - one line box - 32", "textLayer", 412, 84, "small",7,13,false));
textBoxStack.push(new TextBox("ThrEE line DiaLoG BoxXxXx ... -_- 36", "textLayer", 412, 156, "medium",0,7,true));
textBoxStack.push(new TextBox("Two (2) Lines DIALOGUE boXXxXX .................... 54", "textLayer", 12, 512, "large",13,45,false));

const gamePainter = new Painter(gameWidth, gameHeight);
const mazer = new Maze(20, 20, 60, 1);
gamePainter.drawBackground(getPaletteColor(0));

const testPlayer = new Player(12, 384);
const testPlayer1 = new Player(124, 384);


window.requestAnimationFrame(gameloop);