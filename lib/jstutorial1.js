"use strict";

// Video 1: FILTER
var triple = function triple(x) {
	return x * 3;
};

var waffle = triple;

console.log(waffle(30));

var a = triple;
console.log(a(3));