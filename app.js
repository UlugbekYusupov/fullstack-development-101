// -----------------------------------Variables and Data types-----------------------------
//
// CHALLENGE 1
console.log("5" + 5); // 55 string
console.log("5" - 5); // 0 number
console.log("5" * "2"); // 10 number
console.log("10" / 2); // 5 number
console.log(5 + true); // 6 number
console.log("10" - true); // 9 number
console.log("5" + true); // 5true string
console.log(5 + null); // 5 number
console.log(5 + undefined); // NaN number

// CHALLENGE 2
console.log("200"*1 + 50);
console.log(25 + "" + " years old");
console.log("false" == false); // 1 == 0 -> false
console.log("10" - true) // there is no way to remove sth from a string using '-', so the most logical way to do is to caculate
// 10 - 1 = 9

// CHALLENGE 3
const temperature = 48
const tempInFahrenheit = (temperature * 9/5) + 32
console.log(`In Celsius: ${temperature} | In Fahrenheit: ${tempInFahrenheit}`)

// CHALLENGE 4
let total_budget = 0;
let takenVariable0 = Number(prompt("enter budget", 0));
let takenVariable1 = Number(prompt("enter budget", 0));
let takenVariable2 = Number(prompt("enter budget", 0));


total_budget = total_budget - takenVariable0 - takenVariable1 - takenVariable2;

console.log(total_budget > 0);

// CHALLENGE 5
console.log(!!'false' == !!"true"); // true -> non-empty string == non-empty string
console.log(0 || "JavaScript"); // JavaScript -> 0 + 1(JS) -> JS
console.log(" " && 100); // 100
console.log(null ?? "Fallback") // Fallback;
console.log(undefined ?? "Default Value"); // Default Value

// CHALLENGE 6
let a = '42';
let b = '3.14';
let c = 'hello';
let d = false;
let e = null;
let sum = Number(a) + Number(b) + d + e;
console.log(sum) // 45.14

// --------------------------JS Operators------------------
//
// // CHALLENGE 1
userNumber = Number(prompt("Enter your number"), 0);
evenCount = 0
oddCount = 0
for (let i = 1; i <= userNumber; i++) {
    if (i % 2 === 0) {++evenCount}
    else {
        ++oddCount
    }
}
console.log(`Odds ${oddCount}`)
console.log(`Evens ${evenCount}`)

// CHALLENGE 2
let userNum = Number(prompt("Enter your number"));
let reversedNum = 0;

while (userNum > 0) {
    let lastDigit = userNum % 10;           // 1. Get the last digit
    reversedNum = (reversedNum * 10) + lastDigit; // 2. Build the new number
    userNum = Math.floor(userNum / 10);     // 3. Remove the last digit
}

console.log("Reversed Number:", reversedNum);

// CHALLENGE 3
let userNum = Number(prompt("Enter your number"));
let maxDigit = 0; // Renamed for clarity

while (userNum > 0) {
    let lastDigit = userNum % 10;

    // Check if this specific digit is the biggest so far
    if (lastDigit > maxDigit) {
        maxDigit = lastDigit;
    }
    userNum = Math.floor(userNum / 10);
}
console.log("Largest Digit:", maxDigit);

// CHALLENGE 4
let userNum = Number(prompt("Enter your number"));
let total = 0; // Renamed for clarity

while (userNum > 0) {
    let lastDigit = userNum % 10;

    total += lastDigit
    userNum = Math.floor(userNum / 10);
}
console.log("Total Digit:", total);

// CHALLENGE 5
let userNum = Number(prompt("Enter your number"));
let digitNum = 0; // Renamed for clarity

while (userNum > 0) {
    digitNum += 1
    userNum = Math.floor(userNum / 10);
}
console.log("Digit Num:", digitNum);
