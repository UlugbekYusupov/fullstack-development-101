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

// // // // Lesson 2 Lecture 4 || 24.02.2026 __________________________________________________________________________________

// // // for loop
// // for(let i  = 10; i < 10; i++) {
// //     console.log(i);
// // };

// // // while loop
// // let i = 1;
// // while (i < 10) {
// //     console.log(i);
// //     i++;
// // };

// // // do while loop
// // let a = 0;
// // do {
// //     console.log(a);
// //     a++;
// // } while (a < 10);

// // const user = {
// //     name: "otabek",
// //     age: 19,
// //     country: "Uzbekistan"
// // };

// // // for...in (object uchun)
// // for (const key in user) {
// //     const element = user[key];
// //     console.log(element);
// // }

// // // for...of (array uchun)
// // for (const element of Object.values(user)) {
// //     console.log(element);
// // }

// // Practices

// // // Practise 1

// // const num1 = 23;
// // const num2 = 83;

// // if (num1 > num2) {
// //     console.log(`The largest number is ${num1}`);
// // } else {
// //     console.log(`The largest number is ${num2}`);
// // }

// // // Practice 2

// // const numbers = [3, -7, 2];

// // let i = 0;
// // let found = false;

// // while (i < numbers.length) {
// //     if (numbers[i] < 0) {
// //         alert(`The sign is ${numbers[i]}`);
// //         found = true;
// //         break;
// //     }
// //     i++;
// // }

// // if (!found) {
// //     alert("We have not a signed number");
// // }

// // // Practice 3

// // const numbers = [0, -1, 4];
// // let sortedNumbers = numbers.sort();
// // let reversedNumbers = sortedNumbers.reverse();
// // alert(reversedNumbers);

// // // Practice 4

// // for (let i = 0; i <= 15; i++) {
// //     if (i % 2 === 0) {
// //         console.log(`${i} is even`);
// //     } else {
// //         console.log(`${i} is odd`);
// //     };
// // };

// // // Practice 5

// // for (let i = 1; i <= 100; i++) {
// //     if (i % 3 === 0 && i % 5 === 0) {
// //         console.log("FizzBuzz");
// //     } else if (i % 3 === 0) {
// //         console.log("Fizz");
// //     } else if (i % 3 === 0) {
// //         console.log("Buzz");
// //     } else {
// //         console.log(i);
// //     };
// // };

// // // Practice 6

// // let number = prompt("Enter a number");
// // let armstrong = 0;
// // const daraja = number.length;

// // let  i = 0;

// // while (i < number.length) {
// //     let digit = Number(number[i]);
// //     armstrong += digit ** daraja;
// //     i++;
// // }

// // if (armstrong === Number(number)) {
// //     console.log(`The number (${number}) is armstrong`);
// // } else {
// //     console.log(`The number (${number}) is not armstrong`);
// // }

// // Practice 7

// const marks = {
//     David: 80,
//     Vinoth: 77,
//     Divya: 88,
//     Ishitha: 95,
//     Thomas: 68
// }

// let totalMarks = 0;
// let totalStudent = 0;

// for (let key in marks) {
//     totalMarks += marks[key];
//     totalStudent++;
// }

// let average = totalMarks / totalStudent;
// console.log(`Average mark of this class: ${average}`);

// // Lesson 3 / 26.02.2026    ________________________________________________________________________________________________

// // Functions

// // Function Declaration
// function sum (a, b) {
//     console.log(a + b);
// };
// sum(5, 6);

// // Function Expression
// let Sum = function (a, b ) {
//     console.log(a + b);
// };
// Sum(5, 6);

// // Arrow function
// let sUm = (a, b) => {console.log(a + b)};
// sUm(5, 6);

// // IIFE (Immediately Invoked Function Expression) Function
// (function (a,b) {console.log(a + b)} (5, 6));

// // Function Constructor
// let suM = new Function(
//     'a',
//     'b',
//     'console.log(a + b)'
// );
// suM(5, 6);

// function outer() {
//     let count = 0;

//     return function inner() {
//         count++;
//         console.log(count);
//     };
// };

// const counter = outer();
// counter();
// counter();
// counter();

// // Challenges

// // challenge 1

// // 1:

// function greet(name) {
//     return `Hello  ${name}`;
// };
// console.log(greet("Otabek"));

// // 2:

// const Greet = function(name) {
//     return `Hello ${name}`;
// };
// console.log(Greet("Otabek"));

// // 3:

// let gReet = (name) => {
//     return `Hello ${name}`;
// };
// console.log(gReet("Otabek"));

// // 4:

// (function(name) {
//     console.log(`Hello ${name}`)})
// ("Otabek");

// // 5:

// let grEEt = new Function(
//     "name",
//     "return 'Hello ' + name"
// );

// console.log(grEEt("Otabek"));

// // challenge 2

// const number = Number(prompt("enter a number"));

// function isPrime(n) {
//     if (n < 1) {
//         return `${n} is not prime`;
//     };

//     for (let i = 2; i <= n; i++) {
//         if (n % i === 0) {
//             return `${n} is not prime`;
//         };
//     };
//     return `${n} is prime`;
// };
// alert(isPrime(number));

// // challenge 3

//  const number = Number(prompt("Enter a number"));

// function Countdigitis(n) {
//     let count = 0;
//     n = Math.abs(n);

//     if (n < 10) {
//         count = 1;
//     } else {
//         while (n > 0) {
//             count++;
//             n = Math.floor(n / 10);
//         }
//     }
//     return count;
// };

// alert(Countdigitis(number));

// // challenge 4

// const number = Number(prompt("Enter a number"));

// function isPalindrom(n) {
//     let reversedNumber = Math.abs(n).toString().split('').reverse().join('') * Math.sign(n);;
//     if (n === reversedNumber) {
//         return `${n} is Palindrom`;
//     }
//     return `${n} is not Palindrom`;
// };

// alert(isPalindrom(number));

// // challenge 5

// const number = (prompt("Enter a number: "));
// let armstrong = 0;
// let daraja = number.lenght;

// function isArmstrong(n) {
//     let i = 0;

//     while (i < number.length) {
//         let digit = Number(n[i]);
//         armstrong += digit ** daraja; 
//         i++;
//     };

//     if (n === armstrong) {
//         return  `${n} is Armstrong`;
//     } else {
//         return  `${n} is not Armstrong`;
//     };
// };

// alert(isArmstrong(number));

// // challenge 6

// const number = Number(prompt("Enter a number: "));

// function createCounter(start) {
//     let count = start;

//     return {
//         increment() {
//             count++;
//         },
//         decrement() {
//             count--;
//         },
//         getCount() {
//             return count;
//         }
//     };
// }

// const counter = createCounter(5);

// counter.increment();
// counter.increment();
// counter.decrement();

// alert(counter.getCount());

// // challenge 7

// function orderFood() {
//     let name = prompt("Enter your name: ");
//     let address = prompt("Enter your address: ");
//     let food = prompt("What do you want? (, bilan ajrating)");
//     let arrayFood = food.split(",").map(item => item.trim());  
//     let orderedFood = `Dear ${name}, your ordered food (${arrayFood}) will be ready in 15 minuts and will be delivered to your ${address}`
//     return orderedFood;
// };

// alert(orderFood());

// // challenge 8

// function lazyAdder(a) {
//     return function adderB(b) {
//         return a += b;
//     };
// };

// const add5 = lazyAdder(5); 
// console.log(add5(10));  // 15
// console.log(add5(20)); // 35


// Assigments

// // 1:

// const cartItemQuantity = 5;
// const cartItemsTotalPrice = 1800;
// const discountTable = {
//     1: 0,
//     2: 0,
//     3: 5,
//     4: 8,
//     5: 10,
//     6: 12,
//     7: 15,
//     8: 17,
//     9: 18,
//     10: 20,
//     11: 22,
//     12: 24,
//     13: 25,
//     14: 27,
//     15: 28,
//     16: 30,
//     17: 32,
//     18: 35,
//     19: 37,
//     20: 40
// };

// function discountPrice(qty, pri) {
//     if (qty in discountTable) {
//         let discount = discountTable[qty];
//         let discountAmount = pri * (discount / 100);
//         let discountedPrice = pri - discountAmount;
//         return `Your cart has ${qty} item(s) which costs $${pri} and we give you $${discountAmount} And now you should pay $${discountedPrice}`;
//     } else {
//         Alert("You have not discount!!!")
//     };
// };

// console.log(discountPrice(cartItemQuantity, cartItemsTotalPrice));

// // 2:

// // const password = prompt("Enter your password:  ");

// const password = "sqjskdnc";

// const specialChars = [
//     "!", "@", "#", "$", "%", "^", "&", "*",
//     "(", ")", "_", "+", "-", "=",
//     "{", "}", "[", "]",
//     "|", "\\",
//     ":", ";",
//     "\"", "'",
//     "<", ">", ",", ".",
//     "?", "/", "~", "`"
// ];


// let minCharacter = false;
// let hasUppercase = false;
// let hasNumber = false;
// let hasSpecial = false;

// if (password.length >= 8) {
//     minCharacter = true;
// }

// if (/[A-Z]/.test(password)) {
//     hasUppercase = true;
// };

// if (/\d/.test(password)) {
//     hasNumber = true;
// }

// for (let char of password) {
//     if (specialChars.includes(char)) {
//         hasSpecial = true;
//         break;
//     }
// }

// let conditions = [minCharacter, hasNumber, hasSpecial, hasUppercase];

// let trueCount = conditions.filter(Boolean).length;

// function passwordStrengthChecker() {
//     if (trueCount === 4) {
//         return "VERY STRONG";
//     } else if (trueCount === 3) {
//         return "STRONG";
//     } else if (trueCount === 2) {
//         return "MEDIUM";
//     } else {
//         return "WEAK";
//     }
// }

// alert(passwordStrengthChecker());

// // 3:

// const money = 1451240;

// const bills = [];

// for (let base = 10; base <= 1000000; base *= 10) {
//     for (let i = 1; i <= 9; i++) {
//         bills.push(base * i);
//     }
// }

// bills.sort((a, b) => b - a);

// let decadeableMoney = false;

// if (money % 10 === 0) {
//     decadeableMoney = true;
// }

// function withdrawATM(m) {
//     if (decadeableMoney === false) {
//         alert("Invalid amount of money for withdraw!!!")
//     } else {

//         const result = {};
//         for (let bill of bills) {
//             if (m >= bill) {
//                 result[bill] = 1;
//                 m -= bill;
//             }
//         }
//         return result;
//     };
// };

// console.log(withdrawATM(money));

// // 4:

// const colorTimeOuts = {
//     green: 10,
//     yellow: 2,
//     red: 12
// };

// function trafficLightSimulator() {
//     const trafficLightColours = ["green", "yellow", "red"];
//     let index = 0;

//     function runLight() {
//         let currentColor = trafficLightColours[index];
//         let time = colorTimeOuts[currentColor];

//         console.log(currentColor.toUpperCase());

//         setTimeout(() => {
//             index = (index + 1) % trafficLightColours.length;
//             runLight();
//         }, time * 1000);
//     }

//     runLight();
// }

// trafficLightSimulator();

// // 6:

// password = 1104;

// inputPassword = Number(prompt("Enter your password: "));

// if (inputPassword != password) {
//     alert("You entered wrong password!!!");
// } else {
//     function bankingSystem(initialBalance) {
//     let balance = initialBalance;

//     return {
//         depositMoney(amount) {
//             if (amount <= 0) {
//                 return "Invalid deposit amount";
//             }
//             balance -= amount;
//             let bonus = amount * 0.25;
//             balance += amount + bonus;

//             return `Deposited: $${amount} (+25% bonus). New balance: $${balance}`;
//         },

//         withdrawMoney(amount) {
//             if (amount > balance) {
//                 return "Invalid operation. Insufficient funds!";
//             }

//             balance -= amount;
//             return `You withdrew $${amount}. Remaining balance: $${balance}`;
//         },

//         viewBalance() {
//             return `Your balance: $${balance}`;
//         }
//     };
// }
// }

// const account = bankingSystem(1000);

// console.log(account.viewBalance());
// account.depositMoney(500);
// console.log(account.viewBalance());
// account.withdrawMoney(300);
// console.log(account.viewBalance()); 

// // 7:

// const role = {
//     admin: 1104,
//     editor: 2578,
//     viewer: 1111,
// };

// let inputRole = prompt("Enter your role: ");
// let inputParol = Number(prompt("Enter your parol: "));

// let isLoggedIn = false;

// for (let key in role) {
//     if (key === inputRole && role[key] === inputParol) {
//         isLoggedIn = true;
//         break;
//     }
// }

// function roleChecker() {
//     if (!isLoggedIn) {
//         alert("You entered wrong password or role!!!");
//         return;
//     }

//     if (inputRole === "admin") {
//         alert("You can add, edit, delete contents. Welcome dear admin!");
//     } else if (inputRole === "editor") {
//         alert("You can edit and view contents. Welcome dear editor!");
//     } else {
//         alert("You can view contents. Welcome dear user!");
//     }
// }

// roleChecker();

// 8:

const salary = Number(prompt("Enter your salary"));
let tax = 0;
const TaxCalculator = function(a) {
    if (a < 10000) {
        alert(`You shold not pay any TAX. Your budget: $${a}`);
    } else if (a > 10000 && a < 50000) {
        tax = a * 0.1;
        a -= tax;
        alert(`You shold  pay 10% TAX ($${tax}). Your budget: $${a}`);
    } else {
        tax = a * 0.2;
        a -= tax;
        alert(`You shold  pay 20% TAX ($${tax}). Your budget: $${a}`);
    };
};

TaxCalculator(salary);