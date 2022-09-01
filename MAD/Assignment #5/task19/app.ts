var num1:string|null = prompt('Enter Marks Physics out of 100');
var num2:string|null = prompt('Enter Marks Chemistry out of 100');
var num3:string|null = prompt('Enter Marks Biology out of 100');
var num4:string|null = prompt('Enter Marks Math out of 100');
var num5:string|null = prompt('Enter Marks Computer out of 100');



var a:number = Number(num1);
var b:number = Number(num2);
var c:number = Number(num3);
var d:number = Number(num4);
var e:number = Number(num5);

var total:number = 500;
var sum:number = a+b+c+d+e;
var percent:number = (sum/total)*100;


if(percent >= 90 )
{
    console.log(percent+'% Grade is A')
}
else if(percent>=80)
{
    console.log(percent+'% Grade is B')
}
else if(percent >= 70)
{
    console.log(percent+'% Grade is C')
}
else if(percent >= 60 )
{
    console.log(percent+'% Grade is D')
}
else if(percent>=40)
{
    console.log(percent+'% Grade is E')
}
else
{
console.log(percent+'% Grade is F')

}


