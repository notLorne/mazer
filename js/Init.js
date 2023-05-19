window.onload = (e) => {
    
    var gameWidth = 1000;
    var gameHeight = 600;

    //PreGame setup
    
        //CREATE A FUNCTION TO GET THE SCREEN RESOLUTION TO ADAPT THE GAME WINDOW SIZE. TEMPORARY VALUE HERE.

        console.log("variables init"); //OK caught by console.
    
    //Canvas creation.
        documentBody = document.body; //Declare and init here for now...
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

        console.log("Canvas created")
        console.log("script loading");

        function loadScript(src, onload) {
            let script = document.createElement('script');
            script.onload = onload ? onload : (e) => {
                console.log(e.target.src + " is loaded.");
            };
            script.src = src;
            script.async = false;
            document.head.appendChild(script);
        }
        
        loadScript("js/Painter.js");
        loadScript("js/TextBox.js");
        loadScript("js/alphaBin.js");
        loadScript("js/colorPalette.js");
        loadScript("js/Maze.js");
        loadScript("js/Actors.js");

        loadScript("js/App.js");

        isReady = true;
}