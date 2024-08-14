// object literals 


Object.create //-> another method to declare object in the form of constructor and is a singleton

// object literals
const mySym = Symbol("key1")
const user = {

    name: "prajwal",
    age:18,
    "full name": "prajwalkk",  //can not be operated using . operator
    [mySym]:"myKey1",  //correct way to declare a symbol inside object as key by putting[] 
    location:"karnataka",
    email:"prajwal@ydhhbvhk",
    isLoggedIn:false,
    lastLoginDays: ["monday","saturday"]
} 
console.log(user.email)
console.log(user["email"])

console.log(user[mySym])

// to update the key values by using dot operator
Object.freeze(user)


user.greeting = function(){
    console.log("hello js user")
}


user.greetingto = function(){
    console.log(`hello js user,${this.name}`)
}
console.log(user.greeting());


console.log(user.greetingto());

