'use strict';

console.log('Part 6: Currying\n\n');

// let dragon = (name, size, element) =>
// 	name + ' is a ' +
// 	size + ' dragon that breathes ' + 
// 	element + '!'

// console.log(dragon('fluffykins', 'tiny', 'lightning'))

var dragon = function dragon(name) {
	return function (size) {
		return function (element) {
			return name + ' is a ' + size + ' dragon that breathes ' + element + '!';
		};
	};
};

console.log(dragon('fluffykins')('tiny')('lightning'));