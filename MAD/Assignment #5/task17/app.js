"use strict";
// take input from the user
var num1 = prompt("Enter the first number: ");
var num2 = prompt("Enter the second number: ");
var num3 = prompt("Enter the third number: ");
var a = Number(num1);
var b = Number(num2);
var c = Number(num3);
// calculate discriminant
var disc = b * b - 4 * a * c;
// condition for real and different roots
if (disc > 0) {
    var root1 = (-b + Math.sqrt(disc)) / (2 * a);
    var root2 = (-b - Math.sqrt(disc)) / (2 * a);
    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
// condition for real and equal roots
else if (disc == 0) {
    root1 = root2 = -b / (2 * a);
    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-disc) / (2 * a)).toFixed(2);
    // result
    console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
}
