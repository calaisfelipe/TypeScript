//utility types


interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

//PARTIAL
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment =>{
    return { ...assign, ...propsToUpdate

    }
}

const felipeCalais: Assignment = {
    studentId: 'Felipe Calais',
    title: 'Developer degree',
    grade: 500,
    verified: true
}

 const felipeCalaisUpdated = updateAssignment(felipeCalais, {title:'Dev', grade:300})

 console.log(felipeCalaisUpdated)

 //////////////////////////////////////////

 // Required and Readonly

 const recordAssignment = (assign: Required<Assignment>):Assignment =>{
    //send to database
    return assign
 }


 const assignVerified: Readonly<Assignment> = {
    ...felipeCalaisUpdated, verified: true
 }

 //assignVerified.grade = 88

 ///////////////////////////////////////////
 //Record

type Color = {
    red: string | number,
    green: string,
    blue: string,

}

type colors = 'red' | 'green' | 'blue'

const hexColorMap: Record<colors, Color> ={
    red: {red:'FF', blue:'00' , green : '00'},
    green: {red:0, blue:'00' , green : 'FF'},
    blue: {red:0, blue:'FF' , green : '00'}
} 

////////////////////////////////////////////

// PICK AND OMIT

type ColdColors = Pick<Color, "green" | "blue">

const colorPicked:ColdColors = {
    green: 'color1',
    blue: 'color2'
} 

type HotColors = Omit<Color, "blue"> 

const colorPicked2: HotColors = {
    red: 'color1',
    green: 'color2'
}

//////////////////////////////////////

// Exclude and Extract

type ColorExclude = Exclude<colors, "blue"> 
type ColorExtract = Extract<colors, "red" | "green" | "violet"> //violet não vai ser extraido 


const noBlue: ColorExclude = "red" //colocar blue o ts reclama
const colorsExtracted: ColorExtract = 'green'

//Nonnullable

type AllPossibleTypes = NonNullable<string | number | null | undefined | boolean>

const notNull:AllPossibleTypes =  'Não pode null nem undefined'