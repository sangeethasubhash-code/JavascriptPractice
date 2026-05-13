// function greetme(name)
// {
//     console.log("Good Morning",name)
// }
// greetme('Sangeetha') //simple function

function greetHai(name, callback){
    console.log('Good Morning', name)
    callback(); //call callback function
}
function greetBye()
{
    console.log('Good Bye')
}

greetHai('Sangeetha', greetBye)