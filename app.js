// ########## Lesson 1 ##########
// console.log("5" + 5)
// console.log("5" - 5)
// console.log("5" * 5)
// console.log("10" / 2)
// console.log(5 + true)
// console.log('10' - true)
// console.log("5" + true)
// console.log(5 + null)
// console.log(5 + undefined)
//
// // task2
// console.log(Number("200") + 50)
// console.log(String(25) + "years old")
// if ("false") {
//     console.log("true")
// } else {
//     console.log("false")
// }
// console.log(10 - true)
//
// // task 3
// const temp = 30
// console.log((temp * 9 / 5) + 32)
// console.log(temp + "C" + "=" + ((temp * 9 / 5) + 32) + "F")
// ask_c = prompt("Enter temperature in celsius")
// aler(`Fahrenheit: ${((ask_c * 9 / 5) + 32)}`)
//
// // task 4
// let user_budget;
// user_budget = Number(prompt("Enter your budget"))
// let expenses = 0
// for (let i = 0; i < 3; i++) {
//     expenses += Number(prompt("Enter your expenses"))
// }
// check = user_budget - expenses
// if (check < 0) {
//     alert(`You are over budget by ${check.toFixed()}`)
// } else {
//     alert(`You are not over budget by ${check.toFixed()}`)
// }
// // task 5
// console.log("Task 5")
// console.log(!!"false" == !!"true");
// console.log(0 || "Javascript")
// console.log(" " && 100)
// console.log(null ?? "Fallback")
// console.log(undefined ?? "default")
//
// // task 6
// let a  ="42"
// let b = "3.14"
// let c = 'hello'
// let d = false
// let e  = null
//
// let sum = Number(a) + Number(b)+Number( d) +Number (e)
// console.log(sum)


// ####### Lesson 2 ##########

// task 1

// let odds = 0;
// let evens = 0;
// user_num = Number(prompt("Enter a number"))
// for (let i = 1; i <= user_num; i++) {
//     if (i % 2 === 0) {
//         evens +=1
//     } else {
//         odds += 1
//     }
//
// }
// alert(`Odds: ${odds}`)
// alert(`Evens: ${evens}`)
//
//
// // task 2
// user_input = Number(prompt("Enter a number"))
//
// let reversed = 0
// for (let i = user_input; i > 0; i = Math.floor(i / 10)) {
//     reversed = reversed * 10 + i % 10
// }
// alert(reversed)
//


// task 3

//
// let input = Number(prompt("Enter a number"))
// let largest = 0
//
// for (let num = input; num > 0; num = Math.floor(num / 10)) {
//     let digit = num % 10
//     if (digit > largest) {
//         largest = digit
//     }
// }
//
// alert(`The largest digit in ${input} is ${largest}`)
//

//task 1
// let a = Number(prompt("Enter first number"))
// let b = Number(prompt("Enter second number"))
// if (a > b) {
//     alert(`The largest integer among two integers is ${a}`)
// } else {
//     alert(`The largest integer among two integers is ${b}`)
// }

// task 2
// let a = Number(prompt("Enter first number"))
// let b = Number(prompt("Enter second number"))
// let c = Number(prompt("Enter third number"))
// if (a > 0 && b > 0 && c > 0) {
//     alert("The sign is +")
// } else {
//     alert("The sign is -")
// }

// task 3
// let a = Number(prompt("Enter first number"))
// let b = Number(prompt("Enter second number"))
// let c = Number(prompt("Enter third number"))
//
// let first, second, third;
// if (a >= b && a >= c) {
//     first = a;
//     if (b >= c) {
//         second = b;
//         third = c;
//     } else {
//         second = c;
//         third = b;
//     }
// } else if (b >= a && b >= c) {
//     first = b;
//     if (a >= c) {
//         second = a;
//         third = c;
//     } else {
//         second = c;
//         third = a;
//     }
// } else {
//     first = c;
//     if (a >= b) {
//         second = a;
//         third = b;
//     } else {
//         second = b;
//         third = a;
//     }
// }
//
// alert(`${first}, ${second}, ${third}`)
// task 4
// let to = Number(prompt("Enter a number"))
// for (let i = 0; i <= to; i++) {
//     if (i % 2 === 0) {
//         alert(`${i} is even`)
//     } else {
//         alert(`${i} is odd`)
//     }
// }

//task 5
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         alert("FizzBuzz")
//     } else if (i % 3 === 0) {
//         alert("Fizz")
//     } else if (i % 5 === 0) {
//         alert("Buzz")
//     } else {
//         alert(i)
//     }
// } .
// task 6
// let number = Number(prompt("Enter a number"))
//     let sum = 0;
//     let temp = number;
//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += digit ** String(number).length;
//         temp = Math.floor(temp / 10);
//     }
//     if (sum === number) {
//         alert("Armstrong number")
//     }else{
//         alert("Not an Armstrong number")
//     }
//
//
// let student =[
//     {
//         "name":"David",
//         "marks" :80
//     },{
//         "name":"Vinoth",
//         "marks" :77
//     },{
//         "name":"Divya 88",
//         "marks" :80
//     },{
//         "name":"Ishitha",
//         "marks" :95
//     },{
//         "name":"Thomas",
//         "marks" :68
//     },
// ]
// for (let i = 0; i < student.length; i++) {
//     if(student[i].marks < 60){
//         console.log(`${student[i].name} has failed`)
//     }else if(student[i].marks < 70){
//         console.log(`${student[i].name} has passed with a D grade`)
//     }else if(student[i].marks < 80){
//         console.log(`${student[i].name} has passed with a C grade`)
//     }else if(student[i].marks < 90){
//         console.log(`${student[i].name} has passed with an B grade`)
//     }else{
//         console.log(`${student[i].name} has passed with an A grade`)
//     }
// }
// challenge 1
// function greet(name) {
//     return `Hello, ${name}!`;
// }
// let greet2 = function (name) {
//     return `Hello, ${name}!`;
// }
// let greet3 = (name) => {
//     return `Hello, ${name}!`;
// }
// let greet4 = new Function("name", "return 'Hello, " + name + "!'")
// // Challenge 2
// function isPrime(n){
//     if (n <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }
//
// console.log(isPrime(11))
// // challenge 3
// function countDigits(n){
//     return String(n).length;
// }
// // challenge 4
// function isPalindrome(n){
//     let str = String(n);
//     let reversed = str.split('').reverse().join('');
//     return str === reversed;
// }
// // challenge 5
// function isArmstrong(n){
//     let sum = 0;
//     let temp = n;
//     let digits = String(n).length;
//
//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += digit ** digits;
//         temp = Math.floor(temp / 10);
//     }
//
//     return sum === n;
// }

/*Challenge 6 - Create a function createCounter(start) that returns an object with three methods:
increment() ➝ Increases the count
decrement() ➝ Decreases the count
getCount() ➝ Returns the current count

Challenge 7 – Create a function that order food, the program asks for name, address and what do 	you want to order, then the output should be “Dear (name), your ordered food (food you 	entered) will be ready in 15 minuts and will be delivered to your address(address you 		entered)”

Challenge 8 - Create a function lazyAdder(a) that returns another function that adds b when called.
const add5 = lazyAdder(5);
console.log(add5(10));  - > 15
console.log(add5(20));  -> 25
*/


// challenge 6
// function createCounter(star){
//     let count = star
//     function increment(){
//         count++;
//
//     }
//     function Decreases(){
//         count--;
//     }
//     function getCount(){
//         return count;
//     }
//     return {
//         increment,
//         Decreases,
//         getCount
//     }
// }
//
// // challenge 7
//
// function orderFood(address,name,order){
//     return `Dear ${name}, your ordered food ${order} will be ready in 15 minuts and will be delivered to your address ${address}`
// }
//
// // challenge 8
// function lazyAdder(a){
//     return function(b){
//         return a + b;
//     }
// }
// let add5 = lazyAdder(5);
// console.log(add5(10));
// console.log(add5(20));
//


/*

Challenge 1 - Dynamic Pricing Calculation
Scenario: Create a function that calculates the total price of an online shopping cart, applying discounts based on quantity.
Example: If a user buys 3+ items, apply a 10% discount; if 5+, apply 20%.

Challenge 2 - Password Strength Checker
Scenario: Build a function to check password strength based on conditions:
Minimum 8 characters
At least one uppercase letter
At least one number
At least one special character
Return "Weak", "Medium", or "Strong" based on conditions.

Challenge 3 - ATM Cash Withdrawal System
Scenario: Simulate an ATM that dispenses the least number of bills for a given amount (e.g., $130 → 1x $100, 1x $20, 1x $10).
if the requested amount is not in multiples of 10, return an error.

 */


// Challenge 1

