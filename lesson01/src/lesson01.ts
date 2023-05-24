let stringArr: (number | string)[] = ['one', 'two', 'three']

let numberArr: number[] = [1,2,3]

let mixedArr: (string | number | boolean | object)[]= ['one', 234, true]

stringArr[0] = 1
stringArr.push(89)
mixedArr.push({name:'felipe'})

console.log(stringArr)
console.log(mixedArr)

let test = []
let band: string[] = []

band.push('blink 182')

console.log(band)

//tuple
// tuple é um array onde se define os tipos de forma ordenada e precisa dentro do array. 

let myTuple: [string,number,boolean] = ['felipe', 30, true]

let mixed = ['john', 1 , false]

//object

let myObject: object = {name:'Calais'}

const exampleObj = {
    prop1:'Calais',
    prop2: true
}


interface fruts  {
    name?: string,
    quantity: number,
    type?: (string | boolean | number)[],
    active?: boolean
}

let banana: fruts = {
    name: 'banana',
    quantity: 23,
    type: ['da Terra', 'prata','Caturra'],
    active: true
}

let apple: fruts = {
    name: 'apple',
    quantity: 13,
    type: ['fuji', 'galã','argentina'],
    
}

let unkownFruit:fruts ={
    quantity: 22,
    type:['none'],
    active: false
}

const betterFrut = (fruit: fruts) => {

    if(fruit.name){
        return `the ${fruit.name.toUpperCase()} is the better fruit`
    }
    return  'No fruit informed'

}

console.log(betterFrut(unkownFruit))

//Enums

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.U)
console.log(Grade.A)