//type Aliases

type stringOrNumber = string | number;
type stringOrNumberArr = (string | number)[];

type person = {
  name?: string;
  age: stringOrNumber;
  type: stringOrNumberArr;
  alive: boolean;
};

//Literal Types

let myName: "Dave";

let userName: "Dave" | "John" | "Amy";

userName = "Dave";

// functions

const add = (a: number, b: number): string => {
  return String(a + b);
};

console.log(add(2, 4));

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("hello");

let subtract = function (a: number, b: number): number {
  return a - b;
};

console.log(subtract(10, 8));

//type mathFunction = (a:number, b:number) => number
interface mathFunction {
  (a: number, b: number): number;
}

const multiply: mathFunction = function (a, b) {
  return a * b;
};

logMsg(multiply(4, 4));

//optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }

  return a + b;
};

//default parameters

const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3));
logMsg(addAll(2, 3, 4));
logMsg(sumAll(undefined, 3));

//Rest parameters

const total = (...nums: number[]):number =>{
 
    return nums.reduce((prev, curr) => prev + curr)
}


logMsg(total(2,4,2,5,6,8,6,99))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinity = () =>{
    let i:number = 1
    while(i == 20){
        i++
        
    }
}

const isNumber = (value:any): boolean =>{
    return typeof value === 'number' 
}


const numberOrString = (value:number |string):string  => {
    if(typeof value === 'string') return 'string'
    if(isNumber(value)) return 'number'

   return createError('this should never happen')
}

console.log(numberOrString(2))