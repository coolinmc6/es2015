
var color = 'red';
var speed = 10;

// es5 way
// var car = {color:color, speed:speed}

// es6
var car = {color, speed}

var car2 = {
	color, 
	speed,
	 
	go() {
		console.log("vroom");
	}
};

// both log out the same thing
console.log(car)

console.log(car2)
console.log(car.color)
