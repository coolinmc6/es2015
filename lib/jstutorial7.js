'use strict';

// Video 7: Recursion
/*
- Recursion is when a function calls itself until it doesn't


*/
console.log('Part 7: Recursion\n\n');

var countDownFrom = function countDownFrom(num) {
	if (num == 0) return;
	console.log(num);
	countDownFrom(num - 1);
};

countDownFrom(10);

var categories = [{ id: 'animals', 'parent': null }, { id: 'mammals', 'parent': 'animals' }, { id: 'cats', 'parent': 'mammsls' }, { id: 'dogs', 'parent': 'mammals' }, { id: 'chihuahua', 'parent': 'dogs' }, { id: 'labrador', 'parent': 'dogs' }, { id: 'retriever', 'parent': 'dogs' }, { id: 'persian', 'parent': 'cats' }, { id: 'siamese', 'parent': 'cats' }];

var makeTree = function makeTree(categories, parent) {
	var node = {};
	categories.filter(function (c) {
		return c.parent === parent;
	}).forEach(function (c) {
		return node[c.id] = makeTree(categories, c.id);
	});

	return node;
};

console.log(JSON.stringify(makeTree(categories, null), null, 2));

function isBigEnough(value) {
	return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);
// let fibonacci = (old_num1, old_num2) => {
// 	if (old_num2 >= 250) return;
// 	let new_num = old_num1 + old_num2
// 	console.log(new_num);
// 	fibonacci(old_num2, new_num)
// }

// fibonacci(1,1)