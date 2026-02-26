// CHALLENGE 1

// 1
function greet(name) {
  return "Hello, " + name + "!";}
// 2
let greet2 = function(name) {
  return "Hello, " + name + "!";};
// 3
let greet3 = (name) => {
  return "Hello, " + name + "!"; };
// 4
let greet4 = (name) => "Hello, " + name + "!";
// 5
function greet5(name) {
  let message = "Hello, " + name + "!";
  return message; }

// CHALLENGE 2

function isPrime(n) {
  if (n < 2) {
    return false; }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;  } }

  return true; }


// CHALLENGE 3

function countDigits(n) {
  let num = Math.abs(n); 
  let count = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;  }

  return count; }

// CHALLENGE 4

function isPalindrome(n) {
  let original = n;
  let reversed = 0;

  while (n > 0) {
    let digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10); }

  return original === reversed; }

// CHALLENGE 5

function isArmstrong(n) {
  let num = n;
  let digits = 0;

  let temp = n;
  while (temp > 0) {
    temp = Math.floor(temp / 10);
    digits++; }

  let sum = 0;
  temp = n;

  while (temp > 0) {
    let digit = temp % 10;

    let power = 1;
    for (let i = 0; i < digits; i++) {
      power = power * digit; }

    sum += power;
    temp = Math.floor(temp / 10); }

  return sum === num; }

// CHHALLENGE 6

function createCounter(start) {
  let count = start;

  return {
    increment: function() {
      count = count + 1;  },

    decrement: function() {
      count = count - 1;   },

    getCount: function() {
      return count;  }  }; }

// CHALLENGE 7

function orderFood(name, address, food) {
  return "Dear " + name + 
         ", your ordered food " + food + 
         " will be ready in 15 minutes and will be delivered to your address " + address; }

// CHALLENGE 8

function lazyAdder(a) {
  return function(b) {
    return a + b; }; }