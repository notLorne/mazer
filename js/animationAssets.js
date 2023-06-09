//Player animations.

const cursor1 = new Array();
cursor1[0] = new Image(); cursor1[0].src =  "assets/ui/cursor1.png";

const playerStillFront = new Array();
playerStillFront[0] = new Image(); playerStillFront[0].src = "assets/actors/player/playerStillFront_0.png";

const playerStillBack = new Array();
playerStillBack[0] = new Image(); playerStillBack[0].src = "assets/actors/player/playerStillBack_0.png";

const playerStillSide = new Array();
playerStillSide[0] = new Image(); playerStillSide[0].src = "assets/actors/player/playerStillSide_0.png";

const playerRunningFront = new Array();
for ( let k = 0; k < 8; ++k ) {
    playerRunningFront[k] = new Image();
    playerRunningFront[k].src = "assets/actors/player/playerRunningFront_" + k + ".png";
}

const playerRunningBack = new Array();
for ( let k = 0; k < 8; ++k ) {
    playerRunningBack[k] = new Image(); 
    playerRunningBack[k].src = "assets/actors/player/playerRunningBack_" + k + ".png";
}

const playerRunningSide = new Array();
for ( let k = 0; k < 8; ++k ) {
    playerRunningSide[k] = new Image(); 
    playerRunningSide[k].src = "assets/actors/player/playerRunningSide_" + k + ".png";
}