// // arrays  ->an object , collection of multiple elements in a single variable, it is resizable, can me mixed

// // array copy operation creates shallow copies -> share the same reference 
const myArrays = [0,1,2,3,4,5]

const myArrays2 = ["hai","hello"]

const myArrays3 = new Array(1,2,3,4)

console.log(myArrays[3])

// Array Methods 

myArrays.push(6)  //adds element to the arrray
console.log(myArrays)


myArrays.pop() //removes element from the last

myArrays.unshift(8) //ads element in first but it changes all the indexes 
console.log(myArrays)

myArrays.shift()
console.log(myArrays) //removes element from starting

console.log(myArrays.includes(6))

console.log(myArrays.indexOf(4))

const newArr = myArrays.join() //->elements are binded and converted to string

// slice ,splice
console.log("A ",myArrays)

const myn1 = myArrays.slice(1,3) //does not change the actual memory

console.log("B ", myArrays);

const myn2  = myArrays.splice(1,3) //returns a section of array &manipulates originla array

console.log("C ", myArrays);

console.log(myn2)
