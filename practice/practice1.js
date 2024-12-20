/*

var a = 10;
if (true) {
    var a = 20;
}
console.log(a);

--> Answer will be 20 as a has var as a keyword leading it to being global scoped
 */

/* Write a function using let to print numbers from 1 to 5. */


function printNumbers() {
    for (c = 5; c > 0; c--){
        console.log(c)
    }
}
printNumbers()
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof c)
console.log(typeof 1)
console.log(typeof true)
console.log(typeof "Jimbro")
console.log(typeof 'going to gym')