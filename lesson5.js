// Task 1
// name = prompt('Enter a name: ')
//
// function greet1(name){
//     return "Hello " + name
// }
// console.log(greet1(name))
//
// let greet2 = function(name){
//     return "Hello " + name
// }
// console.log(greet2(name))
//
// let greet3 = (name) =>{
//     return "Hello " + name
// }
// console.log(greet3(name))
//
// let greet4 = new Function(
//     'name',
//     'return "Hello " + name'
// )
// console.log(greet4(name))

//Task 2
// num = prompt("Enter a number")
//
// const isPrime = (num) => {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(num));

//Task 3
// num = prompt("Enter a number")
//
// const countDigits=(num)=>{
//     console.log(num.length)
// }
// countDigits(num)

//Task 4
// let num = prompt("Enter a number")
// const isPalindrome=(num) => {
//     return num === num.split("").reverse().join("")
// }
// console.log(isPalindrome(num))

//Task 5
// const num = prompt("Enter a number")
// const isArmstrong =(num)=>{
//     const leng = num.length
//     let res = 0
//     for (const numElement of num) {
//         res += (numElement ** leng)
//     }
//     console.log(num == res ? "Armstrong" : "not Armstrong")
// }
// isArmstrong(num)


