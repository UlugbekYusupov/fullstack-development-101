// CHALLENGE 1

// 1
function greet(name) {
  return "Hello, " + name + "!";}
// 2
let greet2 = function(name) {
  return "Hello, " + name + "!";};
// 3
let greet3 = (name) => {
  return "Hello, " + name + "!"; };
// 4
let greet4 = (name) => "Hello, " + name + "!";
// 5
function greet5(name) {
  let message = "Hello, " + name + "!";
  return message; }

// CHALLENGE 2

function isPrime(n) {
  if (n < 2) {
    return false; }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;  } }

  return true; }


// CHALLENGE 3

function countDigits(n) {
  let num = Math.abs(n); 
  let count = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;  }

  return count; }

// CHALLENGE 4

function isPalindrome(n) {
  let original = n;
  let reversed = 0;

  while (n > 0) {
    let digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10); }

  return original === reversed; }

// CHALLENGE 5

function isArmstrong(n) {
  let num = n;
  let digits = 0;

  let temp = n;
  while (temp > 0) {
    temp = Math.floor(temp / 10);
    digits++; }

  let sum = 0;
  temp = n;

  while (temp > 0) {
    let digit = temp % 10;

    let power = 1;
    for (let i = 0; i < digits; i++) {
      power = power * digit; }

    sum += power;
    temp = Math.floor(temp / 10); }

  return sum === num; }

// CHHALLENGE 6

function createCounter(start) {
  let count = start;

  return {
    increment: function() {
      count = count + 1;  },

    decrement: function() {
      count = count - 1;   },

    getCount: function() {
      return count;  }  }; }

// CHALLENGE 7

function orderFood(name, address, food) {
  return "Dear " + name + 
         ", your ordered food " + food + 
         " will be ready in 15 minutes and will be delivered to your address " + address; }

// CHALLENGE 8

function lazyAdder(a) {
  return function(b) {
    return a + b; }; }


    // HOMEWORK

// Task 1
// const number1 = 5;
// const number2 = 7;
// let largest;
// if (number1 > number2) {
//     largest = number1;
//     console.log("The largest is " + largest)
// } else if (number2 > number1) {
//     largest = number2
//     console.log("The largest is " + largest)
// } else {
//     console.log("They are equal")
// }

// Task 2
// const numbers = [3,4,5, -6]
// for (const number of numbers) {
//     if (number < 0) {
//         console.log(number)
//     }
// }

// Task 3
// const numbers = [0,-1,4];
// let smallest = 0;
// for (const number of numbers) {
//     if (number < smallest) {
//         smallest = number;
//     }
// }
// console.log(smallest)



// Task 4
// let odds;
// let evens;
// for (let i = 0; i <= 15; ++i) {
//     if (i%2==0) {
//         console.log(i + " is even")
//     }
//     else {
//         console.log(i + " is odd")
//     }
// }

// Task 5
// for (let i = 1; i <= 100; ++i) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 ==0) {
//         console.log("Fizz")
//     } else if (i % 5 == 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }



// task 6
// for (let i = 100; i <= 999; ++i) {
//     let firstDigit = Math.floor( i /100);
//     let secondDigit = Math.floor(( i /10)%10);
//     let lastDigit = i % 10;
//     if (Math.pow(firstDigit, 3) + Math.pow(secondDigit, 3) + Math.pow(lastDigit, 3) == i) {
//         console.log(i)
//     }
// }


// Task 7
// const mark = parseFloat(prompt('Enter the score: '))
// if (mark < 60) {
//     console.log("The grade is F")
// } else if (mark < 70) {
//     console.log("The grade is D")
// } else if (mark < 80) {
//     console.log("The grade is C")
// } else if (mark<90) {
//     console.log("The grade is B")
// } else {
//     console.log("The grade is A")
// }
