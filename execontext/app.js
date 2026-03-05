/*
// 1
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Jahon"));

// 2
let greet2 = function(name){
  return `Hello, ${name}`;
}
console.log(greet2("Jahon"));

// 3
let greet3 = (name) => {
  return `Hello, ${name}`;
}
console.log(greet3("Jahon"));

// 4
(function (name){
  return `Hello ${name}`
})("Jahon")

// 5
let greet5 = new Function(
  "name",
  "return `Hello, ${name}`;"
);

console.log(greet5("Jahonjj"));

*/

// 2
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// console.log(isPrime(7));

// 3
function countDigits(n) {
  return Math.abs(n).toString().length;
}
// console.log(countDigits(12345));
// console.log(countDigits(-90));  

// 4
let newArr = []
function isPalindrome(n){
  console.log(newArr.push(n).split().reverse())
}
isPalindrome(12329)