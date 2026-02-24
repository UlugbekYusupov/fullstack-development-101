// 4th lesson
// Task 1
let a = 5, b = 3;
if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('b is greater than or equal to a');
}

// Task 2
numbers = [1, 2, 5];
signedNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        signedNumbers.push(numbers[i]);
    }
}
if (signedNumbers.length === 0) {
    window.alert('No signed numbers found');
} else {
    window.alert(signedNumbers);
}

// Task 3
let num1 = 0, num2 = -1, num3 = 4;
for (let i = 0; i < 3; i++) {
    if (num1 < num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if (num1 < num3) {
        let temp = num1;
        num1 = num3;
        num3 = temp;
    }
    if (num2 < num3) {
        let temp = num2;
        num2 = num3;
        num3 = temp;
    }
}
window.alert(`${num1}, ${num2}, ${num3}`);

// Task 4
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}

// Task 5
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Task 6
let number = 371;
let numStr = String(number);
let power = numStr.length;
let sum = 0;

for (let i = 0; i < numStr.length; i++) {
    let digit = Number(numStr[i]);
    sum += digit ** power;
}
if (sum === number) {
    console.log("Yes");
} else {
    console.log("No")
}

// Task 7
studentsMarks = {
    "David" : 80,
    "Vinoth" : 77,
    "Divya" : 88,
    "Ishitha" : 95,
    "Thomas" : 68
}

for (let key in studentsMarks) {
    let mark = studentsMarks[key];

    if (mark < 60) {
        console.log(key + " - F")
    } else if (mark < 70) {
        console.log(key + " - D")
    } else if (mark < 80) {
        console.log(key + " - C")
    } else if (mark < 90) {
        console.log(key + " - B")
    } else if (mark < 100) {
        console.log(key + " - A")
    }
}