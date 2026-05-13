//inheritance it imports the class from another file and extends the properties 
//and methods of that class to another class

import { employi, Animal } from "./employi.js"; 
class manager extends employi //extend keyword used to inherit the properties and 
//methods of employi class
{
    leave() // this is a new method that is added in manager class
    {
        console.log('manager leave')
    }
    overtime()
{
    console.log('worked overtime');
}
    work() // this is inherited from employi class and it is overridden 
    // in manager class
    {
        console.log('work done yesterday');
    }
}

let m=new manager();
m.leave()
m.overtime()
m.work() // this will call the work method of manager class and not the work 
// //method of employi class because it is overridden in manager class

class Elephant extends Animal
{
    eat()
    {
        console.log('elephant is eating');
    }
    dance()
    {
        console.log('elephant is dancing');
    }
}

let e=new Elephant();
e.sleep()
e.eat() 
e.dance()
e.furious() 