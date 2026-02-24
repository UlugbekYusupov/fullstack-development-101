console.log("5"+5)
console.log("5"-5)
console.log("5"*"2")
console.log("10"/2)
console.log("5"+true)
console.log("10"-true)
console.log("5"+null)
console.log("5"+undefined)

var num = "200"
console.log(num-(-50))

let age = 25
console.log(25+' years old')





// Task 3
const temp = 36.7
var faranheit = (temp*9/5)+32
console.log(temp)
console.log(faranheit)

let cel = prompt("Enter temp: ")
var faranheit = (cel*9/5)+32
console.log(faranheit)


// Task 4
let total = Number(prompt("Enter total budget!"))
let expens1 = Number(prompt("Enter expense 1: "))
let expens2 = Number(prompt("Enter expense 2: "))
let expens3 = Number(prompt("Enter expense 3: "))
let expenses = total-(expens1+expens2+expens3)
console.log(total)
console.log(expenses)


console.log()
// Task 5
console.log(!!"false"==!!"true");
console.log(0 || "Javascript");
console.log(" " && 100);
console.log(null ?? "Fallback");
console.log(undefined ?? "Default");

// Task 6

let a = Number("45");
let b = Number("3.14");
let c = "hello";
let d = Number(false);
let e = Number(null);

// let sum = a+b+d+e;
// console.log(sum)



// Challenge 1

let num1  = prompt("Enter num: ")

let even = 0
let odd = 0
for (let i = 1; i <= num1; i++) {
  const element = i 

  if (element % 2 == 0) {
    even+=1
  }else{
    odd+=1
  }
  
}

console.log("Odd numbers count: ",odd)
console.log("Even numbers count: ",even)


// Challenge 2
let num2 = prompt("Enter number: ")
let num_reverse = ""
for (let i = num2.length - 1; i >= 0; i--) {
  num_reverse += num2[i]
}

console.log(num_reverse)



// Challenge 3
let num3 = prompt("Enter number: ")
let max = 0;

for (let i = 0; i < num3.length; i++) {
  let digit = Number(num3[i]);
  if (digit > max) {
    max = digit;
  }
}

console.log(max);


// Challenge 4
let num4 = prompt("Enter num: ")
let sum = 0
for (let i = 0; i < num4.length; i++) {
  sum += Number(num4[i]);
  
}

console.log("Sum of numbers: ",sum);

// Challenge 5