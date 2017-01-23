'use strict';

/*
Video 7: Default Parameters & Spread Operator

-function greet($greeting = 'Hello World') => default parameter if greet() is called
without a value
- I don't quite understand what the Spread Operator is doing for me...
*/
function greet() {
	var $greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello World';

	console.log($greeting);
}

greet();

var args1 = [1, 2, 3];
var args2 = [4, 5, 6];

function test() {
	console.log(args1 + ',' + args2);
}

// ES5
// test.apply(null,args);
// test();
test.apply(undefined, args1.concat(args2));