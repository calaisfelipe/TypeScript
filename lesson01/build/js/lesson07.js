"use strict";
//utility types
//PARTIAL
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const felipeCalais = {
    studentId: 'Felipe Calais',
    title: 'Developer degree',
    grade: 500,
    verified: true
};
const felipeCalaisUpdated = updateAssignment(felipeCalais, { title: 'Dev', grade: 300 });
console.log(felipeCalaisUpdated);
//////////////////////////////////////////
// Required and Readonly
const recordAssignment = (assign) => {
    //send to database
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, felipeCalaisUpdated), { verified: true });
const hexColorMap = {
    red: { red: 'FF', blue: '00', green: '00' },
    green: { red: 0, blue: '00', green: 'FF' },
    blue: { red: 0, blue: 'FF', green: '00' }
};
const colorPicked = {
    green: 'color1',
    blue: 'color2'
};
const colorPicked2 = {
    red: 'color1',
    green: 'color2'
};
const noBlue = "red"; //colocar blue o ts reclama
const colorsExtracted = 'green';
const notNull = 'Não pode null nem undefined';
