/*
Video 7: Default Parameters & Spread Operator

-function greet($greeting = 'Hello World') => default parameter if greet() is called
without a value
- I don't quite understand what the Spread Operator is doing for me...
*/
function greet($greeting = 'Hello World') {
	console.log($greeting);
}

greet();

let args1 = [1,2,3];
let args2 = [4,5,6];

function test() {
	console.log(args1+','+args2);
}

// ES5
// test.apply(null,args);
// test();
test(...args1,...args2);