// Classes and Inheritance
"use strict";

class User {
	constructor(username, email, password){
		// assign these arguments to properties of the class
		this.username = username;
		this.email = email;
		this.password = password;
	}

	static countUsers(){
		console.log('There are 50 users');
	}

	register(){
		console.log(this.username+' is now registered');
	}
}

// this bob object is an instance of class User with those values for the arguments
let bob = new User('Bob', 'bob@gmail.com', 'password');

// here I am calling the register() method on bob
bob.register();

// I did not need to have created a user to call this static method
User.countUsers();

class Member extends User {
	constructor(username, email, password, memberPackage){
		super(username, email, password);
		// this is just like doing this.username = username, etc.
		this.package = memberPackage;
	}

	getPackage(){
		console.log(this.username+' is subscribed to the '+this.package+' package');
	}
}

let mike = new Member('mike', 'mike@gmail.com', 'mike123', 'gold');

mike.getPackage();
mike.register();