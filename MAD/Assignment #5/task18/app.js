"use strict";
var num1 = prompt('Enter Purchase Amount');
var num2 = prompt('Enter Selling Amount');
var x = Number(num1);
var y = Number(num2);
if (x > y) {
    var z = x - y;
    var z = -1 * (z / x) * 100;
    console.log(z + '% Profit');
}
else {
    var z = y - x;
    var z = -1 * (z / x) * 100;
    console.log(z + '% loss');
}
