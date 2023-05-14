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

        this.mazeGrid = Array(this.xSize).fill().map(() => Array(this.ySize).fill(0));
        //console.log(this.mazeGrid);

        this.createMaze();

    }

    //Methods

    createMaze() {

        //init new maze
        var xStart = Math.floor((Math.random() * this.xSize));
        var yStart = Math.floor((Math.random() * this.ySize));
        var xCurrent = xStart;
        var yCurrent = yStart;

        console.log(xStart + " " + yStart)

        for ( let k = 0; k < this.totalPath; ++k ) {

            let firstAxis = (Math.floor((Math.random() * 2) + 1) > 1) ? 1 : -1;
            let firstDirection = (Math.floor((Math.random() * 2) + 1) > 1) ? 1 : -1;
            let firstMoveLength = Math.floor((Math.random() * this.ySize));

            
            switch(currentAxis) {
                case 1:
                case -1:
            }
            // change array values...


            
        }

    }
    digArray(axis, direction, startPoint, length) {

        for ( let k = 0; k < startPoint - length; k = k + Math.abs(direction)) { 

        }
        
    }


    drawMaze() {
        
    }

    //Getters and setters



}


let test = new Maze(10, 10, 4);
