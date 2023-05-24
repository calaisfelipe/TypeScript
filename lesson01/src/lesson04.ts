class Coder {
  //name:string
  //music:string
  // age: number;
  // lang: string;
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "typeScript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `hello, im ${this.age} `;
  }
}

const felipe = new Coder("Felipe", "Forró", 30);

console.log(felipe.getAge());

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    age: number,
    music: string
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const sara = new WebDev("mac", "sara", 23, "funk");

console.log(sara.getLang());
//console.log(sara.age)
//console.log(sara.lang)

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Artist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Anitta = new Artist("anitta", "voice");

console.log(Anitta.play("sings"));

//*********************************************

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }

}

const john  = new Peeps('jhon')
const Steve  = new Peeps('Steve')
const Amy  = new Peeps('Amy')

console.log(Peeps.count)
console.log([john, Steve, Amy])

/////////////////////////////////////////////


