import {mobileinheritance} from './mobileinheritance.js'
class iphone extends mobileinheritance{

    testMsg()
    {
        console.log('this is iphone');
    }
}
 let i=new iphone();
 i.phoneModel();
 i.testMsg();   

 //iphone....child class or derived class- it inherits the properties 
 //and methods of mobile class.
//mobile...parent class or super class or base class- it is the 
//class from which the properties and methods are inherited.