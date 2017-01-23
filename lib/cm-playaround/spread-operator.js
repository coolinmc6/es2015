"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9, 10];
var array1b = [].concat(array1);
var array2b = [].concat(array2);

array1.push(array2);
console.log("The below console log will show array1 but then instead of the remaining\n\t5 numbers, it'll show an array.  So it'll be 5 numbers and then an array in the 6th\n\tslot.");
console.log(array1);

console.log(array1b);
array1b.push.apply(array1b, _toConsumableArray(array2b));
console.log(array1b);