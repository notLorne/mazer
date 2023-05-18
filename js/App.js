//Driver part

var lastFrame = Date.now();
var timeDelta = -1;
var framePerSecond = 30;

var toUpdate;

window.requestAnimationFrame(gameloop);

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
