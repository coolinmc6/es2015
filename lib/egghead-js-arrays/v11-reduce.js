'use strict';

var items = [1, 2, 3, 4, 5];

var sum = items.reduce(function (prev, item) {
	console.log('prev', prev, 'item', item);
	return prev + item;
}, 0);

// fn(1,2) -> 3
// fn(3,3) -> 6
// fn(6,4) -> 10
// fn(10,5) -> 15

console.log(sum);

// So...if the ', 0' isn't provided at the end after the function curly brace, the function
// is only run 4 times with '1' being the first previous item.  But by adding the }, 0)
// we make 0 the first 'prev' argument and the function is run 5 times

var albums = [{
	title: 'Stuff photo album',
	images: ['01.jpg', '02.jpg']
}, {
	title: 'Spanish vacation',
	images: ['04.jpg', '03.jpg', '06.jpg']
}];

// This gives us the total number of pictures across both albums
var numImages = albums.reduce(function (prev, album) {
	return prev + album.images.length;
}, 0);

console.log('numImages = ', numImages);

// This returns an array of all images from both albums

var allPhotos = albums.reduce(function (prev, album) {
	return prev.concat(album.images);
	// return prev.push.apply(prev,album.images)
}, []);

console.log(allPhotos);

// I don't understand why I can't use 'push' and must use concat

var users = [{
	id: '01',
	name: 'Shane'
}, {
	id: '02',
	name: 'Sally'
}];

// As an array, there isn't an easy way to grab it by id so we are creating a new object
// where each key is an id and it contains an object with the name property
var newUsers = users.reduce(function (obj, user) {
	obj[user.id] = user;
	return obj;
}, {});

console.log(newUsers);
console.log(newUsers['02'].name);