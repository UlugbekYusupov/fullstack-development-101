// Topic is The Execution Context in JavaScript


// Tasks 

// Challenge 1 - Write a function named greet(name) in five different ways. The function should take a name as an argument and return "Hello, [name]!".

// 1. Function Declaration

function greet(name) {
    return "Hello, " + name + "!";
}
greet("Alice"); // "Hello, Alice!"


// 2. Function Expression

const greet2 = function(name) {
    return "Hello, " + name + "!";
};

// 3. Arrow Function

const greet3 = (name) => {
    return "Hello, " + name + "!";
};

// 4. Arrow Function (concise)

const greet4 = (name) => "Hello, " + name + "!";

// 5. Method in an Object

const greeter = {
    greet: function(name) {
        return "Hello, " + name + "!";
    }
};



// Challenge 2 - Write a function isPrime(n) that returns true if n is prime, otherwise false.


function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;       
  if (n % 2 === 0) return false;   

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}



// Challenge 3 - Write a function countDigits(n) that counts the number of digits in a given number.

function countDigits(n) {
  n = Math.abs(n);

  if (n === 0) return 1;

  let count = 0; 

  while (n > 0) {  
    n = Math.floor(n / 10); 
    count++;
  }

  return count;
}


// Challenge 4 - Write a function isPalindrome(n) that checks if a number reads the same forward and backward.

function isPalindrome(n) {
  if (n < 0) return false;

  let original = n;   
  let reversed = 0;    

  while (n > 0) {       
    let digit = n % 10;          
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);     
  }
  return reversed === original;   
}

// Challenge 5 - Write a function isArmstrong(n) that checks if a number is an Armstrong number.(An Armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits.)



// Challenge 6 - Create a function createCounter(start) that returns an object with three methods:
// increment() ➝ Increases the count
// decrement() ➝ Decreases the count
// getCount() ➝ Returns the current count

// Challenge 7 – Create a function that order food, the program asks for name, address and what do 	you want to order, then the output should be “Dear (name), your ordered food (food you 	entered) will be ready in 15 minuts and will be delivered to your address(address you 		entered)”

// Challenge 8 - Create a function lazyAdder(a) that returns another function that adds b when called.
// const add5 = lazyAdder(5); 
// console.log(add5(10));  - > 15
// console.log(add5(20));  -> 25

