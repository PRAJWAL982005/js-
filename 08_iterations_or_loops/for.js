                //1. for loop

// for (let i = 0; i< 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// for visualization
for (let j = 0; j< 10; j++) {
    console.log(`outer loop ${j}`);
    for (let k = 0; k< 10; k++) {
        console.log(`inner loop value ${k} and inner loop${j}`);
        
    }
}
 let myarray = ["flash","batman","superman"]
console.log(myarray.length)
 for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element)
    
 }


// break and continue

// break
for (let index = 0; index < 20; index++) {
    if(index==5){
        console.log(`5 is located`);
        break
    }
    console.log(`value of i is ${index}`);    
}

// continue
for (let index = 0; index < 20; index++) {
    if(index==5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);    
}

                  



