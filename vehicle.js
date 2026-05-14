//oops concepts in js-class and constructor are used to create 
//objects in js
//class is a blueprint of an object
//constructor is a special method which is used to initialize the 
//object
// class vehicle{

const { info } = require("node:console");

//     constructor(name, price)
//     {
//          console.log (name);
//          console.log (price);
//         console.log('this is constructor')
//     }

// }

// //object creation is done by using the new 'this' keyword and calling 
//the class name
// let v=new vehicle("ferrari", 250000); //object creation

//class creation with constructor and method
class vehicle{
    constructor(name, price)
    {
        this.name=name;
        this.price=price;
        console.log('this is constructor method');
    }
    info() // method is used to display the information of the 
    // vehicle
    {
        console.log(this.name);
        console.log(this.price);
    }
}
    let v=new vehicle("ferrari", 850000); //object creation
    v.info(); //method calling

    let v1=new vehicle("McLaren", 650000); 
    v.info(); 

    let v2=new vehicle("Lamborghini", 450000); 
    v.info();
