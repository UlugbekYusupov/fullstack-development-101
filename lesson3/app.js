// task 1

// let a = 10;
// let b = 25;

// if (a > b) {
//     console.log("Largest is: " + a);
// } else {
//     console.log("Largest is: " + b);
// }


// task 2

// let x = 3;
// let y = -7;
// let z = 2;

// let product = x * y * z;

// if (product > 0) {
//     alert("The sign is +");
// } else if (product < 0) {
//     alert("The sign is -");
// } else {
//     alert("The sign is 0");
// }


// task 3

// let a = 0;
// let b = -1;
// let c = 4;

// let temp;

// if (a < b) {
//     temp = a;
//     a = b;
//     b = temp;
// }

// if (a < c) {
//     temp = a;
//     a = c;
//     c = temp;
// }

// if (b < c) {
//     temp = b;
//     b = c;
//     c = temp;
// }

// alert(a + ", " + b + ", " + c);


// task 4

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}


// task 5

// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } 
//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     } 
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     } 
//     else {
//         console.log(i);
//     }

// }


// task 6

for (let i = 100; i <= 999; i++) {

    let num = i;

    let a = num % 10;
    let b = Math.floor((num % 100) / 10);
    let c = Math.floor(num / 100);

    let sum = a*a*a + b*b*b + c*c*c;

    if (sum === i) {
        console.log(i);
    }

}


// task 7

