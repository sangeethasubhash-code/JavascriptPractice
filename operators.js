/* arthmetic operators

symbols used to perform basic maths calculations like addition, subtraction, 
multiplication, division and mode.
*/

let a=10
let b=15
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

/*Assigment operators
to assign (store) a value into a variable.
*/

let x=10
console.log(x)
x=x+5 //x=10+5 
console.log(x)

//shorthand for arthmetic operator
x+=5 
console.log(x)
x-=5
console.log(x)
x*=5
console.log(x)
x/=5
console.log(x)

/*comparsion operator or relational operator 
checking 2 values and return a result of either True or False.*/

// (==)(===) equal operator

let y=4
let z="4"
console.log(y==z)
console.log(y===z)

//greater or less than method

let g=6
console.log(y>g)
console.log(y<g)

//greater than or equalto (>=) or less than or equalto (<=)

let h=6
console.log(g>=h)
console.log(g<=h)

//logical operator (And, Or, Not)

let age1= 2
console.log(age1>18 && age1<30) //&& symbol for And
console.log(age1>29 || age1<30) //|| plain line symbol for Or
let bol = true
console.log(!bol) //! excalmation symbol for Not


//trenary operators
let age = 1
let result = age>=18? "you are an adult":"you are minor"
console.log(result)
