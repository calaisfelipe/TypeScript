type One = string;
type Two = string | number;
type Three = "hello";

//convert to more or less especific

let a: One = "hello";
let b = a as Two;

let c = a as Three;

//angle Braclets  --> NÃO PODE SER UTILIZADO NO REACT - O REACT ENTENDERÁ COMO UM COMPONENTE E NÃO UMA TIPAGEM
let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  } else if (c === "concat") {
    return `${a}${b}`;
  }

  return "invalid parameter";
};


let myVal: string  = addOrConcat(2,2,'concat') as string

//Be Carefoul , TS see no problem but has a problem
let myValue: number  = addOrConcat(2,2,'concat') as number

//10 as string
(10 as unknown) as string //double casting - forcing

//The Dom

// not null (!) operator
const img = document.querySelector('img')!

const myImg = document.getElementById('#img') as HTMLImageElement

const nextImg = <HTMLImageElement>document.getElementById('#img')



const yearSpan = document.querySelector('span') as HTMLSpanElement

let time:string = '1993'

yearSpan.setAttribute("datetime", time)
yearSpan.innerText = time