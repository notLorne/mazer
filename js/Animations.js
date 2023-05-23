//Player animations.

const playerStillFront = new Array();
playerStillFront[0] = new Image(); playerStillFront[0].src = "assets/playerStillFront_0.png";

const playerStillBack = new Array();
playerStillBack[0] = new Image(); playerStillBack[0].src = "assets/playerStillBack_0.png";

const playerStillSide = new Array();
playerStillSide[0] = new Image(); playerStillSide[0].src = "assets/playerStillSide_0.png";

const playerRunningFront = new Array();
for ( let k = 0; k < 9; ++k ) {
    playerRunningFront[k] = new Image();
    playerRunningFront[k].src = "assets/playerRunningFront_" + k + ".png";
}

const playerRunningBack = new Array();
for ( let k = 0; k < 9; ++k ) {
    playerRunningBack[k] = new Image();
    playerRunningBack[k].src = "assets/playerRunningBack_" + k + ".png";
}

const playerRunningSide = new Array();
for ( let k = 0; k < 9; ++k ) {
    playerRunningSide[k] = new Image();
    playerRunningSide[k].src = "assets/playerRunningSide_" + k + ".png";
}