// a = +"200";
// console.log(typeof a);
// console.log("5" + 5); // '55'
// console.log("5" - 5); // 0
// console.log("5" * "2"); //   10
// console.log("10" / 2); // 5
// console.log(5 + true); // 6
// console.log("10" - true); // 9
// console.log("5" + true); // '5true'
// console.log(5 + null); // 5
// console.log(5 + undefined); // NaN
// console.log(+"200" + 50); // 250
// console.log(25 + " years old"); // '25 years old'
// console.log("false" == String); // false
// console.log("10" - true); // 9

// // TASK 1
// const celsius = 25;
// // const celsius = 30; Невозможно повторно объявить переменную "celsius" с областью видимости "Блок".
// const fahrenheit = (celsius * 9 / 5) + 32;
// console.log("Celsius:", celsius);
// console.log("Fahrenheit:", fahrenheit);
// const celsius2 = Number(prompt("Enter temperature in Celsius:"));
// const fahrenheit2 = (celsius2 * 9 / 5) + 32;
// console.log("Celsius:", celsius2);
// console.log("Fahrenheit:", fahrenheit2);


// // TASK 2
// let budget = String(prompt("Enter your budget:"));
// let fExpenses = Number(prompt("Enter your first expense:"));
// let sExpenses = Number(prompt("Enter your second expense:"));
// let thExpenses = Number(prompt("Enter your third expense:"));
// let isBudget = budget - (fExpenses + sExpenses + thExpenses);
// if (isBudget < 0) {
//     console.log("You have negative budget:", isBudget);
// }
// else if (isBudget > 0) {
//     console.log("Your budget:", isBudget);
// }

// console.log(!!'false' == !!'true');
// console.log(0 || 'JavaScript');
// console.log(" " && 100);
// console.log(null ?? "Fallback");
// console.log(undefined ?? "Default Value");

// let a ='42'
// let b = '3.14'
// let c ='hello'
// let d = false
// let e = null
// let sum = Number(a) + Number(b) + Number(d) + Number(e);
// console.log(sum); 
// let f = {username:'jogn'}
// let g = {username:'jogn'}
// console.log(f == g);  


// challenge 1
// let a = 5
// if (a % 2 === 0) {
//     console.log('even numbers', a/2);
//     console.log('odd numbers', a/2);
// } 
// else {
//        console.log('even numbers', (a+1)/2);
//     console.log('odd numbers', (a+1)/2);
    
// }



// challenge 2
// let number = 1234
// let reverse= 0
// while(number>0){
//     let digit = number % 10
//     number = Math.floor(number/10)
//     reverse = reverse * 10 + digit
// }
// console.log(reverse);

// for (let i = 0; i < number.toString().length; i++) {
//     console.log(i);
    
// }


// PRACTICE
// 1)
// f = 1
// s = 2
// if (f>s) {
//     console.log("f is greater than s");
// } else {
//     console.log("s is greater than f");
// }

// 2)
// let nums = [1,4,-4,2,1]
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//         alert("-");
//     }
// }

// 3)

// let numsSort = [1,4,-4,2,1]
// let a = numsSort.sort((a,b) => b-a)
// console.log(a);

// 4)
// for (let i = 0; i != 15; i++) {
//     if (i % 2 == 0) {
//         console.log('even number', i);
//     }
//     else {
//         console.log('odd number', i);
//     }
// }

// 5)
// for (let i = 1; i <=100; i++){
//       if (i %3 ==0 && i %5 ==0) {
//         console.log('FIZZBUZZ', i);
//     }
//     else if (i %3 ==0) {
//         console.log('FIZZ', i);
//     }
//     else if (i %5 ==0) {
//         console.log('BUZZ', i);
//     }
    
// }

// 6)
// let num = +prompt()
//     let hundreds = Math.floor(num / 100);
//     let tens = Math.floor((num % 100) / 10);
//     let ones = num % 10;
//     let armstrong = hundreds**3 + tens**3 + ones**3;
//     if (armstrong === num) {
//         console.log(num);
//     }


// 7)
// let students = [
//     { name: "David", marks: 80 },
//     { name: "Vinoth", marks: 77 },
//     { name: "Divya", marks: 88 },
//     { name: "Ishitha", marks: 95 },
//     { name: "Thomas", marks: 68 }
// ];
// let sum = 0;
// for (let student of students) {
//     sum += student.marks;
// }
// let average = sum / students.length;
// let grade;
// if (average < 60) {
//     grade = "F";
// } else if (average < 70) {
//     grade = "D";
// } else if (average < 80) {
//     grade = "C";
// } else if (average < 90) {
//     grade = "B";
// } else {
//     grade = "A";
// }
// console.log(`Average: ${average}`);
// console.log(`Grade: ${grade}`);