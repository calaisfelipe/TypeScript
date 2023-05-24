"use strict";
//type Aliases
//Literal Types
let myName;
let userName;
userName = "Dave";
// functions
const add = (a, b) => {
    return String(a + b);
};
console.log(add(2, 4));
const logMsg = (message) => {
    console.log(message);
};
logMsg("hello");
let subtract = function (a, b) {
    return a - b;
};
console.log(subtract(10, 8));
const multiply = function (a, b) {
    return a * b;
};
logMsg(multiply(4, 4));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
//default parameters
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3));
logMsg(addAll(2, 3, 4));
logMsg(sumAll(undefined, 3));
//Rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(2, 4, 2, 5, 6, 8, 6, 99));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinity = () => {
    let i = 1;
    while (i == 20) {
        i++;
    }
};
const isNumber = (value) => {
    return typeof value === 'number';
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('this should never happen');
};
console.log(numberOrString(2));
