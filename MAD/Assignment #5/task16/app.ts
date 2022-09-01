var num1:string|null = prompt('Enter Side1');
var num2:string|null = prompt('Enter Side2');
var num3:string|null = prompt('Enter Side3');



var x:number = Number(num1);
var y:number = Number(num2);
var z:number = Number(num3);
if(x==y && y==z)
{
    console.log(x+' '+y+' '+z+' are sides of Equilateral Triangle')
}
if(x==y || y==z || x==z)
{
    console.log(x+' '+y+' '+z+' are sides of Isoselece Triangle')
}
else
{
    console.log(x+' '+y+' '+z+' are sides of Scalene Triangle')
}


