// var a = undefined;
// console.log(a);
// var a = 40;

// let user = {
//   username: "Ulugbek",
//   age: 30,
// };

// console.log(
//   {
//     username: "Ulugbel",
//   } ==
//     {
//       username: "Ulugbel",
//     }
// );

// let number = 1234;
// let reverse = 0;

// while (number > 0) {
//   let digit = number % 10;
//   number = Math.floor(number / 10);
//   reverse = reverse * 10 + digit;
// }

// console.log(reverse);

// task 1.1

// let number = Number(prompt("Enter the Number"));
// let count = 0;
// while (number > 0) {
//   number = Math.floor(number / 10);
//   count++;
// }

// console.log(count);

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
//   username: "Ulugbek",
//   age: 30,
//   country: "Uzbekistan",
// };

// const keys = Object.keys(user);
// const values = Object.values(user);

// for (const key in user) {
//   const element = user[key];
//   console.log(element);
// }

// for (const element of keys) {
//   console.log(element);
// }

// function armstrong(n, k) {
//   let s = k;
//   while (s < 0) {

//   }
// }

// const n = prompt();
// let k = n.length;

// console.log(armstrong(n, k));

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 5));

let summ = function (a, b) {
  return a + b;
};

console.log(summ(3, 4));

let handleClick = () => {};

(function () {})();

let total = new Function("a", "b", "return a + b");

total(2, 3);

function outer() {
  let username = "Ulugbek";

  function inner() {
    let fullname = username + "Yusupov";
    console.log(fullname);
  }

  inner();
}

outer();

const func = () => {
  console.log(this);
};

func();

Array.prototype.greet = function () {
  console.log(this);

  console.log("It is coming from prototype");
};

const arr = [1, 2, 3, 4, 5];

arr.greet();

const special = "@#$%^&*()-"
let username = "Ulugbek";
if (username[0] > "A" && username[0] < "Z") {
  console.log(username[0]);
}
