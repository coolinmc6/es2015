'use strict';

var items = [1, 2];
var arr = [3, 4, 5, 6];
var newItems = items.concat(3, 4, 5, "hello", undefined, arr);

console.log(newItems);
// notice how you can mix types
// send in array and add it as if individual values, except for nested arrays
// 

var people = [{
	name: 'Shane'
}, {
	name: 'Sally'
}];
var people2 = [{
	name: 'Simon'
}, {
	name: 'Ben'
}];

var people3 = people.concat(people2);
console.log(people3);

people.concat(people2).forEach(function (person) {
	console.log(person.name);
});