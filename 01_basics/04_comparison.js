console.log(2>1)

console.log("2" === 2) // strict check also check its data type

console.log(null > 0)
console.log(null == 0)
console.log(null <= 0)
/* the reason is that an equality check == and comparisons < > >= <= works differently.
comparison converts null to a number , treating it as zero 
*/

console.log(undefined == 0) 
console.log(undefined <= 0) 
console.log(undefined >= 0) 