//challenge 1
// function greet(givenName){
//     return "Hello cutie " + givenName;
// }
//
// let greetVar = function (givenName){
//     return "Hello ugly " + givenName;
// }
// let great = (givenName)=>{
//     return "Hello pretty " + givenName;
// }
// let greуet = new Function('givenName','return \'Welcome \' + givenName ');
//
// console.log(greet("Sardor"));
// console.log(greetVar("Sardor"));
// console.log(great("Sardor"));
// console.log(greyet("Sardor"));

//challenge 2
// function isPrime(number){
//     let counter = 0;
//     for (let i = 1; i<=number/2; i++){
//         if(number%i===0){
//             counter++;
//         }
//     }
//     return counter>1;
// }
//
// console.log(isPrime(19));

//challenge 3
// function countDigits(n) {
//     n = Math.abs(n);
//
//     if (n === 0) return 1;
//
//     let count = 0;
//     while (n > 0) {
//         count++;
//         n = Math.floor(n / 10);
//     }
//
//     return count;
// }
//
// console.log(countDigits(1212222));

//challenge 4
// function isPalindrome(n) {
//     let original = n;
//     let reversed = 0;
//
//     while (n > 0) {
//         let digit = n % 10;
//         reversed = reversed * 10 + digit;
//         n = Math.floor(n / 10);
//     }
//
//     return original === reversed;
// }
//
// console.log(isPalindrome(2121));

//challenge 5
// function isArmstrong(n) {
//     let temp = n;
//     let digits = 0;
//
//     // Count digits
//     while (temp > 0) {
//         digits++;
//         temp = Math.floor(temp / 10);
//     }
//
//     temp = n;
//     let sum = 0;
//
//     // Calculate Armstrong sum
//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += Math.pow(digit, digits);
//         temp = Math.floor(temp / 10);
//     }
//
//     return sum === n;
// }
//
// console.log(isArmstrong(341));

//challenge 6
// function createCounter(start){
//     let count= start
//     return {
//         increment: ()=>{
//             count++;
//         },
//         decrement: ()=>{
//             count--
//         },
//         getCount: () => {
//             return count;
//         }
//     }
// }
//
// let counter = createCounter(19);
// counter.increment()
// console.log(counter.getCount());
// counter.decrement()
// console.log(counter.getCount())

//challenge 7
// function order(name, address, meal)  {
//     return {
//         order: function () {
//             return `Dear ${name}, your ordered food ${meal} will be ready in 15 minutes and will be delivered to your address: ${address}.`;
//         }
//     };
// };
//
// // Usage
// const myOrder = order("Sanjar", "Tashkent, Chilonzor", "Lavash");
//
// console.log(myOrder.order());

//challenge 8
// function lazyAdder(a){
//     return function add(b){
//         return a+b;
//     }
// }
// const add = lazyAdder(5);
// console.log(add(10));

// Assignment 1
// const calculateTotalPrice = (quantity, unitPrice) => {
//     let discount = 1;
//
//     if (quantity >= 5) {
//         discount = 0.8;
//     } else if (quantity >= 3) {
//         discount = 0.9;
//     }
//
//     return quantity * unitPrice * discount;
// };
//
// console.log(calculateTotalPrice(7, 100));


// Assignment 2
// const validatePassword = (password) => {
//     const criteria = [
//         password.length >= 8,
//         /[A-Z]/.test(password),
//         /[0-9]/.test(password),
//         /[^A-Za-z0-9]/.test(password)
//     ];
//
//     const score = criteria.filter(Boolean).length;
//
//     if (score <= 2) return "Weak";
//     if (score === 3) return "Medium";
//     return "Strong";
// };


// Assignment 3
// const atmWithdrawal = (amount) => {
//     const denominations = [100, 50, 20, 10];
//     const distribution = {};
//     let remaining = amount;
//
//     for (const bill of denominations) {
//         distribution[bill] = Math.floor(remaining / bill);
//         remaining %= bill;
//     }
//
//     return remaining === 0
//         ? distribution
//         : "Error: Amount cannot be dispensed with available bills.";
// };
//
// console.log(atmWithdrawal(370));


// Assignment 4
// const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
//
// async function runTrafficLight() {
//     while (true) {
//         console.log("Status: Red");
//         await wait(5000);
//
//         console.log("Status: Green");
//         await wait(3000);
//
//         console.log("Status: Yellow");
//         await wait(2000);
//     }
// }


// Assignment 5
// const evaluateSecurity = (pw) => {
//     const hasUpper = /[A-Z]/.test(pw);
//     const hasNum = /[0-9]/.test(pw);
//     const hasSpec = /[^A-Za-z0-9]/.test(pw);
//     const isLong = pw.length >= 8;
//
//     const totalPoints = [hasUpper, hasNum, hasSpec, isLong].filter(v => v).length;
//
//     const ranking = { 0: "Weak", 1: "Weak", 2: "Weak", 3: "Medium", 4: "Strong" };
//     return ranking[totalPoints];
// };
//


// Assignment 6
// const createBankAccount = (initialBalance = 0) => {
//     let balance = initialBalance;
//
//     return {
//         deposit: (amount) => {
//             if (amount > 0) {
//                 balance += amount;
//                 console.log(`Success: $${amount} added. Balance: $${balance}`);
//             }
//         },
//         withdraw: (amount) => {
//             if (amount > balance) {
//                 console.log("Alert: Insufficient funds.");
//             } else if (amount > 0) {
//                 balance -= amount;
//                 console.log(`Success: $${amount} withdrawn. Balance: $${balance}`);
//             }
//         },
//         getBalance: () => `Current Balance: $${balance}`
//     };
// };
//
// const account = createBankAccount(100);
// account.deposit(50);
// account.withdraw(30);
// console.log(account.getBalance());
//


// Assignment 8
const generateTaxReport = (salary) => {
    const rate = salary > 50000 ? 0.20 : (salary >= 10000 ? 0.10 : 0);
    const taxTotal = salary * rate;

    return {
        grossSalary: salary,
        taxPercentage: `${rate * 100}%`,
        totalTax: taxTotal,
        netPay: salary - taxTotal
    };
};

console.log(generateTaxReport(8000));
console.log(generateTaxReport(25000));
console.log(generateTaxReport(60000));
