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

// ===============================================================
// feb 26 lecture 1

// challenge 1
// function greet(name){
//     console.log(`Hello, ${name}!`)
// }
// greet("Alice")

// let greet = function(name) {
//     console.log(`Hello, ${name}!`)
// }
// greet("Bob")

// let greet = (name) => {
//     console.log(`Hello, ${name}!`)
// }
// greet("Charlie")

// let greet = new Function("name", "console.log(`Hello, ${name}!`)")
// greet("David")

// (function(name) {
//     console.log(`Hello, ${name}!`)
// })("Eve")

// challange 2

// function isPrime(num) {
//     if (num <= 1) return false
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false
//     }
//     return true
// }
// console.log(isPrime(7)) // true
// console.log(isPrime(10)) // false

// challenge 3

// function countDigits(num) {
//     let count = 0
//     while (num > 0) {
//         num = Math.floor(num / 10)
//         count++
//     }
//     return count
// }
// console.log(countDigits(12345)) // 5
// console.log(countDigits(0)) // 1

// challenge 4

// function isPalindrome(num) {
//     let original = num
//     let reversed = 0
//     while (num > 0) {
//         let digit = num % 10
//         reversed = (reversed * 10) + digit
//         num = Math.floor(num / 10)
//     }
//     return original === reversed
// }
// console.log(isPalindrome(121)) // true
// console.log(isPalindrome(-121)) // false
// console.log(isPalindrome(10)) // false


// challenge 5

// function isArmstrong(num) {
//     let original = num
//     let sum = 0
//     let digits = String(num).length
//     while (num > 0) {
//         let digit = num % 10
//         sum += digit ** digits
//         num = Math.floor(num / 10)
//     }
//     return original === sum
// }
// console.log(isArmstrong(153)) // true
// console.log(isArmstrong(9474)) // true
// console.log(isArmstrong(123)) // false


// challenge 6

// function createCounter(start) {
//   let count = start;

//   return {
//     increment() {
//       count++;
//     },
//     decrement() {
//       count--;
//     },
//     getCount() {
//       return count;
//     }
//   };
// }
// let a = createCounter(5)
// a.increment()
// a.increment()
// a.decrement()
// console.log(a.getCount())

// challenge 7

// function orderFood(name, address, food) {
//     console.log(`Order placed: ${food} for ${name} at ${address}`)
// }
// orderFood(prompt("Enter your name: "), prompt("Enter your address: "), prompt("Enter the food you want to order: "))

// challenge 8

// function lazyAdder(num){
//     return function(b){
//         num+=b
//         return num
//     }
// }
// const add5 = lazyAdder(5)
// console.log(add5(10))
// console.log(add5(15))
// console.log(add5(32))

// assigbnment 1

// function shoppingCart() {
//     let total = 0
//     let itemcount = 0
//     function addItem(price) {
//         total += price
//         itemcount++
//     }
//     function getTotal() {
//         if (itemcount > 5){
//             return total * 0.8
//         } else if (itemcount > 3) { 
//             return total * 0.9
//         } else {
//             return total
//         }
//     }
//     return {
//         addItem,
//         getTotal
//     }
// }

// let cart = shoppingCart()
// cart.addItem(100)
// cart.addItem(200)
// cart.addItem(300)
// cart.addItem(400)
// console.log(cart.getTotal())

// assignment 2

// function checkPassword(psw){
//     let points = 0
//     if (psw.length() >= 8){
//         points++
//     }
//     for(i in psw){
//         if (psw[i] < "A" && psw[i] > "Z"){
//             points++
//             break
//         }
//     }
//     for (i in psw){
//         if (psw[i] < "0" && psw[i] > "9"){
//             points++
//             break
//         }
//     }
//     let specialChars = "!@#$%^&*()_+{}|:<>?-=[]\\;',./"
//     for (i in psw){
//         if (specialChars.includes(psw[i])){
//             points++
//             break
//         }
//     }
//     if (points >= 4){
//         console.log("Strong password")
//     } else if (points >= 3){
//         console.log("Moderate password")
//     } else {
//         console.log("Weak password")
//     }
    
// }

// assignment 3

// function atm(wdw){
//     if (wdw % 10 !== 0){
//         console.log("Invalid amount. Please enter a multiple of 10.")
//         return
//     }
//     let notes = [100, 50, 20, 10]
//     let result = {}
//     for (let note of notes){
//         if (wdw >= note){
//             result[note] = Math.floor(wdw / note)
//             wdw = wdw % note
//         }
//     }
//     console.log("Dispensed notes:")
//     for (let note in result){
//         console.log(`${note}: ${result[note]}`)
//     }
// }
// atm(Number(prompt("Enter the amount to withdraw: ")))


