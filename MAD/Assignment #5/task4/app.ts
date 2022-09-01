var num1:string|null = prompt('Enter 1st Number');


var x:number = Number(num1);


if (x % 5 == 0 && x % 11 ==0 ) 
{
    console.log(x +" is divisble by 5 & 11 ");
}
if(x % 5 == 0)
{
 console.log(x + " is divisble by 5 only not with 11")
}
if(x % 11 == 0)
{
 console.log(x + " is divisble by 11 only not with 5 ")
}
else
{
    console.log(x +" is not divisble by 5 & 11 " );
}
