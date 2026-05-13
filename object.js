// //object: an object is a data type used to store multiple 
// //values in a single variable as key–value pairs.

let handbag= //object creation in JS
{
    color:'brown',//key-value pair (Here color, price, brand is Keys(properties) 
                    //brown, 500, Mk, is values)
    Price:500,
    Brand: 'MK'
}
console.log(handbag)
console.log(handbag.Brand) //dot notation
console.log(handbag['Price']) //bracket nottion

handbag.location="california" //add new key
console.log(handbag)

handbag.color='white' //update the key
console.log(handbag)

delete handbag.location //delete the key
console.log(handbag)

//Nested Object

let customer ={
    name :'Sangeetha',
    custID :4567,
    //details:{ //declare another object into object
        //age : 25,
        //height :5.2,
        //gender:'female',
//},
   //location:['CA','TX','NY','FL'], //decalre array into object
   vipcus: true,

newfun: function()
    {
        return this.custID
    //return 'function inside JS Object'
//or console.log('function inside Js Object')
    }
}
console.log(customer.newfun()) //or customer.newfun() //u can use either way
// console.log(customer)
// //console.log(customer.details.gender)
// console.log(customer)
// console.log(customer.location[3])

//for...in loop - looping using JS object 

console.log('looping JS object using for...in')
for(let key in customer)
{ 
    if (typeof customer[key]==='function'){
        //customer[key]() 
        console.log(key+'='+ customer[key]()) //prinitng one value of keypair
    }
    else {
       console.log(key + ':' + customer[key]) 
    }
    
}
