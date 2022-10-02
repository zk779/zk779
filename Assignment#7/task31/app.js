var myString = prompt("Enter the String:");
var mySubString = prompt("Enter the Word you want to search:");
var count = myString.split(mySubString).length - 1;
console.log(count);
