
//This thing doesnot feels very good somehow...

window.addEventListener('click', (event) => {
    if (event.x < gameWidth && event.y < gameHeight) {

        myScene.xCursor = event.x;
        myScene.yCursor = event.y;
        myScene.setCursor(event.x, event.y);
        console.log(event.x + " " + event.y)
        //1st frame update
        myScene.testCollision(myScene.xCursor, myScene.yCursor);
        myScene.testNextGridSpace();
        myScene.updateGridPosition();
    }
})
console.log("from controller")