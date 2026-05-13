//scopechain - Searching the function -When code tries to access a variable, 
// it checks:the current local scope, then the next outer scope
// and again the next outer scope after that
// continues until it reaches the global scope

let a=2;

function outerFun()
{
    let b=3; //local
    let a=10; //always it looks for nearest variable 
    function innerFun(){
        let c=7
    console.log(a) //access global variable
    console.log(b) //access local variable of outer function
    console.log(c) //access local variable of inner function
}
    innerFun();
}

outerFun();