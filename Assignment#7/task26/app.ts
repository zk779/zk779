const str = prompt("Enter the string");
const strr= prompt('Enter the charcater to replaced at first index');

const char = str[0];
const charr = strr;


const replaced = str.replace(char, charr);
console.log(replaced);