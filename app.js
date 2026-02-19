// console.log('5' + 5) // 55
// console.log('5' - 5) // 0
// console.log('5' * '2') // 10
// console.log('10' / 2) // 5
// console.log(5 + true) // 6
// console.log('10' - true) // 9
// console.log('5' + true) // 5true
// console.log(5 + null) // 5
// console.log(5 + undefined) // NaN
// console.log('5' + null) // 5null
// console.log('5' + undefined) // 5undefined

// 2

// let sum = Number('200') + 50
// console.log(sum) // 250

// let result = String(25) + ' years old'
// console.log(result) // 25 years old

// let isTrue = Boolean('false')
// if (isTrue === true) {
// 	console.log('This is true')
// } else {
// 	console.log('This is false')
// }

// console.log('10' - true) // - operator performs numeric subtraction. So, "10" is converted to 10 and true is converted to 1, resulting in 10 - 1 = 9.
// 3
// const celsius = 25
// // 3.1
// const fahrenheit = (celsius * 9) / 5 + 32
// // 3.2
// console.log('Celsius:', celsius)
// console.log('Fahrenheit:', fahrenheit)
// // If we change the value of celsius to 30
// celsius = 30; // TypeError: Assignment to constant variable.
// Bonus chelange
// const celsius = Number(prompt('Enter temperature in Celsius:'))
// const fahrenheit = (celsius * 9) / 5 + 32

// console.log(`Celsius: ${celsius}`)
// console.log(`Fahrenheit: ${fahrenheit}`)

// 4

// let budget = Number(prompt('Enter your total budget:'))

// let expense1 = Number(prompt('Enter expense 1:'))
// let expense2 = Number(prompt('Enter expense 2:'))
// let expense3 = Number(prompt('Enter expense 3:'))

// let remaining = budget - (expense1 + expense2 + expense3)

// if (remaining < 0) {
// 	console.log('Warning: You overspent!')
// } else {
// 	console.log("You're within budget")
// }

// console.log('Remaining balance:', remaining.toFixed(2))

// 5
console.log(!'h')
console.log(!!'false' == !!'true') // true
console.log(0 || 'JS') // 'JS'
console.log(' ' && '100') // '100'
console.log(null ?? 'Fallback') // 'Fallback'
console.log(undefined ?? 'Default value') // 'Default value'

// 6
// let a = '42'
// let b = '3.14'
// let c = 'hello'
// let d = false
// let e = null
// sum = Number(a) + Number(b) + Number(d) + Number(e)
// console.log(sum) // 45.14
// // or with C:
//  let sum =
//   (Number(a) || 0) +
//   (Number(b) || 0) +
//   (Number(c) || 0) +
//   (Number(d) || 0) +
//   (Number(e) || 0);

// console.log(sum); // 45.14

// Challenge 1
//1
// let evenCount = 0
// let oddCount = 0
// for (let i = 1; i <= 50; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i + ' is even')
// 		evenCount++
// 	} else {
// 		console.log(i + ' is odd')
// 		oddCount++
// 	}
// }
// console.log('Total even numbers:', evenCount)
// console.log('Total odd numbers:', oddCount)
// Challenge 2
// let num = 1234
// let reverseNum = 0

// while (num > 0) {
// 	let digit = num % 10
// 	num = Math.floor(num / 10) // whithout Math.floor() we will get 123.4, 12.34, 1.234 and 0.1234 and 1 is don't get included in the reverseNum result will be 432.1 = 432
// 	reverseNum = reverseNum * 10 + digit
// }
// console.log(reverseNum) // 4321
// Whithout moduls
// for (let i = 0; i < String(num).length; i++) {
// 	let reverseNum = String(num).split('').reverse().join('')
// 	console.log(reverseNum)
// }
// Challenge 3
// With moduls
// let num = Number(prompt('Enter a number:'))
// let largest = 0
// while (num > 0) {
// 	let digit = num % 10
// 	num = Math.floor(num / 10)
// 	if (digit > largest) {
// 		largest = digit
// 	}
// }
// console.log(`The largest digit is: ${largest}`)
// without moduls
// let numString = prompt('Enter a number:')

// let largest = 0
// for (let i = 0; i < numString.length; i++) {
// 	let digit = Number(numString[i])
// 	if (digit > largest) {
// 		largest = digit
// 	}
// }
// console.log('The largest digit is:', largest)
// Challange 4
let num = 1234
let sum = 0

if (num < 0) {
	num = -num
}

while (num > 0) {
	let digit = num % 10
	sum = sum + digit
	num = Math.floor(num / 10)
}

console.log(sum) // 10
