'use strict';
let money;
let time;
function start() {
  money = +prompt(" Ваш бюджет на месяц", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", " ");
  while (isNaN(money) || money == '' || money == null) {
    money = +prompt(" Ваш бюджет на месяц", "");
  }
}

start();
console.log(money, time);
// Главный объект программы
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько обойдется? ", '');
      if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
      }
      else {
        i = i - 1;  // благодаря этому условию цикл будет повторться пока два раза не будут заполнены prompt
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed(0); // .toFixed метод округляет значение
    alert("Ваш ежедневный бюджет составит: " + appData.moneyPerDay);
  },
  detectLevel: function () {
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
  },
  checkSaving: function () {
    if (appData.saving == true) {
      let save = +prompt('Какова сумма ваших накоплений?'),
        percent = +prompt(' под какой процент?');
      appData.monthIncome = (save / 12 / 100 * percent).toFixed(2);
    }
    alert(' Доход в месяц с вашего депозита: ' + appData.monthIncome);
  },
  chooseOptExpenses: function () {
    let j = 0, k = 0;
    while (j < 3) {
      j++;
      k++;
      let g = prompt("Введите необязательную статью расходов в этом месяце ", '');
      if ((typeof (g)) === 'string' && (typeof (g)) != null
        && g != '' && g.length < 50) {
        console.log('Done');
        appData.optionalExpenses[k] = g;
      }
      else {
        j = j - 1;
      }
    }
  },
  chooseIncome: function () {
    for (let i = 0; i < 1; i++) {
      let income = prompt('Другие способы получения дохода (введите через запятую)');
      let income2 = prompt('Может что-то еще?');
      if (typeof (income) === "string" && income != '' && typeof (income2) === "string" && income2 != '') {
        income += ',' + income2;
        appData.income = income.split(",");
        appData.income.sort();
      }
      else { i = i - 1; }
    }
    appData.income.forEach(function (item, i) { alert('Способы доп. заработка:' + ' ' + (i + 1) + ' ' + item) }) // (i+1) цикл будет выводить элементы начиная с индекса 1

  },
  showAllobj:function(){
    console.log('Наша программа включает в себя:'+' ');
    for(let key in appData){
      console.log(key/* + appData[key] */ + ' '+ typeof(appData[key]));
    }
  }
}






/* let с = 0;
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
 let j = 0;
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
while (j < 2);
*/






