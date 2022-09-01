"use strict";
var num1 = prompt('Enter Side1');
var num2 = prompt('Enter Side2');
var num3 = prompt('Enter Side3');
var x = Number(num1);
var y = Number(num2);
var z = Number(num3);
if (x == y && y == z) {
    console.log(x + ' ' + y + ' ' + z + ' are sides of Equilateral Triangle');
}
if (x == y || y == z || x == z) {
    console.log(x + ' ' + y + ' ' + z + ' are sides of Isoselece Triangle');
}
else {
    console.log(x + ' ' + y + ' ' + z + ' are sides of Scalene Triangle');
}
