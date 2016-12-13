'use strict';

var message = 'hi';

{
	var _message = 'bye';
}

// if using 'var', the console.log message would be 'bye', not 'hi', which is what you'd expect
// using let allows you to keep the two variables separate
console.log(message);

// I didn't quite understand this example and how it's different than var
var fs = [];

var _loop = function _loop(i) {
	fs.push(function () {
		console.log(i);
	});
};

for (var i = 0; i < 10; i++) {
	_loop(i);
}

fs.forEach(function (f) {
	f();
});

//