// // LECTURE 2

// // var a = undefined;
// // console.log(a);
// // var a=40;

// // let user = {
// //     username: "Ulugbek",
// //     age : 30,
// // }

// // PRACTICE 
// // challange 1
// console.log("5" + 5);
// console.log("5"-5);
// console.log("5"*"2");
// console.log("10"/2);
// console.log(5 + true);
// console.log("10"-true);
// console.log(5 + null);
// console.log(5 + undefined);

// // challange 2

// let result1 = Number("200") + 50; 
// console.log(result1);
// let result2 = String(25) + " years old";
// console.log(result2)
// let result3 = Boolean("false");
// console.log(result3); 
// console.log(10 - true);

// // challange 3
// const celsius = 25; 
// const fahrenheit = (celsius * 9 / 5) + 32;
// console.log("Celsius:", celsius);
// console.log("Fahrenheit:", fahrenheit);

// //challange 4
// // let budget = Number(prompt("Enter your total budget:"));
// // let rent = Number(prompt("Enter rent expense:"));
// // let food = Number(prompt("Enter food expense:"));
// // let transport = Number(prompt("Enter transport expense:"));
// // let totalExpenses = rent + food + transport;
// // let remainingBudget = budget - totalExpenses;

// // console.log("Remaining Budget:", remainingBudget);

// // if (remainingBudget < 0) {
// //     console.log("Warning: You spent too much!");
// // } else {
// //     console.log(`You are within budget. Your balance is ${remainingBudget.toFixed(2)}`);
// // }

// // challange 5
// console.log(!!"false" == !!"true");
// console.log(0 || "JavaScript");
// console.log("" && 100);
// console.log(null ?? "Fallback");
// console.log(undefined ?? "Default Value");


// // challange 6
// let a = "42";
// let b = "3.14";
// let c = "hello"; 
// let d = false;
// let e = null;

// let sum = Number(a) + Number(b) + Number(d) + Number(e);

// console.log(sum); 

// LECTURE 3
// console.log(10%3)

// let age = 20;
// let status = age >= 18 ? "Adult" : "Minor"; 
// console.log(status);

// PRACTICE
// challange 1

// let limit = Number(prompt("Enter a number to count up to:"));

// let evenCount = 0;
// let oddCount = 0;

// for (let i = 1; i <= limit; i++) {
//     if (i % 2 === 0) {
//         evenCount++; 
//     } else {
//         oddCount++; 
//     }
// }

// console.log(`Between 1 and ${limit}:`);
// console.log("Even numbers found:", evenCount);
// console.log("Odd numbers found:", oddCount);

// challange 2
// let num = Number(prompt("Enter a number to reverse:"));
// let reversed = 0;

// while (num > 0) {
//     let lastDigit = num % 10;        
//     reversed = (reversed * 10) + lastDigit; 
//     num = Math.floor(num / 10);     
// }

// console.log("Reversed Number:", reversed);

// challange 3

// let inputNum = Number(prompt("Enter a number to find its largest digit:"));
// let largest = 0;

// while (inputNum > 0) {
//     let digit = inputNum % 10; 
    
//     if (digit > largest) {     
//         largest = digit;       
//     }
    
//     inputNum = Math.floor(inputNum / 10); 
// }
// console.log("The largest digit is:", largest);

// challenge 4

// let num4 = Number(prompt("Enter a number to sum its digits:"));
// let digitSum = 0;

// while (num4 > 0) {
//     digitSum += num4 % 10; // Extract and add in one step
//     num4 = Math.floor(num4 / 10); 
// }
// console.log("Total sum of digits:", digitSum);

// challenge 5

// let num5 = Number(prompt("Enter a number to check if it's Prime:"));
// let isPrime = num5 > 1; 

// for (let i = 2; i <= Math.sqrt(num5); i++) {
//     if (num5 % i === 0) {
//         isPrime = false;
//         break; 
//     }
// }

// console.log(isPrime ? `${num5} is a Prime number` : `${num5} is NOT a Prime number`);





// LECTURE 4

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 10);

// const user = {
//     username: "Ulugbek",
//     age: 30,
//     country: "UZbekistan",
// };

// const keys = Object.keys(user);
// const values = Object.values(user);

// for (const key in user) {
//     const element = user [key];
//     console.log(element);
// }

// for (const element of keys) {
//   console.log(element);
// }


// HW practice
// 1
// let n1 = 10, n2 = 20;
// console.log(n1 > n2 ? n1 : n2);

// 2
// let x = 3, y = -7, z = 2;
// let prod = x*y*z;
// if (prod > 0) alert("The sign is +"); else if (prod < 0) alert("The sign is -");

// 3
// let a=0, b=-1, c=4;
// if (c > a && c > b) {
//     if (a > b) alert(`${c}, ${a}, ${b}`);
//     else alert(`${c}, ${b}, ${a}`);
// }

// 4
// for (let i = 0; i <= 15; i++) {
//     console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd`);
// }

// 5
// for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) console.log("FizzBuzz");
//     else if (i % 3 === 0) console.log("Fizz");
//     else if (i % 5 === 0) console.log("Buzz");
//     else console.log(i);
// }

// 6
// for (let i = 100; i <= 999; i++) {
//     let s = 0, t = i;
//     while (t > 0) { s += (t % 10) ** 3; t = Math.floor(t / 10); }
//     if (s === i) console.log(i + " is Armstrong");
// }

// 7
const students = [
    { name: "David", marks: 80 },
    { name: "Vinoth", marks: 77 },
    { name: "Divya", marks: 88 },
    { name: "Ishitha", marks: 95 },
    { name: "Thomas", marks: 68 }
];

let totalMarks = 0;

for (let i = 0; i < students.length; i++) {
    totalMarks += students[i].marks;
}

const average = totalMarks / students.length;
console.log("Average Grade: " + average);

if (average < 60) {
    console.log("Grade: F");
} else if (average < 70) {
    console.log("Grade: D");
} else if (average < 80) {
    console.log("Grade: C");
} else if (average < 90) {
    console.log("Grade: B");
} else if (average < 100) {
    console.log("Grade: A");
}



