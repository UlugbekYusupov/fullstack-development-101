// var username = 'Ulugbek';
// var username = 'Otabek';
// console.log(username);

// let user = { //reference data type
//     username: 'Ulugbek',
//     age: 18,
// };

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


//Second class
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
let number = Number(prompt("Enter a number:"));
if (number < 0) {
    number = -number;
}
if (number === 0) {
    console.log("Digit count: 1");
} else {
    let count = 0;
    while (number > 0) {
        count++;
        number = Math.floor(number / 10);
    }
    console.log("Digit count:", count);
}