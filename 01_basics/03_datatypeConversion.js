let score = undefined

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

console.log(valueInNumber)


// "33" => 33
// "33abc" => NaN
// null => 0
// true => 1 & false=> 0
// undefined => NaN

let isLoggedIn = "hai"

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)


// 1 => true , 0 => false
// " " => false , "hai" => true


let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)