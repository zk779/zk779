var strr:string = prompt("Enter the string");
var UPPER:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER:string = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
  for(var x=0; x<strr.length; x++)
  {
    if(UPPER.indexOf(strr[x]) !== -1)
    {
      result.push(strr[x].toLowerCase());
    }
    else if(LOWER.indexOf(strr[x]) !== -1)
    {
      result.push(strr[x].toUpperCase());
    }
    else 
    {
      result.push(strr[x]);
    }
  }
console.log(result.join(''));
