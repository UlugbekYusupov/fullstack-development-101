
// ////////////////////////////////////////////////
//!                Lesson #1
// ////////////////////////////////////////////////


// console.log("I'm HTML engineer");

// console.log("5" + 5); // 7
// console.log("5" - 5); // ?
// console.log("5" * "2"); // ?
// console.log("10" / 2); // 7
// console.log(5 + true); // ?
// console.log("10" - true); // ?
// console.log("5" + true); // ?
// console.log(5 + null); // ?
// console.log(5 + undefined); // 7

// // Other tasks

// console.log("200" * 1 + 50);
// console.log(25 + " year old");
// console.log("false" == true);
// console.log("10" - false);

// // Yet another group of tasks

// // const temp = prompt("Enter ℃ value: ");
// // var converted = (temp * 9) / 5 + 32;
// // alert(temp + "℃ to ℉ is: " + converted);


// var budget = 0

// var budget = prompt("Enter your budget: ")


// ////////////////////////////////////////////////
//!                Lesson #2
// ////////////////////////////////////////////////

// Challenge #1
// let num = parseInt(prompt("Enter a number:"));

// let evenCount = 0;
// let oddCount = 0;

// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0) {
//     evenCount++;
//   } else {
//     oddCount++;
//   }
// }

// console.log("Even numbers:", evenCount);
// console.log("Odd numbers:", oddCount);



// Challenge #2
// let num = 1234;
// let reverse = 0;
// while (num > 0) {
//   let lastDigit = num % 10;
//   reverse = reverse * 10 + lastDigit;
//   num = Math.floor(num / 10);
// }
// console.log(reverse);


// Challenge #3
let num = 58329;
let largest = 0;
while (num > 0) {
  let digit = num % 10;
  if (digit > largest) {
    largest = digit;
  }
  num = Math.floor(num / 10);
}
console.log("Largest digit:", largest);