

if (true) {                  //
    let a = 10               //      block scope      
                             //
    const b = 20
}

console.log(a);
console.log(b);


// the scope in console and scope in editor running through node is different


function one(){
    const userName="prajwal"

    function two(){                             //two can access variables from one since for two one is global scope
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website)

    two()
    console.log(userName)
}
one()


if(true){
    const username="prajwal"
    if(username=="prajwal"){
        const webSite = "youtube"
        console.log(username+webSite)
    }
    // console.log(webSite)  //webSite is out of scope
}
console.log(username)

// *****************************interesting************************************************

// it shows error because in addOne we have declared directly but in addTwo we declared and stored in a variable
// console.log(addOne(5))

// function addOne(num){
//     return num+1
// }

// addTwo(5)

// const addTwo = function(num){
//     return num+2
// }

// *****************************************it does not shows error ************************************

console.log(addOne(5))

function addOne(num){
    return num+1
}



const addTwo = function(num){
    return num+2
}

addTwo(5)


