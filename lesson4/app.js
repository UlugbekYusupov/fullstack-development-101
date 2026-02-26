// Taksks
// Five types of functions


// 1.

// function greet(name) {
//     console.log(`Hello, ${name}!`)
// }

// greet("Alice")

// //2.

// let greet  = function(name) {
//     console.log(`Hello, ${name}!`)
// }

// greet("Bob")

// //3.

// let greet = (name) => {
//     console.log(`Hello, ${name}!`)
// }

// greet("Charlie")


// //4.

// let greet = new Function(
//     "name",
//     "console.log(`Hello, ${name}!`)"
// )

// greet("Dave")


//////////////////////////////////////////////////////////////////////////////


//Challenge2.

function isPrime(num) {
    if (num <=1) {
        return false;
    } else {
        for (let i = 2; i < num; i ++) {
            if (num % i == 0) {
                return false;
            }
            
        }
        return true;
        
    }
}

console.log(isPrime(11))


// Challenge3.

function countDigits(num) {
    const numStr = num.toString();
    return numStr.length;
}


console.log(countDigits(1948595))


//Challenge4.

function isPalindrome(text) {
    const reversedStr = text.split("").reverse().join("");
    return reversedStr === text;
}

console.log(isPalindrome("true"))


//Challenge5.

function isArmstrong(num) {
    const numStr = num.toString();
    const numDigits = numStr.length;
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
        sum += Math.pow(Number(numStr[i]), numDigits);
    }
    return sum === num;
}

console.log(isArmstrong(153))


//Challenge6.

function createCounter(start) {
    let count = start;
    let increment = function() {
        count++;
    }
    let decrement = function() {
        count--;
    }
    let getCount = function() {
        return count;
    }
    return {
        increment,
        decrement,
        getCount
    }

}

const counter = createCounter(5);
counter.increment();
counter.increment();
console.log(counter.getCount())


//Challenge7.

// function orderFood(name, address, item) {
//     name = prompt("Enter your name: ");
//     address = prompt("Enter your address: ");
//     item = prompt("Enter the food item you want to order: ");

//     return `Dear ${name}, your ordered food item ${item} will be ready in 15 minutes and will be delivered to ${address} soon.`
// }

// console.log(orderFood())


//Challenge8.

function lazyAdder(a) {
    return function(b) {
        return a + b;
    }

}

const add5 = lazyAdder(5);
console.log(add5(10))
console.log(add5(20))


//////////////////////////////////////////////////////////





