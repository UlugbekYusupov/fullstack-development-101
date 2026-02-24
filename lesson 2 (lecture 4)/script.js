//challenge 1
// let a =10, b=12;
// if (a>b){
//     console.log(a)
// }else if(b>a){
//     console.log(b);
// }

//challenge 2
// var x = 3;
// var y = -7;
// var z = 2;
//
// if (x > 0 && y > 0 && z > 0) {
//     console.log("The sign is +");
// } else if (x < 0 && y < 0 && z < 0) {
//     console.log("The sign is -");
// } else if (x > 0 && y < 0 && z < 0) {
//     console.log("The sign is +");
// } else if (x < 0 && y > 0 && z < 0) {
//     console.log("The sign is +");
// } else if (x < 0 && y < 0 && z > 0) {
//     console.log("The sign is +");
// } else {
//     console.log("The sign is -");
// }

//challenge 3
// let x = 0, y = -1, z = 4;
// if (x > y && x > z) {
//     if (y > z) {
//         console.log(x + ", " + y + ", " + z);
//     } else {
//         console.log(x + ", " + z + ", " + y);
//     }
// } else if (y > x && y > z) {
//     if (x > z) {
//         console.log(y + ", " + x + ", " + z);
//     } else {
//         console.log(y + ", " + z + ", " + x);
//     }
// } else if (z > x && z > y) {
//     if (x > y) {
//         console.log(z + ", " + x + ", " + y);
//     } else {
//         console.log(z + ", " + y + ", " + x);
//     }
// }

// challenge 4
// for(let i =1; i<=15; i++){console.log(i + ' is ' + ((i&1)?'odd':'even'))}

//challenge 5
// let result = '';
//
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         result += 'FizzBuzz ';
//     } else if (i % 3 === 0) {
//         result += 'Fizz ';
//     } else if (i % 5 === 0) {
//         result += 'Buzz ';
//     } else {
//         result += i + " ";
//     }
// }
//
// console.log(result);

//challenge 6
// function armstong_q(num) {
//     let unit = num % 10;
//     let tens = Math.floor((num / 10) % 10);
//     let hundreds = Math.floor(num / 100);
//
//     return (
//         Math.pow(unit, 3) +
//         Math.pow(tens, 3) +
//         Math.pow(hundreds, 3)
//     ) === num;
// }
//
// for (let arm = 100; arm < 1000; arm++) {
//     if (armstong_q(arm)) {
//         console.log(arm + " is an Armstrong number.");
//     }
// }

//challenge 7
const students = [
    { name: 'David', marks: 80 },
    { name: 'Vinoth', marks: 77 },
    { name: 'Divya', marks: 88 },
    { name: 'Ishitha', marks: 95 },
    { name: 'Thomas', marks: 68 }
];

let totalMarks = 0;
for (let i = 0; i < students.length; i++) {
    totalMarks += students[i].marks;
}

let avg = totalMarks / students.length;
console.log("Average Grade: " + avg);

if (avg < 60) {
    console.log("Grade: F");
} else if (avg < 70) {
    console.log("Grade: D");
} else if (avg < 80) {
    console.log("Grade: C");
} else if (avg < 90) {
    console.log("Grade: B");
} else if (avg < 100) {
    console.log("Grade: A");
}