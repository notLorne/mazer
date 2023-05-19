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

var textBoxStack = [];

//Game Objects
//Will adopt the same method as last time with at least two loops, gameplay and menu.
function gameloop() {

    timeDelta = Date.now() - lastFrame;
    
    //
    if (timeDelta > (1000 / framePerSecond)) {
        //Clear frames
        gamePainter.clearCenter();
        //tb.typing(timeDelta);
        //console.log("frame")
        //draw
        gamePainter.drawCenter();
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

//const tb = new TextBox("test of a new texTBoxOX 9012!!", "uiLayer", 512, 12, 2,4,21,true);
textBoxStack.push(new TextBox("test of a new texTBoxOX 9012!!", "uiLayer", 512, 12, 2,4,21,true));
console.log(textBoxStack);
const gamePainter = new Painter(gameWidth, gameHeight);
const mazer = new Maze(80, 80, 600, 1);
gamePainter.drawBackground(getPaletteColor(12))

console.log("Init loaded :" + isReady)
window.requestAnimationFrame(gameloop);