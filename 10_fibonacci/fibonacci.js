const fibonacci = function(nbr) {
    nbr = Number(nbr);
    if (nbr<1){return "OOPS"};
    let fib1 = 0;
    let fib2 = 1;
    let fib = nbr;
    for(let i = 2; nbr >= i; i++ ){
        fib = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib;
    };
    return fib;

};

// Do not edit below this line
module.exports = fibonacci;
