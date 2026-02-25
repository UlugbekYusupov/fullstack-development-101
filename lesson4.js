//EXERCISE 1
// let userInput = prompt("Enter the number: ")
// let userInput2 = prompt("Enter the number: ")

// if (userInput > userInput2){
//     console.log(`${userInput} is larger than ${userInput2}`);
// }else{
//     console.log(`${userInput2} is larger than ${userInput}`)
// }

// EXERCISE 2
// Sample numbers
// let a = Number(prompt("Enter a number: "));
// let b = Number(prompt("Enter a second number: "));
// let c = Number(prompt("Enter a third number: "));

// // Check sign
// if (a * b * c > 0) {
//     alert("The sign is +");
// } else {
//     alert("The sign is -");
// }

//EXERCISE 3
// const numbers = [1,4,-1,-5,10]
// alert(`Actual numbers${numbers}`)

// numbers.sort(function(a, b) {
//   return a - b
// });

// alert(`Sorted numbers ${numbers.join(", ")}`);


//EXERCISE 4
// for (let i = 0; i <= 15; i++ ){
//     if (i %2 == 0){
//         console.log(`${i} is even`)
//     }else{
//         console.log(`${i} is odd`)
//     }
// }


//EXERCISE 5
// for (let j = 0; j <= 100; j++ ){
//     if (j % 3 == 0){
//         console.log('Fizz')
//     }else if (j % 5 == 0){
//         console.log(`Buzz`)
//     }else if (j % 3 == 0 && j % 5 == 0){
//         console.log('FizzBuzz')
//     }else{
//         console.log(i)
//     }
// }


//EXERCISE 6
// function isArmstrong(number) {
//     let armstrong = 0;
//     while (number > 0) {
//         let remainder = number % 10; 
//         armstrong += remainder * remainder * remainder; 
//         number = Number(number / 10); 
//     }
//     return armstrong === number; 
// }

// isArmstrong();

// if (isArmstrong){
//     console.log("this number is armstrong number.")
// }

//EXERCISE 7
// const students = [
//   { name: "David", marks: 80 },
//   { name: "Vinoth", marks: 77 },
//   { name: "Divya", marks: 88 },
//   { name: "Ishitha", marks: 95 },
//   { name: "Thomas", marks: 68 }
// ];

// let total = 0;

// for (let i = 0; i < students.length; i++) {
//   total += students[i].marks;
// }

// let average = total / students.length;
// let grade;

// if (average < 60) {
//   grade = "F";
// } else if (average < 70) {
//   grade = "D";
// } else if (average < 80) {
//   grade = "C";
// } else if (average < 90) {
//   grade = "B";
// } else if (average < 100) {
//   grade = "A";
// }

// console.log("Average marks:", average);
// console.log("Grade:", grade);
