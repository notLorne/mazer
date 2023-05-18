class TextBox {

    outputText;
    textLength;
    textLines;
    charArray;
    maxLength;

    charCounter;
    lineCounter;
    isTypeWriter;
    typeCounter;
    typeTrigger;

    xPos;
    yPos;
    xAnchor;
    yAnchor;
    destinationContext;
    textSize;

    // letterColor, bgColor, typeEffect, typeTrigger, maxLettersWidth, maxLines, // TO ADD TO CONSTRUCTOR
    constructor(text, context, posX, posY){

        this.letterWidth = 5;
        this.letterHeight = 7;
        this.textSize = 2;
        this.destinationContext = context;
        this.xPos = posX;
        this.yPos = posY;

        this.textLength = text.length;

        this.outputText = text;
        this.charArray = [];

        for ( let k = 0; k < this.outputText.length; ++k ) {
            for (let j = 0; j < charTable.length; ++j ) {
                if (Object.keys(charTable[j]) == this.outputText.charAt(k)) {
                    this.charArray.push(Object.values(charTable[j]));
                    break;
                }
            } 
        }
        console.log(this.charArray);
        this.drawLetters(this.charArray)
    }

    drawLetters(letterArrays) {

        const textContext = document.getElementById(this.destinationContext).getContext("2d");
        textContext.fillStyle = "rgb(255,255,255)";

        textContext.fillRect(this.xPos - 4, 
                             this.yPos - 4, 
                             (this.letterWidth + 1) * this.textSize * this.textLength + 8, 
                             (this.letterHeight + 2 + 4) * this.textSize)

        textContext.fillStyle = "rgb(255,0,0)";
        for(let c = 0; c < letterArrays.length; ++c ){
            var testString = letterArrays[c][0];

            for ( let k = 0; k < 7; ++k ) {
                for ( let j = 0; j < 5; ++j ) {

                    if(testString.charAt((k * 5) + j) == 1) {
                        textContext.fillRect(this.xPos + (j * this.textSize) + (c * (this.letterWidth + 1) * this.textSize), 
                                             this.yPos + (k * this.textSize), 
                                             this.textSize, 
                                             this.textSize);
                    }
                }
            }
        }
    }
}

var boxte = new TextBox("Hi I hope you are having a nice day", "canvas", 200, 133);
