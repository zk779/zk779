"use strict";
var num1 = prompt('Enter Angle');
var num2 = prompt('Enter Angle');
var num3 = prompt('Enter Angle');
var x = Number(num1);
var y = Number(num2);
var z = Number(num3);
if (x + y + z == 180) {
    console.log(x + ' ' + y + ' ' + z + ' are valid angles of triangle');
}
else {
    console.log(x + ' ' + y + ' ' + z + ' are not valid angles of triangle');
}
