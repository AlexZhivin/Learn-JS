'use strict';
let money = +prompt(" Ваш бюджет на месяц", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", " ");
console.log(money, time);
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: false
};
let с = 0;
while (с < 2){
  с++;
  let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = +prompt("Во сколько обойдется? ", '');
  if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
    && a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
    }
  }


/* let j = 0;
do {
  j++;
  let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = +prompt("Во сколько обойдется? ", '');
  if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
    && a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
  }
}
while (j < 2); */

/* for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
  b =+prompt("Во сколько обойдется? ", '');
  if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
   && a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
  }
  
} */

appData.moneyPerDay = appData.budget / 30;
alert("Ваш ежедневный бюджет составит: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  alert('Минимальный уровень достатка');
}
else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  alert('Средний уровень достатка');
}
else if (appData.moneyPerDay > 2000) {
  alert(' Высокий уровень достатка');
}
else { alert('Что-то пошло не так') }


