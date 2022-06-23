const reverseString = function(str) {
    let revStr = ""
/*     for (let i = 0 ; i <= str.length; ++i){
        revStr += str.slice(-i);
    } */
    let i = str.length - 1
    while (i >= 0) { 
        revStr += str[i]
        i--;
    }
    return revStr;
};

const palindromes = function (phrase) {
    console.log(phrase)
    phrase = phrase.toLowerCase();
    console.log(phrase);
    phrase = phrase.replace( /(\W+)/g , "");
    console.log(phrase)
    let revPhrase = reverseString(phrase);
    console.log(revPhrase);
    if (phrase === revPhrase){return true} else {return false};
};

// Do not edit below this line
module.exports = palindromes;
