// 1th
console.log("5" + 5);
console.log("5" - 5);
console.log("5" * "2");
console.log("10" / 2);
console.log(5 + true);
console.log("10" - true);
console.log("5" + true);
console.log(5 + null);
console.log(5 + undefined);

// 2th
let x = "200";
x = Number(x);
console.log(x + 50);

let y = 25;
y = String(y);
console.log(y + " years old.");

let z = "false";
z = Boolean(z);
console.log(z);

console.log("10" - true);

// 3th
const temperatureCelsius = prompt("Enter temperature in Celsius:");
//const temperatureCelsius = 25;
const temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;
console.log(`Temperature in Fahrenheit: ${temperatureFahrenheit}`);
console.log(`Temperature in Celsius: ${temperatureCelsius}`);

// 4th
let totalBudget;
totalBudget = prompt("Enter your total budget:");
totalBudget = Number(totalBudget);
let a = Number(prompt("Expence A:"));
let b = Number(prompt("Expence B:"));
let c = Number(prompt("Expence C:"));

totalBudget = totalBudget - (a + b + c);

if (totalBudget < 0) {
  console.log("You have exceeded your budget.");
} else {
  console.log(`You have ${totalBudget} left in your budget.`);
}

// 5th
console.log(!!"false" == !!"true");
console.log(0 || "JavaScript");
console.log(" " && 100);
console.log(null ?? "Fallback");
console.log(undefined ?? "Default Value");

// 6th
let A = "42";
let B = "3.14";
let C = "hello";
let D = false;
let E = null;

let sum = A + B + D + E;
console.log(sum);
