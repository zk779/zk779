// program to check leap year
var num:string|null = prompt('Enter a year:');
var year:number = Number(num);

//three conditions to find out the leap year
if ((year % 4 ==0) && ( year % 100 != 0 ) || (year % 400 == 0 )) {
    console.log(year + ' is a leap year');
} 
else {
    console.log(year + ' is not a leap year');
}

