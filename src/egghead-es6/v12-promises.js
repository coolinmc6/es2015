// promises have a resolve and reject argument
// if it succeeds, then d.then() is executed; else it goes to d.catch()
// allows you to do asynchronous behaviors in a synchronous way
var d = new Promise((resolve, reject) => {
	setTimeout(() => {
		if(true) {
			resolve('hello world');
		} else {
			reject('no bueno');
		}

	}, 2000);
	
});

d.then((data) => console.log('success: ', data));

d.catch((error) => console.log('error: ', error));
// d. then and d.catch can be chained together
