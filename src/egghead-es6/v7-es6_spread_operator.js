console.log([1,2,3]);
// [1, 2, 3]

console.log(...[1,2,3]);
// 1 2 3

let first = [1,2,3]
let second = [4,5,6]
let first2 = [1,2,3]

first.push(second)
first2.push(...second)

console.log(first)
// [1, 2, 3, [4, 5, 6]]
console.log(first2)
// [1, 2, 3, 4, 5, 6]

let args = [4, 5, 6]

// Instead of putting three different arguments, I can put an array of arguments with 
// '...' preceding it
function addStuff(a, b, c) {
	let result = a + b + c;
	console.log(result)
}

addStuff(...args)