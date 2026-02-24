// let number = 1;

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// const user = {
//   name: "Saidakbar",
//   age: 18,
//   country: "Uzbekistan",
// };

// for (const key in user) {
//   const element = user[key];
//   console.log(element);
// }

// const a = 5;
// const b = 6;
// if (a > b) {
//   console.log(a);
// } else if (a < b) {
//   console.log(b);
// } else {
//   console.log(a);
// }

// const c = 5;
// const d = 7;
// const f = -9;

// if (c < 0 || d < 0 || f < 0) {
//   console.log("sign is: -");
// } else {
//   console.log("No number is signed !!!");
// }

// 5

// let a = -2;
// let b = 4;
// let c = 2;
// let d = 0;
// if (b > a) {
//   d = b;
//   b = a;
//   a = d;
// }
// if (c > b) {
//   d = b;
//   b = c;
//   c = d;
// }
// if (c > a) {
//   d = c;
//   c = a;
//   a = d;
// }
// console.log(a, b, c);

// 4

// for (let i = 0; i <= 15; i++) {
//   if (i % 2 == 0) {
//     console.log(i + " is even");
//   } else if (i % 2 == 1) {
//     console.log(i + " is odd");
//   }
// }

// 4

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// 6
// let number = Number(
//   prompt("Enter a number to check if it is an Armstrong number:"),
// );

// let temp = number;
// let sum = 0;

// let digits = number.toString().length;

// while (temp > 0) {
//   let digit = temp % 10;
//     sum += Math.pow(digit, digits);
//   temp = Math.floor(temp / 10);
// }

// if (sum === number) {
//   console.log(number + " is an Armstrong number.");
// } else {
//   console.log(number + " is not an Armstrong number.");
// }

// 7
const students = {
  David: 80,
  Vinoth: 77,
  Diviya: 88,
  Ishitha: 95,
  Thomas: 68,
};

for (const key of students) {
}
