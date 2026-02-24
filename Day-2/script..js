// Lesson 2

// 1th
let inputNumber = Number(prompt("Enter a number: "));
let evenNumbers = 0;
let oddNumbers = 0;

for (let i = 1 ; i <= inputNumber; i++) {
    if (i % 2 === 0) {
        evenNumbers += 1;
    } else {
        oddNumbers += 1;
    }
}
console.log(`Even numbers: ${evenNumbers}`);
console.log(`Odd numbers: ${oddNumbers}`);

// 2th
let num = Number(prompt("Enter a number to reverse: "));
let reversed = 0;

while (num > 0) {
    let digit = num % 10;
    reversed = reversed  * 10 + digit;
    num = Math.floor(num / 10);
}
console.log(`Reversed number: ${reversed}`);

// 3th
let numb = Number(prompt("Enter a number: "));
let largestDigit = 0;

while (numb > 0) {
    let digit = numb % 10;
    if (digit > largestDigit) {
        largestDigit = digit;
    }
    numb = Math.floor(numb / 10);
}
console.log(`Largest digit: ${largestDigit}`);

// 4th
let n = Number(prompt("Enter a number: "));
let sum = 0;

while (n > 0) {
    let digit = n % 10;
    sum += digit;
    n = Math.floor(n / 10);
}
console.log(`Sum of the digits: ${sum}`);

// 5th
let number = Number(prompt("Enter a number: "));
let counts = 0;

while (number > 0) {
    let digit = number % 10;
    counts ++;
    number = Math.floor(number / 10);
}
console.log(`Number of digits: ${counts}`);