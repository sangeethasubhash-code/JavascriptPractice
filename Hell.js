function step1(callback)
{
    console.log('step 1 completed')
    callback()
}
function step2(callback)
{
    console.log('step 2 completed')
    callback()
}
function step3(callback)
{
    console.log('step 3 completed')
    callback()
}

//callback hell
step1(function(){
    step2(function(){
        step3(function(){
        console.log('All steps completed')
    })
    })
})

function step1(callback)
{
    callback()
    console.log('step 1 completed')
    
}
function step2(callback)
{
      callback()
    console.log('step 2 completed')
  
}
function step3(callback)
{
    callback()
    console.log('step 3 completed')
    
}

//callback hell
step1(function(){
    step2(function(){
    step3(function(){
        console.log('All steps completed')
    })
    })
})