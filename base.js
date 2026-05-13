//print output
console.log('Hello World')

/*var is a keyword to create a variable and store a value and you can change it later*/

//var
var a='Hello World'
console.log(a)
var age= 38
console.log(age)

var firstname ="Sangeetha"
console.log(firstname)

/*datatype is what kind of value a variable is storing.
It tells whether the value is a number, text, true/false, etc.*/

//typeof
var a="Sangeetha" //string
var b=18 //number
var c=true //boolean
var d=null //object
var e //undefined
var f=12345678n //bigint
var g=1.2 //number

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(e))
console.log(typeof(f))
console.log(typeof(g))

//declare,redeclaration & Updation

var i = 10 //declare
var i =5 //redeclaration is possible
console.log(i)
i =2 //updatation is possible
console.log(i)

// /*let is a keyword used to declare a variables. let allow changes.*/


let a1= 15 //declare
console.log(a1)
let a1 =5 // redeclaration not possible 
console.log(a1)
a1=5 //updation is possible 
 console.log(a1)
a1 = 'apple'
console.log(a1)

// /*const define a constant value, meaning a value that cannot 
// be changed after it is assigned. Fixed value (cannot be modified)
// */

const num= 25 //declare
console.log(num)
const num =8 // redeclaration not possible
name = 3 //update not possible
console.log(name)
