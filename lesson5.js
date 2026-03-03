// function greet(name){
//     console.log(`Hello ${name}`)
// };

// let greett = function (name){
//     console.log(`Hello ${name}`)
// };

// let grett = (name) => {
//     console.log(`Hello ${name}`)
// };

// let gret = new Function(
//     'name', 
//     'return name'
// );

// console.log(`Hello ${gret('Javox')}`);


//EXERCISE 2
// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(5));

//EXERCISE 3
// function countDigits(n) {
//   return Math.abs(n).toString().length;
// }

// console.log(countDigits(234))

//EXERCISE 4
// function isPalindrome(n) {
//   const str = Math.abs(n).toString();
//   return str === str.split('').reverse().join('');
// }

// console.log(isPalindrome(121))


///EXERCISE 5
// function isArmstrong(n) {
//   const str = n.toString();
//   const power = str.length;
//   let sum = 0;

//   for (let i = 0; i < str.length; i++) {
//     sum += str[i] ** power;
//   }

//   return sum === n;
// }

//EXERCISE 6
// function createCounter(start) {
//   let count = start;

//   return {
//     increment() {
//       count++;
//     },
//     decrement() {
//       count--;
//     },
//     getCount() {
//       return count;
//     }
//   };
// }

//EXERCISE 7
// function orderFood(name, address, food) {
//   return `Dear ${name}, your ordered food ${food} will be ready in 15 minutes and will be delivered to your address ${address}.`;
// }


//EXERCISE 8
// function lazyAdder(a) {
//   return function(b) {
//     return a + b;
//   };
// }

// const add5 = lazyAdder(5)
// console.log(add5(10))

//ASSIGNMENTS
//CHELLANGE 1
// function calculateTotal(pricePerItem, quantity) {
//   let total = pricePerItem * quantity;

//   if (quantity >= 5) {
//     total *= 0.8; 
//   } else if (quantity >= 3) {
//     total *= 0.9;
//   }

//   return total;
// }

// // Challenge 2
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

// // Challenge 3
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

// // Challenge 4
// let accessSystem = (status) => {
//     const permissions = ["view", "edit", "delete"];

//     if (status == "user") return permissions.slice(0, 1);
//     else if (status == "admin") return permissions.slice(0, 2);
//     else if (status == "root") return permissions.slice(0, 3);
// }
// console.log(accessSystem("user"));
// console.log(accessSystem("admin"));
// console.log(accessSystem("root"));

// // Challenge 5
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

 