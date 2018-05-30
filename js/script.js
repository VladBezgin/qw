var budgetForTheMonth = +prompt("Ваш бюджет на месяц?", '10000');
var name = prompt("Название вашего магазина?");
var mainList = {
	budgetForTheMonth,
	name,
	shopGoods: [],
	employers: {},
	open,

};

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

var budgetForDay = budgetForTheMonth/30;
alert( 'Бюджет на 1 день: ' + budgetForDay );

console.log(mainList.shopGoods)
