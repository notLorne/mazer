const gameScreen = document.getElementById("background");


console.log(background)

background.addEventListener('click', function(){ console.log("fgsd");}, false);
console.log(gameScreen);

// window.addEventListener('click', (event) => {
//     console.log(event.x + " " + event.y);
//     myScene.xCursor = event.x;
//     myScene.yCursor = event.y;
//     console.log(myScene.xCursor + " " + myScene.yCursor);
//   })

background.addEventListener('mouseover', (event) => {
    console.log(event.x + " " + event.y);
})
console.log("from controller")