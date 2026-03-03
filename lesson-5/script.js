// Callenge 1

// Function Declaration 
// function greet(name) {
//     return "Hello " + name;
// }


// Function Expression 
// let greet = function (name) {
//     return "Hello " + name;
// }


// Arrow Function 
// let greet = (name) => {
//     return "Hello " + name;
// }


// Function Constructor 
// let greet = new Function (
//     'name',
//     'return "Hello " + name'
// );




// Challenge 2
// Function Declaration 
// function isPrime(number) {
//     if (number <= 1) {
//         return "Number doesn't belong to none of them"
//     }
//     for (let i = 2; i < number; ++i) {
//         if (number % i == 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(1));


// Function Expression 
// let isPrime = function (number) {
//       if (number <= 1) {
//             return "Number doesn't belong to none of them"
//         }
//         for (let i = 2; i < number; ++i) {
//             if (number % i == 0) {
//                 return false
//             }
//         }
//         return true
// }
// console.log(isPrime(5));


// Arrow Function 
// let isPrime = (number) => {
//          if (number <= 1) {
//             return "Number doesn't belong to none of them"
//         }
//         for (let i = 2; i < number; ++i) {
//             if (number % i == 0) {
//                 return false
//             }
//         }
//         return true
// }
// console.log(isPrime(5));


// Challenge 3
// function countDigits(number) {
//     let counts = 0;
//     while (true) {
//         if (number == 0) {
//             return counts
//         }
//         lastDigit = number / 10;
//         number = Math.floor(number/10);
//         counts ++; 
//     }
// }
// console.log(countDigits(123455))


// Challenge 4
// function isPalinderome(number) {
//     const original = number;
//     let number_reversed = 0;
//     while (number > 0) {
//         let lastDigit = number%10;
//         number_reversed = number_reversed*10 + lastDigit;
//         number = Math.floor(number/10);
//     }
//     return original  == number_reversed
// }
// console.log(isPalinderome(12221))


// Challenge 5
// function isArmstrong(n) {
//     const original = n;
//     let sumOfDigitsCubes = 0;
//     while (n > 0) {
//         let lastDigit = n%10;
//         sumOfDigitsCubes += Math.pow(lastDigit, 3);
//         n = Math.floor(n/10);
//     }
//     return sumOfDigitsCubes == original
// }
// console.log(isArmstrong(153))


// Challenge  6
// function createCounter(start) {
//     return {
//         increament : function () {
//             start ++;
//         },
//         decreament : function () {
//             start -- ;
//         },
//         getCount : function () {
//             return start;
//         } 
//     }
// }
// let funcs = createCounter(5)
// funcs.decreament()
// console.log(funcs.getCount())


// Challenge 7
// function ordering() {
//     const namee = prompt("Enter your name: ")
//     const address = prompt("Enter your address: ")
//     const food = prompt("Order a food: ")
//     return "Dear " + namee + ", your ordered " + food 
//     +" will be ready in 15 minutes and will be delivered to your address " + address
// }

// console.log(ordering())

// challenge 8
// function lazyAdder(a) {
//   return function(b) {
//     return a + b;
//   };
// }

// const add5 = lazyAdder(5);

// console.log(add5(10)); 
// console.log(add5(20)); 




// ASSIGNMENT

// Challenge 1
// function totalPrice(a, p) {
//     let expense;
//     if (a >= 5) {
//         expense = a * p * 0.8;
//     }
//     else if (a >= 3) {
//         expense = a * p * 0.9;
//     }
//     return expense
// }
// console.log(totalPrice(7, 100))


// Challenge 2
 
// function checkPassword(password) {
//   let hasUppercase = /[A-Z]/.test(password);
//   let hasNumber = /[0-9]/.test(password);
//   let hasSpecial = /[^A-Za-z0-9]/.test(password);
//   let isLongEnough = password.length >= 8;

//   let score = 0;

//   if (isLongEnough) score++;
//   if (hasUppercase) score++;
//   if (hasNumber) score++;
//   if (hasSpecial) score++;

//   if (score <= 2) return "Weak";
//   if (score === 3) return "Medium";
//   return "Strong";
// }


// Challenge 3
// function atmWithdraw(amount) {
//   const bills = [100, 50, 20, 10];
//   const result = {};

//   for (let bill of bills) {
//     result[bill] = Math.floor(amount / bill);
//     amount = amount % bill;
//   }

//   if (amount !== 0) {
//     return "Amount cannot be dispensed with available bills.";
//   }

//   return result;
// }

// console.log(atmWithdraw(370));


// Challenge 4
// function trafficLight() {
//   console.log("Red");

//   return setTimeout(() => {
//     console.log("Green");

//     return setTimeout(() => {
//       console.log("Yellow");

//       return setTimeout(() => {
//         trafficLight(); // repeat the cycle
//       }, 2000);

//     }, 3000);

//   }, 5000);
// }

// trafficLight();



// Challenge 5
// function checkPassword(password) {
//   let hasUppercase = /[A-Z]/.test(password);
//   let hasNumber = /[0-9]/.test(password);
//   let hasSpecial = /[^A-Za-z0-9]/.test(password);
//   let isLongEnough = password.length >= 8;

//   let score = 0;

//   if (isLongEnough) score++;
//   if (hasUppercase) score++;
//   if (hasNumber) score++;
//   if (hasSpecial) score++;

//   if (score <= 2) return "Weak";
//   if (score === 3) return "Medium";
//   return "Strong";
// }




// Challenge 6
// function createBankAccount(initialBalance = 0) {
//   let balance = initialBalance; 

//   return {
//     deposit(amount) {
//       if (amount > 0) {
//         balance += amount;
//         console.log(`Deposited: $${amount}. New balance: $${balance}`);
//       }
//     },
//     withdraw(amount) {
//       if (amount > balance) {
//         console.log("Insufficient funds!");
//       } else if (amount > 0) {
//         balance -= amount;
//         console.log(`Withdrew: $${amount}. Remaining balance: $${balance}`);
//       }
//     },
//     viewBalance() {
//       return `Current Balance: $${balance}`;
//     }
//   };
// }

// const myAccount = createBankAccount(100);
// myAccount.deposit(50);
// myAccount.withdraw(30);
// console.log(myAccount.viewBalance());



// Challenge 8
// function calculateTax(salary) {
//   let taxRate = 0;
//   let taxAmount = 0;

//   if (salary < 10000) {
//     taxRate = 0;
//   } else if (salary <= 50000) {
//     taxRate = 0.10; 
//   } else {
//     taxRate = 0.20; 
//   }

//   taxAmount = salary * taxRate;
  
//   return {
//     salary: salary,
//     taxRate: (taxRate * 100) + "%",
//     taxAmount: taxAmount,
//     netIncome: salary - taxAmount
//   };
// }

// console.log(calculateTax(8000));   
// console.log(calculateTax(25000));  
// console.log(calculateTax(60000));  
