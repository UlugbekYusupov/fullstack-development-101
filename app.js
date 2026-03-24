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

// ! //////////////// Objects homework
// const students = [
//   { name: "Alice", scores: [85, 90, 78] },
//   { name: "Bob", scores: [45, 52, 30] },
//   { name: "Charlie", scores: [92, 88, 95] },
//   { name: "Diana", scores: [60, 55, 62] },
// ];

// let passedStuds = students
//   .filter((student) => {
//     const score = student.scores.reduce((acc, current) => {
//       return acc + current;
//     }, 0);
//     const average = score / student.scores.length;
//     return average >= 50;
//   })
//   .map((student) => {
//     return student.name;
//   });

// console.table(passedStuds);

// const cart = [
//   { id: 1, name: "Laptop", price: 900, quantity: 1 },
//   { id: 2, name: "Mouse", price: 50, quantity: 2 },
//   { id: 3, name: "Keyboard", price: 100, quantity: 1 },
// ];

// const total = cart
//   .map((item) => {
//     return (subTotal = item.price * item.quantity);
//   })
//   .map((item) => {
//     if (item > 100) {
//       return item * 1.1;
//     } else {
//       return item;
//     }
//   })
//   .reduce((acc, current) => {
//     return acc + current;
//   }, 0);

// console.log(total);

// let inventory = [
//   { id: 1, name: "Laptop", price: 999, stock: 10 },
//   { id: 2, name: "Mouse", price: 25, stock: 50 },
//   { id: 3, name: "Keyboard", price: 75, stock: 20 },
// ];

// function addProduct(newProduct) {
//   inventory.push(newProduct);
// }
// function deleteProduct(idToDelete) {
//   inventory = inventory.filter((product) => product.id !== idToDelete);
// }
// function findProduct(name) {
//   return inventory.find((product) => product.name === name);
// }

// const found = findProduct("Laptop");
// deleteProduct(1);
// addProduct({ id: 4, name: "Monitor", price: 200, stock: 15 });

// const posts = [
//   { author: "Alice", likes: 100, comments: 20, shares: 5 },
//   { author: "Bob", likes: 200, comments: 50, shares: 10 },
// ];

// function mostLiked() {
//   const response = posts.sort((a, b) => b.likes - a.likes);
//   console.log(response);
// }

// function totalEngagement() {
//   const result = posts.map((post) => {
//     return {
//       name: post.author,
//       engagement: post.likes + post.comments + post.shares,
//     };
//   });
//   console.table(result);
// }

// mostLiked();
// totalEngagement();

// const teams = [
//   { name: "Team A", wins: 5, losses: 2, points: 15 },
//   { name: "Team B", wins: 6, losses: 1, points: 18 },
// ];

// function sortByRanking() {
//   const result = teams.sort((a, b) => b.wins - a.wins);
//   console.log("Winning team:");
//   console.table(result);
// }
// sortByRanking();

// function sortByPoints() {
//   const result = teams.sort((a, b) => b.points - a.points);
//   console.log("Team with most points:");
//   console.table(result);
// }
// sortByPoints();

// const inventory = [
//   { itemName: "Hammer", category: "Tools", stock: 15 },
//   { itemName: "Drill", category: "Tools", stock: 4 },
//   { itemName: "Plywood", category: "Lumber", stock: 20 },
//   { itemName: "Oak Plank", category: "Lumber", stock: 2 },
//   { itemName: "Screws", category: "Hardware", stock: 100 },
// ];

// function getTotalStockByCategory(items) {
//   return items.reduce((totals, item) => {
//     const { category, stock } = item;
//     if (!totals[category]) {
//       totals[category] = 0;
//     }
//     totals[category] += stock;
//     return totals;
//   }, {});
// }

// const categoryTotals = getTotalStockByCategory(inventory);
// console.log("Stock by Category:", categoryTotals);

// ! to-do list app
// * Practice 1

// const app_title = document.createElement("h1");
// const toDo_container = document.createElement("ol");
// const addTaskBtn = document.createElement("button");
// const addTaskModalBg = document.createElement("div");
// const addTaskModal = document.createElement("div");
// const inputEl = document.createElement("input");
// const addTaskBtn2 = document.createElement("button");
// const body = document.querySelector("body");

// let tasks = [
//   { id: 1, title: "My First task", isDone: false },
//   { id: 2, title: "Do some Coding", isDone: false },
//   { id: 3, title: "Something else", isDone: false },
// ];

// body.append(app_title, toDo_container, addTaskBtn, addTaskModalBg);
// addTaskModalBg.appendChild(addTaskModal);
// addTaskModal.append(inputEl, addTaskBtn2);

// app_title.textContent = "To-Do App";
// app_title.style.textAlign = "center";
// app_title.style.fontWeight = "900";
// app_title.style.fontSize = "3rem";
// app_title.style.color = "red";

// toDo_container.style.width = "400px";
// toDo_container.style.border = "1px solid #0002";
// toDo_container.style.background = "#0001";
// toDo_container.style.boxShadow = "0 5px 15px -5px #0002";
// toDo_container.style.padding = "20px";
// toDo_container.style.borderRadius = "10px";
// toDo_container.style.display = "grid";
// toDo_container.style.gap = "10px";

// body.style.minHeight = "100vh";
// body.style.display = "grid";
// body.style.placeContent = "center";
// body.style.gap = "1.5rem";

// addTaskBtn.textContent = "Add task";
// addTaskBtn.style.padding = "10px 20px";
// addTaskBtn.style.borderRadius = "8px";
// addTaskBtn.style.background = "skyblue";
// addTaskBtn.style.cursor = "pointer";
// addTaskBtn.style.border = "none";
// addTaskBtn.style.fontSize = "1rem";

// addTaskBtn.onmousedown = () => {
//   addTaskBtn.style.scale = 0.95;
// };
// addTaskBtn.onmouseup = () => {
//   addTaskBtn.style.scale = 1;
// };

// addTaskModalBg.style.position = "fixed";
// addTaskModalBg.style.inset = "0";
// addTaskModalBg.style.background = "#0006";
// addTaskModalBg.style.zIndex = "1";
// addTaskModalBg.style.display = "none";
// addTaskModalBg.style.placeContent = "center";
// addTaskModalBg.style.backdropFilter = "blur(10px)";

// addTaskModal.style.width = "400px";
// addTaskModal.style.padding = "20px";
// addTaskModal.style.background = "#f4f4f4";
// addTaskModal.style.borderRadius = "10px";
// addTaskModal.style.boxShadow = "0 5px 15px -5px #0003";
// addTaskModal.style.display = "grid";
// addTaskModal.style.gap = "1rem";

// inputEl.style.height = "40px";
// inputEl.style.paddingLeft = "7px";

// addTaskBtn2.textContent = "Add task";
// addTaskBtn2.style.background = "limegreen";
// addTaskBtn2.style.padding = "7px 20px";
// addTaskBtn2.style.borderRadius = "7px";
// addTaskBtn2.style.border = "none";
// addTaskBtn2.style.cursor = "pointer";

// function initApp() {
//   toDo_container.innerHTML = "";

//   tasks.forEach((task) => {
//     const taskCard = document.createElement("li");

//     taskCard.innerHTML = `
//     <h1>${task.title}</h1>
//     <ul>
//       <button id="delete">Delete</button>
//       <button id="done">Done</button>
//     </ul>
//   `;

//     taskCard.style.display = "flex";
//     taskCard.style.padding = "10px";
//     taskCard.style.justifyContent = "space-between";
//     taskCard.style.border = "1px solid #0002";
//     taskCard.style.borderRadius = "8px";
//     taskCard.style.background = "#0001";
//     taskCard.style.boxShadow = "0 3px 10px #0001";

//     const headerText = taskCard.querySelector("h1");
//     const ul = taskCard.querySelector("ul");
//     const buttons = taskCard.querySelectorAll("button");

//     headerText.style.fontSize = "1.2rem";
//     ul.style.display = "grid";
//     ul.style.gap = "5px";
//     buttons.forEach((button) => {
//       button.style.padding = "5px 17px";
//       button.style.borderRadius = "5px";
//       button.style.cursor = "pointer";

//       button.onmousedown = () => {
//         button.style.scale = 0.95;
//       };
//       button.onmouseup = () => {
//         button.style.scale = 1;
//       };
//     });

//     if (task.isDone) {
//       headerText.style.textDecoration = "line-through";
//       headerText.style.opacity = 0.5;

//       buttons[1].textContent = "Undone";
//     }

//     const deleteBtn = taskCard.querySelector("#delete");
//     const editBtn = taskCard.querySelector("#done");

//     deleteBtn.onclick = () => deleteTask(task.id);
//     editBtn.onclick = () => editTask(task.id);

//     taskCard.onclick = () => {
//       task.isDone = !task.isDone;
//       initApp();
//     };

//     toDo_container.appendChild(taskCard);
//   });
// }

// initApp();

// function toggleModal(e) {
//   if (e.target !== addTaskModalBg) {
//     return;
//   }
//   addTaskModalBg.style.display = "none";
// }

// addTaskModalBg.onclick = toggleModal;
// addTaskBtn.onclick = () => {
//   addTaskModalBg.style.display = "grid";
// };

// function deleteTask(id) {
//   tasks = tasks.filter((task) => task.id !== id);
//   initApp();
// }

// function addTask() {
//   const title = inputEl.value.trim();

//   if (title === "") {
//     alert("Please enter a task name.");
//     return;
//   }

//   const newTask = {
//     id: Date.now(),
//     title: title,
//     isDone: false,
//   };

//   tasks.push(newTask);

//   initApp();
//   inputEl.value = "";
//   addTaskModalBg.style.display = "none";
// }

// addTaskBtn2.onclick = addTask;

// ! Password strenth check
// * Practice 2

// const passwordContainer = document.createElement("div");
// const appTitle = document.createElement("h1");
// const passwordInp = document.createElement("input");
// const passwordStatus = document.createElement("span");

// document.body.append(passwordContainer);
// passwordContainer.append(appTitle, passwordInp, passwordStatus);

// function UiInit() {
//   passwordContainer.style.width = "400px";
//   passwordContainer.style.padding = "20px";
//   passwordContainer.style.boxShadow = "0 7px 15px -5px #0003";
//   passwordContainer.style.borderRadius = "10px";
//   passwordContainer.style.background = "#fff";
//   passwordContainer.style.border = "1px solid #0001";
//   passwordContainer.style.display = "grid";
//   passwordContainer.style.gap = "1rem";

//   appTitle.textContent = "Password checker";
//   appTitle.style.textAlign = "center";
//   appTitle.style.fontFamily = "Arial";

//   passwordInp.style.height = "35px";
//   passwordInp.style.borderRadius = "8px";
//   passwordInp.style.background = "#0001";
//   passwordInp.style.boxShadow = "0 5px 10px -3px #0002";
//   passwordInp.style.border = "1px solid #0001";
//   passwordInp.style.paddingLeft = "7px";
//   passwordInp.style.fontSize = "1rem";

//   passwordStatus.textContent = "Weak";
//   passwordStatus.style.width = "fit-content";
//   passwordStatus.style.padding = "8px 25px";
//   passwordStatus.style.margin = "auto";
//   passwordStatus.style.borderRadius = "8px";
//   passwordStatus.style.background = "#fd2c3d";
//   passwordStatus.style.fontFamily = "Arial";
//   passwordStatus.style.fontWeight = "700";
//   passwordStatus.style.color = "#fff";
// }
// UiInit();

// function checkPasswordInit() {
//   const password = passwordInp.value;
//   let strength = 0;

//   if (password.length >= 8) {
//     strength++;
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

//   if (hasUpper) strength++;
//   if (hasNumber) strength++;
//   if (hasSpecial) strength++;

//   if (password.length === 0) {
//     passwordStatus.textContent = "Empty";
//     passwordStatus.style.background = "#aaa";
//   } else if (strength <= 2) {
//     passwordStatus.textContent = "Weak";
//     passwordStatus.style.background = "#fd2c3d";
//   } else if (strength === 3) {
//     passwordStatus.textContent = "Medium";
//     passwordStatus.style.background = "#fedf42";
//   } else {
//     passwordStatus.textContent = "Strong";
//     passwordStatus.style.background = "#2aff3f";
//   }
// }

// passwordInp.addEventListener("input", () => {
//   checkPasswordInit();
// });

// ! Password strenth check
// * Practice 3

// const calcContainer = document.createElement("div");
// const calcDisplay = document.createElement("span");
// const calcButtonGrid = document.createElement("div");

// let currentInput = "";
// let previousInput = "";
// let operator = null;

// document.body.append(calcContainer);
// calcContainer.append(calcDisplay, calcButtonGrid);

// const labels = [
//   "7",
//   "8",
//   "9",
//   "/",
//   "4",
//   "5",
//   "6",
//   "*",
//   "1",
//   "2",
//   "3",
//   "-",
//   "0",
//   "(",
//   ")",
//   "+",
//   ".",
//   "c",
//   "=",
// ];

// labels.forEach((label) => {
//   const calcBtn = document.createElement("button");
//   calcBtn.textContent = label;
//   calcBtn.style.width = "100%";
//   calcBtn.style.height = "60px";
//   calcBtn.style.cursor = "pointer";
//   calcBtn.style.borderRadius = "8px";
//   calcBtn.style.border = "1px solid #0003";
//   calcBtn.style.fontSize = "1.3rem";
//   calcBtn.style.fontWeight = "700";

//   calcBtn.style.boxShadow = "0 3px 8px #0001";

//   calcButtonGrid.append(calcBtn);
// });

// function uiSetup() {
//   calcContainer.style.width = "400px";
//   calcContainer.style.background = "#fff";
//   calcContainer.style.padding = "20px";
//   calcContainer.style.display = "grid";
//   calcContainer.style.gap = "10px";
//   calcContainer.style.boxShadow = "0 5px 15px -3px #0002";
//   calcContainer.style.borderRadius = "10px";

//   calcDisplay.style.width = "100%";
//   calcDisplay.style.height = "70px";
//   calcDisplay.style.background = "#0002";
//   calcDisplay.style.boxShadow = "inset 3px 5px 10px #0002";
//   calcDisplay.style.fontSize = "1.3rem";
//   calcDisplay.style.padding = "6px";
//   calcDisplay.style.borderRadius = "8px";

//   calcButtonGrid.style.width = "100%";
//   calcButtonGrid.style.display = "grid";
//   calcButtonGrid.style.gridTemplateColumns = "repeat(4, 1fr)";
//   calcButtonGrid.style.gap = "6px";
//   calcButtonGrid.style.marginTop = "10px";

//   calcButtonGrid.lastElementChild.style.gridColumn = "3/5";
//   calcButtonGrid.lastElementChild.style.background = "orange";
// }

// uiSetup();

// ! Traffic light simulator
// * Practice 4

// // ? UI
// const light_container = document.createElement("div");
// const greenLight = document.createElement("div");
// const yellowLight = document.createElement("div");
// const redLight = document.createElement("div");

// document.body.appendChild(light_container);
// light_container.append(greenLight, yellowLight, redLight);

// function lightUi() {
//   light_container.style.width = "200px";
//   light_container.style.display = "grid";
//   light_container.style.gap = "1rem";
//   light_container.style.padding = "20px";
//   light_container.style.borderRadius = "10px";
//   light_container.style.background = "#121212";

//   greenLight.style.width = "100%";
//   greenLight.style.aspectRatio = "1";
//   greenLight.style.borderRadius = "50%";
//   greenLight.style.background = "#14ff2b";

//   yellowLight.style.width = "100%";
//   yellowLight.style.aspectRatio = "1";
//   yellowLight.style.borderRadius = "50%";
//   yellowLight.style.background = "#ffda1e";

//   redLight.style.width = "100%";
//   redLight.style.aspectRatio = "1";
//   redLight.style.borderRadius = "50%";
//   redLight.style.background = "#ff1024";
// }
// lightUi();

// function startTrafficCycle() {
//   greenLight.style.opacity = "1";
//   yellowLight.style.opacity = "0.2";
//   redLight.style.opacity = "0.2";

//   setTimeout(() => {
//     greenLight.style.opacity = "0.2";
//     yellowLight.style.opacity = "1";
//     redLight.style.opacity = "0.2";

//     setTimeout(() => {
//       greenLight.style.opacity = "0.2";
//       yellowLight.style.opacity = "0.2";
//       redLight.style.opacity = "1";

//       setTimeout(() => {
//         startTrafficCycle();
//       }, 3000);
//     }, 1000);
//   }, 3000);
// }

// startTrafficCycle();

// ! homework
// ? authentication

// const authCont = document.createElement("form");
// const authContTitle = document.createElement("h1");
// const authNameInp = document.createElement("input");
// const authEmailInp = document.createElement("input");
// const authPasswordInp = document.createElement("input");
// const authSubmitBtn = document.createElement("button");
// const authSwitchBtn = document.createElement("button");

// let users = [];

// document.body.appendChild(authCont);
// authCont.append(
//   authContTitle,
//   authNameInp,
//   authEmailInp,
//   authPasswordInp,
//   authSubmitBtn,
//   authSwitchBtn,
// );

// const allInputs = [authNameInp, authEmailInp, authPasswordInp];
// const allbuttons = [authSubmitBtn, authSwitchBtn];

// function authUI() {
//   authCont.style.width = "450px";
//   authCont.style.borderRadius = "15px";
//   authCont.style.padding = "20px";
//   authCont.style.background = "#fff";
//   authCont.style.display = "grid";
//   authCont.style.gap = "6px";
//   authCont.style.border = "1px solid #0002";
//   authCont.style.boxShadow = "0 5px 15px #0001";

//   authContTitle.textContent = "Sign up";
//   authContTitle.style.textAlign = "center";
//   authContTitle.style.paddingBottom = "20px";

//   authNameInp.placeholder = "Enter Name";
//   authNameInp.type = "text";
//   authEmailInp.placeholder = "Enter Email";
//   authEmailInp.type = "email";
//   authPasswordInp.placeholder = "Enter Password";
//   authPasswordInp.type = "password";

//   allInputs.forEach((inpElement) => {
//     inpElement.style.width = "100%";
//     inpElement.style.height = "40px";
//     inpElement.style.border = "2px solid #0003";
//     inpElement.style.borderRadius = "10px";
//     inpElement.style.paddingLeft = "10px";
//     inpElement.style.outlineColor = "#256eff";
//     inpElement.style.marginBlock = "3px";
//     inpElement.style.boxShadow = "0 0 10px #0001";
//   });

//   authSubmitBtn.textContent = "Submit";
//   authSubmitBtn.style.width = "100%";
//   authSubmitBtn.style.height = "45px";
//   authSubmitBtn.style.borderRadius = "10px";
//   authSubmitBtn.style.background = "#256eff";
//   authSubmitBtn.style.color = "#fff";
//   authSubmitBtn.style.fontSize = "1rem";
//   authSubmitBtn.style.fontWeight = "700";
//   authSubmitBtn.style.border = "none";
//   authSubmitBtn.style.marginTop = "20px";
//   authSubmitBtn.style.cursor = "pointer";

//   authSwitchBtn.textContent = "Already have an account?";
//   authSwitchBtn.style.height = "45px";
//   authSwitchBtn.style.color = "#256eff";
//   authSwitchBtn.style.fontSize = "1rem";
//   authSwitchBtn.style.fontWeight = "700";
//   authSwitchBtn.style.border = "none";
//   authSwitchBtn.style.borderRadius = "10px";
//   authSwitchBtn.style.cursor = "pointer";

//   allbuttons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//       event.preventDefault();
//     });

//     button.addEventListener("mouseenter", () => {
//       button.style.filter = "brightness(0.9)";
//     });
//     button.addEventListener("mouseleave", () => {
//       button.style.filter = "brightness(1)";
//     });

//     button.addEventListener("mousedown", () => {
//       button.style.scale = "0.95";
//       button.style.transitionDuration = "50ms";
//     });
//     button.addEventListener("mouseup", () => {
//       button.style.transitionDuration = "0.3s";
//       button.style.scale = "1";
//     });
//   });
// }

// authUI();

// function switchToLogIn() {
//   authCont.classList.toggle("active");

//   if (authCont.classList.contains("active")) {
//     authContTitle.textContent = "Sign up";
//     authNameInp.style.display = "block";
//     authSwitchBtn.textContent = "Already have an account?";
//   } else {
//     authSwitchBtn.textContent = "Don't have an account?";
//     authContTitle.textContent = "Log in";
//     authNameInp.style.display = "none";
//   }
// }

// authSubmitBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (authCont.classList.contains("active")) {
//     checkAuth();
//   } else {
//     addUser();
//   }
// });

// function checkAuth() {
//   const emailInp = authEmailInp.value.trim();
//   const passwInp = authPasswordInp.value.trim();

//   const user = users.find((u) => u.email === emailInp && u.pass === passwInp);

//   if (user) {
//     alert("Welcome back, " + user.name);
//   } else {
//     alert("Account not found or password incorrect.");
//     authPasswordInp.value = "";
//   }
// }

// function addUser() {
//   const nameInp = authNameInp.value.trim();
//   const emailInp = authEmailInp.value.trim();
//   const passwInp = authPasswordInp.value.trim();

//   if (!nameInp || !emailInp || !passwInp) {
//     alert("Please fill all the inputs.");
//     return;
//   }

//   const newUser = {
//     name: nameInp,
//     email: emailInp,
//     pass: passwInp,
//   };

//   users.push(newUser);
//   alert("Account created successfully!");

//   authNameInp.value = "";
//   authEmailInp.value = "";
//   authPasswordInp.value = "";
// }

// authSwitchBtn.addEventListener("click", switchToLogIn);

// ! homework 2
// ? team ranking table

const Container = document.createElement("div");
const tableTitle = document.createElement("h1");
const tableRankSortBtn = document.createElement("button");
const tableBestSortBtn = document.createElement("button");
const tableCont = document.createElement("table");
const addTeamBtn = document.createElement("button");

document.body.appendChild(Container);
Container.append(
  tableTitle,
  tableRankSortBtn,
  tableBestSortBtn,
  tableCont,
  addTeamBtn,
);

let buttons = [tableRankSortBtn, tableBestSortBtn, addTeamBtn];

let tableData = [
  {
    id: "Rank",
    team: "Team",
    wins: "Wins",
    loss: "Losses",
    points: "Points",
  },
  {
    id: "1",
    team: "Team A",
    wins: "5",
    loss: "2",
    points: "15",
  },
  {
    id: "2",
    team: "Team B",
    wins: "3",
    loss: "4",
    points: "9",
  },
  {
    id: "3",
    team: "Team C",
    wins: "7",
    loss: "1",
    points: "21",
  },
];

function styleUI() {
  Container.style.padding = "20px";
  Container.style.border = "1px solid #0003";
  Container.style.borderRadius = "20px";
  Container.style.boxShadow = "0 5px 15px -5px #0001";
  Container.style.display = "flex";
  Container.style.flexDirection = "column";
  Container.style.gap = "1rem";

  tableTitle.textContent = "Tournament Leaderboard 🏆";
  tableTitle.style.fontSize = "2rem";
  tableTitle.style.lineHeight = "1.6";
  tableTitle.style.textAlign = "center";

  buttons.forEach((button) => {
    button.style.width = "100%";
    button.style.padding = "10px";
    button.style.background = "#256eff";
    button.style.color = "#fff";
    button.style.fontSize = "1rem";
    button.style.fontWeight = "600";
    button.style.borderRadius = "10px";
    button.style.boxShadow = "0 5px 10px #0001";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.textTransform = "capitalize";

    button.addEventListener("mouseover", () => {
      button.style.background = "#1555d6";
    });
    button.addEventListener("mouseout", () => {
      button.style.background = "#256eff";
    });
    button.addEventListener("mousedown", () => {
      button.style.scale = "0.95";
      button.style.transitionDuration = "50ms";
    });
    button.addEventListener("mouseup", () => {
      button.style.scale = "1";
      button.style.transitionDuration = "300ms";
    });
  });

  tableRankSortBtn.textContent = "Sort by ranking";
  tableBestSortBtn.textContent = "Highlight best team";
  addTeamBtn.textContent = "Add Team";
}

styleUI();

function fillTable() {
  tableCont.style.borderCollapse = "collapse";
  tableCont.style.overflow = "hidden";
  tableCont.style.borderRadius = "10px";
  tableCont.style.boxShadow = "0 5px 15px -3px #0001";
  tableCont.innerHTML = "";

  tableData.forEach((data) => {
    tableCont.innerHTML += `
    <tr>
      <td>${data.id}</td>
      <td>${data.team}</td>
      <td>${data.wins}</td>
      <td>${data.loss}</td>
      <td>${data.points}</td>
    </tr>
    `;
  });

  const tableRow = tableCont.querySelectorAll("tr");
  const frstTableRow = tableCont.querySelectorAll("tr")[0];
  const tableDataa = tableCont.querySelectorAll("td");

  frstTableRow.style.background = "#256eff";
  frstTableRow.style.color = "#fff";
  frstTableRow.style.fontWeight = "700";

  tableRow.forEach((tr) => {
    tr.style.borderCollapse = "collapse";
  });
  tableDataa.forEach((td) => {
    td.style.border = "1px solid #0002";
    td.style.padding = "5px 10px";
  });
}

fillTable();
