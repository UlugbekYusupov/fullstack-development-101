// challenge 1

// function greet(name) {
//     return name
// }
// console.log(greet("MyName 1"))
//
// let greet1 = function (name) {return name}
// console.log(greet1("MyName 2"))
//
// let greet2 = (name) => {return name}
// console.log(greet2("MyName 3"))
//
// console.log((function (name) {return name}) ("MyName 4"))
//
// let greet3 = new Function("name", "return name")
// console.log(greet3("MyName 5"))

// challenge 2
//
// function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(13))

// challenge 3
//
// function countDigits(num) {
//     stringNum = String(num)
//     return stringNum.length
// }
//
// console.log(countDigits(123456789))

// challenge 4
//
// function isPalindrome(num) {
//   const s = String(num);
//   for (let i = 0; i < s.length / 2; i++) {
//     if (s[i] !== s[s.length - 1 - i]) return false;
//   }
//   return true;
// }
//
// console.log(isPalindrome(121))

// challenge 5
//
// function isArmstrong(n) {
//     let sum = 0;
//     let strN = String(n);
//     for (let i = 0; i < strN.length; i++) {
//         sum += Number(strN[i])**strN.length
//     }
//     return sum === n;
// }
//
// console.log(isArmstrong(153))

// challenge 6
//
// function createCounter(start) {
//   function increment() {
//     start += 1;
//   }
//
//   function decrement() {
//     start -= 1;
//   }
//
//   function getCount() {
//     return start;
//   }
//
//   return { increment, decrement, getCount };
// }
//
// console.log(createCounter(10));

// challenge 7
//
// function orderFood(name, address, order) {
//     console.log(`Dear ${name}, you ordered food from ${address} and it is ${order}`)
// }
//
// orderFood("john", "123 Main St", "burger")

// challenge 8
//
// function lazyAdder(a) {
//     return function (b) {
//         return a + b
//     }
// }
//
// const add5 = lazyAdder(5)
// console.log(add5(10))

//