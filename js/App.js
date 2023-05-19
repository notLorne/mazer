//Driver part
//Global Variables

var lastFrame = Date.now();
var timeDelta = -1;
var framePerSecond = 30;
var toUpdate;
var gameWidth = 1000;
var gameHeight = 600;
var documentBody;
var isReady;

console.log(isReady)

const tb = new TextBox("test of a new texTBoxOX 9012!!", "uiLayer", 12, 12, 1);
const gamePainter = new Painter(gameWidth, gameHeight);
gamePainter.drawBackground(getPaletteColor(34))

console.log(getPaletteColor(0));

window.requestAnimationFrame(gameloop);

//Game Objects
//Will adopt the same method as last time with at least two loops, gameplay and menu.
function gameloop() {

    timeDelta = Date.now() - lastFrame;
    
    //
    if (timeDelta > (1000 / framePerSecond)) {
        //Clear frames
        gamePainter.clearCenter();
        //draw
        gamePainter.drawCenter();
        //console.log(timeDelta);
        //Reset timeDelta
        lastFrame = Date.now();
        toUpdate = true;
        timeDelta = 0;
    } else if (toUpdate) {

        //update
        toUpdate = false;
    } 

    //Listen

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