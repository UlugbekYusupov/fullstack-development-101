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


let input = Number(prompt("Enter a number"))
let largest = 0

for (let num = input; num > 0; num = Math.floor(num / 10)) {
    let digit = num % 10
    if (digit > largest) {
        largest = digit
    }
}

alert(`The largest digit in ${input} is ${largest}`)

