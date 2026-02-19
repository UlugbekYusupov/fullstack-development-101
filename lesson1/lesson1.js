// 1
// console.log("5" + 5);
// console.log("5" - 5);
// console.log("5" * "2");
// console.log("10" / 2);
// console.log(5 + true);
// console.log("10" - true);
// console.log("5" + true);
// console.log(5 + null);
// console.log(5 + undefined);

// 2

// 3
// const celcius = 40;
// let convert = (celcius * 9/5) + 32;
// console.log(convert);

// 4
// let budget = Number(prompt("enter you budget"));
// let firstExpence = Number(prompt("enter you first expence"));
// let secondExpence = Number(prompt("enter you second expence"));
// let thirdExpence = Number(prompt("enter you third expence"));
// let subtract = budget - (firstExpence + secondExpence + thirdExpence)
// if (subtract > 0 || subtract == 0){
//   console.log("good");
// }else{
//   console.warn("overspent");
// }

// 5
// console.log(!!"false" == !!"true");
// console.log(0 || "Javascript");
// console.log(" " && 100);
// console.log(null ?? "Fallback");
// console.log(undefined ?? "Default Value");

// 6
// let a = Number("42");
// let b = Number("3.14");
// let c = Number("hello");
// let d = Number(false);
// let e = Number(null);
// let sum = a + b + d + e;
// console.log(sum);

// challenge 1
// let givenNum = 50;
// for (let i = 1; i <= givenNum; i++) {
//   // console.log(i);
//   if (i % 2 == 1 || i == 1) {
//     console.log(`${i} is odd`);
//   } else if (i % 2 == 0) {
//     console.log(`${i} is even`);
//   }
// }

// challenge 2
// let numRev = 2345;
// let digit1 = numRev % 10;
// let ex1 = (numRev - digit1) / 10;
// let digit2 = ex1 % 10;
// let ex2 = (ex1 - digit2) / 10;
// let digit3 = ex2 % 10;
// let ex3 = (ex2 - digit3) / 10;
// let result = digit1 * 1000 + digit2 * 100 + digit3 * 10 + ex3


// console.log(result);

// challenge 3

let number = "78659";
let max = 0;

for (let i = 0; i < number.length; i++) {
  if (Number(number[i]) > max) {
    max = Number(number[i]);
  }
}
console.log(max); 