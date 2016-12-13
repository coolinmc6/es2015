"use strict";

var _console;

console.log([1, 2, 3]);
// [1, 2, 3]

(_console = console).log.apply(_console, [1, 2, 3]);
// 1 2 3

var first = [1, 2, 3];
var second = [4, 5, 6];
var first2 = [1, 2, 3];

first.push(second);
first2.push.apply(first2, second);

console.log(first);
// [1, 2, 3, [4, 5, 6]]
console.log(first2);
// [1, 2, 3, 4, 5, 6]

var args = [4, 5, 6];

// Instead of putting three different arguments, I can put an array of arguments with 
// '...' preceding it
function addStuff(a, b, c) {
	var result = a + b + c;
	console.log(result);
}

addStuff.apply(undefined, args);