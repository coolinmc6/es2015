var {color} = {
	color: "blue"
}

console.log(color)

var {color, position} = {
	color: "blue",
	name: "steve",
	position: "north",
	other: 'Happiness'	
}

console.log(color, position)

let [first,,,,fifth] = ["red", "yellow", "green", "blue", "orange"];

console.log(first)
console.log(fifth)