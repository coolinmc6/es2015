var data = [15, 3, 20];

var reducer = function(accumulator, item){
	console.log('Accumulator is: ', accumulator);
	console.log('Item is: ', item);
	return accumulator + item;
}

var initialValue = 0;

var total = data.reduce(reducer,initialValue);

console.log(total);

var total2 = data.reduce((all, item, index) => {
	var current = all + item;
	console.log(index + ": " + current)
	return all + item;
})
console.log(total2);

// I prefer the .reduce(all,item,index) =>{} --> more intuitive than creating a separate reducer function
