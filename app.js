// 1
console.log("5" + 5);
console.log("5" - 5);
console.log("5" * "2");
console.log("10" / 2);
console.log(5 + true);
console.log("10" - true);
console.log("5" + true);
console.log(5 + undefined);

// 2
Number("200") + 50;
String(25) + " years old";
Boolean("false");  // true
console.log("10" - true); // 9 cause true is converted to 1 but if it was "+" that would be "10true"

// 3

const celsius = Number(prompt("Enter temperature in Celsius: "));
// const celsius = 25;

const fahrenheit = (celsius * 9 / 5) + 32;

console.log(`Celsius: ${celsius}°C`);
console.log(`Fahrenheit: ${fahrenheit}°F`);

// 4
let budget = Number(prompt("Enter your total budget:"));

if (Number.isNaN(budget)) {
  console.log("Budget must be a valid number.");
} else {
  const expense1 = Number(prompt("Enter expense 1:"));
  const expense2 = Number(prompt("Enter expense 2:"));
  const expense3 = Number(prompt("Enter expense 3:"));

  if (Number.isNaN(expense1) || Number.isNaN(expense2) || Number.isNaN(expense3)) {
    console.log("All expenses must be valid numbers.");
  } else {
    const totalExpenses = expense1 + expense2 + expense3;
    const remaining = budget - totalExpenses;

    console.log(`Budget: $${budget.toFixed(2)}`);
    console.log(
      `Expenses: $${expense1.toFixed(2)}, $${expense2.toFixed(2)}, $${expense3.toFixed(2)}`
    );
    console.log(`Total expenses: $${totalExpenses.toFixed(2)}`);
    console.log(`Remaining: $${remaining.toFixed(2)}`);

    if (remaining < 0) {
      console.log(`Overspent! You are over budget by $${Math.abs(remaining).toFixed(2)}.`);
    } else {
      console.log("You are within your budget.");
    }
  }
}

// 5
console.log(!!"false" == !!"true"); 
console.log(0 || "JavaScript"); 
console.log("" + 100); 
console.log(null ?? "Fallback"); 
console.log(undefined ?? "Default Value"); 

// 6
let a = 42;
let b = "3.14";
let c = "hello";
let d = false;
let e = null;

let sum = a + Number(b) + Number(d) + Number(e);

console.log(sum);

/////////////////////////////////////////////////////////////////

// Operators in JS

// 1
let n = prompt("Enter a number:");

let odd = 0;
let even = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        even += i;
    } else {
        odd += i;   
    }
}

console.log(`Sum of odd numbers from 1 to ${n}: ${odd}`);
console.log(`Sum of even numbers from 1 to ${n}: ${even}`);

// 2

let numm = Number(prompt("Enter a number:"));
let rev = 0;

while (numm > 0) {
  rev = rev * 10 + (numm % 10);
  numm = Math.floor(numm / 10);
}

console.log(`Reversed number: ${rev}`);

// 3
let num2 = Number(prompt("Enter a number:"));
let largest = 0;

while  (num2 > 0) {
    let digit =num2 % 10;

    if(digit > largest){
        largest = digit;
    }
    num2 = Math.floor(num2 / 10);
}

// 4
let num = Number(prompt("Enter a number:"));
let sum1 = 0;

if (num < 0) {
  num = -num;
}

while (num > 0) {
  let digit = num % 10;
  sum1 = sum1 + digit;         
  num = Math.floor(num / 10); 
}

console.log(`Sum of digits: ${sum1}`);

let num3 = Number(prompt("Enter a number:"));
let count = 0;

// 5

if (num3 === 0) {
  count = 1;
} else {
  while (num3 > 0) {
    num3 = Math.floor(num3 / 10); 
    count++;                      
    }
}

console.log("Digits count:", count);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 24.02.2026

// 1
function largest(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "They are equal";
  }
}

console.log(largest(10, 7));
console.log(largest(5, 12));  
console.log(largest(9, 9));  

// 2
function productSign(a, b, c) {
  const product = a * b * c;

  if (product > 0) {
    alert("The sign is +");
  } else if (product < 0) {
    alert("The sign is -");
  } else {
    alert("The sign is 0");
  }
}
productSign(3, -7, 2);

// 3
function sortThreeNumbers(a, b, c) {
  let first, second, third;

  if (a >= b && a >= c) {
    first = a;
    if (b >= c) { second = b; third = c; }
    else { second = c; third = b; }
  } else if (b >= a && b >= c) {
    first = b;
    if (a >= c) { second = a; third = c; }
    else { second = c; third = a; }
  } else {
    first = c;
    if (a >= b) { second = a; third = b; }
    else { second = b; third = a; }
  }

  alert(`${first}, ${second}, ${third}`);
}

sortThreeNumbers(0, -1, 4);

// 4

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }

// 5

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 6
  
for (let num = 100; num <= 999; num++) {
  const a = Math.floor(num / 100);
  const b = Math.floor((num % 100) / 10);
  const c = num % 10;                    

  const sum = a ** 3 + b ** 3 + c ** 3;

  if (sum === num) {
    console.log(num);
  }
}
  
// 7

const student =[
    { "name":"David","marks" :80 },
    { "name":"Vinoth","marks" :77 },
    { "name":"Divya 88","marks" :80 },
    { "name":"Ishitha","marks" :95 },
    { "name":"Thomas","marks" :68 }
]
  
for (let i = 0; i < student.length; i++) {
    if(student[i].marks < 60){
        console.log(`${student[i].name} has failed`)
    }
    else if(student[i].marks < 70){
        console.log(`${student[i].name} has passed with a D grade`)
    }
    else if(student[i].marks < 80){
        console.log(`${student[i].name} has passed with a C grade`)
    }
    else if(student[i].marks < 90){
        console.log(`${student[i].name} has passed with an B grade`)
    }
    else{
        console.log(`${student[i].name} has passed with an A grade`)
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 26.03.2026

// Task 1
name = prompt('Enter a name: ')

function greet1(name){
    return "Hello " + name
}
console.log(greet1(name))

let greet2 = function(name){
    return "Hello " + name
}
console.log(greet2(name))

let greet3 = (name) =>{
    return "Hello " + name
}
console.log(greet3(name))

let greet4 = new Function(
    'name',
    'return "Hello " + name'
)
console.log(greet4(name))

// Task 2
let num = prompt("Enter a number")

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(num));

// Task 3
let num = prompt("Enter a number")

const countDigits=(num)=>{
    console.log(num.length)
}
countDigits(num)

// Task 4
let num = prompt("Enter a number")
const isPalindrome=(num) => {
    return num === num.split("").reverse().join("")
}
console.log(isPalindrome(num))

// Task 5
const num = prompt("Enter a number")
const isArmstrong =(num)=>{
    const leng = num.length
    let res = 0
    for (const numElement of num) {
        res += (numElement ** leng)
    }
    console.log(num == res ? "Armstrong" : "not Armstrong")
}
isArmstrong(num)

// Task 6

function createCounter(start) {
    let count = start;

    return {
        increment() { count++; },
        decrement() { count--; },
        getCount() { return count; }
    };
}

let counter  = createCounter(12);
counter.increment();
console.log(counter.getCount());

// Task 7
const orderFood=()=>{
    const name = prompt("Enter your name");
    const address = prompt("Enter your address");
    const food = prompt("What do you want?");

    return `Dear ${name}, your ordered food ${food} will be ready in 15 minuts and will be delivered to your address ${address}`
}
console.log(orderFood())

// Task 8
const lazyAdder=(n)=>{
    return (function (num){
        return num+n;
    })
}

const add5 = lazyAdder(5);
console.log(add5(10));
console.log(add5(20));

////////////////////////////////////////////////////////////

// Challenge 1
const original = [1, 2, 3];
const copy = [...original];
console.log(copy);

// Challenge 2
function getFirstEl(array) {
    return array?.[0];
}
console.log(getFirstEl([4, 5, 6, 1]));

// Challenge 3
function last(arr) {
    return arr?.[arr.length - 1];
}
console.log(last([4, 5, 6, 1]));

// Challenge 4
function add(colors) {
    return colors.join(", ");
}
const myColors = ["red", "green", "blue"];
console.log(add(myColors));

// Challenge 5
function dashBetween(num) {
    return String(num).split("").join("-");
}
const numberInput = window.prompt("Enter any number:");
console.log(dashBetween(numberInput));

// Challenge 6
function findMode(arr) {
    const count = {};
    let maxItem = arr[0];
    let maxCount = 0;

    for (const item of arr) {
        count[item] = (count[item] || 0) + 1;

        if (count[item] > maxCount) {
            maxCount = count[item];
            maxItem = item;
        }
    }

    return `${maxItem} (${maxCount} times)`;
}

const arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
console.log(findMode(arr));

// Challenge 7
function swapCase(text) {
    return text
        .split("")
        .map(char =>
            char === char.toUpperCase()
                ? char.toLowerCase()
                : char.toUpperCase()
        )
        .join("");
}

console.log(swapCase(window.prompt("Enter any text:")));

// Challenge 8
function displayOrder(colors) {
    const suffix = ["th", "st", "nd", "rd"];

    colors.forEach((color, i) => {
        const index = i + 1;
        const ord =
            index % 100 >= 11 && index % 100 <= 13
                ? "th"
                : suffix[index % 10] || "th";

        console.log(`${index}${ord} choice is ${color}`);
    });
}

const colors = ["red", "green", "blue", "yellow", "orange"];
displayOrder(colors);

// Challenge 9
function sum(arr1, arr2) {
    const maxLength = Math.max(arr1.length, arr2.length);
    const result = [];

    for (let i = 0; i < maxLength; i++) {
        const a = arr1[i] ?? 0;
        const b = arr2[i] ?? 0;
        result.push(a + b);
    }

    return result;
}

const arr1 = [1, 0, 2, 3, 4];
const arr2 = [3, 5, 6, 7, 8, 13];

console.log(sum(arr1, arr2));
