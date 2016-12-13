var createGreeting = function (message, name) {
	return message + name
}

// v1
var arrowGreeting = (message, name) => {
	return message + name
}

// v2 => Cleaned up further
var arrowGreeting2 = (message, name) => message + name;

// v3 => if there's only one argument
var arrowGreeting3 = message => message;

console.log(arrowGreeting3("What's up gangsta"));

var squared = x => x * x;

