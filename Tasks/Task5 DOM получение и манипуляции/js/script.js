'use strict';

let menu = document.getElementsByTagName('li');
menu[0].after(menu[2]);
let body = document.querySelector('body');
body.style.background = 'url(./img/apple_true.jpg) center no-repeat'; // 
let div = document.createElement('div');
div.classList.add('title');
div.innerHTML = ' Мы продаем только подлинную технику Apple';
let divDel = document.getElementById('title');
divDel.replaceWith(div);
let adv = document.querySelector('.adv');
adv.remove();
let prom = document.getElementById('prompt');
let ask = prompt("Как вы относитесь к технике Apple?");
prom.textContent = ask;
 


