"use strict";

var _marked = [greet].map(regeneratorRuntime.mark);

function greet() {
	return regeneratorRuntime.wrap(function greet$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					console.log("You called 'next()'");
					_context.next = 3;
					return "hello";

				case 3:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}

var greeter = greet();
console.log(greeter);
var next = greeter.next();
console.log(next);
var done = greeter.next();
console.log(done);

// I didn't get this video