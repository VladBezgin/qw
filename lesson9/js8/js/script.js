/*function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function() {
		alert('hello ' + this.name);
	}
}

User.prototype.exit = function(name) {
	alert('пользователь ' + this.name + ' ушёл');
}

let ivan = new User('Ivan', 23);
let alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();

ivan.exit();

function showThis(a, b) {
	console.log(this);
	function sum() {
		console.log(this);
		return this.a + this.b
	}
	console.log(sum());
};

showThis(4, 5);
showThis(5, 5);

let obj = {
	a: 20,
	b: 15,
	sum: function() {
		function shout() {
			console.log(this);
		}
		shout();
	}
}

obj.sum();


function count(number) {
	return this * number;
};

let double = count.bind(2);

console.log(double(3));*/

let age = document.getElementById('age');
 
function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
 
showUser.call(age, 'Bezgin', 'Vlad');





