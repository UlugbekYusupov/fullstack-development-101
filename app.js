//CHALLANGE 1
// console.log('5' + 5); // 55
// console.log('5' - 5); // 0
// console.log('5' * '2'); //10
// console.log('10' / 2); // 5
// console.log(5 + true); // 6
// console.log('10' - true); // 9
// console.log('5' + true); // 5true
// console.log(5 + null); // 5
// console.log(5 + undefined); //NaN

// console.log(Number("200") + 50);
// console.log(String(25) + " years old")

//CHALLANGE 2
// a = 'false'

// if (a){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// console.log('10' - true)
// // JavaScript converts '10' automaticly because of the minus sign.

//CHALLANGE 3
// const temperature = prompt('Enter todays temperature: ');
// const F = (temperature*9/5) + 32;
// console.log(`In Fahrenheit it is ${F} farenheit`);


//CHALLANGE 4
// let firstBudget = Number(prompt('Enter your total budget: '));

// let firstExpense = String(prompt('Enter your first expense: '));
// let secondExpense = String(prompt('Enter your second expense: '));
// let thirdExpense = String(prompt('Enter your third expense: '));

// let newBudget = firstBudget - (Number(firstExpense) + Number(secondExpense) + Number(thirdExpense));
// if (newBudget < 0){
//     alert('You overspent your mnoey!')
// }
// else{
//     alert('your new budget' + ' ' +  newBudget + '$')
//}


//CHALLANGE 5
// console.log(!!'false' == !!"true"); // true
// console.log(0 || "JavaScript"); // JavaScript
// console.log(" " && 100); // 100
// console.log(null ?? "Fallback") // Fallback;
// console.log(undefined ?? "Default Value"); // Default Value


//CHALLANGE 6
// let a = '42';
// let b = '3.14';
// let c = 'hello';
// let d = false;
// let e = null;

// let sum = Number(a) + Number(b) + d + e;
// console.log(sum) // 45.14


//CHALLANGE 1 LESSON 2
// const n = Number(prompt("Enter a number:"));
// let evenCount = 0;
// let oddCount = 0;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     evenCount++;
//   } else {
//     oddCount++;
//   }
// }
// console.log("Even numbers:", evenCount);
// console.log("Odd numbers:", oddCount);

//CHALLANGE 2 LESSON 2
// let m = Number(prompt("Enter a number:"));
// let reversed = 0;

// while (m > 0) {
//   let lastDigit = m % 10;                  
//   reversed = reversed * 10 + lastDigit;    
//   m = (m - lastDigit) / 10;                
// }
// console.log("Reversed number:", reversed);


//CHALLANGE 3 LESSON 2
// let a = Number(prompt("Enter a number:"));
// let largest = 0;

// if (a === 0) {
//   largest = 0;
// } else {
//   while (a > 0) {
//     let digit = a % 10;          

//     if (digit > largest) {
//       largest = digit;          
//     }

//     a= (a - digit) / 10;        
//   }
// }

// console.log("Largest digit:", largest);


//CHALLANGE 4 LESSON 2
// let b = Number(prompt("Enter a number:"));

// let sum = 0;
// if (b === 0) {
//   sum = 0;
// } else {
//   while (b > 0) {
//     let digit = n % 10;        
//     sum = sum + digit;         
//     b = (b - digit) / 10;      
//   }
// }
// console.log("Sum of digits:", sum);


//CHALLANGE 5 LESSON 2
// let c = Number(prompt("Enter a number:"));
// let count = 0;

// if (c === 0) {
//   count = 1;
// } else {
//   while (c > 0) {
//     c = Math.floor(c / 10);
//     count++;
//   }
// }
// console.log("Number of digits:", count);




