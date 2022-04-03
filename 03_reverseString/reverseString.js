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

// Do not edit below this line
module.exports = reverseString;

