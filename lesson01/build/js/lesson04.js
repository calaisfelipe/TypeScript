"use strict";
class Coder {
    constructor(name, music, age, lang = "typeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `hello, im ${this.age} `;
    }
}
const felipe = new Coder("Felipe", "Forró", 30);
console.log(felipe.getAge());
class WebDev extends Coder {
    constructor(computer, name, age, music) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const sara = new WebDev("mac", "sara", 23, "funk");
console.log(sara.getLang());
class Artist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Anitta = new Artist("anitta", "voice");
console.log(Anitta.play("sings"));
//*********************************************
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const john = new Peeps('jhon');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Peeps.count);
console.log([john, Steve, Amy]);
/////////////////////////////////////////////
