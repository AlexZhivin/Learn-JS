'use strict';
let money = prompt(" Ваш бюджет на месяц", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", " ");
console.log(money,time);
var appData ={
  budget : money,
  timeData : time,
  expenses : {},
  optionalExpenses : {},
  income : [],
  saving : false
};
appData.expenses[prompt("Введите обязательную статью расходов в этом месяце", "")]=prompt("Во сколько обойдется?", "");
appData.expenses[prompt("Введите обязательную статью расходов в этом месяце", "")]=prompt("Во сколько обойдется?", "");
let budgetOneDay = alert("Ваш бюджет на один день составит" + "\n" + appData.budget/30);
//console.log(budgetOneDay);
  