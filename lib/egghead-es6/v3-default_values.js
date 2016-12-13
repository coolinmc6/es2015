"use strict";

function greet(greeting) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "John";

	console.log(greeting + ", " + name);
}
greet("Hello");
// default values