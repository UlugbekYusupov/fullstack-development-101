// console.log("5" + 5);
// console.log("5" - 5);
// console.log("5" * "2");
// console.log("10" / 2);
// console.log(5 + true);
// console.log("10" - true)
// console.log("5" + true)
// console.log(5 + null);
// console.log(5 + undefined);

// challenge 2
// str = "200"
// str = 200
// console.log(str + 50)
// //
// num = 25
// console.log(num + " years old")
// //
// console.log("false" == Boolean)
// //
// console.log("10" - true)
//
// Challenge 3: Temperature Converter
// const tmp = prompt()
// const fahrenheitTmp = (tmp * (9/5))+32;
// console.log(tmp, fahrenheitTmp);

// tmp = 20;
//

// Challenge 4: Budget Calculator
// let totalBudget = prompt("Enter your Budget: ");
// totalBudget = parseInt(totalBudget);
// let expenses = prompt("Enter you expenses: ");
//
// Challenge 5: Logical Coercion Trickery
// console.log(!!"false" == !!"true");
// console.log(0 || "Javascript");
// console.log(" " ?? "Fallback");
// console.log(null ?? "Fallback");
// console.log(undefined ?? "Default Value");
//
// Challenge 6: Convert Values Properly
// let a = "42";
// let b = "3.14";
// let c = "hello";
// let d = false
// let e = null;
// a = parseInt(a);
// b = parseFloat(b);
// // Convert all to numbers and add them together
// let sum = a + b + d + e;

// console.log(sum); // Fix this so the result is a valid number

///////////////////////////////////////////////////////////////////////////////
// LESSON 2
// Challenge 1
// evens = 0;
// odds = 0;
// num = prompt("enter number: ");

// for(i = 1; i <= num; i++) {
//     if (i % 2 == 0) {
//         evens++;
//     } else {
//         odds++;
//     }
// }

// console.log("Even nums: ", evens);
// console.log("Odd nums: ", odds);

// Challenge 2
// num = prompt();
// num = String(num);
// newNum = "";

// for(i = num.length - 1; i >= 0; i--) {
//     newNum += num[i]
// }

// console.log(newNum);

// Challenge 3
// num = prompt();
// num = String(num);

// largest = num[0]

// for (i = 0; i < num.length; i++) {
//     if (largest < num[i]) {
//         largest = num[i]
//     }
// }

// console.log(largest);

/////////////////////////////////////////////////////////////////////////
// LESSON 3
// Practice
// 1.
// a = 20
// b = 10
// if (a > b) {
//     console.log(a)
// } else {
//     console.log(b)
// }

// 2.
// let a = 20;
// let b = 10;
// let c = -30

// let product = a * b * c;

// if (product > 0) {
//     alert("The sign is +");
// } else if (product < 0) {
//     alert("The sign is -");
// } else {
//     alert("The sign is 0");
// }

// 3.
// let a = 0;
// let b = -1;
// let c = 4;

// let result = [];

// if (a >= b && a >= c) {
//     if (b >= c) {
//         result.push(a, b, c);
//     } else {
//         result.push(a, c, b);
//     }
// } else if (b >= a && b >= c) {
//     if (a >= c) {
//         result.push(b, a, c);
//     } else {
//         result.push(b, c, a);
//     }
// } else {
//     if (a >= b) {
//         result.push(c, a, b);
//     } else {
//         result.push(c, b, a);
//     }
// }

// alert(result);

// 4.
// for(i = 0; i <= 15; i++) {
//     if(i % 2 == 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// 5. 
// for(i = 1; i <= 100; i++) {
//     if(i % 3 == 0 && i % 5 == 0) {
//         console.log(i + " - " + "Fizz Buzz");
//     } else if (i % 3 == 0) {
//         console.log(i + " - " + "Buzz");
//     } else if (i % 3 == 0) {
//         console.log(i + " - " + "Fizz");
//     }
// }

// 6.
// let num = 371;
// let originalNum = num;

// let sum = 0;

// while(num>0) {
//     let digit = num % 10;
//     digit = digit**3
//     sum += digit;
//     num = Math.floor(num / 10);
// }

// if(sum == originalNum) {
//     console.log("Armstrong");
// } 

// Lesson 5 - Function, Closures, Scopes in JavaScript
// (function () {
//     return a + b
// } ());

// console.log(sum(2, 5));

// let sum = function(a,b) {
//     return a + b;
// }

// console.log(sum(3, 4));

//  Challenge 1
// function greet(name) {
//     console.log(`Hello, ${name}`);
// }

// (function(name) {
//     console.log(`Hello, ${name}`);
// }, ("Ali"));

// let greet = function(name) {
//     console.log(`Hello, ${name}`);
// }

// const greet = (name) => {
//     console.log(`Hello, ${name}`);
// }

// let greet = new Function(
//     'name',
//     'console.log(`Hello, ${name}`);'
// )

// person1 = greet("Ali");

// Challenge 2
// function isPrime(num) {
//     if(num < 2) return false;
//     if(num == 2) return true;
//     if(num % 2 == 0) return false;
//     for(i = 2; i*i <= num; i++) {
//         if(num % i == 0) {
//             return false
//             break;
//         }
//     }

//     return true;
// }

// console.log(isPrime(1));

// Challenge 3

// function countDigits(n) {
//     if(n == 1) return 1;
//     n = Math.abs(n);
//     let count = 0;
//     while(n>0) {
//         n = Math.floor(n / 10);
//         count++;
//     }

//     return count;
// }

// console.log(countDigits(2043432));

// Challenge 4

// function isPalindrome(n) {
//     str = Math.abs(n).toString();
//     return str === str.split("").reverse().join("");
// }

// console.log(isPalindrome(2222332));

// Challenge 5
// function isArmstrong(n) {
//     let originalN = n;
//     let sum = 0;

//     while(n>0) {
//         let digit = n % 10;
//         sum += digit**3;
//         n = Math.floor(n/10);
//     }

//     return sum == originalN;
// }

// console.log(isArmstrong(153)); 

// Challenge 6
// function createCounter(start) {
//     let count = start;
//     function increment() {
//         return ++count;
//     }
//     function decrement() {
//         return --count;
//     }
//     function getCount() {
//         return count;
//     }
//     return {increment, decrement, getCount};
// }

// let counter = createCounter(15);
// console.log(counter.getCount());
// console.log(counter.decrement());
// console.log(counter.decrement());
// console.log(counter.increment());

// Challenge 7
// function orderFood(name, address, food) {
//     return `Dear ${name}, your ordered food - ${food} will be ready in 15 minuts and will be delivered to your address - ${address}`;
// }

// console.log(orderFood('Ali', 'Booton 123', 'Lavash'));


// Challenge 8
// function lazyAdder(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// const add5 = lazyAdder(5); 
// console.log(add5(10));
// console.log(add5(20));
