/*
let, const & var

var : Variable can be re-declared & updated. A global scope variable.
let : Variable cannot be re-declared but can be updated. A block scope variable.
const : Variable cannot be re-declared or updated. A block scope variable.
*/

let radius = 2;
radius = 4;
radius = 8;
const PI = 3.14;

console.log(2*PI*radius);
