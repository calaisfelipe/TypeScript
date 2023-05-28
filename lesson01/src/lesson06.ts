// GENERICS

const echo = <T>(arg: T):T =>{
    return arg
}

const isObj = <T>(arg:T): boolean =>{
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

const obj1 = {
    name: 'felipe'
}

const arr = ['test',123]

console.log(isObj(null))
console.log(isObj(arr))
console.log(isObj(obj1))
console.log(isObj(true))

///////////////////////////////////////////

const isTrue = <T>(arg: T): {arg: T, is:boolean} =>{

    if(Array.isArray(arg) && !arg.length){
        return {arg, is:false}
    }

    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {arg, is:false}
    }

    return {
        arg,
        is: !!arg
    }
}

console.log(isTrue(0))
console.log(isTrue(1))
console.log(isTrue('teste'))
console.log(isTrue(''))
console.log(isTrue([]))
console.log(isTrue(['123',22]))
console.log(isTrue({}))
console.log(isTrue({name: 'felipe'}))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue(NaN))

/////////////////////////////////////////

interface BoolCheck<T> {
    value: T,
    is:boolean

}

const isTrueV2 = <T>(value: T): BoolCheck<T> =>{

    if(Array.isArray(value) && !value.length){
        return {value, is:false}
    }

    if(isObj(value) && !Object.keys(value as keyof T).length){
        return {value, is:false}
    }

    return {
        value,
        is: !!value
    }
}

///////////////////////////////////////////////////
//extends

interface HasId {
    id: number
}

const processUser = <T extends HasId>(user: T): T =>{
    //process the user with logic here
    return user
}

console.log(processUser({id: 1, name: 'felipe'}))

//////////////////////////////////////////////////////

class StateObject<T>{
    private data: T

    constructor(value:T){
        this.data = value

    }

    get state(): T {
        return this.data
    }

    set state(value: T){
        this.data = value
    }


}

const store = new StateObject<(string | number |boolean)[]>(['felipe'])

console.log(store.state)

