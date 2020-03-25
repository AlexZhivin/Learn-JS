//Полезные команды
typeof ('данные'); // определить тип данных
//в начале документа скрипта задаем строгую типизацию по стандарту es6, лучше всегда так делать чтобы избежать ошибок
'use strict';

/**/
/*****************************************************Объявление переменных*/
//эта переменная будет доступна в коде до её объявления, т.е. её вызов можно выполнить до объявления
var leftBorderWidth = 1;
/*эта переменная будет досткпна в коде только после её объявления. Оптимизация, переменная создается тогда когда в ней появляется необходимость 
если переменную ограничить фигурными скобками она примет локальную область видимости*/
let second = 2;
// это  константа, её значение не переопределяется
const pi = 3.14;

/******************************************************Типы данных*/
var number = 5; // Числовой тип
var string = "Text"; //Текстовый тип
var sym = Symbol(); // Новый тип символ, используется редко
var boolean = true; // Логический тип
null; // В коде не существет
undefined; // Значение не присвоено
Map // тип данных предназначенный для создания ассоциативных массивов
var obj = {}; // Объект. Это коллекция данных. В нем могут хрониться данные различных типов. Аналог объект в php
// Пример объекта
var man = {
  name: "Сережа",
  age: 38,
  isMarried: false
};
//Работа с объектом. название объекта.свойство или название объекта.метод() или название объекта["свойство или метод"]
console.log(man.name);
console.log(man["name"]);

//Массив также как в php
var arr = ['picture.jpg', 'apple.png', 'orange.jpg'];
//доступ к  значениям массива также как в php
console.log(arr[1]);

/*********************************************************модальные окна*/
alert("текст");
confirm("Текст вопроса")
// как можно использоввать confirm
let answerConfirm = confirm("Принимаешь решение? "); // получаем в переменную выбор пользователя true/false
console.log(answerConfirm);
let ask = prompt("Вам есть 18", "Да"); // Задаем вопрос и получаем ответ пользователя ввиде текста.
console.log(ask);
alert(ask);
/***********************************************************Операторы */
// Если перед командой или переменной поставить знак +, то её тип данных изменится на числовой
/* ++ инкремент
-- декремент
если объявлять до изменяемой переменной, то интерпретарор сразу будет брать измененное значение, если после, то сначала выведет не измененное потом измененное значение */
/* % - остаток от деления, например 5%2 будет 1 */
/* = - присваивание
== сравнение по значению
=== сравнение по типу данных
&& - логический и
|| - логический или 
! - логическое отрицание */

/*********************************************************** Работа с GIT 
Для работы нужно скачать Git с сайта и установить его на комп
Работать можно через папку в которой лежат наши файлы: зажать shift  и правой кнопкой вызвать Powershell
Или в терминале visual studio code внизу вкладка или команад ctrl + j
GIT это система контроля версий
GITHUB это хранилище репозиториев GITа

Команды в git начинаются  с git init 
Настроить имя git config --global user.name "Alex"  
Настроить адрес почты git config --global user.email "example@gmail.com"
В git есть три состояния: 
1 Файлы просто лежат в папке с проектом  - git не следит за изменениями // цвет красный
2.Файлы попадают в индекс и git следит за ними // цвет зеленый
3.Git создал контрольную точку (по англ. commit), к этой точке можно вернуться.


Чтобы посмотреть состояние проекта и файлов, команда git status
Чтобы добавить все файлы этой папки в индекс, команда git add -A
Чтобы добавить контрольную точку команда git commit -a -m"Текст сообщения который будет добавлен к контрольной точке"
Команда git checkout позволяет сбросить все изменения до предыдущего commit
Чтобы посмотреть список commit команда git log

Чтобы добавить конкретный файл в индекс команда git add index.html  или файлы по типу *.css
 

Для работы с github команды:
Связать созданный на github репозиторий с  проектом  на компе git remote add origin https://github.com/AlexZhivin/project-1.git
Записать репозиторий с компа на github команда git push -u origin master
************************************************************************
Допустим, теперь я хочу сделать некоторые изменения в проекте, но не уверен, выйдет ли из этого что-то хорошее. В таких случаях создается новая ветка:

git branch new_feature
git checkout new_feature
Работаем с этой веткой. Если ничего хорошего не вышло, возвращаемся к основной ветке (она же «trunk» или «ствол»):

git checkout master
Если вышло что-то хорошее, мержим ветку в master (о разрешении конфликтов рассказано в следующем параграфе):

git commit -a # делаем коммит всех изменений в new_feature
git checkout master # переключаемся на master
git merge new_feature # мержим ветку new_feature
Не забываем время от времени отправлять наш код на BitBucket:
git push origin

Если мы правим код с нескольких компьютеров, то перед началом работы не забываем «накатить» в локальный репозиторий последнюю версию кода:
git pull origin
Откатиться к конкретному коммиту (хэш смотрим в «git log»):
git reset --hard d8578edf8458ce06fbc5bb76a58c5ca4a58c5ca4

***********************************************************************/
/* Как работать с существующим проектом на другом компьютере или когда над проектом работает несколько человек
1. Ситуация когда ты только приступаешь к работе и на компе нет проекта. 
1.1 Нужно с github скачать файлы, можно просто с сайта скачать, но правильнее через терминал.git
1.2 В терминале перемещяемся в нужную папку команда cd
1.3 В терминале команда git clone https://github.com/AlexZhivin/project-1.git project_1   где project_1 это имя папки если нужно задать папку для проекта иначе склонируется прямо в ту где находимся
2. Поработав с проектом стандартно добавляем измененные файлы в индекс git add -A, затем git commit -a -m"message", затем git push
3. Чтобы на другом компьютере или папке подгрузить изменения сделанные мной и отправленный в git hub использовать команду git pull 
4. Если во время работы над проектом на локальном компьютере на github проект изменился то при попытке отправить commit на github будет ошибка.
Чтобы она не возникала ннужно подгружать файлы из github командой git pull перед отправкой commit
***************************************************************************/
/* Иногда нет необходимости загружать все файлы проекта на репозиторий github для исключения папок или файлов создается в папке проекта скрытый файл gitignore,
в котором прописываются настройки. см. пример файл из урока.
 */
/* Для удобного наглядного просмотра изменений использовать сторонний сервис gitkraken */


/* Условные конструкции if else */
let num = 1;
if (num > 5) {
  console.log("Больше");
}
else if (num < 100 && num > 0) {
  console.log("Меньше");
}
else {
  console.log("Число вне диапазона");
}

/* Конструкция switch case break default  */
let n = -1;
switch (true) {
  case n > 0 && n < 50:
    console.log("больше 0 и меньше 50");
    break;
  case n < 100 && n > 50:
    console.log("меньше 100 и больше 50");
    break;
  case 50:
    console.log("Верно это" + n);
    break;
  default:
    console.log("число вне диапазона");
}

/* Циклы while, do while, for  и continue break */
let nus = 5;
while (nus < 10) {
  nus++;
  console.log(nus);
}
let nuc = 5;
while (nuc < 10) {
  nuc++;
  console.log(nuc);
  if (nuc == 8) {
    break;
  }
}

let nur = 5;
do {
  nur++;
  console.log(nur);
}
while (nur < 15);

for (let i = 1; i < 20; i++) {
  if (i == 5) { continue; }
  if (i == 10) { break; }
  console.log(i);
}

/* Функции */

/*  Callback функции это когда мы передаем в качестве аргумента одной функции другую, 
чтобы она исполнилась в нужном нам месте (последовательности) */
/* Замыкание функции это все что содержится внутри функции и все что ей доступно вне её.
 Например если в теле функции будет обращение к переменной которая задана вне функции,
  то сначало функция будет искать  её в теле а потом вне, и так до самого высшего уровня */
//Спомощь  return можно передавать и перезаписывать значения переменных из локальной области в глобальную.
/*   Функции бывают двух типов function declaration и function expression, к первым можно обращаться до объявления, вторые это 
  функции которые присваиваются как значения переменным и к ним обращаться можно только после объявления. */

//По новому стандарту es6 функции можно объявлять так но делать так можно не во всех случаях. Как правило такую запись используют в обработчиках событий:

let calc = (a, b) => a + b;  // можно без кавычек если код короткий
console.log(calc(2, 2));
let showMessage = (text) => {
  let a = " Вы написали следующее:" + '' + text;
  alert(a);
};
showMessage(" Привет как дела");

// Методы и свойства 
let str = "text";
console.log(str.length);  // обратились к свойству  length  который считает количество знаков в тексте
console.log(str.toUpperCase()); // обратились к методу .toUpperCse() который преобразовывает в верхний регистр
console.log(str.toLowerCase());
let twelve = '12.256564';
//console.log(Math.round(twelve)); // математические функции Math.  их много, они производят математические действия
console.log(parseInt(twelve)); //округляет значения
console.log(parseFloat(twelve)); // убирает из переменной текс, оставляя только цифры


/* Замыкание функции
В программировании есть общий термин: «замыкание», – которое должен знать каждый разработчик.
Замыкание – это функция, которая запоминает свои внешние переменные и может получить к ним доступ.
В некоторых языках это невозможно, или функция должна быть написана специальным образом, чтобы получилось замыкание.
Но, как было описано выше, в JavaScript, все функции изначально являются замыканиями (есть только одно исключение,
про которое будет рассказано в Синтаксис "new Function").
То есть, они автоматически запоминают, где были созданы, с помощью скрытого свойства [[Environment]] и все они могут
получить доступ к внешним переменным.
Когда на собеседовании фронтенд-разработчик получает вопрос: «что такое замыкание?», – правильным ответом будет 
определение замыкания и объяснения того факта, что все функции в JavaScript являются замыканиями, и, может быть, 
несколько слов о технических деталях: свойстве [[Environment]] и о том, как работает лексическое окружение. */

/* Объекты */


let options = {
  width: 1024,
  height: 1024,
  name: "test"
}

options.colors = {
  border: "black",
  bg: "red"
}
console.log(options);
delete options.name;  // оператор delete удаляет 
console.log(options);
//цикл for in для перебора объектов 
for (let key in options) {
  console.log('Свойство  ' + key + '  Значение  ' + options[key]);
}
// Работа с объектом
console.log(Object.keys(options).length); // методом .length получили количество записей в объекте


/* Массивы  */

let arr = [1, 10, 3, 2];
arr.push("text"); // Добавляет в конец массива элемент
arr.pop(); // Удаляет один последний элемент из массива  
arr.unshift('Text'); // Добавляет элемент в начало массива
arr.shift(); //Удаляет первый элемент массива
arr.sort(); // сортирует элем массива графологически т.е. как строки.
//Сортировка массива с дополнительной функцией, которая позволяет сортировать цифры как цифры а не как строки (по умолчанию в методе sort())
function compareNumeric(a, b) {
  return a - b;
}
console.log(arr.sort(compareNumeric));



// перебор массовов метод №1
for (let i = 0; i < arr.length; i++) {  // на заметку метод .length возвращает номер последнего элемента + 1
  console.log(arr[i]);
}
// перебор массивов метод №2  
arr.forEach(function (item, i, mass) {
  console.log(i + ' ' + "содержит запись" + ' ' + item + ' ' + "в массиве:" + ' ' + mass);
})
//Чтобы перебор массивов начался не с 0 индекса пример:
arr.forEach(function (item, i) { alert('Сообщение :' + ' ' + (i + 1) + ' ' + item) })
//Перебор массивов метод №3  - не работает в объектах
for (let key in arr) {
  console.log(key); // получили ключи массива
}
for (let key of arr) {
  console.log(key); // получили значения ключей массива
}

/*  Удалить элемент массива по значению и записать на его метсо новый.
Ищет заднное знаение в массиве, возвращает его индекс, 
затем удаляет его из массива и записывает на его место другое значение */
var arr = ["Привет", "тебе", "Миша"];
/* arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
console.log( arr ); //  осталось ["Привет", "Миша"] */

function delElement(searchElem, addElement) {
  let searchIndex = arr.indexOf(searchElem);
  arr.splice(searchIndex, 1, addElement);
}

delElement('Миша', 'ты жжешь!');
console.log(arr);

let joined = arr.join(', '); // собирает строку из массива с заданным разделителем
console.log(joined);

let exString = "Ехал  Грека 21 через реку видит Грека в реке, рак сунул Грека руку в реку рак за руку Греку";
let splited = exString.split(" "); // разбивает строку на элементы массива по разделителю (если поставить только кавычки строка разобъется по буквам слов)
console.log(splited);



// тренировка
let users = {
  user: {
    name: 'Alex',
    password: 123
  },
  user2: {
    name: 'jhon',
    password: 'connor'
  }
}
function showUsers() {
  for (key in users) {
    for (key2 in users[key]) {
      console.log(key2 + ' ' + users[key][key2])
    }
  }
}

function delUser(name1) {
  for (key in users) {
    for (key2 in users[key]) {
      if (users[key][key2] == name1) {
        return delete users[key];
      }
    }
  }
}

delUser('Alex');
showUsers();

// Ассоциативные массивы, как таковые отсутсвуют. но их можно создать спомощью объектов типа Map, Map это тип данных специально предназначенный для 
// создания массивов

let aray = new Map([
  ['key', 'value1'],
  ['key2', 'value2'],
  ['key3', ['value3']]
]);
// методы для работы с ассоц массивами - объектами
aray.size; // кол-во элементов в массиве
aray.set('key4', 'value4'); // добавить пару
aray.get('key2'); // получить значение по ключу
aray.has('key2'); // проевирить есть ли такой ключ
aray.delete('key4')// удалить пару, возвращает true если успешно
aray.clear()// очистить массив от всех элементов
// перебор массива
for (let key of aray.keys()) {
  console.log(key);
}
let aray = new Map([
  ['key', 'value1'],
  ['key2', 'value2'],
  ['key3', ['value3']]
]);
aray.forEach(function (value, key) {
  console.log(value + '' + key);
})
// Также как ассоциативный массив можно считать объект создаваемый = {};

let Arr = {  // по правилам нотации название объектов пишут с большой буквы
  key: 'value',
  key2: 'value2',
  key3: 'value3'
}
//Пример создания объекта ООП и использования prototype
function Arr() {
  this.key = "value1";
  this.key2 = 'value2';
  this.key3 = 'value4';
  this.show = function () {
    console.log(this.key3);
  };
}
Arr.prototype.sum = function () {
  console.log(this.key + ' ' + this.key2);
}

let newArr = new Arr();
newArr.sum();
newArr.show();

// функция выводит из объекта по id значение 
let shop = {
  1: 'orange',
  2: 'limon',
  3: 'aple',
  4: 'strawberry'
}
function showId(id) {
  console.log(shop[id]);
}
showId(2);
/************************************************************************ */

//функция проверяет наличие значения в массиве
let myArr = ['orange', 'apple', 'strawberry', 'grandberry'];
//console.log(myArr.indexOf('grandberry'));
//console.log(myArr.sort());
function searchArr(id) {
  if (myArr.indexOf(id) !== -1) {  // -1,потому что метод если не находит значение возвращает -1
    let complite = myArr.indexOf(id);
    return console.log(myArr[complite]);
  }
  else { console.log('Искомое значение' + ' ' + id + ' ' + 'не найдено'); }
}

searchArr('strawberry');

function showArr() {
  for (let i in myArr) {
    console.log(myArr[i]);
  }
}
showArr();

//******************************** */ ООП

let soldier = {    //Объект родитель
  health: 100,
  armor: 500
};

let jhon = {  //Объект наследник. Имеет все свойства родителя
  health: 120
};

jhon.__proto__ = soldier; // Указываем что объект jhon является наследником (прототипом) soldier

console.log(jhon.armor);  //Обращение к родительскому  свойству


//********************************Динамическая типизация. 
// Это когда изменяются типы данных, число может стать строкой, объект булевым значением и тд.
// To string
//1
//Если что-то сконкатенировать со строкой оно тоже станет строкой
console.log(typeof ('пп' + 5));
//2
String(false);
// To number
//1
console.log(+'5');
//2 
console.log(typeof (Number('S')));
//3 
parseInt('15px', 10);
// Прием
let pro = +prompt('hello', '');
// To boolean
// 0, '', null, undefined, NaN   -    всё это логический false
//1
console.log(typeof (Boolean(NaN)));
//2
console.log(typeof (!!5)); // !! приводит к булевому типу

console.log([] + false + true - 1);
console.log(2 && 1 && 3 && 0 && undefined); //И возвращает первое ложное значение. Или последнее, если ничего не найдено.
//Приоритет оператора И && больше, чем ИЛИ ||, так что он выполняется раньше.
console.log(0 || "" || 2 || undefined || true || falsе); //Другими словами, цепочка ИЛИ "||" возвращает первое истинное значение или последнее, если такое значение не найдено.
let y = 1; let x = y = 2; console.log(x);
let a = 1;
let b = 11;
console.log(!!(a && b));

let a = [1, 2, 3]; let b = [1, 2, 3];
console.log(a + '   ' + b);
//let a = 1, b=1;
if (a == b) {
  console.log(true);
}
else {
  console.log(false);
}
let red = 'красный';
console.log(red.indexOf('с'));

/*****************************************Работа с DOM */

//Получение элементов из DOM
let box = document.getElementById('box'); // получение элемнта по id
let btn = document.getElementsByTagName('button'); // получение всех тэгов button на странице, ввиде псевдомассива.
let circle = document.getElementsByClassName('circle'); // получение всех тэгов с классом circle на странице, ввиде псевдомассива.
let heart = document.querySelectorAll('body .heart'); // Возвращает массив CSS селекторов(также можно использовать вложенность через пробел).
// При вызове нужно указывать тип элемента, например класс точкой(.), id решеткой (#)
// Для этого метода работает цикл forEach, можно перебрать весь массив и сделать что-то с каждым элементом
let oneHeart = document.querySelector('.heart'); // получит первый элемент на странице с запрашиваемым селектором
let wrapper = document.querySelector('.wrapper');//получит элемент с классом wrapper как массив

//Применение, изменение стилей элеметнов
box.style.backgroundColor = 'green';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';
// цикл для обхода всех элементов массива heart 
/* for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'blue';
} */
//более удобный цикл для обхода всех элементов массива
heart.forEach(function (item, i, herts) {
    item.style.backgroundColor = 'magenta'; // метод позволяет добавить одну строчку css-кода
    item.style.cssText = 'color: purple';  //альтернативный метод позволяет добавлять блоки css-кода
}); 

//создание элементов
let div = document.createElement('div'),// покачто только в скрипте создаем, на странице еще его нет
    text = document.createTextNode('Тут был я');
    div.classList.add('black'); // добавление тэгу div класса black
//Добавление html 
div.innerHTML = 'Hello world!'; // добавляем тэгу div дополнительные тэги или текст
box.innerHTML = '<h2>Hello sasha!</h2>';//  еще пример добавляем дополнительные тэги элементу html
circle[1].textContent ='Hello!'; // метод textContent более безопасный для добавления в тэги текста если текст получаем от пользователя
//Добавление созданных элементов на страницу
// Перемещение элементов/ добавление/замена
heart[0].before(div);//Добавляем элемент div на страницу пред нужным нам тэгом// только теперь он попадает на страницу(это относится к тэгам созданным при помощи js)
heart[2].remove();// удалить элемент
circle[2].replaceWith(btn[1]); // заменит элемент circle  на  btn */

/* Вот методы для различных вариантов вставки:

node.append(...nodes or strings) – добавляет узлы или строки в конец node,
node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
node.before(...nodes or strings) –- вставляет узлы или строки до node,
node.after(...nodes or strings) –- вставляет узлы или строки после node,
node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками. */

/* События смотри задания по DOM 7-8 */

/* События на мобильных устройствах */

//Вместо кликов на мобильных устройствах тапы (tap)  - касания по сенсорному экрану
//Touch events - события прикосновений по экрану  -  доступность в браузерах смотри https://caniuse.com/#search=touch
// http://yournet.kz/blog/js/javascript-touch-sobytiya   список событий

//touchstart - Событие срабатывает при возникновении касания к элементу.
//touchmove  - Событие возникает после того как пользователь прикоснулся к элементу, и перемещает палец в другую точку.
//touchend  - Событие возникает после разрыва прикосновения к элементу.
//touchenter  - Событие возникает при условии, что касание происходит в пределах элемента.
//touchleave - 	Событие возникает, когда точка соприкосновения выходит за рамки элемента.
//touchcancel - Событие возникает тогда, когда точка соприкосновения больше не регистрируется на поверхности. К примеру, перемещение за пределы браузера.
window.addEventListener('DOMContentLoaded', function(){   // DOMContentLoaded  - событие возникает когда все элементы страницы загружены, но еще не загружены CSS 
  let box = document.querySelector('.box');
  box.addEventListener('touchstart', function(event){
    event.preventDefault();
    console.log('Red.box:touchstart');
    console.log(event.target) // получим даные элемента с которым взаимодействуем (иначе на котором сработало событие)
    console.log(event.touches[0].target);// получим даные элемента с которым взаимодействуем (иначе на котором сработало событие)/0 - указывает количество пальцев прикоснувшихся к экрану
    console.log(event.touches); // получаем данные объектов от прикосновения всех пальцев к экрану независимо по какому элементу коснулись
    console.log(event.changedTouches); // Список объектов которые были задействованы на момент действия прикосновения к сенсору
    console.log(event.targetTouches);// получаем данные лишь определенного элемента с которым взаимодействуют пальцы
  })
  box.addEventListener('touchmove', function(event){
    event.preventDefault();
    console.log('Red.box:' + event.touches[0].pageX); // получение координаты по оси Х
    
  })
  box.addEventListener('touchend', function(event){
    event.preventDefault();
    console.log('Red.box:touchend');
  })
})

/* Основы регулярных выражений */

// Регулярные выражения это технология позволяющая работать со строками
// конструктор (песочница) регулярных выражений  https://regex101.com
new RegExp('pattern', 'flags'); // Первый способ задания регулярного выражения
/patern/flags; // Второй, более простой способ задания регулярного ыражения
/* pattern - это то что мы хотим найти
flags - это вспомогательные символы */
/*
i - искать внезависимости от регистра букв
g - global - искать все вхождения искомого выражения (тогда как без флага только первого)
m - искать на более чем одной строке (флаг многострочности) 
\d -искать только цифры , если нужно искать не число то \D
\w - искать только буквы, если нужно искать не буквы то \W
\s - искать только пробелы, если нужно искать не пробелы то \S
*/
// СПЕЦИМВОЛЫ НУЖНО ЭКРАНИРОВАТЬ  - СИМВОЛОМ \ , например ищем * , тогда регулярка такая /\*/  

let ans = prompt('Введите ваше имя!');
let reg = /n/igm; // ищем букву n в строке

// методы для работы с регулярными выражениями
console.log(ans.search(reg)); // поиск по регулярному выражению в строке. 
//Возвращает индекс найденного совпадения в строке. И только первый найденный. Если ничего не найдет то вернет -1. Тут нельзя применить флаг g

console.log(ans.match(reg)); // поиск по регулярному выражению в строке. получаем массив параметров, и без флага g, только первого найденного 

console.log(ans.test(reg)); // ищет существует или нет совпадение. Вернет true или false

let reg2 =/./g // точка особый символ который указывает что будем искать или заменять любые символы в строке
 let pass = prompt('Введите пароль');
console.log(pass.replace(reg2, '*'));//  метод заменит в строке все элементы на *

alert('12-24-2020'.replace(/-/, ':')); //  метод заменит все - на :
let pass2 = prompt('Введите число');
let reg3 = /\d/g;
console.log(pass2.search(reg3));  // найдем все цифры из введенных пользователем. вернет массив с числами. 

let str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i)) // ищет совпадение когда последовательно стоит буква\цифра\буква\цифра

