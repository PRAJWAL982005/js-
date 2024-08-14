// Dates

let myDate = new Date()

console.log(myDate.toString());

console.log(myDate.toDateString());       //to display date as a  1/23/2023, 5:05:00 AM

let myCreatedDate = new Date(2023,0,23,5,5)  //to create date of our wish

console.log(myCreatedDate.toLocaleString())  //to convert to 1/23/2023, 5:05:00 AM

console.log(typeof myDate);   

let myTimeStamp =  Date.now()  // to create a timestamp

console.log(myTimeStamp)


let MyCreatedDate = new Date("01-14-2023")
console.log(MyCreatedDate.getTime()) //to compare the timings

console.log(Math.floor(Date.now()/1000)) //to convert to seconds

let newDate = new Date()

console.log(newDate.getUTCDate())


newDate.toLocaleString('default',{object,
    weekday:"long",
    timeZone:myDate
})