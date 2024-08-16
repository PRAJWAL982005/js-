// these are array specific loops
          // 1.for of loop  
//   Syntax   
// for (const iterator of object) {} //object can be array,string or any 

//   const arr = [1,2,3,4,5]      

  for (const num of arr) {
    console.log(num);
  }

//   maps ->The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. 

const map = new Map()
map.set('IN',"India")
map.set('usa',"united states of america")
map.set('IN',"India")


console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myObject = {
    'game1':'NFS',
    'game2':'pubg',
    'game3':'freefire',
}
for (const [key,value] of myObject) {
     console.log(key,':-',value);       //myObject is not iterable but map is
    
}
                        // 2. for in loop
const myobject = {
    js: "javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myobject) {
    console.log(`${key} short cut is for ${myobject[key]}`);
}


const myArrays = ["js","java","cpp","python"]    //but in for of we directly get value but it shows indexes
for (const key in myArrays) {
    console.log(`${key} of ${myArrays[key]}`);
}


// const map = new Map()  //it is not iterable so it cant be used in for in loop
map.set('IN',"India")
map.set('usa',"united states of america")
map.set('IN',"India")

for (const key in map) {

    console.log(key);
   
}

                        // 3. for each loop
  const coding = ["js","ruby","cpp","java"]
  
  coding.forEach( function (val){   //since it is callback no need of name
        console.log(val);
  })


coding.forEach((value) => {console.log(value)}) //or by declaring a function and coding.forEach(function name)

coding.forEach( (item,index,arr) => {console.log(item,index,arr);})

[{},{},{}]
const myCodding = [
    {
        languageName:"js",
        languageFilename:"js"
    },
    {
        languageName:"java",
        languageFilename:"java",
    },
    {
        languageName:"python",
        languageFilename:"python",
    }
]

myCodding.forEach( (item) => {console.log(item.languageName);})