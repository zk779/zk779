var str = prompt("Enter the string");
var strr = prompt('Enter the charcater to replaced at last index');
var char = str[str.length - 1];
var charr = strr;
var replaced = str.replace(char, charr);
console.log(replaced);
