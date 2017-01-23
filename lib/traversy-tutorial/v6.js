'use strict';

/*
New String & Number Methods

String
// startsWith() => delivers a true or false if it starts with a string - CASE SENSITIVE
// endsWith() => delivers a true or false it ends with a string - 
// includes() => true/false if it includes string - CASE SENSITIVE

Number
Hex
// console.log(0xFF);

Binary
// console.log(0b101011);

Octal
// console.log(0o543);

All of these return a true/false value
Number.isFinite(Infinity)
Number.isNaN(5)
Number.isInteger(-2)
*/

var theString = 'Hello, my name is Colin and I am AMAZING!';

// startsWith() => delivers a true or false if it starts with a string - CASE SENSITIVE
// endsWith() => delivers a true or false it ends with a string - 
// includes() => true/false if it includes string - CASE SENSITIVE

console.log(theString.startsWith('Hello'));
console.log(theString.startsWith('hello'));

console.log(theString.includes('name'));
console.log(theString.includes('Name'));

// Hex
// console.log(0xFF);
// // Binary
// console.log(0b101011);
// // Octal
// console.log(0o543);

console.log(Number.isFinite(Infinity));
console.log(Number.isNaN(5));

console.log(Number.isInteger(-2));