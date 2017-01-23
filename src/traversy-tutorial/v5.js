let name = 'Colin'

function makeUppercase(word){
	return word.toUpperCase();
}
let template = 
	`<h1>${makeUppercase('Hello')}, ${name}</h1>
	<p>This is a simple template in JavaScript</p>
	<p>2 + 2 = ${2 + 2}`;



document.getElementById('template').innerHTML = template;

/*
Template Literals Take-Aways:
- replace your quotes with backticks (``) to enable all the cool stuff...
- #1 - you can break up lines without using a line break
- #2 - you can insert variables with ${} inserted in the string and then the variable
you'd like to insert
- #3 - you can also evaluate inside the ${}
- #4 - you can call functions like the one above

Notice how with backticks, you can put the string on two lines

*/