'use strict';

console.log('JavaScript Reduce and Map in Depth');
console.log('Source: https://www.youtube.com/watch?v=t4MOEfpsC60&t=29s');

var json = $.getJSON("http://www.json-generator.com/api/json/get/ccQVJHVqqa?indent=2").then(function (json) {
	window.json = json;
	return window.json;
});
// 0.2 is too short
var seconds = 0.800;
// Everything must be in the setTimeout as nothing will be returned without it
window.setTimeout(function () {
	// my json variable is an array of objects with many different properties
	console.log('This is the JSON I grabbed: ', json);
	// reduce takes an array and turns it into something else; array, number, object, whatever...


	// For Loop => this is what we USED to have to do
	var ageSum = 0;
	for (var i = 0; i < json.length; i++) {
		var item = json[i];
		ageSum += item.age;
	}
	console.log('The sum of the ages: ', ageSum);

	// #1 Reduce Example
	// three arguments => all is the thing you are returning, item is the individual thing you are looping on, 
	// and index is the number of the item
	// The 0 is the starting value;
	// You MUST return something
	var ageSum2 = json.reduce(function (all, item, index) {
		all += item.age;
		return all;
	}, 0);
	console.log('The sum of the ages using reduce: ', ageSum2);

	// #2 Reduce Example
	// take an array and get a new object -> key: email address; value: name of person
	// 'keyed by email address and valued as name'
	var newObject = json.reduce(function (all, item, index) {
		all[item.email] = item.name;
		return all;
	}, {});
	console.log(newObject);

	// #3 Reduce Example
	// adds a condition; if female, add to object
	var newObject2 = json.reduce(function (all, item, index) {
		if (item.gender === "female") {
			all[item.email] = item.name;
		}
		return all;
	}, {});
	console.log(newObject2);

	// #4 Reduce Example
	// start with initial values that I know that I want
	// This works because it grabs 'all', which is the object that holds everything
	// in my object I have set two keys, 'male' and 'female'
	// so for each object, it simply finds that particular object's gender property,
	// (item.gender), and adds that entire object.  If it's a gender: 'male', then the
	// male array gets the entire object
	var genderObj = json.reduce(function (all, item, index) {
		all[item.gender].push(item);
		return all;
	}, { male: [], female: [] });
	console.log(genderObj);

	// #5 Write array.filter using reduce
	Array.prototype.filter = function (fn) {
		return this.reduce(function (all, item, index) {
			if (fn(item, index)) {
				all.push(item);
			}
			return all;
		}, []);
	};
	console.log([].filter);

	// #6 Map => returns one array with exact number of entries
	var mapArray = json.map(function (item) {
		return item.age;
	});
	console.log(mapArray);

	var mapFruit = json.map(function (item) {
		return item.favoriteFruit;
	});
	console.log(mapFruit);
}, seconds * 1000);