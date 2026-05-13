import data from './sample.json' with { type: 'json' };

console.log(data.name); //name-key is printed form json file.
console.log(data.city);
console.log(data.age);

//this keyword is used to access the properties of an object and to refer to the current object. 
//It is a special keyword in JavaScript that refers to the current execution context.

let emp = {
    fname:'Sneha',
    lname:'Menon',
    age:21,
    empId:12345

};
emp.details = function() {
    return this.age + ' ' + this.empId;
};
console.log(emp.details());

