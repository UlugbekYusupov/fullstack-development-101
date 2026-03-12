																			///////////////////////////
																				// Lesson 1 Start
																			///////////////////////////

// console.log('5' + 5) // 55
// console.log('5' - 5) // 0
// console.log('5' * '2') // 10
// console.log('10' / 2) // 5
// console.log(5 + true) // 6
// console.log('10' - true) // 9
// console.log('5' + true) // 5true
// console.log(5 + null) // 5
// console.log(5 + undefined) // NaN
// console.log('5' + null) // 5null
// console.log('5' + undefined) // 5undefined

// 2

// let sum = Number('200') + 50
// console.log(sum) // 250

// let result = String(25) + ' years old'
// console.log(result) // 25 years old

// let isTrue = Boolean('false')
// if (isTrue === true) {
// 	console.log('This is true')
// } else {
// 	console.log('This is false')
// }

// console.log('10' - true) // - operator performs numeric subtraction. So, "10" is converted to 10 and true is converted to 1, resulting in 10 - 1 = 9.
// 3
// const celsius = 25
// // 3.1
// const fahrenheit = (celsius * 9) / 5 + 32
// // 3.2
// console.log('Celsius:', celsius)
// console.log('Fahrenheit:', fahrenheit)
// // If we change the value of celsius to 30
// celsius = 30; // TypeError: Assignment to constant variable.
// Bonus chelange
// const celsius = Number(prompt('Enter temperature in Celsius:'))
// const fahrenheit = (celsius * 9) / 5 + 32

// console.log(`Celsius: ${celsius}`)
// console.log(`Fahrenheit: ${fahrenheit}`)

// 4

// let budget = Number(prompt('Enter your total budget:'))

// let expense1 = Number(prompt('Enter expense 1:'))
// let expense2 = Number(prompt('Enter expense 2:'))
// let expense3 = Number(prompt('Enter expense 3:'))

// let remaining = budget - (expense1 + expense2 + expense3)

// if (remaining < 0) {
// 	console.log('Warning: You overspent!')
// } else {
// 	console.log("You're within budget")
// }

// console.log('Remaining balance:', remaining.toFixed(2))

// 5
// console.log(!'h')
// console.log(!!'false' == !!'true') // true
// console.log(0 || 'JS') // 'JS'
// console.log(' ' && '100') // '100'
// console.log(null ?? 'Fallback') // 'Fallback'
// console.log(undefined ?? 'Default value') // 'Default value'

// 6
// let a = '42'
// let b = '3.14'
// let c = 'hello'
// let d = false
// let e = null
// sum = Number(a) + Number(b) + Number(d) + Number(e)
// console.log(sum) // 45.14
// // or with C:
//  let sum =
//   (Number(a) || 0) +
//   (Number(b) || 0) +
//   (Number(c) || 0) +
//   (Number(d) || 0) +
//   (Number(e) || 0);

// console.log(sum); // 45.14

// Challenge 1
//1
// let evenCount = 0
// let oddCount = 0
// for (let i = 1; i <= 50; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i + ' is even')
// 		evenCount++
// 	} else {
// 		console.log(i + ' is odd')
// 		oddCount++
// 	}
// }
// console.log('Total even numbers:', evenCount)
// console.log('Total odd numbers:', oddCount)
// Challenge 2
// let num = 1234
// let reverseNum = 0

// while (num > 0) {
// 	let digit = num % 10
// 	num = Math.floor(num / 10) // whithout Math.floor() we will get 123.4, 12.34, 1.234 and 0.1234 and 1 is don't get included in the reverseNum result will be 432.1 = 432
// 	reverseNum = reverseNum * 10 + digit
// }
// console.log(reverseNum) // 4321
// Whithout moduls
// for (let i = 0; i < String(num).length; i++) {
// 	let reverseNum = String(num).split('').reverse().join('')
// 	console.log(reverseNum)
// }
// Challenge 3
// With moduls
// 

// without moduls
// let numString = prompt('Enter a number:')

// let largest = 0
// for (let i = 0; i < numString.length; i++) {
// 	let digit = Number(numString[i])
// 	if (digit > largest) {
// 		largest = digit
// 	}
// }
// console.log('The largest digit is:', largest)
// Challange 4
// let num = 1234
// let sum = 0

// if (num < 0) {
// 	num = -num
// }

// while (num > 0) {
// 	let digit = num % 10
	
// 	sum = sum + digit
// 	num = Math.floor(num / 10)
// }

// console.log(sum) // 10
																			///////////////////////////
																				// Lesson 1 End
																			///////////////////////////

																			///////////////////////////
																				// Lesson 2 Start
																			///////////////////////////

// Task 1

// let first = 3
// let second = 4
// if (first > second){
// 	console.log(first)
// }else{
// 	console.log(second)
// }
// // Task 2

// const num = [1, -3,4]

// for (const element of num) {
// 	if(element < 0)
// 		alert(element)
	
// }
// // Task 3
// // alert(num1.sort())
// const arr = [1, -3, 4, 2];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// alert(arr);

// Task 4
// const arr1 = [1, 2, 4, 6,8];
// for (const element of arr1) {
// 	if (element % 2 == 0) {
// 		console.log(`${element} is even`)
// 	}
// 	else{
// 		console.log(`${element} is odd`)
// 	}
// }
// Task 5
// for(let i = 0; i <= 100; i++){
// 	if(i % 3 == 0){
// 		console.log(`${i} is Fizz`)
// 	}
// 	else if(i % 5 == 0){
// 		console.log(`${i} is Buzz`)
// 	}
// }
// // Task 6
// const number = prompt("Enter a number");
// let sum = 0;
// let temp = number;
// let digits = number.length;

// for (let digit of number) {
//   sum += digit ** digits;
// 	if (temp == sum) {
// 		console.log(`${number} is an Armstrong number`);
// 	} else {
// 		console.log(`${number} is NOT an Armstrong number`);
// 	}
// }

// Task 7

// const users = {
// 	"David": 80,
// 	"Vinoth": 77,
// 	"Divya": 88,
// 	"Ishitha": 95,
// 	"Thomas": 1
// }

// for (const key in users) {
//   const score = users[key]
//   let grade

//   if (score < 60) grade = "F"
//   else if (score < 70) grade = "D"
//   else if (score < 80) grade = "C"
//   else if (score < 90) grade = "B"
//   else grade = "A"

//   console.log(`${key} grade is ${grade}`)
// }
///////
// function getGrade(score) {
//   if (score < 60) return "F"
//   if (score < 70) return "D"
//   if (score < 80) return "C"
//   if (score < 90) return "B"
//   return "A"
// }

// for (const [name, score] of Object.entries(users)) {
//   console.log(`${name} grade is ${getGrade(score)}`)
// }
																			///////////////////////////
																				// Lesson 2 End
																			///////////////////////////

																			///////////////////////////
																				// Lesson 3 Start
																			///////////////////////////
	


// console.log(first(1,2))		
// function first(a,b){
// 	return a + b
// }					

// let second = function(a,b){
// 	return a + b
// }						
// console.log(second(1,2))	

// let third = (a,b) => {
// 	return a + b
// }						
// console.log(third(1,2))		

// (function(a,b){
// 	return sum = a + b
// })(console.log(1,2))

// let sum = new Function(
// 	"a",
// 	"b",
// 	"return a+b"
// )
// console.log(sum(1,2))		
// Challenge 1

// greet("Oybek")
// function greet(name){
// 	console.log(`Helo ${name}`)
// }
// // Challenge 2
// function isPrime(n) {
//   if (n <= 1) return false

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false
//     }
//   }
//   return true
// }

// console.log(isPrime(7)) 
// console.log(isPrime(10))

// // Challenge 3
// function countDigits(n) {
//   let sum = 0;
//   for (let digit of n) {
//     sum += Number(digit)
//   }
//   console.log(sum)
// }

// countDigits(prompt("Enter a number"))

// // Challenge 4
// const isPalindrome = (n) => {
// 	return n == n.toString().split("").reverse().join("")
// } 
// console.log(isPalindrome(1211))

// // Challenge 5
// function isArmstrong(n){ 
// let sum = 0
// let copy = n.toString()
// let digits = n.length


// for (let digit of n) {
//   sum += digit ** digits
// 	if (copy == sum) {
// 		console.log(`${n} is an Armstrong number`)
// 	} else {
// 		console.log(`${n} is NOT an Armstrong number`)
// 	}
// }
// }
// isArmstrong(prompt("Enter a number"))
// // Challenge 6
// function createCounter(start) {
// 	return {
// 			increment() {
// 					for (let n = 0; n <= start; n++) {
// 							console.log(n)
// 					}
// 			},
// 			decrement() {
// 					for (let n = start; n >= 0; n--) {
// 							console.log(n)
// 					}
// 			},
// 			getCount() {
// 					console.log(start)
// 					return start
// 			}
// 	}
// }


// const counter = createCounter(12)
// counter.increment()
// counter.decrement()
// counter.getCount()

// // Challenge 7
// function letter() {
// 	let name
// 	let address
// 	let food

// 	return {
// 			setName() {
// 					name = prompt("Your name")
// 			},
// 			setAddress() {
// 					address = prompt("Your address")
// 			},
// 			setFood() {
// 					food = prompt("What do you want?")
// 			},
// 			print() {
// 					console.log(`Dear ${name}, your order "${food}" will be addressed to ${address}.`)
// 			}
// 	}
// }

// const order = letter()

// order.setName()
// order.setAddress()
// order.setFood()
// order.print()
// // Challenge 7

// function lazyAdder(a){
// 	return function addFive(b){
// 		return	a + b
// 	}
// }
// const add5 = lazyAdder(5)
// console.log(add5())

// Assignment 

// function calc(){
// 	let price = 100
// 	let sale = 0
// 	let quantite = prompt("How muvh are you wont to buy?")
// 	if (quantite >= 3){
// 		sale = 0.1
// 	}
// 	else if (quantite >= 5){
// 		sale = 0.2
// 	}
// 	let total = price * quantite * (1 - sale);
// 	console.log(`Your total price is $${total}`);
// }
// calc()


// 3

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

// 4
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

// 5

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

// 6

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

// 7

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

// 8

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

																			///////////////////////////
																				// Lecture 6 Start
																			///////////////////////////

// array = [6, 47, 7, 6, 5, 4, 3];

// array.push(69);
// array.pop();
// const filtered = array.filter((word) => word > 6);
// const mapped = array.map((x) => x * 2);
// array.shift();
// array.unshift(3, 4, 5);

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

// console.log(passedStuds);

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


