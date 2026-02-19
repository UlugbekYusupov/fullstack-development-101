// //challenge 1
// console.log("5" + 5); // 7
// console.log("5" - 5); // ?
// console.log("5" * "2"); // ?
// console.log("10" / 2); // 7
// console.log(5 + true); // ?
// console.log("10" - true); // ?
// console.log("5" + true); // ?
// console.log(5 + null); // ?
// console.log(5 + undefined); // 7
// //challenge 2
//
// console.log("200"-0+50);
// console.log(25 +" years old");
// if("false"){
//     console.log(false);
// }else console.log(true);
// console.log("10" - false)
// //challenge 3
// let temperature = Number(prompt(" Enter temp"));
// let f_temp = (temperature*9/5)+32;
// console.log("Temp "+temperature);
// console.log("F temp "+f_temp);
//
// //challenge 4
// let totalBudget;
// totalBudget = prompt("Enter your total budget:");
// totalBudget = Number(totalBudget);
// let a = Number(prompt("Expence A:"));
// let b = Number(prompt("Expence B:"));
// let c = Number(prompt("Expence C:"));
//
// totalBudget = totalBudget - (a + b + c);
//
// if (totalBudget < 0) {
//     console.log("You have exceeded your budget.");
// } else {
//     console.log(`You have ${totalBudget} left in your budget.`);
// }
//
// //chanllenge 5
// console.log(!!"false" == !!"true");
// console.log(0 || "JavaScript");
// console.log(" " && 100);
// console.log(null ?? "Fallback");
// console.log(undefined ?? "Default Value");
//
// //challenge 6
// let A = "42";
// let B = "3.14";
// let C = "hello";
// let D = false;
// let E = null;
//
// let sum = A + B + D + E;
// console.log(sum);
//another lesson
//challenge 1
// let oddCount =0;
// let evenCount =0;
// for(let i =1; i<=85 ; i++ ){
//     (i&1==1)?oddCount++: evenCount++;
// }
// console.log(oddCount);
// console.log(evenCount);

//challenge 2

let n2 = 1234;
let reversed = 0;

while (n2 > 0) {
    let lastDigit = n2 % 10;
    reversed = reversed * 10 + lastDigit;
    n2 = Math.floor(n2 / 10);
}

console.log(reversed);

//challenge 3

let n3 = 12943;
let largestDigit = 0;

while (n3 > 0) {
    let currentDigit = n3 % 10;
    if (currentDigit > largestDigit) {
        largestDigit = currentDigit;
    }
    n3 = Math.floor(n3 / 10);
}

console.log(largestDigit);

//challenge 4

let n4 = 1234;
let sum = 0;

while (n4 > 0) {
    sum += n4 % 10;
    n4 = Math.floor(n4 / 10);
}

console.log(sum);

//challenge 5

let n5 = 12345;
let count = 0;

if (n5 === 0) {
    count = 1;
} else {
    while (n5 > 0) {
        n5 = Math.floor(n5 / 10);
        count++;
    }
}

console.log(count);