// bean counter

function countChar(string, ch) {
    string = string.toLowerCase();
    ch = ch.toLowerCase();
    let counter = 0;
    for ( i = 0; i < string.length; i++) {
        if (string[i] === ch) {
            counter++;
        }
    }
    return "Counted " + counter + " " + ch + "'s in " + string
}


function countB(string) {
    return countChar(string, 'b')
}
console.log(countChar("bonobo", "O"));

console.log(countB("bonobababa"));