"use strict";
var num1 = prompt('Enter Side1');
var num2 = prompt('Enter Side2');
var num3 = prompt('Enter Side3');
var x = Number(num1);
var y = Number(num2);
var z = Number(num3);
if (x + y > z) {
    if (x + z > y) {
        if (y + z > x) {
            console.log(x + ' ' + y + ' ' + z + ' are valid sides of triangle');
        }
    }
}
else {
    console.log(x + ' ' + y + ' ' + z + ' are not valid sides of triangle');
}
