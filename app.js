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

// // Challange 5

// let number3 = Number(prompt("Enter a number: "));
// let count = 0;

// while (number3 > 0) {
//     let digit = number3 % 10;
//     count ++;
//     number3 = Math.floor(number3 / 10);
// };

// console.log(count);

// // // Lesson 2 Lecture 4 || 24.02.2026

// // for loop
// for(let i  = 10; i < 10; i++) {
//     console.log(i);
// };

// // while loop
// let i = 1;
// while (i < 10) {
//     console.log(i);
//     i++;
// };

// // do while loop
// let a = 0;
// do {
//     console.log(a);
//     a++;
// } while (a < 10);

// const user = {
//     name: "otabek",
//     age: 19,
//     country: "Uzbekistan"
// };

// // for...in (object uchun)
// for (const key in user) {
//     const element = user[key];
//     console.log(element);
// }

// // for...of (array uchun)
// for (const element of Object.values(user)) {
//     console.log(element);
// }

// Practices

// // Practise 1

// const num1 = 23;
// const num2 = 83;

// if (num1 > num2) {
//     console.log(`The largest number is ${num1}`);
// } else {
//     console.log(`The largest number is ${num2}`);
// }

// // Practice 2

// const numbers = [3, -7, 2];

// let i = 0;
// let found = false;

// while (i < numbers.length) {
//     if (numbers[i] < 0) {
//         alert(`The sign is ${numbers[i]}`);
//         found = true;
//         break;
//     }
//     i++;
// }

// if (!found) {
//     alert("We have not a signed number");
// }

// // Practice 3

// const numbers = [0, -1, 4];
// let sortedNumbers = numbers.sort();
// let reversedNumbers = sortedNumbers.reverse();
// alert(reversedNumbers);

// // Practice 4

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//     } else {
//         console.log(`${i} is odd`);
//     };
// };

// // Practice 5

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 3 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     };
// };

// // Practice 6

// let number = prompt("Enter a number");
// let armstrong = 0;
// const daraja = number.length;

// let  i = 0;

// while (i < number.length) {
//     let digit = Number(number[i]);
//     armstrong += digit ** daraja;
//     i++;
// }

// if (armstrong === Number(number)) {
//     console.log(`The number (${number}) is armstrong`);
// } else {
//     console.log(`The number (${number}) is not armstrong`);
// }

// Practice 7

const marks = {
    David: 80,
    Vinoth: 77,
    Divya: 88,
    Ishitha: 95,
    Thomas: 68
}

let totalMarks = 0;
let totalStudent = 0;

for (let key in marks) {
    totalMarks += marks[key];
    totalStudent++;
}

let average = totalMarks / totalStudent;
console.log(`Average mark of this class: ${average}`);