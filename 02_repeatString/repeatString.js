const repeatString = function(string,num) {
    let hostString = ""; 
    if (num >= 0){
        for (;num > 0; num--){
            hostString += string;
        }
    } else {return 'ERROR'};
    return hostString;
};

// Do not edit below this line
module.exports = repeatString;
