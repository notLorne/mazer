colorTable = [
    //All basic color 0-46
    //Grey tones
    "0, 0, 0", //Black 0
    "64, 64, 64", //Charcoal 1
    "128, 128, 128", //Grey 2
    "192, 192, 192", //Smoke 3
    "255, 255, 255", //White 4
    //Brown reds
    "128, 0, 0", //maroon 5
    "165,42,42", //brown 6
    "220,20,60", //crimson 7
    "255,0,0", //red 8
    "240,128,128", //light coral 9 
    "255,160,122", //light salmon 10
    //Orange Yellow
    "255,69,0", //orange red 11
    "255,165,0", //orange 12
    "255,215,0", //gold 13
    "218,165,32", //golden rod 14
    "240,230,140", //khaki 15
    "255,255,0", //yellow 16
    //Green 
    "154,205,50", //yellow green 17
    "128,128,0", //olive 18
    "107,142,35", //olive drab 19
    "124,252,0", //lawn green 20
    "0,128,0", //green 21
    "50,205,50", //lime green 22
    "152,251,152", //pale green 23
    "0,255,127", //spring green 24
    "32,178,170", //light sea green 25
    //Blue
    "0,128,128", //teal 26
    "0,255,255", //aqua 27
    "72,209,204", //medium turquoise 28
    "176,224,230", //powder blue 29
    "95,158,160", //cadet blue 30 
    "70,130,180", //steel blue 31
    "100,149,237", //corn flower blue 32 
    "30,144,255", //dodger blue 33
    "135,206,250", //light sky blue 34
    "0,0,128", //navy 35
    "0,0,255", //blue 36
    //Purple
    "75,0,130", //indigo 37
    "106,90,205", //slate blue 38
    "147,112,219", //medium purple 39
    "139,0,139", //dark magenta 40
    "153,50,204", //dark orchid 41
    "128,0,128", //purple 42
    "221,160,221", //plum 43
    //Pink
    "255,0,255", //magenta / fuchsia 44
    "255,20,147", //deep pink 45
    "255,192,203", //pink 46
];

function getPaletteColor(indexNumber, alphaValue) {
    var aValue = (alphaValue == undefined) ? 1 : alphaValue;
    return "rgba(" + colorTable[indexNumber] + ", " + aValue + ")";
}