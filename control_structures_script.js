
// 1

let myArr = [10, 5]

let maxNum = myArr[0]
for (let i = 1; i <= 5; i++) {
    if (myArr[i] > maxNum) {
        maxNum = myArr[i]
    }
}

console.log(maxNum)

// 2

let myArr = [3, -7, 2]
for (let i = 0; i < 10; i++) {
    if (myArr[i] < 0) {
        console.log("The list has negative number(s)")
        break
    }
}

// 3

let myArr = [0, -1, 4];

for (let i = 0; i < myArr.length; i++) {
    for (let j = 0; j < myArr.length - 1; j++) {
        if (myArr[j] < myArr[j + 1]) {
            let temp = myArr[j];
            myArr[j] = myArr[j + 1];
            myArr[j + 1] = temp;
        }
    }
}
console.log(myArr);

// 4

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`)
    }
    else {
        console.log(`${i} is odd`)
    }
}

// 5

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz")
    }
    if (i % 3 === 0) {
        console.log("Fizz")
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}

// 6

let digit = 154

let strDigit = String(digit)
let sum = 0
for (let i = 0; i < strDigit.length; i++) {
    sum += Number(strDigit[i])**3
}
if (sum === digit) {
    console.log("Is Armstrong")
}
else {
    console.log("Is Not Armstrong")
}

// 7

const students = {
    "David": 80,
    "Vinoth": 77,
    "Divya": 88,
    "Ishitha": 95,
    "Thomas": 68
}

for (const [k, v] of Object.entries(students)) {
    if (v <= 60) {
        console.log(`${k}: F`)
    }
    else if (v <= 70) {
        console.log(`${k}: D`)
    }
    else if (v <= 80) {
        console.log(`${k}: C`)
    }
    else if (v <= 90) {
        console.log(`${k}: B`)
    }
    else if (v <= 100) {
        console.log(`${k}: A`)
    }
}