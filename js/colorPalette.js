colorTable = [
    "0, 0, 0"
]

function getPaletteColor(indexNumber, alphaValue) {
    var aValue = (alphaValue == undefined) ? 1 : alphaValue;
    return "rgba(" + colorTable[indexNumber] + "," + aValue + ")";
}