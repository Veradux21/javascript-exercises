const sumAll = function(...args) {
    let first = args[0]
    let second = args[1]
    let sum = 0
    if (!Number.isInteger(first)||!Number.isInteger(second)){return 'ERROR';};
    if (first < 0 || second < 0){return 'ERROR';};
    if (first>second){
        let swap = first;
        first = second;
        second = swap;
    };
    for (let i = first; i <= second; i++){
        sum += i
        console.log(sum)
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
