'use strict';

var array = [1, 2, 3, 4, 5, 6, 7];

console.log('Un-reduced array: ', array);

var sum = array.reduce(function (a, b) {
	return a + b;
});
console.log('Sum is: ', sum);

var sumLogs = array.reduce(function (a, b) {
	console.log('a is ', a, '| b is ', b);
	return a + b;
}, 0);
console.log('Sum is: ', sum);

var squares = array.reduce(function (a, b) {
	a[b] = b * b;
	return a;
}, {});

console.log(squares);