'use strict';

var items = [1, 2, 3, 4, 5];
var filtered = items.filter(function (x) {
	return x > 3;
});

console.log(filtered);

var lessons = [{
	title: "Book Harry Potter 1",
	views: 960,
	tags: ['array', 'join']
}, {
	title: "Book Harry Potter 2",
	views: 1003,
	tags: ['array', 'stuff']
}, {
	title: "Book Harry Potter 3",
	views: 2500,
	tags: ['array', 'stuff2']
}, {
	title: "Book Harry Potter 4",
	views: 2503,
	tags: ['functions', 'bind']
}];

//want a new array that are in the array category with view counts over 1000

var minViews = 1000;
var searchTerm = 'array';

var filtered = lessons.filter(function (x) {
	return x.tags.indexOf(searchTerm) > -1;
}).filter(function (x) {
	return x.views > minViews;
}).sort(function (a, b) {
	return b.views - a.views;
}).map(function (x) {
	return '  <li>' + x.title + '</li>';
}).join('\n');

console.log('<ul>\n' + filtered + '\n</ul>');