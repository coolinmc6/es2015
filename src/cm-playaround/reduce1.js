
var json = $.getJSON("http://www.json-generator.com/api/json/get/cundGkvSIy?indent=2").then(function(json){
	window.json = json;
	return window.json;
})
let array = [1,2,3,4,5,6,7];

console.log('Un-reduced array: ', array);

// with the one-line syntax, I don't need to 'return' anything; a + b is automatically returned
let sum = array.reduce((a,b) => a + b);
console.log('Sum is: ', sum);

// I must return something so I have to 'return' a + b
let sumLogs = array.reduce((a,b) => {
	console.log('a is ',a,'| b is ', b);
	return a + b;
}, 0);
console.log('Sum is: ', sum);

// I can't just return a[b] = b * b, I have to set the key-value pair and THEN return a,
// the object
let squares = array.reduce((a,b) => {
	a[b] = b * b;
	return a;
}, {})

console.log(squares)