
//This thing doesnot feels very good somehow...

window.addEventListener('click', (event) => {
    if (event.x < gameWidth && event.y < gameHeight) {

        myScene.xCursor = event.x;
        myScene.yCursor = event.y;
        //1st frame update
        myScene.testCollision(myScene.xCursor, myScene.yCursor);
        myScene.updateGridPosition();
    }
})
console.log("from controller")