// console.log('5' + 5)
// console.log('5' - 5)
// console.log('5' * 5)
// console.log('10' / 5)
// console.log(5 + true)
// console.log(5 - true)
// console.log('5' + true)
// console.log(5 + null)
// console.log(5 + undefined)


// console.log(Number('200') + 50)
// console.log(String(200) + "years old")
// if ('false') {
//     console.log('True')
// }
// else{
//     console.log('False')
// }

// console.log(Boolean(0))


// const temperature = prompt("Enter the tempeature in Celsius: ")
// const fahrenheit = (temperature * 9 / 5) + 32
// console.log(`${temperature}°C is equal to ${fahrenheit}°F`)

// let budget = prompt("Enter your budget: ")
// for (let i = 0; i < 3; i++) {
//     if (budget < 0) {
//         alert("You have exceeded your budget!")
//     }
//     budget -= Number(prompt("Enter an expense: "))
// }
// budget = budget.toFixed(2)
// console.log(`Remaining budget: ${budget}`)



// console.log(!!"false" == !!"true")
// console.log(0||"Javascript")
// console.log(" " && 100)
// console.log(null ?? "Fallback")
// console.log(undefined ?? "Default value")

// let a = "42"
// let b = "3.14"
// let c = "Hello"
// let d = false
// let e = null

// let sum = Number(a) + Number(b) + Number(d) + Number(e)
// console.log(sum)

// let num = Number(prompt("Enter a number: "))
// let sum_odd = 0
// let sum_even = 0
// for (let i = 1; i <= num; i+=2) {
//     sum_odd += 1
// }
// for (let i = 2; i <= num; i+=2) {
//     sum_even += 1
// }
// console.log(`Sum of odd numbers: ${sum_odd}`)
// console.log(`Sum of even numbers: ${sum_even}`)

// let num = Number(prompt("Enter a number: "))
// let reversed = 0
// while (num > 0) {
//     let digit = num % 10
//     reversed = (reversed * 10) + digit
//     num = Math.floor(num / 10)
// }
// console.log(`Reversed number: ${reversed}`)

// let num = Number(prompt("Enter a number: "))
// let largest = 0
// while (num > 0) {
//     let digit = num % 10
//     if (digit > largest) {
//         largest = digit
//     }
//     num = Math.floor(num / 10)
// }
// console.log(`Largest digit: ${largest}`)

// feb 24 ====================================================================

// a = Number(prompt("Enter a number: "))
// b = Number(prompt("Enter another number: "))
// if (a > b) {
//     console.log(`${a} is greater than ${b}`)
// }
// else if (b > a) {
//     console.log(`${b} is greater than ${a}`)
// }
// else {
//     console.log("Both numbers are equal")
// }

// numbers = [2, -7, 4]
// for (i in numbers) {
//     if (numbers[i] < 0){
//         alert("your number is " + numbers[i])
//     }
// }
// let num1 = Number(prompt("Enter first number: "))
// let num2 = Number(prompt("Enter second number: "))
// let num3 = Number(prompt("Enter third number: "))

// if (num1 > num2 && num1 > num3) {
//     console.log(`Largest: ${num1}`)
// } else if (num2 > num1 && num2 > num3) {
//     console.log(`Largest: ${num2}`)
// } else {
//     console.log(`Largest: ${num3}`)
// }

// for (let i = 1; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }

// num = Number(prompt("Enter a number: "))
// let sum = 0;
// let temp = num;
// while (temp > 0) {
//     let digit = temp % 10;
//     sum += digit ** 3;
//     temp = Math.floor(temp / 10);
// }
// if (sum === num) {
//     console.log(num);
// }


// let students = {
//     "David": 80,
//     "Vinoth": 77,
//     "Divya": 88,
//     "Ishitha": 95,
//     "Thomas": 68
// }
// let totalMarks = 0
// let studentCount = 0

// for (let student in students) {
//     totalMarks += students[student]
//     studentCount++
// }

// let averageMarks = totalMarks / studentCount
// console.log(`Average Marks: ${averageMarks}`)

// let grade
// if (averageMarks >= 90) {
//     grade = 'A'
// } else if (averageMarks >= 80) {
//     grade = 'B'
// } else if (averageMarks >= 70) {
//     grade = 'C'
// } else if (averageMarks >= 60) {
//     grade = 'D'
// } else {
//     grade = 'F'
// }
// console.log(`Grade: ${grade}`)
