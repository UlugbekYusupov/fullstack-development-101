// a = +"200";
// console.log(typeof a);
// console.log("5" + 5); // '55'
// console.log("5" - 5); // 0
// console.log("5" * "2"); //   10
// console.log("10" / 2); // 5
// console.log(5 + true); // 6
// console.log("10" - true); // 9
// console.log("5" + true); // '5true'
// console.log(5 + null); // 5
// console.log(5 + undefined); // NaN
// console.log(+"200" + 50); // 250
// console.log(25 + " years old"); // '25 years old'
// console.log("false" == String); // false
// console.log("10" - true); // 9

// // TASK 1
// const celsius = 25;
// // const celsius = 30; Невозможно повторно объявить переменную "celsius" с областью видимости "Блок".
// const fahrenheit = (celsius * 9 / 5) + 32;
// console.log("Celsius:", celsius);
// console.log("Fahrenheit:", fahrenheit);
// const celsius2 = Number(prompt("Enter temperature in Celsius:"));
// const fahrenheit2 = (celsius2 * 9 / 5) + 32;
// console.log("Celsius:", celsius2);
// console.log("Fahrenheit:", fahrenheit2);


// // TASK 2
// let budget = String(prompt("Enter your budget:"));
// let fExpenses = Number(prompt("Enter your first expense:"));
// let sExpenses = Number(prompt("Enter your second expense:"));
// let thExpenses = Number(prompt("Enter your third expense:"));
// let isBudget = budget - (fExpenses + sExpenses + thExpenses);
// if (isBudget < 0) {
//     console.log("You have negative budget:", isBudget);
// }
// else if (isBudget > 0) {
//     console.log("Your budget:", isBudget);
// }

// console.log(!!'false' == !!'true');
// console.log(0 || 'JavaScript');
// console.log(" " && 100);
// console.log(null ?? "Fallback");
// console.log(undefined ?? "Default Value");

let a ='42'
let b = '3.14'
let c ='hello'
let d = false
let e = null
let sum = Number(a) + Number(b) + Number(d) + Number(e);
console.log(sum); 
