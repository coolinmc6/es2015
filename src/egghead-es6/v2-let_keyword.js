let message = 'hi';

{
	let message = 'bye';
}

// if using 'var', the console.log message would be 'bye', not 'hi', which is what you'd expect
// using let allows you to keep the two variables separate
console.log(message);


// I didn't quite understand this example and how it's different than var
var fs = [];

for (let i = 0; i < 10; i++) {
	fs.push(function() {
		console.log(i)
	})
}

fs.forEach(function(f){
	f();
})

// 