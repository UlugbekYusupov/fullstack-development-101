// var a = undefined;
// console.log(a);
// var a=40;

// let user = {
//     username: "Ulugbek",
//     age : 30,
// }

// PRACTICE 
// challange 1
console.log("5" + 5);
console.log("5"-5);
console.log("5"*"2");
console.log("10"/2);
console.log(5 + true);
console.log("10"-true);
console.log(5 + null);
console.log(5 + undefined);

// challange 2

let result1 = Number("200") + 50; 
console.log(result1);
let result2 = String(25) + " years old";
console.log(result2)
let result3 = Boolean("false");
console.log(result3); 
console.log(10 - true);

// challange 3
const celsius = 25; 
const fahrenheit = (celsius * 9 / 5) + 32;
console.log("Celsius:", celsius);
console.log("Fahrenheit:", fahrenheit);

//challange 4
// let budget = Number(prompt("Enter your total budget:"));
// let rent = Number(prompt("Enter rent expense:"));
// let food = Number(prompt("Enter food expense:"));
// let transport = Number(prompt("Enter transport expense:"));
// let totalExpenses = rent + food + transport;
// let remainingBudget = budget - totalExpenses;

// console.log("Remaining Budget:", remainingBudget);

// if (remainingBudget < 0) {
//     console.log("Warning: You spent too much!");
// } else {
//     console.log(`You are within budget. Your balance is ${remainingBudget.toFixed(2)}`);
// }

// challange 5
console.log(!!"false" == !!"true");
console.log(0 || "JavaScript");
console.log("" && 100);
console.log(null ?? "Fallback");
console.log(undefined ?? "Default Value");


// challange 6
let a = "42";
let b = "3.14";
let c = "hello"; 
let d = false;
let e = null;

let sum = Number(a) + Number(b) + Number(d) + Number(e);

console.log(sum); 
