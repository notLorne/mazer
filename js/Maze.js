class Maze {
    //Properties
    xSize;
    ySize;
    totalPath;
    mazeGrid;
    
    //Constructor
    constructor(sizeX, sizeY, pathTotal) {

        this.xSize = sizeX;
        this.ySize = sizeY;
        this.totalPath = pathTotal;


        //console.log(this.mazeGrid);

        this.mazeGrid = this.createMaze();

        this.drawMaze(this.mazeGrid);

    }

    //Methods
    
    createMaze() {

        var mazeGrid = Array(this.xSize).fill().map(() => Array(this.ySize).fill(0));

        //init new maze
        var nextDirection = 0;
        let nextLength = 0;

        var xStart = Math.floor((Math.random() * (this.xSize - 2)) + 2);
        var yStart = Math.floor((Math.random() * (this.ySize - 2)) + 2);

        var xCurrent = xStart;
        var yCurrent = yStart;

        mazeGrid[xCurrent][yCurrent] = 2;

        console.log(xStart + " " + yStart);

        for( let k = 0; k < 150; ++k ) {

            var nextAxis = Math.floor((Math.random() * 2) + 1); // X-Axis = 1 | Y Axis = 2;
            if (nextAxis == 1) {

                if (xCurrent < this.xSize / 8) {
                    nextDirection = 1;
                } else if (xCurrent > this.xSize - (this.xSize / 8)) {
                    nextDirection = -1;
                } else {
                    nextDirection = (Math.floor((Math.random() * 2) + 1) == 1) ? 1 : -1;
                }

                nextLength = Math.floor((Math.random() * 20) + 4);

                for ( let x = 0; x < nextLength; ++x ) {     
                    xCurrent += nextDirection;
                    
                    nextDirection *= ( xCurrent < 4 ) ? -1 : 1;
                    nextDirection *= ( xCurrent > this.xSize - 4 ) ? -1 : 1;

                    if (mazeGrid[xCurrent][yCurrent] == 0) {
                        mazeGrid[xCurrent][yCurrent] = 1;
                    }   
                }
            }
            if (nextAxis == 2) {

                if (yCurrent < this.ySize / 8) {
                    nextDirection = 1;
                } else if (yCurrent > this.ySize - (this.ySize / 8)) {
                    nextDirection = -1;
                } else {
                    nextDirection = (Math.floor((Math.random() * 2) + 1) == 1) ? 1 : -1;
                }

                nextLength = Math.floor((Math.random() * 12) + 2);

                for ( let y = 0; y < nextLength; ++y ) {     
                    yCurrent += nextDirection;
                    nextDirection *= ( yCurrent < 4 ) ? -1 : 1;
                    nextDirection *= ( yCurrent > this.ySize - 4 ) ? -1 : 1;



                    if (mazeGrid[xCurrent][yCurrent] == 0) {
                        mazeGrid[xCurrent][yCurrent] = 1;
                    }  
                }
            }
            
           
        }
        mazeGrid[xCurrent][yCurrent] = 2;
        return mazeGrid;
    }


    drawMaze(tileMap) {

        let tileSize = 5;
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
                        drawMaze.fillStyle = "rgb(0,0,255)";
                        drawMaze.fillRect(tileSize * x, tileSize * y, tileSize, tileSize);
                        break;
                    }
                    case 2 : {
                        drawMaze.fillStyle = "rgb(0,255,0)";
                        drawMaze.fillRect(tileSize * x, tileSize * y, tileSize, tileSize);
                        break;
                    }
                    case 3 : {
                        drawMaze.fillStyle = "rgb(255,0,255)";
                        drawMaze.fillRect(tileSize * x, tileSize * y, tileSize, tileSize);
                        break;
                    }
                }

            }
        }

    }

    //Getters and setters



}


let test = new Maze(150, 80, 4);
