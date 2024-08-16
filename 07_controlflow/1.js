// // if 

if(2=="2"){

}
if(2==="2"){ //strict equal

    console.log("executed")

}

// // if-else
const score = 300
if(score>100){
    let power = "fly"
    console.log(`user power ${power}`)
}
else{

    console.log("enter score b/w 200")
}

 if(score>100) console.log("hai"),console.log("hello"); //short hand notation -> this type not tolerable

// switch

const day = 3

switch (day) {
    case 2:
        console.log("1")
        break;
    case 3:
        console.log("3")    
        break;
    default:
        console.log("infinity")
        break;
}

// // truthy and falsy

const userEmail = "prajwal"

if(userEmail){
    console.log("got useremail");
}

else{
    console.log("dont have email")
}

// falsy values

/*
false,0,-0,BigInt 0n,"",null,undefined,NaN
*/

// truthy values

/*
"0",[],'false'," ",{},true,function(){}
*/
const useremail = []
if(useremail.length==0){
    console.log("array is empty")
}

const emptyObject = {}
if(Object.keys(emptyObject).length == 0){    //Object.keys(emptyObject) ->stores keys inn array
    console.log("object is empty");
}


// Nullish Coalescing Operator (???):null undefined eturns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
val1 = 5 ?? 10

val1 = null ?? 10

val1 = undefined ?? 15

val1 = null ?? 10 ??15

console.log(val1);




// ternary operator

condition ? true : false

