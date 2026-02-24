// for ( let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }
// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 10);

// const user = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// for (const key in user) {
//     const element = user[key];
//     console.log(element);
// };

// for (const element of keys){
//     console.log(element);
// }




// Practice

// task 1

// let a = 10
// let b = 20
// if (a > b) {
//     console.log(a + " is greater than " + b);
// } else {
//     console.log(b + " is greater than " + a);
// }

// task 2

let number_1 = Number(prompt("Enter first number:"));
let number_2 = Number(prompt("Enter second number:"));
let number_3 = Number(prompt("Enter third number:"));

if (number_1 === 0 || number_2 === 0 || number_3 === 0) {
  alert("0");
} else {
  let negatives = 0;

  if (number_1 < 0) negatives++;
  if (number_2 < 0) negatives++;
  if (number_3 < 0) negatives++;

  if (negatives % 2 === 0) alert("+");
  else alert("-");
}

// task 3

let num_1 = Number(prompt("Enter first number:"));
let num_2 = Number(prompt("Enter second number:"));
let num_3 = Number(prompt("Enter third number:"));

let x, y, z;

if (num_1 >= num_2 && num_1 >= num_3) {
  x = num_1;
  if (num_2 >= num_3) { y = num_2; z = num_3; }
  else { y = num_3; z = num_2; }
} else if (num_2 >= num_1 && num_2 >= num_3) {
  x = num_2;
  if (num_1 >= num_3) { y = num_1; z = num_3; }
  else { y = num_3; z = num_1; }
} else {
  x = num_3;
  if (num_1 >= num_2) { y = num_1; z = num_2; }
  else { y = num_2; z = num_1; }
}

alert(`${x}, ${y}, ${z}`);


// Task 4

for ( let i = 0; i < 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}


// Task 5

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Task 6

let number = Number(prompt("Enter the number:"));

if (number )
