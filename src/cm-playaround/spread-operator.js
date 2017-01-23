let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];
let array1b = [...array1];
let array2b = [...array2];

array1.push(array2);
console.log(`The below console log will show array1 but then instead of the remaining
	5 numbers, it'll show an array.  So it'll be 5 numbers and then an array in the 6th
	slot.`)
console.log(array1);

array1b.push(...array2b);
console.log(array1b);

/*
#1 - You can use the spread operator to copy an array:
let array1b = [...array1];
I can't use let array1b = array1; that ties array1b to array1 and any changes to array1
are carried over into array1b;

#2 - You can use the spread operator to push to an array:
array1b.push(...array2b);

*/