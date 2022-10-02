const str:any = prompt("Enter the string");
const strr:any= prompt('Enter the charcater to replaced at last index');


const char = str[str.length-1];
const charr = strr;


const replaced = str.replace(char, charr);
console.log(replaced);