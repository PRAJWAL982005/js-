const tinderUser = {}// ->is a singleton

tinderUser.id = "123abc"

tinderUser.name = "sammy"

tinderUser.isLoggedIn = false



// const regulaUser = {
//     email: "prajwalkk@gmail.com",
//     fullname: {
//         userFullName:{
//                 firstName:"prajwal",
//                 lastName:"kk",
//         }
//     }
// }
// console.log(regulaUser.fullname.userFullName.firstName)

const obj1 = {1: "a",2:"b"}


const obj2 = {3: "c",4:"d"}

const obj4 = {5: "e",6:"f"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2}
console.log(obj3);

console.log(tinderUser)

console.log(Object.keys(tinderUser)) //data type is array

console.log(Object.values(tinderUser))//combines the values tp array

console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //to check whether the property is there or not 

