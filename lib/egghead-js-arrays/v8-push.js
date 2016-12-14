const pets = ["Cat", "Dog"];

pets.push("Hamster", "Horse")

console.log(pets);
// you can add multiple items to an array, not just one

const stuff = ["Bastketball", "Pencil"];
const wishList = ['Magic Mouse', 'soccer ball']

stuff.push.apply(stuff, wishList);
console.log(stuff)
// to add an array with push, I must do push.apply and then list both arrays?


const input = document.getElementById('input');
const button = document.getElementById('button');
const list = document.getElementById('list');

const pets2 = [];

button.addEventListener('click', function(evt) {
	if(input.value.length > 0){
		pets2.push(input.value);
		input.value = "";
		render();
	}
});

function render() {
	list.innerHTML = pets2.map(x => `<li>${x}</li>`).join('');	
}
