// 1
// console.log("5" + 5);
console.log("5" - 5);
console.log("5" * "2");
console.log("10" / 2);
console.log(5 + true);
console.log("10" - true);
console.log("5" + true);
console.log(5 + null);
console.log(5 + undefined);

// 2

// 3
const celcius = 40;
let convert = (celcius * 9/5) + 32;
console.log(convert);

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
let a = Number("42");
let b = Number("3.14");
let c = Number("hello");
let d = Number(false);
let e = Number(null);
let sum = a + b + d + e;
console.log(sum);
