const isEven = function(x) {

    // handle edge case of negative numbers
    if (x < 0) x *= -1; 

    // handle base cases first
    if (x === 0) return 1;
    else if (x === 1) return 0;
    
    
    // call recursion
    else return isEven((x - 2));
}



console.log(isEven(-50));
console.log(isEven(75));
console.log(isEven(-1));