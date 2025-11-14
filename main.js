function capitalize(word) {
    let firstWord = word[0];
    firstWord = firstWord.toUpperCase();
    let restWord = word.slice(1);
    const newWord = firstWord + restWord;
    return newWord;
}

function reverse(word) {
    let reverseWord = "";
    for(let i = word.length - 1; i >= 0; i--) {
        reverseWord = reverseWord + word[i];
    }
    return reverseWord;
}

const calculator = {
    add:    function(a,b) {
                return a + b;
            },
    subtract:   function(a,b) {
                    return a - b;
                },
    divide:     function(a,b) {
                    return a / b;
                },
    multiply:   function(a,b) {
                    return a * b;
                }
};

function caesarCipher(word, shift) {
    const words = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let aPush = false;
    let cipherWord = "";
    for(let i = 0; i < word.length; i++) {
        aPush = false
        for(let j = 0; j < 26; j++) {
            if(word[i] === words[j]) {
                let newWord = j + shift;
                if(newWord >= 26) {
                    newWord = newWord % 26;
                }
                cipherWord += words[newWord];
                aPush = true;
            } else if(word[i] === words[j].toUpperCase()) {
                let newWord = j + shift;
                if(newWord >= 26) {
                    newWord = newWord % 26;
                }
                cipherWord += words[newWord].toUpperCase();
                aPush = true;
            }
        }
        if(aPush === false) {
            cipherWord += word[i];
        }
    }
    return cipherWord;
}

export {capitalize, reverse, calculator, caesarCipher}