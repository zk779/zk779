var num1:string|null = prompt('Enter Purchase Amount');
var num2:string|null = prompt('Enter Selling Amount');

var x:number = Number(num1);
var y:number = Number(num2);

if(x>y)
{
    var z = x-y
    var z = -1*(z/x)*100
    console.log(z+'% Profit')
}
else
{
    var z = y-x
    var z = -1*(z/x)*100
    console.log(z+'% loss')
}


