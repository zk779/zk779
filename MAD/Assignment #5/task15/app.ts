var num1:string|null = prompt('Enter Side1');
var num2:string|null = prompt('Enter Side2');
var num3:string|null = prompt('Enter Side3');



var x:number = Number(num1);
var y:number = Number(num2);
var z:number = Number(num3);
if(x+y>z)
{
    if(x+z>y)
    {
        if(y+z>x)
        {
            console.log(x+' '+y+' '+z+' are valid sides of triangle')
        }
    }
}
else
{
    console.log(x+' '+y+' '+z+' are not valid sides of triangle')
}


