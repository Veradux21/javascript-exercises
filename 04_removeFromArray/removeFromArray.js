const removeFromArray = function(array, ...remove) {
    let  acceptArray = new Array();
    let i = array.length - 1;
    console.log(array, array.length, remove, remove.length, acceptArray)
    while (i >= 0){
        let j = remove.length - 1;
        console.log("i loop", "i:"+i, "j:"+j, array, array.length, remove, remove.length, 
            acceptArray);
        while (j >= 0){
            if (array[i]==remove[j]){
                array.pop();
            }else{
                acceptArray.push(array[i]);
            }
            console.log("j loop", "i:"+i, "j:"+j, array, array.length, remove, remove.length, 
            acceptArray);
            j--;
        }
        i--;

    };
    console.log("final Array: ", acceptArray);
    return acceptArray.sort();
};

// Do not edit below this line
module.exports = removeFromArray;
