let age :number =24

age =12

let userName :string

userName="Max"

let isInstructor :boolean
isInstructor=true

// let hobbies :null

let hobbies :string[]

hobbies =["Sports","Cooking"]

let person: {
    name :string,
    age:number
}

person={
    name:"Max",
    age:32
}

// person={
//     isEmployee:true
// }


let people:{
    name :string,
    age:number
}[]

let course :string|number="React Guide"

course=124234

function add(a:number,b:number){
    return a+b
}

function insertAtBeginning<T>(array:T[],value:T) {
    const newArray =[value,...array]
    return newArray
}

const demoArray =[1,2,3]

const updatedArray =insertAtBeginning(demoArray,-1)

