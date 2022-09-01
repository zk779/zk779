var num1:string|null = prompt('Enter Angle');
var num2:string|null = prompt('Enter Angle');
var num3:string|null = prompt('Enter Angle');



var x:number = Number(num1);
var y:number = Number(num2);
var z:number = Number(num3);
if(x+y+z==180)
{
    console.log(x+' '+y+' '+z+' are valid angles of triangle')
}
else
{
    console.log(x+' '+y+' '+z+' are not valid angles of triangle')
}


