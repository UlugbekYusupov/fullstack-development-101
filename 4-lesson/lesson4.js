// 1
let full_name = "Muhammad Nur Suxbatullayev"

function greet_1 (fm) {
    return "Hello, " + fm
}

console.log(greet_1(full_name))

let greet_2 = function (fm) {
    return "Hello, " + fm
}

console.log(greet_2(full_name))

let greet_3 = (fm) => {
    return "Hello, " + fm
}

console.log(greet_3(full_name))

let greet_4 = new Function(
    'fm',
    "return 'Hello, ' + fm"
)

console.log(greet_4(full_name))

// 2
let pr_num = 15

function is_prime (nm) {
    if (nm < 0) {
        return false
    } else {
        for (let i = 2; i < nm; i++) {
            if (nm % 2 == 0) {
                return false
            }
        }
    }
    return true
}

console.log(is_prime(pr_num))

// 3

let num3 = 1234

function countDigits (nm) {
    let count = 0
    while (nm > 0){
        count += 1
        nm = parseInt(nm/10)
    }
    return count
}

console.log(countDigits(num3))

// 4
let num4 = 121

function isPalindrome (nm) {
    let nm2 = nm
    let nm3 = ""
    while (nm2 > 0) {
        nm3 += nm2 % 10
        nm2 = parseInt(nm2/10)
    }
    if (nm == parseInt(nm3)) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome(num4))

// 5
function isArmstrongNumber(num) {
    const numStr = String(num);
    const power = numStr.length;
    let sum = 0;

    for (let i = 0; i < power; i++) {
        sum += Math.pow(parseInt(numStr[i]), power);
    }

    return sum === num;
}

let num5 = 153; 

if (isArmstrongNumber(num5)) {
    console.log(`${num5} is an Armstrong number!`);
} else {
    console.log(`${num5} is not an Armstrong number.`);
}

// 6
function createCounter (start) {
    function increment () {
        start += 1
    }

    function decrement () {
        start -= 1
    }

    function getCount () {
        return start
    }

    return {
        increment,
        decrement,
        getCount
    }
}

let num6 = 100

let obj = createCounter(num6)
console.log(obj.getCount())
obj.increment()
console.log(obj.getCount())
obj.decrement()
console.log(obj.getCount())

// 7
function orderFunction () {
    let name = prompt("Name: ")
    let address = prompt("Address: ")
    let order = prompt("What do you wanna to order: ")

    console.log("Dear ", name, ", your ordered food, ", order, ", will be ready in 15 minuts and will be delivered to your address, ", address)
}

orderFunction()

// 8

function lazyAdder (a) {
    return function (b) {
        return a + b
    }
}

const add5 = lazyAdder(5)
console.log(add5(10))
console.log(add5(20))