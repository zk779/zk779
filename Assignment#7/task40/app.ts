var num1:string|null = prompt('Enter 1st Number');
var num2:string|null = prompt('Enter 2nd Number');
var num3:string|null = prompt('Enter 3rd Number');

var x:number = Number(num1);
var y:number = Number(num2);
var z:number = Number(num3);

if (x>y && x>z) 
{
    console.log("1st number " + x +" is greatest from 2nd no. " + y +" and 3rd no. " + z );
}
if (y>x && y>z) 
{
    console.log("2nd number " + y +" is greatest from 1st no. " + x +" and 3rd no. " + z );
}
else
{
    console.log("3rd number " + z +" is greatest from 1st no. "  + x +" and 2nd " + y );
}
