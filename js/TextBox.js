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
    letterColorCode;
    textBoxColorCode;

    xPos;
    yPos;
    xAnchor;
    yAnchor;
    destinationContext;
    boxSize;
    textSize;

    // letterColor, bgColor, typeEffect, boxSize // TO ADD TO CONSTRUCTOR
    //type shall include textSize, number of line max and line max length.
    //As of now, only 81 chars can be entered on one line. max could be two line, for 162 character max for a message.
    //we might also want to have smaller boxes. This process doesnt really work optimally like that.
    constructor(text, context, posX, posY, sizeOfBox){
        
        this.letterWidth = 5; //CONST - width of the binary array.
        this.letterHeight = 7; //CONST - height of the binary array.
        //Context and textbox position.
        this.destinationContext = context;
        this.xPos = posX;
        this.yPos = posY;
        //Box size adjustment.
        this.boxSize = ( sizeOfBox == undefined ) ? 1 : sizeOfBox;

        this.textSize = 2 * this.boxSize;

        this.textLength = text.length;
        this.textLines = Math.ceil(this.textLength / 81);

        console.log(this.textLines);

        this.outputText = text;

        // Binary codes for each letter of the string
        this.charArray = [];
        for ( let k = 0; k < this.outputText.length; ++k ) {
            for (let j = 0; j < charTable.length; ++j ) {
                if (Object.keys(charTable[j]) == this.outputText.charAt(k)) {
                    this.charArray.push(Object.values(charTable[j]));
                    break;
                }
            } 
        }
        //Should be changed because that wont work with animations...
        this.drawLetters(this.charArray)
    }

    drawLetters(letterArrays) {
        
        var letterAdj;
        //Set context and smoothing
        const textContext = document.getElementById(this.destinationContext).getContext("2d");
        textContext.imageSmoothingEnabled= false;
        //Draw textbox background
        textContext.fillStyle = "rgb(0,255,255)";
        textContext.fillRect(this.xPos - 8, 
                             this.yPos - 8, 
                             (this.letterWidth + 1) * this.textSize * this.textLength + 16, 
                             (this.letterHeight + 6) * this.textSize + 4)
        //Draw textbox outline
        textContext.strokeStyle = "rgb(255,0,0)";
        textContext.strokeRect(this.xPos - 6, 
                            this.yPos - 6, 
                            (this.letterWidth + 1) * this.textSize * this.textLength + 12, 
                            (this.letterHeight + 6) * this.textSize);
        
        
        //Draw characters
        textContext.fillStyle = "rgb(255,0,0)";
        for(let c = 0; c < letterArrays.length; ++c ){

            var currentChar = letterArrays[c][0];
            //Adjust character height for small case g, j, p, q, y and comma ",".
            letterAdj = (   currentChar == "01110100011000101111000011000101110" || 
                            currentChar == "00001000000001100001000011000101110" ||
                            currentChar == "11110100011000110001111101000010000" ||
                            currentChar == "01111100011000110001011110000100001" ||
                            currentChar == "00000000000000000000001100001000100" ||
                            currentChar == "10001100011000110001011110000101110" ) ? 3 : 0;
            //Draw letter pixels
            for ( let k = 0; k < 7; ++k ) {
                for ( let j = 0; j < 5; ++j ) {

                    if(currentChar.charAt((k * 5) + j) == 1) {
                        textContext.fillRect(this.xPos + (j * this.textSize) + (c * (this.letterWidth + 1) * this.textSize), 
                                             this.yPos + (k * this.textSize) + letterAdj, 
                                             this.textSize, 
                                             this.textSize);
                    }
                }
            }
        }
    }
}