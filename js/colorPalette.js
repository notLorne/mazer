colorTable = [
  "0, 0, 0", //Black
  "64, 64, 64", //Charcoal
  "128, 128, 128", //Grey
  "192, 192, 192", //Smoke
  "255, 255, 255", //White
  "128, 0, 0", //maroon
  "165,42,42", //brown
  "220,20,60", //crimson
  "255,0,0", //red
  "240,128,128", //light coral
  "255,160,122", //light salmon
  "255,69,0", //orange red
  "255,165,0", //orange
  "255,215,0", //gold
  "218,165,32", //golden rod
  "240,230,140", //khaki
  "128,128,0", //olive
  "255,255,0", //yellow
  "154,205,50", //yellow green
  "107,142,35", //olive drab
  "124,252,0", //lawn green
  "0,128,0", //green
  "50,205,50", //lime green
  "152,251,152", //pale green
  "0,255,127", //spring green
  "32,178,170", //light sea green
  "0,128,128", //teal
  "0,255,255", //aqua
  "72,209,204", //medium turquoise
  "176,224,230", //powder blue
  "95,158,160", //cadet blue
  "70,130,180", //steel blue
  "100,149,237", //corn flower blue
  "30,144,255", //dodger blue
  "135,206,250", //light sky blue
  "0,0,128", //navy
  "0,0,255", //blue
  "75,0,130", //indigo
  "106,90,205", //slate blue
  "147,112,219", //medium purple
  "139,0,139", //dark magenta
  "153,50,204", //dark orchid
  "128,0,128", //purple
  "221,160,221", //plum
  "255,0,255", //magenta / fuchsia
  "255,20,147", //deep pink
  "255,192,203", //pink
];

function getPaletteColor(indexNumber, alphaValue) {
    var aValue = (alphaValue == undefined) ? 1 : alphaValue;
    return "rgba(" + colorTable[indexNumber] + ", " + aValue + ")";
}