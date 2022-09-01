"use strict";
var num1 = prompt('Enter Sallery');
var a = Number(num1);
if (a <= 10000) {
    var hra = a * 20 / 100;
    var da = a * 80 / 100;
    var salary = a + hra + da;
    console.log(salary + ' Total is Salary ' + hra + ' is HRA ' + da + ' is DA');
}
else if (a <= 20000) {
    var hra = a * 25 / 100;
    var da = a * 90 / 100;
    var salary = a + hra + da;
    console.log(salary + ' Total is Salary ' + hra + ' is HRA ' + da + ' is DA');
}
else if (a > 20000) {
    var hra = a * 30 / 100;
    var da = a * 95 / 100;
    var salary = a + hra + da;
    console.log(salary + ' Total is Salary ' + hra + ' is HRA ' + da + ' is DA');
}
