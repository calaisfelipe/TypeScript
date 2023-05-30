"use strict";
//utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//PARTIAL
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const felipeCalais = {
    studentId: "Felipe Calais",
    title: "Developer degree",
    grade: 500,
    verified: true,
};
const felipeCalaisUpdated = updateAssignment(felipeCalais, {
    title: "Dev",
    grade: 300,
});
console.log(felipeCalaisUpdated);
//////////////////////////////////////////
// Required and Readonly
const recordAssignment = (assign) => {
    //send to database
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, felipeCalaisUpdated), { verified: true });
const hexColorMap = {
    red: { red: "FF", blue: "00", green: "00" },
    green: { red: 0, blue: "00", green: "FF" },
    blue: { red: 0, blue: "FF", green: "00" },
};
const colorPicked = {
    green: "color1",
    blue: "color2",
};
const colorPicked2 = {
    red: "color1",
    green: "color2",
};
const noBlue = "red"; //colocar blue o ts reclama
const colorsExtracted = "green";
const notNull = "Não pode null nem undefined";
////////////////////////////////////
//ReturnType
//type newAssign = {title: string, points: number}
const createNewAssign = (title, points) => {
    return {
        title,
        points,
    };
};
const tsAssign = createNewAssign("utility Types", 100);
console.log(tsAssign);
const assignArgs = ["generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("https://jsonplaceholder.typicode.com/users");
    const data = yield res.json();
    return data;
});
fetchUsers().then((users) => console.log(users));
