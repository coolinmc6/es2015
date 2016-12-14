# README.md

## Notes
- Awesome site: [JSON Generator](http://www.json-generator.com/)

## JavaScript Functions / Features by file

- Concat
  - egghead-js-arrays/v1
- Filter
- Map
- Promises
  - egghead-es6/v12
- Push
  - egghead-js-arrays/v8
- Reduce
  - egghead-js-arrays/v11
  - cm-playaround/reduce1.js

## YouTube Videos

### Javascript Reduce and Map In Depth. Explained

- source: [Javascript Reduce and Map In Depth. Explained.](https://www.youtube.com/watch?v=t4MOEfpsC60) - 18mins
  - good stuff, I need to go through this again
- I like the general syntax and explanation he gave for reduce:
```javascript
var ageSum2 = json.reduce(function(all, item, index) {
  all += item.age;
  return all;
}, 0);
```
  - all => the thing you are ultimately returning; array, object, number, etc.
  - item => is the individual thing you are looping on
  - index => is the number in the array

### JavaScript Lectures from [funfunfunction](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q)


- **STATUS**: 75%
- Files:
  - jstutorial1 - 8 under src
- jstutorial4.js
  - did not work 100% as expected
- jstutorial5.js
- jstutorial6.js
- jstutorial7.js
  - Recursion is when a function calls itself until it doesn't
- jstutorial8.js
  - NOT COMPLETE

## Egghead.io
### Egghead.io: Learn ES6 (ECMAScript 2015) 
- source: [Learn ES6 (ECMAScript 2015)](https://egghead.io/courses/learn-es6-ecmascript-2015)


### Egghead.io: Reduce Data with Javascript Array#reduce 
- source: [Reduce Data with Javascript Array#reduce](https://egghead.io/courses/reduce-data-with-javascript)

### Egghead.io: Understand JavaScript Arrays
- source: [Understand JavaScript Arrays](https://egghead.io/courses/javascript-arrays-in-depth)
- pretty cool, using filter multiple times

```javascript
var filtered = lessons
	.filter(x => x.tags.indexOf(searchTerm) > -1 )
	.filter(x => x.views > minViews)
	.sort((a,b) => b.views - a.views)
	.map(x => `  <li>${x.title}</li>`)
	.join('\n');
```

-searchTerm and minViews are both variables declared above
- Video 8 is really cool:
  - I like how I was able to dynamically add list items to the screen
- Video 10 also really good, interesting function called 'every'
  - he also brings in filter as well which is similar but returns the actual object
  in an array, not just a true/false value
- Video 11: reduce