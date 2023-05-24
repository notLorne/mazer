class TextBox {
    index;
    outputText;
    formattedText; // is array of the lines.
    textLength;
    lineTotal;
    lineLength;
    charArray;
    maxLength;

    charCounter;
    lineCounter;
    isTypeWriter;
    typeCounter;
    typeCursor;
    typeTrigger;
    isTypeOver;
    letterColorCode;
    textBoxColorCode;

    xPos;
    yPos;
    xAnchor;
    yAnchor;
    destinationContext;
    boxSize;
    textSize;
    isAlive;
    isBgDrawn;

    // letterColor, bgColor, typeEffect// TO ADD TO CONSTRUCTOR
    //type shall include textSize, number of line max and line max length.
    //As of now, only 81 chars can be entered on one line. max could be two line, for 162 character max for a message.
    //we might also want to have smaller boxes. This process doesnt really work optimally like that.
    constructor(text, context, posX, posY, typeOfBox, letterColorCode, bgColorCode, typeEffectBool, index){
        
        this.letterWidth = 5; //CONST - width of the binary array.
        this.letterHeight = 7; //CONST - height of the binary array.

        //Optional parameters
        this.letterColorCode = (letterColorCode == undefined) ? 4 : letterColorCode;
        this.textBoxColorCode = (bgColorCode == undefined) ? 33 : bgColorCode;
        this.index = (index == undefined) ? -1 : index;

        //Typewriter effect
        this.isTypeWriter = (typeEffectBool == undefined) ? false : typeEffectBool;
        this.typeTrigger = (this.isTypeWriter) ? 50 : -1;
        this.typeCounter = 0;
        this.typeCursor = 0;
        this.isTypeOver = false;

        //Context and textbox position.
        this.destinationContext = context;
        this.xPos = posX;
        this.yPos = posY;

        //Box size adjustment.
        // Box sizes could represent certain styles. like short box, big dialog box, small dialog box etc...
        /*
        Box types : 
        0 - Option box
        1 - Small text box 
        2 - medium text box
        3 - large text box
        */
        this.outputText = text;
        this.textLength = text.length;

        this.textSize = ( typeOfBox == undefined ) ? 1 : 
                        ( typeOfBox == "option" ) ? 4 :
                        ( typeOfBox == "large" ) ? 3 : 2;

        //Find the length of a text and adjusting the box to it. If longer than one line in a box 
        //that accept more than one line, the linetotal is adjusted. Then the box is created accordingly,
        //then the text is parsed correctly.
        // option = 16 char max / one line
        // small = 32 char max / one line
        // medium = 36 char max / three lines
        // large = 54 char max / two lines
        // for medium and large, the last space before line cut must be found.



        this.lineTotal = ( typeOfBox == undefined ) ? 1 : 
                         ( typeOfBox == "small" ) ? 1 : 
                         ( typeOfBox == "option" ) ? 1 :
                         ( typeOfBox == "large" ) ? 2 : 3;

        // Binary codes for each letter of the string
        this.charArray = [];

        for ( let k = 0; k < this.outputText.length; ++k ) {
            //let the line separation happen here...

            for (let j = 0; j < charTable.length; ++j ) {
                if (Object.keys(charTable[j]) == this.outputText.charAt(k)) {
                    this.charArray.push(Object.values(charTable[j]));
                    break;
                }
            } 
        }
        //Should be changed because that wont work with animations... UPDATE, now it works with animations... what gives?
        this.drawLetters(this.charArray)
    }
    drawBackground() {

        const textContext = document.getElementById(this.destinationContext).getContext("2d");
        textContext.imageSmoothingEnabled= false;

        //Draw textbox background

        textContext.fillStyle = getPaletteColor(this.textBoxColorCode);
        textContext.fillRect(   this.xPos - 8, 
                                this.yPos - 8, 
                                (this.letterWidth + 1) * this.textSize * this.textLength + 16, 
                                (this.letterHeight + 6) * this.textSize * this.lineTotal + 4)
        
        //Draw textbox outline
        textContext.strokeStyle = getPaletteColor(this.letterColorCode);
        textContext.strokeRect(this.xPos - 6, 
                            this.yPos - 6, 
                            (this.letterWidth + 1) * this.textSize * this.textLength + 12, 
                            (this.letterHeight + 6) * this.textSize * this.lineTotal);

       
    }

    drawLetters(letterArrays) {
        //Attributes
        var letterAdj;

        //Set context and smoothing
        const textContext = document.getElementById(this.destinationContext).getContext("2d");
        textContext.imageSmoothingEnabled= false;

        //Draw characters
        textContext.fillStyle = getPaletteColor(this.letterColorCode);
        for(let c = 0; c < this.typeCursor; ++c ){
            // the zero here should be pointing the the line array.
            // if counter > array length => change line.
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
                        textContext.fillRect(this.xPos + (j * this.textSize + 1) + (c * (this.letterWidth + 1) * this.textSize), 
                                             this.yPos + ((this.textSize - 2) * 4) + (k * this.textSize) + letterAdj, 
                                             this.textSize, 
                                             this.textSize);
                    }
                }
            }
        }
    }

    typing(timeDelta) {

        this.drawBackground();

        if (this.isTypeWriter) {
            this.typeCounter += timeDelta;
            //console.log(this.typeCounter);
            if (this.typeTrigger < this.typeCounter && !this.isTypeOver) {
                this.typeCursor += 1;
                this.typeCounter = 0;
                this.drawLetters(this.charArray);
            } else {
                this.drawLetters(this.charArray)
            }
        } else {
            this.typeCursor = this.textLength;
            this.drawLetters(this.charArray);
        }
        this.isTypeOver = (this.typeCursor == this.textLength) ? true : false;
    }
}