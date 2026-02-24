// ########## Lesson 1 ##########
// console.log("5" + 5)
// console.log("5" - 5)
// console.log("5" * 5)
// console.log("10" / 2)
// console.log(5 + true)
// console.log('10' - true)
// console.log("5" + true)
// console.log(5 + null)
// console.log(5 + undefined)
//
// // task2
// console.log(Number("200") + 50)
// console.log(String(25) + "years old")
// if ("false") {
//     console.log("true")
// } else {
//     console.log("false")
// }
// console.log(10 - true)
//
// // task 3
// const temp = 30
// console.log((temp * 9 / 5) + 32)
// console.log(temp + "C" + "=" + ((temp * 9 / 5) + 32) + "F")
// ask_c = prompt("Enter temperature in celsius")
// aler(`Fahrenheit: ${((ask_c * 9 / 5) + 32)}`)
//
// // task 4
// let user_budget;
// user_budget = Number(prompt("Enter your budget"))
// let expenses = 0
// for (let i = 0; i < 3; i++) {
//     expenses += Number(prompt("Enter your expenses"))
// }
// check = user_budget - expenses
// if (check < 0) {
//     alert(`You are over budget by ${check.toFixed()}`)
// } else {
//     alert(`You are not over budget by ${check.toFixed()}`)
// }
// // task 5
// console.log("Task 5")
// console.log(!!"false" == !!"true");
// console.log(0 || "Javascript")
// console.log(" " && 100)
// console.log(null ?? "Fallback")
// console.log(undefined ?? "default")
//
// // task 6
// let a  ="42"
// let b = "3.14"
// let c = 'hello'
// let d = false
// let e  = null
//
// let sum = Number(a) + Number(b)+Number( d) +Number (e)
// console.log(sum)


// ####### Lesson 2 ##########

// task 1

// let odds = 0;
// let evens = 0;
// user_num = Number(prompt("Enter a number"))
// for (let i = 1; i <= user_num; i++) {
//     if (i % 2 === 0) {
//         evens +=1
//     } else {
//         odds += 1
//     }
//
// }
// alert(`Odds: ${odds}`)
// alert(`Evens: ${evens}`)
//
//
// // task 2
// user_input = Number(prompt("Enter a number"))
//
// let reversed = 0
// for (let i = user_input; i > 0; i = Math.floor(i / 10)) {
//     reversed = reversed * 10 + i % 10
// }
// alert(reversed)
//


// task 3

//
// let input = Number(prompt("Enter a number"))
// let largest = 0
//
// for (let num = input; num > 0; num = Math.floor(num / 10)) {
//     let digit = num % 10
//     if (digit > largest) {
//         largest = digit
//     }
// }
//
// alert(`The largest digit in ${input} is ${largest}`)
//

//task 1
// let a = Number(prompt("Enter first number"))
// let b = Number(prompt("Enter second number"))
// if (a > b) {
//     alert(`The largest integer among two integers is ${a}`)
// } else {
//     alert(`The largest integer among two integers is ${b}`)
// }

// task 2
// let a = Number(prompt("Enter first number"))
// let b = Number(prompt("Enter second number"))
// let c = Number(prompt("Enter third number"))
// if (a > 0 && b > 0 && c > 0) {
//     alert("The sign is +")
// } else {
//     alert("The sign is -")
// }

// task 3
// let a = Number(prompt("Enter first number"))
// let b = Number(prompt("Enter second number"))
// let c = Number(prompt("Enter third number"))
//
// let first, second, third;
// if (a >= b && a >= c) {
//     first = a;
//     if (b >= c) {
//         second = b;
//         third = c;
//     } else {
//         second = c;
//         third = b;
//     }
// } else if (b >= a && b >= c) {
//     first = b;
//     if (a >= c) {
//         second = a;
//         third = c;
//     } else {
//         second = c;
//         third = a;
//     }
// } else {
//     first = c;
//     if (a >= b) {
//         second = a;
//         third = b;
//     } else {
//         second = b;
//         third = a;
//     }
// }
//
// alert(`${first}, ${second}, ${third}`)
// task 4
// let to = Number(prompt("Enter a number"))
// for (let i = 0; i <= to; i++) {
//     if (i % 2 === 0) {
//         alert(`${i} is even`)
//     } else {
//         alert(`${i} is odd`)
//     }
// }
/*
5.  Write a JavaScript program that iterates integers from 1 to 100.
For multiples of 3 print "Fizz" instead of the number
For multiples of 5 print "Buzz".
For numbers multiples of both 3 and 5 print "FizzBuzz".

6.  Write a JavaScript program to find the Armstrong numbers of 3 digits.
Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.
For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.
*/
//task 5
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         alert("FizzBuzz")
//     } else if (i % 3 === 0) {
//         alert("Fizz")
//     } else if (i % 5 === 0) {
//         alert("Buzz")
//     } else {
//         alert(i)
//     }
// }
// task 6
// for (let i = 100; i <= 999; i++) {
//     let sum = 0;
//     let temp = i;
//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += digit ** 3;
//         temp = Math.floor(temp / 10);
//     }
//     if (sum === i) {
//         alert(i)
//     }
// }

student =[
    {
        "name":"David",
        "marks" :80
    },{
        "name":"Vinoth",
        "marks" :77
    },{
        "name":"Divya 88",
        "marks" :80
    },{
        "name":"Ishitha",
        "marks" :95
    },{
        "name":"Thomas",
        "marks" :68
    },
]
for (let i = 0; i < student.length; i++) {
    if(student[i].marks < 60){
        console.log(`${student[i].name} has failed`)
    }else if(student[i].marks < 70){
        console.log(`${student[i].name} has passed with a D grade`)
    }else if(student[i].marks < 80){
        console.log(`${student[i].name} has passed with a C grade`)
    }else if(student[i].marks < 90){
        console.log(`${student[i].name} has passed with an B grade`)
    }else{
        console.log(`${student[i].name} has passed with an A grade`)
    }
}