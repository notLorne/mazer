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

var textBoxStack = [];

//Game Objects
//Will adopt the same method as last time with at least two loops, gameplay and menu.
//Game functions
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

        //draw
        textDisplay();
        gamePainter.drawFloor();
        gamePainter.drawCenter();
        gamePainter.drawFront();
        gamePainter.drawUI();

        //Reset timeDelta
        lastFrame = Date.now();
        toUpdate = true;
        timeDelta = 0;

    } else if (toUpdate) {

        //update game
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

textBoxStack.push(new TextBox("qweQWEqweQWEqw16", "textLayer", 12, 12, "option",4,21,true));
textBoxStack.push(new TextBox("sasdASDASDasdASDasdASDASdASDAS32", "textLayer", 12, 72, "small",7,13,false));
textBoxStack.push(new TextBox("jkhjhkjhkjhkjnjnkjnkuiukujhkuhkujh36", "textLayer", 12, 128, "medium",0,7,true));
textBoxStack.push(new TextBox("asdasdsadasdasdasdasdsadasdagjhgjhgjghjghjghjhhjgjhg54", "textLayer", 12, 222, "large",13,45,false));

const gamePainter = new Painter(gameWidth, gameHeight);
const mazer = new Maze(80, 80, 600, 1);
gamePainter.drawBackground(getPaletteColor(12))

console.log("Init loaded :" + isReady)
window.requestAnimationFrame(gameloop);