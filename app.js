// // Lesson 1 lecture 2 
// // Challenge 1

// console.log("5" + 5);
// console.log("5" - 5);
// console.log("5" * "2");
// console.log("10" / 2);
// console.log(5 + true);
// console.log("10" - true);
// console.log("5" + true);
// console.log(5 + null);
// console.log(5 + undefined);

// // Challange 2

// let num = "200";
// let number = Number(num) + 50;
// console.log(number);

// let num1 = 25;
// let word = String(num1) + " years old";
// console.log(word);

// console.log(Boolean("False"));

// console.log("10" - true);

// // Challenge 3

// const Celsius = Number(prompt("hava haroratini kiriting:   "));
// console.log(Celsius);

// let Fahrenheit = (Celsius * 9/5) + 32;
// console.log(Fahrenheit);

// // Challange 4

// let totalBudget = Number(prompt("Enter your budget: "));
// const expenceFirst = Number(prompt("First expense:"));
// const expenceSecond = Number(prompt("Second expense:"));
// const expenceThird = Number(prompt("Third expense:"));
// let totalExpences = expenceFirst + expenceSecond + expenceThird
// let budget = totalBudget - totalExpences;
// budgetChecker();
// function budgetChecker() {
//     if (budget < 0) {
//         alert(`Your expences: $${totalExpences} overpassed your budget: $${totalBudget}`);
//     } else if (budget === 0) {
//         alert(`Your expences: $${totalExpences} equal to your budget: $${totalBudget} `);
//     } else {
//         alert(`Your expences: $${totalExpences} did not overpassed your budget: $${totalBudget}`);
//     }
// };

// // Challenge 5

// console.log(!!"false"== !!"true");
// console.log(0 || "JavaScript");
// console.log(" " && 100);
// console.log(null ?? "Fallback");
// console.log(undefined ?? "Default Value");

// // Challenge 6

// let a = "42";
// let b = "3.14";
// let c = "hello";
// let d = false;
// let e = null;
// let sum = Number(a) + Number(b) + Number(d) + Number(e);
// console.log(sum);

// Lesson 2 Lecture 3

// // Challange 1

// const number = Number(prompt("Enter a number: "));
// let odd = 0;
// let even = 0;

// for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//         even += 1;
//     } else {
//         odd += 1;
//     }
// }

// console.log(`Amount of even number: ${even}`);
// console.log(`Amount of odd number: ${odd}`);

// // Challenge 2

// let number = 1234;
// let reverse = 0;

// while (number > 0) {
//     let digit = number % 10;
//     number = Math.floor(number / 10);
//     reverse = reverse * 10 + digit
// };

// console.log(reverse)

// // Challange 3

// let number1 = Number(prompt("Enter a number: "));
// let max = 0;

// while (number1 > 0) {
//     let digit = number1 % 10;
//     if (digit > max) {
//         max = digit
//     };
//     number1 = Math.floor(number1 / 10);
// };

// console.log(max);


// // Challenge 4

// let number2 = Number(prompt("Enter a number: "));
// let sum = 0;

// while (number2 > 0) {
//     let digit = number2 % 10;
//     sum += digit;
//     number2 = Math.floor(number2 / 10);
// };

// console.log(sum);

// Challange 5

let number3 = Number(prompt("Enter a number: "));
let count = 0;

while (number3 > 0) {
    let digit = number3 % 10;
    count ++;
    number3 = Math.floor(number3 / 10);
};

console.log(count);