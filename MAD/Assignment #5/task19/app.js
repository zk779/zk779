"use strict";
var num1 = prompt('Enter Marks Physics out of 100');
var num2 = prompt('Enter Marks Chemistry out of 100');
var num3 = prompt('Enter Marks Biology out of 100');
var num4 = prompt('Enter Marks Math out of 100');
var num5 = prompt('Enter Marks Computer out of 100');
var a = Number(num1);
var b = Number(num2);
var c = Number(num3);
var d = Number(num4);
var e = Number(num5);
var total = 500;
var sum = a + b + c + d + e;
var percent = (sum / total) * 100;
if (percent >= 90) {
    console.log(percent + '% Grade is A');
}
else if (percent >= 80) {
    console.log(percent + '% Grade is B');
}
else if (percent >= 70) {
    console.log(percent + '% Grade is C');
}
else if (percent >= 60) {
    console.log(percent + '% Grade is D');
}
else if (percent >= 40) {
    console.log(percent + '% Grade is E');
}
else {
    console.log(percent + '% Grade is F');
}
