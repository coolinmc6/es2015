"use strict";

var pets = ["Cat", "Dog"];

pets.push("Hamster", "Horse");

console.log(pets);
// you can add multiple items to an array, not just one

var stuff = ["Bastketball", "Pencil"];
var wishList = ['Magic Mouse', 'soccer ball'];

stuff.push.apply(stuff, wishList);
console.log(stuff);
// to add an array with push, I must do push.apply and then list both arrays?


var input = document.getElementById('input');
var button = document.getElementById('button');
var list = document.getElementById('list');

var pets2 = [];

button.addEventListener('click', function (evt) {
	if (input.value.length > 0) {
		pets2.push(input.value);
		input.value = "";
		render();
	}
});

function render() {
	list.innerHTML = pets2.map(function (x) {
		return "<li>" + x + "</li>";
	}).join('');
}