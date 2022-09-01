var num1:string|null = prompt('Enter Unit');

var a:number = Number(num1);


if(a <= 50)
{
    var price:number = a*0.5;
    var surcharge:number = price*20/100;
    var totalprice:number = price+surcharge;

    console.log(price+' is price with 0.5/unit '+surcharge+' surcharge with this price '+totalprice+' is your total price')
}
else if(a >50 && a<=150)
{
    var price:number = a*0.75;
    var surcharge:number = price*20/100;
    var totalprice:number = price+surcharge;

    console.log(price+' is price with 0.5/unit '+surcharge+' surcharge with this price '+totalprice+' is your total price')
}
else if(a >100 && a<=250)
{
    var price:number = a*1.20;
    var surcharge:number = price*20/100;
    var totalprice:number = price+surcharge;

    console.log(price+' is price with 0.5/unit '+surcharge+' surcharge with this price '+totalprice+' is your total price')
}
else if(a >250)
{
    var price:number = a*1.50;
    var surcharge:number = price*20/100;
    var totalprice:number = price+surcharge;

    console.log(price+' is price with 0.5/unit '+surcharge+' surcharge with this price '+totalprice+' is your total price')
}



