"use strict";
//Задержка срабатывания кода
//setTimeout(func, delay) ; // func - пердаваемая функция, delay - время задержки в мс 

/* function sayHello() {
    console.log(' Привет друг!');
} */

//let timerId = setTimeout(sayHello, 1000);

//clearTimeout(timerId);  // используется чтобы остановить timeout, нужно в качестве аргумента передавать тот timeout который требуется остановить

//let timerInterval = setInterval(sayHello, 2000); // будет повторяться через интерал 2сек

// Рекурсивный вызов функции позволяет избежать ошибок из-за разности времени выполнения функций 
//Т.е. бывает что setTimeout уже сработал а функция внутри него еще нет или наоборот. При рекурсивном вызове интервал в 2000мс всегда будет выдерживаться
// даже если console.log() будет выполняться 30000мс
/* let timeId = setTimeout( function log(){
    console.log('Hello');
    setTimeout( log, 2000); 
}) */

let btn = document.querySelector(".btn"),
    elem = document.querySelector(".box");

function myaAnimation() {
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        }
        else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
btn.addEventListener('click', myaAnimation);

// Делигирирование событий. Блок контейнер и все кнопки в нем , и при добавлении кнопок не нужно править js код
let btnBlock = document.querySelector(".btn-block"),
btns = document.getElementsByTagName("button");

btnBlock.addEventListener("click", function(event){
    if (event.target && event.target.matches('button.first')){ // если курсор над блоком с классом btn-block и над тэгом с классом first, то сработает событие
   // if (event.target && event.target.classList.contains("first")){ // если курсор над блоком с классом btn-block и над тэгом с классом first, то сработает событие
       // if (event.target && event.target.tagName == "BUTTON"){  // если курсор над блоком с классом btn-block и над тэгом button, то сработает событие
        console.log("Hello");
    }
});