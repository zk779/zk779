var num1:string|null = prompt('Enter 1st Number');
var num2:string|null = prompt('Enter 2nd Number');

var x:number = Number(num1);
var y:number = Number(num2);

if (x>y)
{
    console.log("1st number" + x +"is greater");
}
else
{
    console.log("2nd number" + y +"is greater");
}
