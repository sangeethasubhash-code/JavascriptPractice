//hoisting means JS prepare variable and function before running the code

console.log(a)
var a=12;

sayHi() //function call before declaration
//function are fully stored in memory
function sayHi()
{
    console.log('Hi')
}

// console.log(b) //error - reference error let and const are not hoisted
// let b=17;
// console.log(c) //reference error
// const c=5;