"use strict";
let stringArr = ['one', 'two', 'three'];
let numberArr = [1, 2, 3];
let mixedArr = ['one', 234, true];
stringArr[0] = 1;
stringArr.push(89);
mixedArr.push({ name: 'felipe' });
console.log(stringArr);
console.log(mixedArr);
let test = [];
let band = [];
band.push('blink 182');
console.log(band);
//tuple
// tuple é um array onde se define os tipos de forma ordenada e precisa dentro do array. 
let myTuple = ['felipe', 30, true];
let mixed = ['john', 1, false];
//object
let myObject = { name: 'Calais' };
const exampleObj = {
    prop1: 'Calais',
    prop2: true
};
let banana = {
    name: 'banana',
    quantity: 23,
    type: ['da Terra', 'prata', 'Caturra'],
    active: true
};
let apple = {
    name: 'apple',
    quantity: 13,
    type: ['fuji', 'galã', 'argentina'],
};
let unkownFruit = {
    quantity: 22,
    type: ['none'],
    active: false
};
const betterFrut = (fruit) => {
    if (fruit.name) {
        return `the ${fruit.name.toUpperCase()} is the better fruit`;
    }
    return 'No fruit informed';
};
console.log(betterFrut(unkownFruit));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(Grade.A);
