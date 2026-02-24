// var username = 'Ulugbek';
// var username = 'Otabek';
// console.log(username);

// let user = { //reference data type
//     username: 'Ulugbek',
//     age: 18,
// };

//Lecture 2  /  19.02.2026
//Challenge 1
// console.log('5' + 5);
// console.log('5' - 5);
// console.log('5' * '2');
// console.log('10' / 2);
// console.log(5 + true);
// console.log('10' - true);
// console.log('5' + true);
// console.log(5 + null);
// console.log(5 + undefined);


// Challenge 2
// let num1 = Number('200');
// let result1 = num1 + 50;
// console.log(result1);

// let age = 25;
// let ageString = String(age);
// let result2 = ageString + ' years old';
// console.log(result2);

// let boolValue = Boolean('false');
// console.log(boolValue);

// let result4 = '10' - true;
// console.log(result4)



//Challenge 3: Temprature Converter
// const celsius = 25;
// const fahrenheit = (celsius * 9/5)+32;
// console.log(celsius)
// console.log(fahrenheit)

//Challenge 4: Budget Calculator
// let totalBudget = Number(prompt('Enter your total budget: '));
// let expense1 = Number(prompt('Enter expense 1:'));
// let expense2 = Number(prompt('Enter expense 2:'));
// let expense3 = Number(prompt('Enter expense 3:'));

// let totalExpenses = expense1 + expense2 + expense3;

// let remainingBudget = totalBudget - totalExpenses;

// console.log("Total Budget: $" + totalBudget.toFixed(2));
// console.log("Total Expenses: $" + totalExpenses.toFixed(2));
// console.log("Remaining Budget: $" + remainingBudget.toFixed(2));

// if (remainingBudget < 0) {
//     alert(Warning: You have overspent your budget! ${remainingBudget});
// } else {
//     alert(You are within your budget. ${reaminingBudget});
// }


//Challenge 5: Logical Coercion Trickery
// console.log(!!"false" == !!"true");
// console.log(0 || "JavaScript");
// console.log(" " && 100);
// console.log(null ?? "Fallback");
// console.log(undefined ?? "Default Value");

//Challenge 6: Convert Velues Properly
// let a = '42';
// let b = '3.14';
// let c = 'hello';
// let d = false;
// let e = null;

// // Convert all to numbers and add then together
// let sum = Number(a) + Number(b) + Number(d) + Number(e);

// console.log(sum);


//Lecture 3  /  19.02.2026
//Challenge-1
// let number = Number(prompt('Enter a number:'));
// let evenCount = 0;
// let oddCount = 0;

// for (let i = 1; i <= number; i++){
//     if (i % 2 === 0){
//         evenCount++;
//     }else{
//         oddCount++;
//     }
// }

// console.log("Total even numbers:", evenCount);
// console.log("Total odd numbers:", oddCount);


//Challenge-2
// let number = Number(prompt('Enter a number: '));
// let reversed = 0;
// let isNegative = false;

// if (number < 0) {
//     isNegative = true;
//     number = -number;
// }

// while (number > 0) {
//     let digit = number % 10;
//     reversed = reversed * 10 + digit;
//     number = Math.floor(number / 10);
// }

// if (isNegative) {
//     reversed = -reversed;
// }

// console.log('Reversed number:', reversed);


//Challenge - 3
// let number = Number(prompt('Enter a number:'));
// if (number < 0) {
//     number = -number;
// }

// let largestDigit = 0;
// while (number > 0) {
// let digit = number % 10;
// if (digit > largestDigit) {
//     largestDigit = digit;
// }
// number = Math.floor(number/10);
// }
// console.log('Largest digit:', largestDigit)

//Challenge - 4
// let number = Number(prompt("Enter a number:"));
// if (number < 0) {
//     number = -number;
// }
// let sum = 0;
// while (number > 0) {
//     let digit = number % 10;
//     sum = sum + digit;
//     number = Math.floor(number / 10);
// }
// console.log("Sum of digits:", sum);


//Challenge-5
// let number = Number(prompt("Enter a number:"));
// if (number < 0) {
//     number = -number;
// }
// if (number === 0) {
//     console.log("Digit count: 1");
// } else {
//     let count = 0;
//     while (number > 0) {
//         count++;
//         number = Math.floor(number / 10);
//     }
//     console.log("Digit count:", count);
// }


// Lecture 4  / 24.02.2026 Control Structures
//       Practice

// for(let i = 0; i<10; i++) {
//     console.log(i);
// }

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }


// const user = {
//     username: "Ulug'bek",
//     age: 18,
//     country: "Uzbekistan",
// };

// for (const key in user) {
//     const element = user[key];
//     console.log(element, value);
// }


// Practice 1
// let num1 = 10;
// let num2 = 25;

// if (num1 > num2) {
//     console.log(num1);
// } else {
//     console.log(num2)
// }

// Practice 2
// let num1 = 3;
// let num2 = 5;
// let num3 = 8;

// let product = num1 * num2 * num3;

// if (product > 0) {
//     alert("The sign is +");
// } else if(product < 0) {
//     alert("The sign is -");
// } else {
//     alert("The sign is 0");
// }

// Practice 3
// const numbers = [0, -1, 4];
// let sortedNumbers = numbers.sort();
// let reversedNumbers = sortedNumbers.reverse();
// alert(reversedNumbers);

// Challenge 4
// for (let i = 0; i<=15; i++) {

//     if (i%2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// Challenge 5
// for(let i = 1; i<100; i++) {

//     if ( i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     else if (i % 3 === 0) {
//         console.log("Fizz")
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz")
//     }
//     else {
//         console.log(i)
//     }
// }

// Practice 6
// let number = prompt("Enter a number");
// let armstrong = 0;
// const daraja = number.length;

// let  i = 0;

// while (i < number.length) {
//     let digit = Number(number[i]);
//     armstrong += digit ** daraja;
//     i++;
// }

// if (armstrong === Number(number)) {
//     console.log(`The number (${number}) is armstrong`);
// } else {
//     console.log(`The number (${number}) is not armstrong`);
// }

// Practice 7
let students = [
    { name: "David", marks: 80 },
    { name: "Vinoth", marks: 77 },
    { name: "Divya", marks: 88 },
    { name: "Ishitha", marks: 95 },
    { name: "Thomas", marks: 68 }
];

let total = 0;

for (let i = 0; i < students.length; i++) {
    total += students[i].marks;
}

let average = total / students.length;

console.log("Average Marks: " + average);

let grade;

if (average < 60) {
    grade = "F";
} 
else if (average < 70) {
    grade = "D";
} 
else if (average < 80) {
    grade = "C";
} 
else if (average < 90) {
    grade = "B";
} 
else {
    grade = "A";
}

console.log("Grade: " + grade);



