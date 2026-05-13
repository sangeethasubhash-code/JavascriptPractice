
console.log('using clouser')
function counter()
{
    let count=100;
    function getInnercount()
    {
        count++
        console.log(count) 
    }
    return getInnercount;

}
let Newcounter =counter();
Newcounter()
Newcounter()
Newcounter()

console.log('usinfg for...loop')
function counter1()
{
    let count=100;
    function getInnercount1()
    {
      for (let count=1000; count <=1010;count++) 
        console.log(count) 
    }
    return getInnercount1;

}
let createcounter =counter1();
createcounter()
