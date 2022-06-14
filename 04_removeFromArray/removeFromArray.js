const removeFromArray = function(array, ...remove) {
    array = array.filter((item) => !remove.includes(item));
    let acceptArray = array;
    console.log("final Array: ", acceptArray);
    return acceptArray.sort();
};

// Do not edit below this line
module.exports = removeFromArray;
