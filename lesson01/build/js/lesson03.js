"use strict";
//convert to more or less especific
let a = "hello";
let b = a;
let c = a;
//angle Braclets  --> NÃO PODE SER UTILIZADO NO REACT - O REACT ENTENDERÁ COMO UM COMPONENTE E NÃO UMA TIPAGEM
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else if (c === "concat") {
        return `${a}${b}`;
    }
    return "invalid parameter";
};
let myVal = addOrConcat(2, 2, 'concat');
//Be Carefoul , TS see no problem but has a problem
let myValue = addOrConcat(2, 2, 'concat');
//10 as string
10; //double casting - forcing
//The Dom
// not null (!) operator
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
const yearSpan = document.querySelector('span');
let time = '1993';
yearSpan.setAttribute("datetime", time);
yearSpan.innerText = time;
