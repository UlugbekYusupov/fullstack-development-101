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