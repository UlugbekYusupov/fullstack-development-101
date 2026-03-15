// Lesson 1 data types and type conversion


// Challenge 1
// console.log("5"+5); //?
// console.log("5"-5); //?
// console.log("5"*2); //?
// console.log("10"/2); //?
// console.log(5 + true); //?
// console.log("10"-true); //?
// console.log("5"+true); //?
// console.log(5+null); //?
// console.log(5 + undefined); //?



// Challenge 2
//Task 1
// console.log("200"+50); //?
// console.log(String(25)+ "years old"); //?
//Task 2
// let a = "false";
// if (a== String) {
//   console.log("True");
// }
// else {
//   console.log("False");
// }
//Task 3
// console.log("10" - true)



// Challenge 3
// Task 1
// const TemperatureCelsius = 30;
// Task 2
// const temperatureFahrenheit = (TemperatureCelsius * 9/5) + 32;
// console.log(temperatureFahrenheit); 
// Task 3
// console.log("The temperature in Fahrenheit is: " + temperatureFahrenheit + "°F");
// Task 4
// const temperatureCelsius = 25;
// temperatureCelsius = 30; // error
// Task 5
// const celsiusStr = prompt("Enter temperature in Celsius:");
// const celsius = Number(celsiusStr);


// Challenge 4
// Task 1
// let budget;
// Task 2
// budget = Number(prompt("Enter your total budget:"));
// // Task 3
// const exp1 = Number(prompt("Enter expense 1:"));
// const exp2 = Number(prompt("Enter expense 2:"));
// const exp3 = Number(prompt("Enter expense 3:"));
// // Task 4
// const remainingBudget = budget - (exp1 + exp2 + exp3);
// // Task 5
// if (remainingBudget < 0) {
//   console.log("Warning: You have overspent!");
// }
// Task 6
// console.log(remainingBudget.toFixed(2));

// Teacher I had used toFixed(2) to round the remaining budget to 2 decimal places, And I learn it from the internet, I hope you don't mind.


// Challenge 5
//Challenge 6




//Lesson 2 operators and expressions

// Challenge 1

// Task 1
const N = Number(prompt("Enter a number:"));

let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
// Task 2
console.log(`Between 1 and ${N}:`);
console.log(`Even numbers: ${evenCount}`);
console.log(`Odd numbers: ${oddCount}`);


// Challenge 2
let n = Number(prompt("Enter an integer:"));
{
  const sign = n < 0 ? -1 : 1;
  n = Math.abs(n);

  let reversed = 0;

  while (n > 0) {
    const digit = n % 10;              // last digit
    reversed = reversed * 10 + digit;  // add digit to reversed
    n = Math.trunc(n / 10);            // remove last digit
  }

  reversed *= sign;
  console.log("Reversed:", reversed);
}
