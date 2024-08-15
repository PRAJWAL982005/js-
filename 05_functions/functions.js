function addTwoNumbers(number1,number2){ //number1&number2 are parameters
    let result = number1 + number2
    return result
}

console.log(addTwoNumbers(3,5))        //3 & a are arguments


const result = addTwoNumbers(4,5)

console.log("result:",result)

function loginUserMessage(username = "sam"){
    if(username == undefined){    //or !username
        console.log("please enter a username")
        return
    }
    return`${username} just logged in`
}

console.log(loginUserMessage("Pajwal")) //(" ") ->just logged in, ()->undefined just logged in 


// functions with objects

function calculateCartPrice(...num1){
//... is rest operator
    return num1

}
function calculateCartprice(val1,val2,...num1){
    //... is rest operator
        return num1
    
    }

console.log(calculateCartPrice(200,400,500)) 
console.log(calculateCartprice(200,400,500,2000)) //500&2000 goes inside array


const user = {
    userName : "prajwal",
    object   : "iphone",
    price    : 200,

}

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and the price is ${anyobject.price} and the object is ${anyobject.object}`)
}

handleObject(user)

// function and arrays

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
        return getArray[1]
}

console.log(returnSecondValue(myNewArray))  
