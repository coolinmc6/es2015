# README.md

## How to Use
- create all files in the /src directory
- run the following in shell
```sh
npm run build
```

- open in browser
- aggregate notes [here](https://github.com/coolinmc6/es2015/blob/master/Notes.md#es2015--es6-notes)
  - all notes into Bulk and then distill them into the good stuff above
  - 

## Next Steps
- Traversy Tutorials: Finished on v7, start on v8: Set, Map, WeakSet & WeakMap


## Notes
- Awesome site: [JSON Generator](http://www.json-generator.com/)
- Next steps would be to (not in any particular order): 
  - dig into reduce, filter, and map some more
  - Redo funfunfunction video on Promises
  - Redo funfunfunction video on closures

### Babel
- creating a new repo setup for Babel: [Babel CLI](http://babeljs.io/docs/setup/#installation):

1. create repo
2. install Babel in repo

  ```sh
  npm install --save-dev babel-cli
  ```

3. update "scripts" in package.json

  ```json
    {
      "name": "my-project",
      "version": "1.0.0",
  +   "scripts": {
  +     "build": "babel src -d lib"
  +   },
      "devDependencies": {
        "babel-cli": "^6.0.0"
      }
    }
  ```

4. Following command builds .js files from src (where you code everything) to lib (where
Babel spits out everything)

  ```sh
  npm run build
  ```

5. Create .babelrc configuration file

  ```sh
  npm install babel-preset-env --save-dev
  ```
  
  ```json
  {
    "presets": ["env"]
  }
  ```


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

## Traversy-Tutorial
- source: [JavaScript ES6 / ES2015 Tutorials](https://www.youtube.com/playlist?list=PLillGF-RfqbZ7s3t6ZInY3NjEOOX7hsBv)
- Finished on v4, start on v5

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

- from Video 2, I re-wrote the function using the syntax that I'm more familiar with and
the ternary operator:
```javascript
var result2 = votes.reduce((all,item) => {
  all[item] ? all[item] += 1 : all[item] = 1;
  return all;
}, {})
```

- Video 3 was really good and showed how map() and filter() are spinoffs of reduce
  - you also see how slow it is to use filter and map separately vs. just using reduce
  - The code below is pretty cool...you can use console.time() to see how long it takes to run something.
  - console.time('name of timed test'), [stuff your timing], console.timeEnd('name of timed test')
```javascript
console.time('bigDataReduce');
var reducedBigData = bigData.reduce(function(acc,value){
  if(value % 2 === 0){
    acc.push(value*2);
  }
  return acc;
},[])
console.timeEnd('bigDataReduce');
```


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









