/*assignment for switch -print vowela

/let vowel='U'
switch(vowel){
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log('vowels')
    break;
    default:
        console.log('consonants')

}

//assigment switch without break

let vowels='I'
switch(vowels){
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log('vowels')
    //break;
    default:
        console.log('If not vowels then consonants')

}

//assigment for loop & while 

for(let k=1;k<='10';k++){
    console.log('Hello World')
}

let j=1
while(j<=10){
    console.log('Hello World')
    j++
}


//assignment for break, contunue - print even numbers
    for(let i=0;i<=10;i++) 
    {
        if(i%8==0){  
        break; 
        }
        console.log(i) 
    }

    //continue
   
    for(let i=0;i<=10;i++) 
    {
        if(i%2!==0){   
            continue; 
        }
        console.log(i) 
    }

   // assignment for const scope
function testconst(){
    if(true){
        let p=125
       console.log(p)
    }
    /*console.log(p) - same as let, const is block scope we can't use 
    it outside the block*/
//
//testconst() 

//Assignment for Reduce,Filter & Map

//reduce-multiplication
let scores=[30,45,10,56,7]
let mul1=1
let totalResult=scores.reduce((val,result)=> val*result,1)
console.log("using reduce method:" +totalResult)

//filter-odd number or even number
let filterOdd=scores.filter(x=> x%2)
console.log("using fliter-odd no:" + filterOdd)

//map-double 
let mapDouble=scores.map(x=> x*2)
console.log("using map:" + mapDouble)