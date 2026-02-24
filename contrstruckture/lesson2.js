// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j < 10);

// const user = {
//   username: "Jahongir",
//   age: 20,
//   country: "Uzbekistan",
// };

// const key = Object.keys(user);
// const values = Object.values(user);

// for (const key in user){
//   const element = user[key];
//   console.log(element);
// }

// for ()

// 1
// let num1 = 20;
// let num2 = 25;

// switch (true) {
//   case num1 > num2:
//     console.log("num1 is greater");
//     break;
//   case num1 < num2:
//     console.log("num2 is greater");
//     break;
//   case num1 == num2:
//     console.log("both of them are equal");
//     break;
//   default:
//     break;
// }

// 2
// let number = 3;
// let newArr = [3, -7, 2];
// for(let i = 0; i <= newArr.length - 1; i ++){
//   console.log(newArr[i]);
// }

// 3
// let a = 0;
// let b = -1;
// let c = 4;

// let x, y, z;

// if (a >= b && a >= c) {
//   x = a;
//   if (b >= c) {
//     y = b;
//     z = c;
//   } else {
//     y = c;
//     z = b;
//   }
// } else if (b >= a && b >= c) {
//   x = b;
//   if (a >= c) {
//     y = a;
//     z = c;
//   } else {
//     y = c;
//     z = a;
//   }
// } else {
//   x = c;
//   if (a >= b) {
//     y = a;
//     z = b;
//   } else {
//     y = b;
//     z = a;
//   }
// }
// alert(x + ", " + y + ", " + z);

// 4
for (let k = 0; k <= 15; k++) {
  if (k % 2 == 0) {
    console.log(`${k} is even`);
  } else if (k % 2 == 1) {
    console.log(`${k} is odd`);
  }
}

// 5

for (let a = 1; a <= 100; a++) {
  if (a % 3 == 0 && a % 5 != 0) {
    console.log("Fizz" + a);
  } else if (a % 5 == 0 && a % 3 != 0) {
    console.log("Buzz" + a);
  } else if (a % 3 == 0 && a % 5 == 0) {
    console.log("Fizz Buzz");
  } else {
    console.log(a);
  }
}

// 6
for (let num = 100; num <= 999; num++) {
  let sum = 0;
  let temp = num;

  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
  }

  if (sum === num) {
    console.log(num);
  }
}

// 7
const students = [
  { name: "David", marks: 80 },
  { name: "Vinoth", marks: 77 },
  { name: "Divya", marks: 88 },
  { name: "Ishitha", marks: 95 },
  { name: "Thomas", marks: 68 },
];

let total = 0;

for (let i = 0; i < students.length; i++) {
  total += students[i].marks;
}

let average = total / students.length;

let grade;

if (average < 60) {
  grade = "F";
} else if (average < 70) {
  grade = "D";
} else if (average < 80) {
  grade = "C";
} else if (average < 90) {
  grade = "B";
} else {
  grade = "A";
}

console.log("Average Marks:", average);
console.log("Grade:", grade);
