//Driver part
//Global Variables

var lastFrame = Date.now();
var timeDelta = -1;
var framePerSecond = 30;
var toUpdate;

//Game Objects
const gamePainter = new Painter();

window.onload = (e) => { 
    //PreGame setup
    
        //CREATE A FUNCTION TO GET THE SCREEN RESOLUTION TO ADAPT THE GAME WINDOW SIZE. TEMPORARY VALUE HERE.
        gameWidth = 1000;
        gameHeight = 600;
        console.log("variables init"); //OK caught by console.
    
    //Canvas creation.
        var documentBody = document.getElementsByTagName("body")[0]; //Declare and init here for now...
        //Background
        background = document.createElement('canvas');
        background.id = "background";
        background.style.position = "absolute";
        background.width = gameWidth;
        background.height = gameHeight;
        background.style.border = "1px solid";
        background.style.zIndex = 0;
        documentBody.appendChild(background);
    
        //Floor
        floorLayer = document.createElement('canvas');
        floorLayer.id = "floorLayer";
        floorLayer.style.position = "absolute";
        floorLayer.width = gameWidth;
        floorLayer.height = gameHeight;
        floorLayer.style.border = "1px solid";
        floorLayer.style.zIndex = 2;
        documentBody.appendChild(floorLayer);
    
        //Center
        centerLayer = document.createElement('canvas');
        centerLayer.id = "centerLayer";
        centerLayer.style.position = "absolute";
        centerLayer.width = gameWidth;
        centerLayer.height = gameHeight;
        centerLayer.style.border = "1px solid";
        centerLayer.style.zIndex = 4;
        documentBody.appendChild(centerLayer);
    
        //Front
        frontLayer = document.createElement('canvas');
        frontLayer.id = "frontLayer";
        frontLayer.style.position = "absolute";
        frontLayer.width = gameWidth;
        frontLayer.height = gameHeight;
        frontLayer.style.border = "1px solid";
        frontLayer.style.zIndex = 6;
        documentBody.appendChild(frontLayer);
    
        //UI
        uiLayer = document.createElement('canvas');
        uiLayer.id = "uiLayer";
        uiLayer.style.position = "absolute";
        uiLayer.width = gameWidth;
        uiLayer.height = gameHeight;
        uiLayer.style.border = "1px solid";
        uiLayer.style.zIndex = 8;
        documentBody.appendChild(uiLayer);

        window.requestAnimationFrame(gameloop);
    }


//Will adopt the same method as last time with at least two loops, gameplay and menu.
function gameloop() {

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
