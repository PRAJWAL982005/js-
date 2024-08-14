const marvelhero = ["spiderman", "hulk", "iron man"]
const dc = ["superman", "hulker", "ironee man"]


// marvelhero.push(dc) //it treats dc as another element

// console.log(marvelhero)
// console.log(marvelhero[3][1])

// let hero =marvelhero.concat(dc)  //returns new array

// console.log(hero)

// spread operator

let allHero = [...marvelhero,...dc]
console.log(allHero);

// method to put subarrays in single array
const array5 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = array5.flat(Infinity)

console.log(real_another_array)


console.log(Array.isArray('prajwal'))
console.log(Array.from('prajwal'))  //converting to array
console.log(Array.from({name:'prajwal'})) //interesting we must define whether it is to convert name or string

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))
