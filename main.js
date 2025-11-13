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
    multiply: 4
}

export {capitalize, reverse, calculator}