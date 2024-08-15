const user = {
    username: "prajwal",
    price: 999,

    welcomeMessege: function () {
        console.log(`${this.username},welcome to website`);  //this is used to acess current contexts
        console.log(this);
    }
}

user.welcomeMessege()

user.username = "sam"

user.welcomeMessege()

console.log(this) //only running this shows{} & global object in browser is window object


function chai(){
    let userNAme = "prajwal"
    console.log(this.userNAme)//shows undefined
}
chai()


// *****************************8using arrow functions8*************************


// const Chai=()=>{
//         let userNAme = "prajwal"
//         console.log(this)
//     }
//     Chai()

// const addTWo = (num1,num2) =>  num1+num2   //called as implicit return & if we use curly braces we must use return 
   
const addTWo = (num1,num2) =>  (num1+num2)  //no need of return we use () to declare a object without return

console.log(addTWo(5,3))

const myArray= [2,3,4,5,]

