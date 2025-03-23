let sales:number = 123_456_789 //can separate digits with underscore to make it more readable
let course: string = 'TypeScript'
let is_published: boolean = true
let level // any = represents any kind of value/type
// should avoid using any type as much as possible

function render(document) {
  console.log(document)
}

//arrays
let numbers: number[] = [1, 2]


//tuples - fixed length array where each element has a particular type
let user: [number, string] = [1, 'Mosh']
user.push(1)


// enum - list of related constants
// const small = 1
// const medium = 2
// const large = 3

//pascal naming
// enum Size {Small = 1, Medium = 2, Large = 3}
const enum Size {Small = 1, Medium = 2, Large = 3} //more efficient with const keyword
let mySize: Size = Size.Medium

console.log(mySize)


//functions
// good practice to property annotate functions and specifity return types
// ? makes a paramenter optional
// you can add default value for parameters instead as a fallback
function calculateTax(income:number, taxYear = 2022: number): number {
  if (taxYear < 2022)
    return income * 1.2
  return income * 1.3
    //undefined
}
calculateTax(10_000, 2022)
//set noUnusedLocals, no UnusedParameter, noImplicitReturns to tue


//Objects
// let employee = {id: 1}
// employee.name = 'Mosh'

let employee: {
  readonly id: number, //unable to modify the property
  name: string,
  retire: (date: Date) => void
} = {
id: 1,
name: 'Mosh',
retire: (date: Date) => {
  console.log(date)
}}
employee.name = 'Mosh'

//Type aliases
type Employee = {
  //all props and methods all employees should have
  readonly id: number, //unable to modify the property
  name: string,
  retire: (date: Date) => void
}

let employee2: Employee = {
  id: 1,
  name: 'Mosh',
  retire: (date: Date) => {
    console.log(date)
  }
}

//Unions and Intersections
//Unions - can give multiple types
function kgToLbs(weight: number | string):number {
  //narrowing
  if(typeof weight === 'number') {
    return weight * 2.2
  } else {
    return parseInt(weight) * 2.2
  }
}
//Type narrowing


// Intersections
type Draggable = {
  drag: () => void
}
type Resizble = {
  resize: () => void
}

type UIWidget = Draggable & Resizeable
let textBox: UIWidget = {
  drag: ()=> {},
  resize: () => {}
}


// Literal  -limits the value (exact, specific value)
let quantity: 50 | 100 = 50


//Nullable types
function greet(name: string) {
  if (name)
    console.log(name: toUpperCase(
    ))
  else
    console.log('Hola!')
}
greet(null)



//Unknown types

//Optional Chaining
type Customer = {
  birthday: Date
}

function getCustomer(id:number): Customer | null {
  return id === 0 ? null : {borthday new Date() }
}

let customer = getCustomer(0)
console.log(customer?birthday)