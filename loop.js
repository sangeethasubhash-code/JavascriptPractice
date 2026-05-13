//loop
/*//loop is used to repeat a block of code multiple times.

//for loop : runs code for each item in a sequence or for a fixed number
 of iterations.
Syntax
    where to start   where to stop    increment/decremant
      1;              i<=10      i++
//for(initialization; condition; updation;)
    code to be excuted        
}*/

for(let i=1; i<=10; i++)
    {
    console.log(i)
}

/*while loop:checks the condition first(pre-test loop)-keeps running until its condition becomes false.
Syntax
while (condition){
    code to be executed
}*/

let z=0
while(z<=8){
    console.log(z)
    z++
}


/*do...while -Runs first and then check the conditions- used to 
execute a block of code at least once,and then repeat it as long 
as a condition is true.

Syntax
do{
    //code to run
    //updation
}
while (condition) */

//runs atleast once even if condition is fasle
let r=1 //true condition 
do{
    console.log(r)
    r++
}
while (r<=5)

let i=10 //false condition
do{
    console.log(i) //10
    i++ //11
}
while(i<=5)

/* difference between while & do...while 
while → checks condition before running the code
do...while → runs code first, then checks condition*/


/*In loop statement there are looping control statements or it's called 
as jumping statements
    //1. break
    //2. continue */
    
/*break - when break is used inside the loop (inloops-for, while, do...while)
it terminates the loop early, even if the loop condition is still true.*/

    for(let i=1;i<=5;i++) //1<=5 2<=5 3<=5 4<=5 5<=5
    {
        if(i==3){ //1==3 2==3 3==3
            break; //immediately exit the loop
        }
        console.log(i) 
    }

/*continue - used to skip the current iteration of a loop and move 
to the next one*/

for(let u=5;u<=10;u++) //5<=10 6<=10 7<+10 8<=10 9<=10 10<=10
    {
        if(u==8){ //5==8 6==8 7==8 8==8
            continue; //skip the rest of the code in the loop and move to next iteration
        }
        console.log(u) 
    }

    //for...loop (looping in array)

let arr1=[1,2,3,4,5,6,7,8]
console.log(" for...of loop")
for(let a of arr1){
console.log(a)
}

let things=['phone','laptop','pen','book']
for(thi of things){
    console.log(things)
}
