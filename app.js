const output = document.querySelector("#output")

// ////////////////////////////////////////////////
//!                Lesson #1
// ////////////////////////////////////////////////


// console.log("I'm HTML engineer");

// console.log("5" + 5); // 7
// console.log("5" - 5); // ?
// console.log("5" * "2"); // ?
// console.log("10" / 2); // 7
// console.log(5 + true); // ?
// console.log("10" - true); // ?
// console.log("5" + true); // ?
// console.log(5 + null); // ?
// console.log(5 + undefined); // 7

// // Other tasks

// console.log("200" * 1 + 50);
// console.log(25 + " year old");
// console.log("false" == true);
// console.log("10" - false);

// // Yet another group of tasks

// // const temp = prompt("Enter ℃ value: ");
// // var converted = (temp * 9) / 5 + 32;
// // alert(temp + "℃ to ℉ is: " + converted);


// var budget = 0

// var budget = prompt("Enter your budget: ")


// ////////////////////////////////////////////////
//!                Lesson #2
// ////////////////////////////////////////////////

// Challenge #1
// let num = parseInt(prompt("Enter a number:"));

// let evenCount = 0;
// let oddCount = 0;

// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0) {
//     evenCount++;
//   } else {
//     oddCount++;
//   }
// }

// console.log("Even numbers:", evenCount);
// console.log("Odd numbers:", oddCount);



// Challenge #2
// let num = 1234;
// let reverse = 0;
// while (num > 0) {
//   let lastDigit = num % 10;
//   reverse = reverse * 10 + lastDigit;
//   num = Math.floor(num / 10);
// }
// console.log(reverse);


// Challenge #3
// let num = 58329;
// let largest = 0;
// while (num > 0) {
//   let digit = num % 10;
//   if (digit > largest) {
//     largest = digit;
//   }
//   num = Math.floor(num / 10);
// }
// console.log("Largest digit:", largest);


// first task

// const num1 = Number(prompt("Give me a number: "))
// const num2 = Number(prompt("Give me a number: "))
// const num3 = Number(prompt("Give me a number: "))

// let nums = [num1, num2, num3]


// function theChosenOne() {
//   const nonPositive = nums.filter(num => num <= 0)

//   output.textContent = `Your number is ${nonPositive}`
// }

// theChosenOne()


// let nums = [0, -1, 4]

// nums.sort(function(a, b){
//   return b - a
// })


// program to check an Armstrong number of three digits

let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');

let temp = number;
while (temp > 0) {
  let remainder = temp % 10;
  sum += remainder * remainder * remainder;
  temp = parseInt(temp / 10);
}

if (sum == number) {
  output.innerHTML = `${number} is an Armstrong number`
}
else {
  output.innerHTML = `${number} is not an Armstrong number.`
}