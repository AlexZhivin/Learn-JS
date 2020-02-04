//Полезные команды
typeof(данные); // определить тип данных
//в начале документа скрипта задаем строгую типизацию по стандарту es6, лучше всегда так делать чтобы избежать ошибок
'use strict';


/*****************************************************Объявление переменных*/
//эта переменная будет доступна в коде до её объявления, т.е. её вызов можно выполнить до объявления
var leftBorderWidth = 1;
/*эта переменная будет досткпна в коде только после её объявления. Оптимизация, переменная создается тогда когда в ней появляется необходимость 
если переменную ограничить фигурными скобками она примет локальную область видимости*/
let second = 2;
// эта переменная константа, её значение не переопределяется
const pi = 3.14;

/******************************************************Типы данных*/
var number = 5; // Числовой тип
var string = "Text"; //Текстовый тип
var sym = Symbol(); // Новый тип символ, используется редко
var boolean = true; // Логический тип
null; // В коде не существет
undefined; // Значение не присвоено
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
var arr = ['picture.jpg','apple.png', 'orange.jpg'];
//доступ к  значениям массива также как в php
console.log(arr[1]);

/*********************************************************модальные окна*/
alert("текст");
confirm("Текст вопроса")
// как можно использоввать confirm
let answerConfirm = confirm("Принимаешь решение? "); // получаем в переменную выбор пользователя
console.log(answerConfirm);
let ask = prompt("Вам есть 18", "Да"); // Задаем вопрос и получаем ответ пользователя
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


Чтобы посмотреть состояние проекта и файлов команда git status
Чтобы добавить все файлы этой папки в индекс команда git add -A
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


