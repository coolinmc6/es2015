'use strict';

// Video 4: Reduce Advanced - Part 4 o fFunctional Programming in Javascript
// I didn't get my version to work as he did it...I think I need babel

// import fs from 'fs';
// var output = fs.readFileSync('data.txt');
// console.log('output', output);
/*
var text = 'mark johnson	waffle iron	80	2\
			mark johnson	blender	200	2\
			mark johnson	pot	70	4\
			Nikita Smith	waffle iron	80	1\
			Nikita Smith	blender	190	3\
			Nikita Smith	knife	10	4'
var output = text
	.trim()
	.split('\n')
	.map(function(line){
		return line.split('\t')
	})
	.reduce(function(customers, line){
		customers[line[0]] = []
		// customers[line[0]] = customers[line[0]] || []
		// customers[line[0]].push({
		// 	name: line[1],
		// 	price: line[2],
		// 	quantity: line[3]
		// })
		return customers
	}, {})
console.log('output', JSON.stringify(output, null, 2));
*/

console.log('Part 4: Reduce Advanced\n\n');

var text = 'mark johnson	waffle iron	80	2\
			mark johnson	blender	200	2\
			mark johnson	pot	70	4\
			Nikita Smith	waffle iron	80	1\
			Nikita Smith	blender	190	3\
			Nikita Smith	knife	10	4';
var output = text.trim().split('\n').map(function (line) {
	return line.split('\t');
}).reduce(function (customers, line) {
	customers[line[0]] = [];
	customers[line[0]].push({
		name: line[1],
		price: line[2],
		quantity: line[3]
	});
	return customers;
}, {});

console.log('output', JSON.stringify(output, null, 2));