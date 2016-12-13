var myMap = new Map();

// API
/*
set()
get()
size
clear()
has()
*/
var myObj = {};
var myFunc = function(){}

myMap.set('foo', 'bar');
myMap.set('hello', 'world');

// returns 'bar' because that's what we signed it to; anything else returns undefined
console.log(myMap.get('foo'));

// produces 2 because we set two k-v pairs
console.log(myMap.size);

console.log(myMap.has('bar'));

// Iterators
//keys()
//entries()
//values

for(var key of myMap.keys()){
	console.log(key);
}
// produces foo and hello in the console (separate lines)


for(var value of myMap.values()){
	console.log(value);
}
// produces bar and world in the console (separate lines)


for(var [key, value] of myMap.entries()){
	console.log(key + ' => ' + value);
}
// produces key and value for each but needs the myMap.entries()

// WeakMap just seems to be a worse Map...
// var myWeakMap = new WeakMap()