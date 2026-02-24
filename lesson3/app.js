// Exercises
//1.
// const a = 5
// const b = 10

// if (a > b) {
//     console.log("a is greater than b")
// } else if (a < b) {
//     console.log("a is less than b")
// } else {
//     console.log("a is equal to b")
// }


//2.

// const number = +prompt("Enter a number: ")
// const number2 = +prompt("Enter another number: ")
// const number3 = +prompt("Enter a third number: ")

// const arrayNum = [number, number2, number3]

// for (let i = 0; i< arrayNum.length; i++) {
//     if (arrayNum[i] < 0) {
//         console.log(`${arrayNum[i]} is negative`)
//     }
// }


//3.
// i = 0
// arrayNum = []
// while (i < 3) {
//     number = +prompt("Enter a number: ")
//     arrayNum.push(number)
//     i++
// }

// console.log(`The sorted numbers are: ${arrayNum.sort((a, b) => a - b)}`)

//4. 

// for (let i = 0; i < 15; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i} is even`)
//     }else {
//         console.log(`${i} is odd`)
//     }
// }


//5. 

// for (let i = 0; i< 100; i ++) {
//     if(i % 3 == 0) {
//         console.log("Fizz");
//     }else if (i % 5 == 0) 
//     {
//         console.log("Buzz");
//     }else if(i % 3 == 0 && i % 5 == 0) 
//     {
//         console.log("FizzBuzz"); 
//     }
// }


//6. 

// const number = prompt("Enter a number: ");
// const num = Number(number);

// const arrayNum = number.split("");

// let power = arrayNum.length;
// let sum = 0;

// for (let i = 0; i < arrayNum.length; i++) {
//     sum += Math.pow(Number(arrayNum[i]), power);
// }

// if (sum === num) {
//     console.log(`${num} is an Armstrong number`);
// } else {
//     console.log(`${num} is NOT an Armstrong number`);
// }

//7.


let studentsObject  =  {
    "David": 80,
    "Vinoth": 77,
    "Divya": 88,
    "Ishitna": 95,
    "Thomas": 68
}

let total = 0;
let count = 0;

for (let key in studentsObject) {
    total += studentsObject[key];
    count++;
}

let average = total / count;

if (average < 60) {
    console.log("Grade: F")
} else if (average < 70) {
    console.log("Grade: D")
} else if (average < 80) {
    console.log("Grade: C")
} else if (average < 90) {
    console.log("Grade: B")
} else {    
    console.log("Grade: A")
}



