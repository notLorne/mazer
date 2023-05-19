class Maze {
    //Properties
    xSize;
    ySize;
    totalStep;
    mazeGrid;
    totalKeys;
    
    //Constructor
    constructor(sizeX, sizeY, stepTotal, keysTotal) {

        this.xSize = sizeX;
        this.ySize = sizeY;
        this.totalStep = stepTotal;
        this.totalKeys = keysTotal;

        this.mazeGrid = this.createMaze();

        this.drawMaze(this.mazeGrid);
    }

    //Methods
    
    createMaze() {
        //Setup empty grid.
        var mazeGrid = Array(this.xSize).fill().map(() => Array(this.ySize).fill(0));

        //init new maze
        var nextDirection = 0;
        let nextLength = 0;

        var xStart = Math.floor((Math.random() * (this.xSize - 2)) + 2);
        var yStart = Math.floor((Math.random() * (this.ySize - 2)) + 2);

        var xCurrent = xStart;
        var yCurrent = yStart;

        var stepCounter = 0;

        //Create new key and lock
        let nextKey = this.totalStep / 4;
        let nextLock = 3 * nextKey;

        //Starting point of maze => green.
        mazeGrid[xCurrent][yCurrent] = 2;

        console.log(xStart + " " + yStart);

        while(stepCounter < this.totalStep) {

            var nextAxis = Math.floor((Math.random() * 2) + 1); // X-Axis = 1 | Y Axis = 2;

            //Set direction and length of the next line.
            if (nextAxis == 1) {

                if (xCurrent < this.xSize / 12) {
                    nextDirection = 1;
                } else if (xCurrent > this.xSize - (this.xSize / 4)) {
                    nextDirection = -1;
                } else {
                    nextDirection = (Math.floor((Math.random() * 100)) < 50 ) ? 1 : -1;
                }

                nextLength = Math.floor((Math.random() * 24) + 12); //16

                //Amend current grid.
                for ( let x = 0; x < nextLength; ++x ) {

                    xCurrent += nextDirection;
                    //Flip direction if border is reached.
                    nextDirection *= ( xCurrent < 4 ||  xCurrent > this.xSize - 4 ) ? -1 : 1;

                    //Change grid value.
                    if (mazeGrid[xCurrent][yCurrent] == 0) {
                        mazeGrid[xCurrent][yCurrent] = 1;
                        //mazeGrid[xCurrent][yCurrent + 1] = 1;
                    }
                    if (stepCounter == nextKey) {
                        mazeGrid[xCurrent][yCurrent] = 4;
                    }
                    if (stepCounter == nextLock) {
                        mazeGrid[xCurrent][yCurrent] = 5;
                    }
                    stepCounter += 1; 
                }
            }
            if (nextAxis == 2) {

                if (yCurrent < this.ySize / 12) {
                    nextDirection = 1;
                } else if (yCurrent > this.ySize - (this.ySize / 4)) {
                    nextDirection = -1;
                } else {
                    nextDirection = (Math.floor((Math.random() * 100)) < 50) ? 1 : -1;
                }

                nextLength = Math.floor((Math.random() * 20) + 10);

                for ( let y = 0; y < nextLength; ++y ) {     
                    yCurrent += nextDirection;

                    nextDirection *= ( yCurrent < 4 ||  yCurrent > this.ySize - 4 ) ? -1 : 1;

                    if (mazeGrid[xCurrent][yCurrent] == 0) {
                        mazeGrid[xCurrent][yCurrent] = 1;
                        //mazeGrid[xCurrent + 1][yCurrent] = 1;
                    }
                    if (stepCounter == nextKey) {
                        mazeGrid[xCurrent][yCurrent] = 4;
                    }
                    if (stepCounter == nextLock) {
                        mazeGrid[xCurrent][yCurrent] = 5;
                    }
                    stepCounter += 1;
                }
            }       
        }
        //console.log(keyCounter);
        mazeGrid[xCurrent][yCurrent] = 3;
        return mazeGrid;
    }

    drawMaze(tileMap) { 

        let tileSize = 4;
        var drawMaze = document.getElementById("canvas").getContext("2d");
        
        var xSize = tileMap.length;
        var ySize = tileMap[0].length;

        for ( let x = 0; x < xSize; ++x ) {

            for ( let y = 0; y < ySize; ++y) {

                switch (tileMap[x][y]) {
                    case 0 : {
                        drawMaze.fillStyle = "rgb(0,0,0)";
                        drawMaze.fillRect(tileSize * x, tileSize * y, tileSize, tileSize);
                        break;
                    }
                    case 1 : {
                        drawMaze.fillStyle = "rgb(0,0,255)"; //path
                        drawMaze.fillRect(tileSize * x, tileSize * y, tileSize, tileSize);
                        break;
                    }
                    case 2 : {
                        drawMaze.fillStyle = "rgb(0,255,0)"; //Start (0)
                        drawMaze.fillRect(tileSize * x, tileSize * y, tileSize, tileSize);
                        break;
                    }
                    case 3 : {
                        drawMaze.fillStyle = "rgb(255,0,0)"; //End (1000)
                        drawMaze.fillRect(tileSize * x, tileSize * y, tileSize, tileSize);
                        break;
                    }
                    case 4 : {
                        drawMaze.fillStyle = "rgb(255,0,255)"; //key
                        drawMaze.fillRect(tileSize * x, tileSize * y, tileSize, tileSize);
                        break;
                    }
                    case 5 : {
                        drawMaze.fillStyle = "rgb(255,255,0)"; //lock
                        drawMaze.fillRect(tileSize * x, tileSize * y, tileSize, tileSize);
                        break;
                    }
                }

            }
        }

    }

    //Getters and setters
}