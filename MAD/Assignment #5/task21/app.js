"use strict";
var num1 = prompt('Enter Unit');
var a = Number(num1);
if (a <= 50) {
    var price = a * 0.5;
    var surcharge = price * 20 / 100;
    var totalprice = price + surcharge;
    console.log(price + ' is price with 0.5/unit ' + surcharge + ' surcharge with this price ' + totalprice + ' is your total price');
}
else if (a > 50 && a <= 150) {
    var price = a * 0.75;
    var surcharge = price * 20 / 100;
    var totalprice = price + surcharge;
    console.log(price + ' is price with 0.5/unit ' + surcharge + ' surcharge with this price ' + totalprice + ' is your total price');
}
else if (a > 100 && a <= 250) {
    var price = a * 1.20;
    var surcharge = price * 20 / 100;
    var totalprice = price + surcharge;
    console.log(price + ' is price with 0.5/unit ' + surcharge + ' surcharge with this price ' + totalprice + ' is your total price');
}
else if (a > 250) {
    var price = a * 1.50;
    var surcharge = price * 20 / 100;
    var totalprice = price + surcharge;
    console.log(price + ' is price with 0.5/unit ' + surcharge + ' surcharge with this price ' + totalprice + ' is your total price');
}
