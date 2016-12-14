'use strict';

var items = [1, 2, 3, 4, 5];
var items2 = items.reverse();
var result = items.every(function (x) {
	return x < 10;
});
var result2 = items.every(function (x) {
	return x < 5;
});
console.log('Notice how the called with is logged right away...this thing runs right away.');
var result3 = items2.every(function (x) {
	console.log('Called with ', x);
	return x < 5;
});

console.log('All items are less than 10, so the result is: ', result);
console.log('Not all items are less than 5, however, so the result is: ', result2);
console.log('Only the first item was examined and it was NOT greater than 5, so the \
	result is: ', result3);

var items3 = ['1', '2', '3', 4, '5'];
var result4 = items3.every(function (x) {
	return typeof x === 'string';
});
console.log(result4);

var fields = [{
	field: 'email',
	value: 'shane@example.com',
	errors: []
}, {
	field: 'name',
	value: '',
	errors: ['No Name provided']
}];
var isValid = fields.every(function (x) {
	return x.errors.length === 0;
});

console.log(isValid);

var videos = [{
	title: 'Generic title',
	length: 310,
	viewed: 310
}, {
	title: 'Generic title',
	length: 310,
	viewed: 260
}];

var isComplete = videos.every(function (x) {
	return x.viewed == x.length;
});
var isCompleteFiltered = videos.filter(function (x) {
	return x.viewed == x.length;
});
console.log('Not everyone finished the video: ', isComplete);
console.log('Here is that same function but filtered: \n', isCompleteFiltered);