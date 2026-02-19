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

// when i change the celsius value to 26, the output will be:

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
console.log(!!"false" == !!"true"); // true
// both are non-empty strings → both become true

console.log(0 || "JavaScript"); // "JavaScript"
// 0 is falsey → returns the next value

console.log("" + 100); // "100"
// + with a string makes a string

console.log(null ?? "Fallback"); // "Fallback"
// null uses the fallback

console.log(undefined ?? "Default Value"); // "Default Value"
// undefined uses the fallback

// 6
let a = 42;
let b = "3.14";
let c = "hello";
let d = false;
let e = null;

// convert to numbers and add
let sum = a + Number(b) + Number(d) + Number(e);

console.log(sum);

// I didin't include c because it's not a number and would result in NaN, which would make the whole sum NaN.

