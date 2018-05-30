let budget = +prompt("Ваш бюджет на месяц?", '10000');
let name = prompt("Название вашего магазина?");
var mainList = {
	'budget': budget,
	'name': name,
	shopGoods: [],
	employers: {},
	open,

};

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

var budgetForDay = budget/30;
alert( 'Бюджет на 1 день: ' + budgetForDay );

console.log(mainList.shopGoods)
