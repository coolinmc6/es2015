'use strict';

var json = $.getJSON("http://www.json-generator.com/api/json/get/cundGkvSIy?indent=2").then(function (json) {
	window.json = json;
	return window.json;
});
var array = [1, 2, 3, 4, 5, 6, 7];

console.log('Un-reduced array: ', array);

// with the one-line syntax, I don't need to 'return' anything; a + b is automatically returned
var sum = array.reduce(function (a, b) {
	return a + b;
});
console.log('Sum is: ', sum);

// I must return something so I have to 'return' a + b
var sumLogs = array.reduce(function (a, b) {
	console.log('a is ', a, '| b is ', b);
	return a + b;
}, 0);
console.log('Sum is: ', sum);

// I can't just return a[b] = b * b, I have to set the key-value pair and THEN return a,
// the object
var squares = array.reduce(function (a, b) {
	a[b] = b * b;
	return a;
}, {});

console.log(squares);