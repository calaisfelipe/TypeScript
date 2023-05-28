"use strict";
// GENERICS
const echo = (arg) => {
    return arg;
};
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
const obj1 = {
    name: 'felipe'
};
const arr = ['test', 123];
console.log(isObj(null));
console.log(isObj(arr));
console.log(isObj(obj1));
console.log(isObj(true));
///////////////////////////////////////////
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return {
        arg,
        is: !!arg
    };
};
console.log(isTrue(0));
console.log(isTrue(1));
console.log(isTrue('teste'));
console.log(isTrue(''));
console.log(isTrue([]));
console.log(isTrue(['123', 22]));
console.log(isTrue({}));
console.log(isTrue({ name: 'felipe' }));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue(NaN));
const isTrueV2 = (value) => {
    if (Array.isArray(value) && !value.length) {
        return { value, is: false };
    }
    if (isObj(value) && !Object.keys(value).length) {
        return { value, is: false };
    }
    return {
        value,
        is: !!value
    };
};
const processUser = (user) => {
    //process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: 'felipe' }));
//////////////////////////////////////////////////////
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject(['felipe']);
console.log(store.state);
