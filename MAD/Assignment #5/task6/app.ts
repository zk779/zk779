var num1:string|null = prompt('Enter Year');


var year:number = Number(num1);


   // if the year is divided by 4
   if (year % 4 == 0) {

    // if the year is century
    if (year % 100 == 0) {

      // if year is divided by 400
      // then it is a leap year
      if (year % 400 == 0)
        console.log(year +" is leap");
      else
      console.log(year +" is not leap");
    }
    
    // if the year is not century
    else
    console.log(year +" is leap");
  }
  
  else
  console.log(year +" is not leap");
