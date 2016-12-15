var votes = [
	"angular",
	"react",
	"angular",
	"react",
	"angular",
	"react",
	"ember",
	"vanilla",
	"angular", 
	"react", 
	"angular"
];

var initialValue = {};

var reducer = function(tally, vote){
	if(!tally[vote]){
		tally[vote] = 1;
	} else {
		tally[vote] = tally[vote] + 1;
	}

	return tally;
}

var result = votes.reduce(reducer, initialValue);

console.log(result);

var result2 = votes.reduce((all,item) => {
	all[item] ? all[item] += 1 : all[item] = 1;
	return all;
}, {})

console.log(result2);