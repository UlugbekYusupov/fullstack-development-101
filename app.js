const output = document.getElementById("output");
const inputElement = document.getElementById("input");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

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

// let sum = 0;
// const number = prompt('Enter a three-digit positive integer: ');

// let temp = number;
// while (temp > 0) {
//   let remainder = temp % 10;
//   sum += remainder * remainder * remainder;
//   temp = parseInt(temp / 10);
// }

// if (sum == number) {
//   output.innerHTML = `${number} is an Armstrong number`
// }
// else {
//   output.innerHTML = `${number} is not an Armstrong number.`
// }

// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
//         2/26/2026 Functions and Closures
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////

// task 1
// const name = prompt("Give me your name:");
// const lastname = prompt("Give me your Last name:");

// function combine() {
//   let fullName = `Hello ${name} ${lastname}`;

//   output.innerHTML = fullName;
// }
// combine();

// task 2
// const input = Number(prompt("Enter a number to check if it's prime"));
// function isPrime(num) {
//   if (num <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// function displayResult() {
//   if (isPrime(input)) {
//     output.textContent = `${input} is a prime number`;
//   } else {
//     output.textContent = `${input} is not a prime number.`;
//   }
// }

// displayResult();

// task 3
// const input = prompt("Enter a number:");

// function countDigit(num) {
//   return String(Math.abs(num)).length;
// }

// output.textContent = `length of your ${input} is ${countDigit(input)}`;

// task 4

// function isPalindrome(n) {
//   const original = n.toString();
//   const reversed = original.split("").reverse().join("");
//   return original === reversed;
// }

// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(10));

// task 5

// function isArmstrong(n) {
//   const digits = String(Math.abs(n)).split("");
//   const numDigits = digits.length;

//   const sum = digits.reduce((acc, digit) => {
//     return acc + Math.pow(Number(digit), numDigits);
//   }, 0);

//   return sum === n;
// }

// console.log(isArmstrong(153));
// console.log(isArmstrong(9474));
// console.log(isArmstrong(121));

// task 6

// let input = Number(prompt("Enter a number"));

// output.textContent = input;

// function increase() {
//   input++;
// }

// function decrease() {
//   input--;
// }

// function getCurrent() {
//   output.textContent = input;
// }

// button1.textContent = "increase";
// button2.textContent = "decrease";
// button3.textContent = "get current number";

// button1.addEventListener("click", increase);
// button2.addEventListener("click", decrease);
// button3.addEventListener("click", getCurrent);

// task 7
// const name = prompt("Enter name:");
// const address = prompt("Enter Adress:");
// const food = prompt("Enter Food:");

// function response() {
//   output.textContent = `Dear ${name}. Your ${food} will be delivered to your address(${address}) in 15 minutes`;
// }

// response();

// task 8

// let input = Number(prompt("Enter number:"));
// output.textContent = input;

// function increase() {
//   input += 5;
//   output.textContent = input;
// }
// function Decrease() {
//   input -= 5;
//   output.textContent = input;
// }

// button1.textContent = "Increase";
// button2.textContent = "Decrease";

// button1.addEventListener("click", increase);
// button2.addEventListener("click", Decrease);

// ! //////////////////////// // Homework

// #1 Dynamic Pricing Calculation

// function setUp() {
//   const prodInfo = document.createElement("p");
//   prodInfo.textContent = "1 product = $10";
//   document.body.appendChild(prodInfo);
// }

// function calculations() {
//   let quantity = Number(inputElement.value);
//   let price = 10;
//   let discount = 0;
//   let sum = quantity * price;

//   if (quantity > 3) {
//     discount = quantity * price * 0.1;
//   } else if (quantity > 5) {
//     discount = quantity * price * 0.05;
//   } else {
//     discount = 0;
//   }

//   output.textContent = `Overall value is $${sum - discount}`;
// }

// setUp();

// inputElement.addEventListener("input", calculations);

// #2 Password Strength Checker

// function checkPasswordStrength(password) {
//   let score = 0;

//   if (password.length >= 8) {
//     score++;
//   }

//   let hasUpper = false;
//   let hasNumber = false;
//   let hasSpecial = false;

//   const specialChars = "!@#$%^&*()-+";

//   for (let i = 0; i < password.length; i++) {
//     let char = password[i];

//     if (char >= "A" && char <= "Z") {
//       hasUpper = true;
//     } else if (char >= "0" && char <= "9") {
//       hasNumber = true;
//     } else if (specialChars.includes(char)) {
//       hasSpecial = true;
//     }
//   }

//   if (hasUpper) score++;
//   if (hasNumber) score++;
//   if (hasSpecial) score++;

//   if (score <= 2) {
//     output.textContent = "Weak";
//   } else if (score === 3) {
//     output.textContent = "Medium";
//   } else {
//     output.textContent = "Strong";
//   }
// }

// inputElement.addEventListener("input", () => {
//   checkPasswordStrength(inputElement.value);
// });

// #3 ATM Cash Withdrawal System
// function withdrawCash(amount) {
//   if (amount % 10 !== 0 || amount <= 0) {
//     return null;
//   }

//   let hundreds = 0,
//     fifties = 0,
//     twenties = 0,
//     tens = 0;
//   let remaining = amount;

//   while (remaining >= 100) {
//     hundreds++;
//     remaining -= 100;
//   }
//   while (remaining >= 50) {
//     fifties++;
//     remaining -= 50;
//   }
//   while (remaining >= 20) {
//     twenties++;
//     remaining -= 20;
//   }
//   while (remaining >= 10) {
//     tens++;
//     remaining -= 10;
//   }

//   return { hundreds, fifties, twenties, tens };
// }

// inputElement.addEventListener("input", () => {
//   const amount = Number(inputElement.value);
//   const result = withdrawCash(amount);

//   if (!result) {
//     output.textContent = "Error: Please enter a multiple of $10";
//     return;
//   }

//   output.textContent = `Dispensing:
//     $100 x ${result.hundreds}
//     $50 x ${result.fifties}
//     $20 x ${result.twenties}
//     $10 x ${result.tens}`;
// });

// #4 traffic light simulation

// function startTrafficLight() {
//   showRed();
// }

// function showRed() {
//   output.textContent = "STOP: RED";
//   output.style.color = "red";

//   setTimeout(() => {
//     showGreen();
//   }, 5000);
// }

// function showGreen() {
//   output.textContent = "GO: GREEN";
//   output.style.color = "green";

//   setTimeout(() => {
//     showYellow();
//   }, 3000);
// }

// function showYellow() {
//   output.textContent = "CAUTION: YELLOW";
//   output.style.color = "orange";

//   setTimeout(() => {
//     showRed();
//   }, 2000);
// }

// startTrafficLight();

// #6 banking system

// function createBankAccount(initialName, initialBalance) {
//   let balance = initialBalance;
//   let accountHolder = initialName;

//   return {
//     deposit: function (amount) {
//       if (amount > 0) {
//         balance += amount;
//         console.log(`Deposited $${amount}. New balance: $${balance}`);
//       } else {
//         console.log("Deposit amount must be positive.");
//       }
//     },

//     withdraw: function (amount) {
//       if (amount > balance) {
//         console.log("Insufficient funds!");
//       } else if (amount <= 0) {
//         console.log("Please enter a valid amount to withdraw.");
//       } else {
//         balance -= amount;
//         console.log(`Withdrew $${amount}. Remaining balance: $${balance}`);
//       }
//     },

//     viewBalance: function () {
//       return `Account Holder: ${accountHolder} | Balance: $${balance}`;
//     },
//   };
// }

// const myAccount = createBankAccount("Aziz", 100);

// myAccount.deposit(50);
// myAccount.withdraw(20);
// console.log(myAccount.viewBalance());

// 7#  Role-Based Access System

// button1.textContent = "Admin";
// button2.textContent = "Editor";
// button3.textContent = "User";

// function updateOutput(resp) {
//   output.textContent = resp;
// }

// button1.addEventListener("click", function () {
//   updateOutput("You can add, edit, delete content");
// });

// button2.addEventListener("click", function () {
//   updateOutput("You can edit, view content");
// });

// button3.addEventListener("click", function () {
//   updateOutput("You can view content");
// });

// 8# Dynamic Tax Calculator

// function calcTax() {
//   let income = Number(input.value);

//   if (income < 10000) {
//     output.textContent = "No tax for you buddy";
//   } else if (income >= 10000 && income < 50000) {
//     output.textContent = "You got yourself 10% tax!";
//   } else {
//     output.textContent = "We giving you 20% tax. ";
//   }
// }

// input.addEventListener("input", calcTax);

// *****************************
// ! lecture #6 ****************
// *****************************

// array = [6, 47, 7, 6, 5, 4, 3];

// array.push(69);
// array.pop();
// const filtered = array.filter((word) => word > 6);
// const mapped = array.map((x) => x * 2);
// array.shift();
// array.unshift(1, 2, 3, 4, 5);

// ! Homework start
// function first(array, n) {
//   if (array.length === 0) return [];
//   if (n === undefined) return array[0];
//   if (n < 0) return [];
//   return array.slice(0, n);
// }

// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

// function last(array, n) {
//   if (n === undefined) return array[array.length - 1];

//   return array.slice(Math.max(array.length - n, 0));
// }

// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2], 6));

// const myColor = ["Red", "Green", "White", "Black"];
// const result = myColor.join(",");
// console.log(result);

// function insertDashes(num) {
//   const str = num.toString();
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     result += str[i];
//     if (parseInt(str[i]) % 2 === 0 && i !== str.length - 1) {
//       result += "-";
//     }
//   }
//   return result;
// }
// console.log(insertDashes(25468));

// var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// arr1.sort(function (a, b) {
//   return a - b;
// });

// console.log(arr1.join(","));





// var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

// function findMostFrequent(arr) {
//   let counts = {};
//   let maxItem = arr[0];
//   let maxCount = 0;

//   for (let item of arr) {
//     counts[item] = (counts[item] || 0) + 1;

//     if (counts[item] > maxCount) {
//       maxCount = counts[item];
//       maxItem = item;
//     }
//   }
//   return `${maxItem} ( ${maxCount} times )`;
// }

// console.log(findMostFrequent(arr1));




// function swapCase(str) {
//   let result = "";

//   for (let char of str) {
//     if (char === char.toUpperCase()) {
//       result += char.toLowerCase();
//     } else {
//       result += char.toUpperCase();
//     }
//   }
//   return result;
// }

// console.log(swapCase("The Quick Brown Fox"));








