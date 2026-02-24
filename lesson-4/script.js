// Task 1
// const number1 = 5;
// const number2 = 7;
// let largest;
// if (number1 > number2) {
//     largest = number1;
//     console.log("The largest is " + largest)
// } else if (number2 > number1) {
//     largest = number2
//     console.log("The largest is " + largest)
// } else {
//     console.log("They are equal")
// }

// Task 2
// const numbers = [3,4,5, -6]
// for (const number of numbers) {
//     if (number < 0) {
//         console.log(number)
//     }
// }

// Task 3
// const numbers = [0,-1,4];
// let smallest = 0;
// for (const number of numbers) {
//     if (number < smallest) {
//         smallest = number;
//     }
// }
// console.log(smallest)



// Task 4
// let odds;
// let evens;
// for (let i = 0; i <= 15; ++i) {
//     if (i%2==0) {
//         console.log(i + " is even")
//     }
//     else {
//         console.log(i + " is odd")
//     }
// }

// Task 5
// for (let i = 1; i <= 100; ++i) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 ==0) {
//         console.log("Fizz")
//     } else if (i % 5 == 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }



// task 6
// for (let i = 100; i <= 999; ++i) {
//     let firstDigit = Math.floor( i /100);
//     let secondDigit = Math.floor(( i /10)%10);
//     let lastDigit = i % 10;
//     if (Math.pow(firstDigit, 3) + Math.pow(secondDigit, 3) + Math.pow(lastDigit, 3) == i) {
//         console.log(i)
//     }
// }


// Task 7
// const mark = parseFloat(prompt('Enter the score: '))
// if (mark < 60) {
//     console.log("The grade is F")
// } else if (mark < 70) {
//     console.log("The grade is D")
// } else if (mark < 80) {
//     console.log("The grade is C")
// } else if (mark<90) {
//     console.log("The grade is B")
// } else {
//     console.log("The grade is A")
// }
