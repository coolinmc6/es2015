'use strict';

// promises have a resolve and reject argument
// if it succeeds, then d.then() is executed; else it goes to d.catch()
// allows you to do asynchronous behaviors in a synchronous way
var d = new Promise(function (resolve, reject) {
	setTimeout(function () {
		if (true) {
			resolve('hello world');
		} else {
			reject('no bueno');
		}
	}, 2000);
});

d.then(function (data) {
	return console.log('success: ', data);
});

d.catch(function (error) {
	return console.log('error: ', error);
});
// d. then and d.catch can be chained together