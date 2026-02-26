// // Practise
// // Challenge 1
// function greet(name) {
//   console.log(`Hello, ${name}`);
// }
// greet("Sherali");

// let gret = function (name) {
//   console.log(`Hello, ${name}`);
// };
// gret("sherali");

// let greeting = (name) => {
//   console.log(`Hello, ${name}`);
// };
// greeting("sHerali");

// let greeet = new Function("name", "console.log(`Hello, ${name}`)");
// greeet("SHerali");

// // Challenge 2
// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num % 2 == 0 && num > 2) return false;
//   const s = Math.sqrt(num);
//   for (i = 3; i < s; i += 2) {
//     return false;
//   }
//   return true;
// }
// console.log(isPrime(5));

// // Challenge 3
// function countDigits(n) {
//   n = Math.abs(n);
//   let count = 0;

//   while (n > 0) {
//     n = Math.floor(n / 10);
//     count++;
//   }
//   return count;
// }
// console.log(countDigits(9));
// console.log(countDigits(0));
// console.log(countDigits(-12));
// console.log(countDigits(12345));

// // Challenge 4
// let isPalindrome = function (number) {
//   if (number < 0) return false;

//   let originalNum = number;
//   let reversed = 0;

//   while (number > 0) {
//     reversed = reversed * 10 + (number % 10);
//     number = Math.floor(number / 10);
//   }
//   return reversed === originalNum;
// };
// console.log(isPalindrome(121));
// console.log(isPalindrome(122));

// // Challenge 5
// let isArmstrong = (numb) => {
//   let numStr = String(numb);
//   let power = numStr.length;
//   let sum = 0;

//   for (let i = 0; i < power; i++) {
//     let digit = Number(numStr[i]);
//     sum += digit ** power;
//   }
//   return sum === numb;
// };
// console.log(isArmstrong(153));
// console.log(isArmstrong(371));
// console.log(isArmstrong(692));

// // Challenge 6
// let createCounter = (start) => {
//   let count = start;
//   return {
//     increment() {
//       return ++count;
//     },
//     decrement() {
//       return --count;
//     },
//     getCount() {
//       return count;
//     },
//   };
// };
// let c = createCounter(3);

// console.log(c.getCount());
// console.log(c.increment());
// console.log(c.increment());
// console.log(c.decrement());
// console.log(c.getCount());

// // Challenge 7
// function orderFood() {
//   let name = window.prompt("What is your name:");
//   let address = window.prompt("What's your address:");
//   let food = window.prompt("What do you want to order:");

//   return `Dear ${name}, you ordered food - ${food} will be ready in 15 minutes
//     and will be delivered to your address - ${address}!`;
// }
// console.log(orderFood());

// // Challenge 8
// function lazyAdder(a) {
//     return function(b) {
//         return a + b;
//     }
// }
// const add5 = lazyAdder(5);
// console.log(add5(10));
// console.log(add5(20));

// // Assignment
// // Challenge 1
// let priceCalculate = function(){
//     let items = Number(window.prompt("How may items did you buy:"));
//     let price = Number(window.prompt("How much is the total cost:"));
//     let discount = 0;

//     if (items > 5) {
//         discount += 20;
//     } else if (items > 3) {
//         discount += 10;
//     }
//     const total = price - (price * discount) / 100;

//     return `You bought ${items} items, and you discount will be ${discount}%.
//     Total cost is $${total}!`;
// }
// console.log(priceCalculate());

// // Challenge 2
// let passwordChecker = (password) => {
//     const hasSpecialChar = /[^a-zA-Z0-9 ]/.test(password);
//     const hasNumber = /\d/.test(password);
//     const hasUppercase = /[A-Z]/.test(password);
//     let state = "Weak";

//     if (password.length < 8 && !hasSpecialChar) {
//         state = "Weak";
//     } else if (password.length < 8 || !hasUppercase) {
//         state = "Medium";
//     } else {
//         state = "Solid";
//     }
//     return state;
// }
// console.log(passwordChecker("Amin12"));
// console.log(passwordChecker("wW2&"));
// console.log(passwordChecker("Amin12ets"));
// console.log(passwordChecker("sfgmin123%"));
// console.log(passwordChecker("Amin12*&^%$3"));

// // Challenge 3
// let atmCash = (amount) => {
//     if (amount % 10 !== 0) return "Invalid amount";
//     const bills = [100, 50, 20, 10];
//     const result = {};

//     for (const bill of bills) {
//         let count = Math.floor(amount / bill);
//         if (count > 0) {
//             result[bill] = count;
//             amount %= bill;
//         }
//     }
//     return result;
// }
// console.log(atmCash(130));

// // Challenge 4
// function startTrafficLight() {
//   function red() {
//     console.log("Red");
//     setTimeout(green, 5000);
//   }
//   function green() {
//     console.log("Green");
//     setTimeout(yellow, 3000);
//   }
//   function yellow() {
//     console.log("Yellow");
//     setTimeout(red, 2000);
//   }
//   red();
// }

// startTrafficLight();

// // Challenge 5
// function checkPasswordStrength(password) {
//     let score = 0;

//     if (password.length >= 8) score++;
//     if (/[A-Z]/.test(password)) score++;
//     if (/[0-9]/.test(password)) score++;
//     if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

//     if (score <= 1) return "Weak";
//     if (score <= 3) return "Medium";
//     return "Strong";
// }

// console.log(checkPasswordStrength("amin12"));
// console.log(checkPasswordStrength("wW2&"));
// console.log(checkPasswordStrength("Amin12ets"));
// console.log(checkPasswordStrength("Amin123%"));

// // Challenge 6
// function bankAccount(initialBalance) {
//     let balance = initialBalance;

//     return {
//         deposit(amount) {
//             if (amount > 0) {
//                 balance += amount;
//                 return balance;
//             }
//             return "Not enough money!";
//         },

//         withdraw(amount) {
//             if (balance > amount && amount > 0) {
//                 balance -= amount;
//                 return balance;
//             }
//             return "Insuffient amount!"
//         },

//         getBalance() {
//             return balance;
//         }
//     }
// }
// const account = bankAccount(500);
// console.log(account.getBalance());
// console.log(account.deposit(200));
// console.log(account.withdraw(100));

// // Challenge 7
// let accessSystem = (status) => {
//     const permissions = ["view", "edit", "delete"];

//     if (status == "user") return permissions.slice(0, 1);
//     else if (status == "admin") return permissions.slice(0, 2);
//     else if (status == "root") return permissions.slice(0, 3);
// }
// console.log(accessSystem("user"));
// console.log(accessSystem("admin"));
// console.log(accessSystem("root"));

// // Challenge 8
// let taxClaculator = (salary) => {
//     let tax = 0;
//     if (salary < 0) return "Invalid amount entered!";
//     else if (salary > 10000 && salary < 50000) tax = 10;
//     else if (salary > 50000) tax = 20;
    
//     let total = salary * (tax / 100);
//     return `Your salary is ${salary}, and income tax will be $${total}.`;
// }
// console.log(taxClaculator(500));
// console.log(taxClaculator(30000));
// console.log(taxClaculator(500000));


