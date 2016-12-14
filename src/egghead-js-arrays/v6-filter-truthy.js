var items = [1,2,3,4,5]
var filtered = items.filter(x => x > 3);

console.log(filtered);


var lessons = [
	{
		title: "Book Harry Potter 1",
		views: 960,
		tags: ['array','join']
	},
	{
		title: "Book Harry Potter 2",
		views: 1003,
		tags: ['array','stuff']
	},
	{
		title: "Book Harry Potter 3",
		views: 2500,
		tags: ['array','stuff2']
	},
	{
		title: "Book Harry Potter 4",
		views: 2503,
		tags: ['functions','bind']
	}
];

//want a new array that are in the array category with view counts over 1000

var minViews = 1000;
var searchTerm = 'array';

var filtered = lessons
	.filter(x => x.tags.indexOf(searchTerm) > -1 )
	.filter(x => x.views > minViews)
	.sort((a,b) => b.views - a.views)
	.map(x => `  <li>${x.title}</li>`)
	.join('\n');

console.log(`<ul>
${filtered}
</ul>`)
