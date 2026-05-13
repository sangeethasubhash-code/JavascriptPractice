//array: special variable used to store multiple values in a single variable.

let numbers=[1,2,3,4,5,6,7,8] //length-no of elements in the array
console.log(numbers)

let colors=['purple','black','white','yellow','green','blue']
console.log(colors)
console.log(colors[2])//index-to access the element,it starts from 0

console.log("update the array")
numbers [5]=80 //updating the elements
console.log(numbers)

//to find the length of array
console.log("length of array")
console.log(numbers.length)
//console.log(colors.length)

//itrate the array using for loop -looping through an array
console.log("using for loop")
for(let i=0; i<numbers.length; i++){
   console.log(numbers[i])
}

//methods of array - push,pop,unshift,shift,length,indexOf

let arr=[1,2,3]
console.log(arr)

arr.push(5) //add elemtent at the end of the array
console.log(arr) //1 2 3 5

arr.pop() //remove the last element from the array
console.log(arr) //1 2 3

arr.unshift(15) //add element at the begining fo the array
console.log(arr) //15 1 2 3

arr.shift() //remove the first element from the array
console.log(arr)

console.log(arr.length) // it returns the nubers of elements in the array

arr.indexOf(2)
console.log(arr.indexOf(2)) //it returns the inxex of the first occurance of the element.
console.log(arr.indexOf(5))

let bool=arr.includes(4)
console.log(bool) //it returns true if the element is present in the array 
// otherwisw false.

//slice method:extract a portion of an array without changing the original value.

let ar1=[2,4,6,8,10]
console.log(ar1)
let newArr=ar1.slice(1,4)//start 1 and end 4- returns a new array containing 
// the elements- start index is included to end is excluded.
console.log('slice method'+' ' +newArr)

//splice method: is used to add,remove,or replace elements in an array and 
// it modifies the original array.
ar1.splice(1,4) //start index and no.of elements to be removed
console.log('after removing from element Index 0: '+ar1)

//splice with arguments
ar1.splice(1,3,10)//start index- 1,no.of element to be removed-3, and add 
//the element to be added-10
console.log('after replacing elements:'+ar1)

//for...loop (looping in array)

let arr1=[1,2,3,4,5,6,7,8]
console.log(" for...of loop")
for(let a of arr1){
console.log(a)
}

let things=['phone','laptop','pen','book']
for(c of things){
    console.log(c)
}

//for loop...to find total sum
let mark=[15,35,4,60,8]
let sum=0 //sum=sum+15 15+35,
for(let i=0;i<mark.length;i++)
{
    sum=sum+mark[i]
}
console.log("Total Mark ="+sum)

/*reduce method:used to reduce array element into a single value. Take all values and combine them into ONE result
Syntax
//let variableName=array.reduce((acc,cv)=>acc+cv,inital value)
accumulator-stores the result as it builds up,current value: current element in the array
initialvalue-starting value of the accumulator*/

let totalMark=mark.reduce((total,val)=> total+val,0) //callback fuction
console.log("using reduce method"+totalMark)

/*filter method: filter() is used to select element from an array based on 
//condition and return a new array with only matching values.It does not change the original array.
Syntax
//let variableName=array.filter(element=>condition)*/

let filterarray=mark.filter(m=> m>8)
console.log(filterarray)

/*map method: map() is used to take each value and change/update it new 
value and gives a new array. Used to transform each element of an array and return a new array.
Syntax
let variableName=array.map(element=> condition)*/

let graceMark=mark.map(z=> z+5)
console.log(graceMark)
console.log(mark)
