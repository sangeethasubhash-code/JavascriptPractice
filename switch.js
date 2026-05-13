
//switch
/* A switch statement checks a value and matches it with different cases, 
then runs the matching block of code.

//breakis used to exit out of a loop or a switch statement immediately,
stopping further execution of that block.
In switch statements : break prevents the code from continuing 
into the next case (called “fall-through)

/*switch(expression){
    case value 1:
        //code to be executed if expression matches value1
        break;
    case value 2:
        //code to be executed if expression matches value1
        break;
    case value 2:
        //code to be executed if expression matches value1
        break;

default:
     //code to be executed if expression doesn't matches any of the case
        break;
}*/

// with break - stop and exit immediately

let color=3 //red
switch(color){
    case 1:
        console.log('green')
        break;
    case 2:
        console.log('red')
        break;  
     case 3:
        console.log('orange')
       break;
    case 4:
        console.log('blue')
        break;
    case 5:
        console.log('purple')
       break;
    case 6:
        console.log('black')
        break;
    default:
        console.log("invalid color")
}

//without break - it would keep executing the next cases too
let color=3 //red
switch(color){
    case 1:
        console.log('green')
        //break;
    case 2:
        console.log('red')
        //break;  
     case 3:
        console.log('orange')
       // break;
    case 4:
        console.log('blue')
       // break;
    case 5:
        console.log('purple')
       // break;
    case 6:
        console.log('black')
       // break;
    default:
        console.log("invalid color")
}

