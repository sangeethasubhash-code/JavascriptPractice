/*function: define once, use many times- can call as mini program -
You can run (call)it whenever you need,instead of writing the same code again.

Synatc
/*function name()  //function declaration
{
    console.log('functionname')
}
    functionname()*/ //calling the function

    function declareResult() 
    {
        console.log('Result')
    }
    declareResult() //calling the function


    //function with parameters
    function sayName(name) //name is a parameter (input to the function)
    {
        console.log('Welcome' + name) 
    }
    sayName('Sangeetha') //function call //argument-ging value to functionname
    sayName('Zoe') 
    sayName('Sanjana')

    function add(a,b)
    { 
        let sum=a+b;
        return sum; //return sends the result back
    }
    let result=add(2,4)

    console.log(result) //(or) 
    console.log(add(5,15)) //another method


    function fullname(Fname, Lname)
    {
        let fullname=Fname +' '+Lname //concat ''and give space
        return fullname
    }
    let output=fullname('sangeetha', 'menon')
console.log(output)


//arrow function(modern way)

//Syntax
// const functionname = (parameter)=>{code to be executed}

let sub=(c,d)=>{return c-d;}
console.log(sub(9,5))
console.log(sub(96,8))

//without return 
let mul=(e,f)=>{e*f}
mul(3,4)
    

/*scope: where a variable can be accessed in your code.Inside the function 
we can use it anywhere.*/

//scope - Var

function testvar(){
    if(true){
        var z=80
        console.log(z)
    }
    console.log(z)
}
testvar()

/*block scope: variables are only accessible inside the {} bloc,
where they are declared and cannot be accessed outside.let & 
const are block scope*/

function testlet(){
    if(true){
        let n=80
        console.log(n)
    }
    //console.log(n) - let is block scope we can't use it outside the block
}
testlet()

//const scope
function testconst(){
    if(true){
        let p=125
       console.log(p)
    }
    //console.log(p) same as let, const is block scope we can't use 
    //it outside the block 
}
testconst()


//gobal scope : variable declared outside any function or block

let answer=10 //golbal variable

function add1()
{
    console.log(answer + 5)
}
function sub1()
{
    console.log(answer - 5)
}
console.log('my answer is'+ answer)
add1()
sub1()

