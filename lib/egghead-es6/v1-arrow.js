"use strict";

var createGreeting = function createGreeting(message, name) {
	return message + name;
};

// v1
var arrowGreeting = function arrowGreeting(message, name) {
	return message + name;
};

// v2 => Cleaned up further
var arrowGreeting2 = function arrowGreeting2(message, name) {
	return message + name;
};

// v3 => if there's only one argument
var arrowGreeting3 = function arrowGreeting3(message) {
	return message;
};

console.log(arrowGreeting3("What's up gangsta"));

var squared = function squared(x) {
	return x * x;
};