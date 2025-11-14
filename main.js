//Function that capitalize the first word of a string
function capitalize(word) {
    //Get the first word
    let firstWord = word[0];
    //Capitalize the word
    firstWord = firstWord.toUpperCase();
    //Get the rest od the string
    let restWord = word.slice(1);
    //Join the capitalize letter with the rest of the string
    const newWord = firstWord + restWord;
    return newWord;
}

//Function that reverse a word
function reverse(word) {
    let reverseWord = "";
    //For loop that starts at the final of the word and store the  last elements as the first ones
    for(let i = word.length - 1; i >= 0; i--) {
        reverseWord = reverseWord + word[i];
    }
    return reverseWord;
}

//Object with four functions: add, subtract, multiply and divide
const calculator = {
    //Adds two numbers
    add:    function(a,b) {
                return a + b;
            },
    //Subtracts two numbers
    subtract:   function(a,b) {
                    return a - b;
                },
    ///Divides two numbers
    divide:     function(a,b) {
                    return a / b;
                },
    //Multiplies two numbers
    multiply:   function(a,b) {
                    return a * b;
                }
};

//Function that encrypts a word with the method that caesar used
function caesarCipher(word, shift) {
    //Create an array of the letters in the alphabet
    const words = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    //Check if a letter was push
    let aPush = false;
    //Variable that will store the encrypt word
    let cipherWord = "";
    //fot loops that goes through every element in the word
    for(let i = 0; i < word.length; i++) {
        //Set the push as false as it is starting a new letter
        aPush = false
        //For loop that goes through the letters in the alphabet
        for(let j = 0; j < 26; j++) {
            //Check if the current letter of the word is equal to the current letter in the alphabet
            if(word[i] === words[j]) {
                //The new word will be the letter that is in the position determined by the shift
                let newWord = j + shift;
                //Check if the position is greater or equal than 26 (the max length of the array)
                if(newWord >= 26) {
                    //Apply modulo to get a number between 0 and 25
                    newWord = newWord % 26;
                }
                //Store the new value of the letter in the cipherWord
                cipherWord += words[newWord];
                //A letter has been pushed
                aPush = true;
            } else if(word[i] === words[j].toUpperCase()) { //Check if there is an upperCase
                //The new word will be the letter that is in the position determined by the shift
                let newWord = j + shift;
                //Check if the position is greater or equal than 26 (the max length of the array)
                if(newWord >= 26) {
                    //Apply modulo to get a number between 0 and 25
                    newWord = newWord % 26;
                }
                //Store the new value of the letter in the cipherWord
                cipherWord += words[newWord].toUpperCase();
                //A letter has been pushed
                aPush = true;
            }
        }
        //Check is a letter was not push (this means there was a special character or a space)
        if(aPush === false) {
            //Push the special character or space in the encrypt word
            cipherWord += word[i];
        }
    }
    return cipherWord;
}

//Function that give the average, min, max and length of an array as an object
function analyzeArray(theArray) {
    //The object that will store the values
    const theObject = {};
    //Variable that will store the average
    let theAverage = 0;
    //The variables as for the min and max will store the first element
    let theMin = theArray[0];
    let theMax = theArray[0];

    //For loop that goes through every element in the array
    for(let i = 0; i < theArray.length; i++) {
        //Sum all the values for the average
        theAverage += theArray[i];
        //Check if the current number is smaller than the current min
        if(theMin > theArray[i]) {
            //Establish the smaller number as the new min
            theMin = theArray[i];
        }

        //Check if the current number is bigger than the current max
        if(theMax < theArray[i]) {
            //Establish the bigger number as the new max
            theMax = theArray[i];
        }
    }

    //Calculate the average
    theAverage = theAverage / theArray.length;

    //Set the values in the object
    theObject.average = theAverage;
    theObject.min = theMin;
    theObject.max = theMax;
    theObject.length = theArray.length;

    return theObject;
}

export {capitalize, reverse, calculator, caesarCipher, analyzeArray}