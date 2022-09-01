var num1:string|null = prompt('Enter Sallery');

var a:number = Number(num1);


if(a <= 10000)
{
    var hra:number = a*20/100
    var da:number = a*80/100
    var salary:number = a+hra+da;
    console.log(salary+' Total is Salary '+hra+' is HRA '+da+' is DA' )
}
else if(a <= 20000)
{
    var hra:number = a*25/100
    var da:number = a*90/100
    var salary:number = a+hra+da;
    console.log(salary+' Total is Salary '+hra+' is HRA '+da+' is DA' )
}
else if(a > 20000)
{
    var hra:number = a*30/100
    var da:number = a*95/100
    var salary:number = a+hra+da;
    console.log(salary+' Total is Salary '+hra+' is HRA '+da+' is DA' )
}



