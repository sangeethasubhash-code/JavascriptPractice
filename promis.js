//synchrounous code is executed line by line and each line waits 
//for the previous line to complete before executing

//promise are used to handle asynchrounous code

//syntax of Promise
//let promise = new promise((reslove,reject)=>{
    //code
//})
//new promise --create a promise object
//reslove -- success
//reject -- failure

//handling promise
//then()-used to handle success
//catch()- used to handlle failure

//syntax for then & catch
//promise.then(()=>{
//code to handle success    
//})

//catch(()=>{
//code to handle failure   
//})

//then()-used to handle success
//catch() 0 used to handlle failure

let number =10
let checkEven =new Promise((reslove, reject)=>{
    if (number % 2==0){
        reslove ('Even Number')
    }
    else {
        reject('Odd number')
    }
})

checkEven.then((msg)=>{
    console.log(msg)
})
.catch((errmsg)=>{
    console.log(errmsg)
})

//