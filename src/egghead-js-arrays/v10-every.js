const items = [1,2,3,4,5]
const items2 = items.reverse()
const result = items.every(x => x < 10);
const result2 = items.every(x => x < 5);
console.log('Notice how the called with is logged right away...this thing runs right away.')
const result3 = items2.every(x => {
	console.log('Called with ',x)
	return x < 5;
});

console.log('All items are less than 10, so the result is: ',result);
console.log('Not all items are less than 5, however, so the result is: ',result2);
console.log('Only the first item was examined and it was NOT greater than 5, so the \
	result is: ',result3);

const items3 = ['1', '2', '3', 4, '5']
const result4 = items3.every(x => typeof x === 'string');
console.log(result4)


const fields = [
	{
		field: 'email',
		value: 'shane@example.com',
		errors: []
	},
	{
		field: 'name',
		value: '',
		errors: ['No Name provided']
	}
]
const isValid = fields.every(x => x.errors.length === 0);

console.log(isValid)

const videos = [
	{
		title: 'Generic title',
		length: 310,
		viewed: 310
	},	
	{
		title: 'Generic title',
		length: 310,
		viewed: 260
	}
]

const isComplete = videos.every(x => x.viewed == x.length);
const isCompleteFiltered = videos.filter(x => x.viewed == x.length);
console.log('Not everyone finished the video: ',isComplete);
console.log('Here is that same function but filtered: \n',isCompleteFiltered)
