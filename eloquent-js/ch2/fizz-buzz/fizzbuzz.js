for (i=1;i<101;i++){

    // treat divisibility by 3 and 5 separately, as exclusives.
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i + " : Fizz");
    }
    else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i + " : Buzz");
    }

    // integers divisible by 3 and 5 are always divisible by 15
    else if (i % 15 === 0) {
        console.log(i + " : FizzBuzz");
    }

    // everything else is a nope!, so print it as '---'
    else {
        console.log(i + " : ---");
    }
}