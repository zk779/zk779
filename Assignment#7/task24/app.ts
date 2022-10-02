const str = prompt('Enter the string');

// remove all letters from the string
str= str.replace(/[A-Za-z]/g, "") // "  123"

// remove all digits from the string
// string.replace(/\d/g, "") // "hello world "

console.log(str);
