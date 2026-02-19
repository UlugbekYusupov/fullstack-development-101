// // Lesson 1
//
// // 1th
// console.log("5" + 5);
// console.log("5" - 5);
// console.log("5" * "2");
// console.log("10" / 2);
// console.log(5 + true);
// console.log("10" - true);
// console.log("5" + true);
// console.log(5 + null);
// console.log(5 + undefined);
//
// // 2th
// let x = "200";
// x = Number(x);
// console.log(x + 50);
//
// let y = 25;
// y = String(y);
// console.log(y + " years old.");
//
// let z = "false";
// z = Boolean(z);
// console.log(z);
//
// console.log("10" - true);
//
// // 3th
// const temperatureCelsius = prompt("Enter temperature in Celsius:");
// //const temperatureCelsius = 25;
// const temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;
// console.log(`Temperature in Fahrenheit: ${temperatureFahrenheit}`);
// console.log(`Temperature in Celsius: ${temperatureCelsius}`);
//
// // 4th
// let totalBudget;
// totalBudget = prompt("Enter your total budget:");
// totalBudget = Number(totalBudget);
// let a = Number(prompt("Expence A:"));
// let b = Number(prompt("Expence B:"));
// let c = Number(prompt("Expence C:"));
//
// totalBudget = totalBudget - (a + b + c);
//
// if (totalBudget < 0) {
//   console.log("You have exceeded your budget.");
// } else {
//   console.log(`You have ${totalBudget} left in your budget.`);
// }
//
// // 5th
// console.log(!!"false" == !!"true");
// console.log(0 || "JavaScript");
// console.log(" " && 100);
// console.log(null ?? "Fallback");
// console.log(undefined ?? "Default Value");
//
// // 6th
// let A = "42";
// let B = "3.14";
// let C = "hello";
// let D = false;
// let E = null;
//
// let sum = A + B + D + E;
// console.log(sum);


// Lesson 2

// 1th
// let inputNumber = Number(prompt("Enter a number: "));
// let evenNumbers = 0;
// let oddNumbers = 0;
//
// for (let i = 1 ; i <= inputNumber; i++) {
//     if (i % 2 === 0) {
//         evenNumbers += 1;
//     } else {
//         oddNumbers += 1;
//     }
// }
// console.log(`Even numbers: ${evenNumbers}`);
// console.log(`Odd numbers: ${oddNumbers}`);

// 2th
// let number = Number(prompt("Enter a number to reverse: "));
// let reversed = 0;
//
// while (number > 0) {
//     let digit = number % 10;
//     reversed = reversed  * 10 + digit;
//     number = Math.floor(number / 10);
// }
// console.log(`Reversed number: ${reversed}`);

// 3th
// let number = Number(prompt("Enter a number: "));
// let largestDigit = 0;
//
// while (number > 0) {
//     let digit = number % 10;
//     if (digit > largestDigit) {
//         largestDigit = digit;
//     }
//     number = Math.floor(number / 10);
// }
// console.log(`Largest digit: ${largestDigit}`);

// 4th
// let number = Number(prompt("Enter a number: "));
// let sum = 0;
//
// while (number > 0) {
//     let digit = number % 10;
//     sum += digit;
//     number = Math.floor(number / 10);
// }
// console.log(`Sum of the digits: ${sum}`);

// 5th
let number = Number(prompt("Enter a number: "));
let counts = 0;

while (number > 0) {
    let digit = number % 10;
    counts ++;
    number = Math.floor(number / 10);
}
console.log(`Number of digits: ${counts}`);