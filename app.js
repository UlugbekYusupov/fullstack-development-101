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

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(2, 5));

// let summ = function (a, b) {
//   return a + b;
// };

// console.log(summ(3, 4));

// let handleClick = () => {};

// (function () {})();

// let total = new Function("a", "b", "return a + b");

// total(2, 3);

// function outer() {
//   let username = "Ulugbek";

//   function inner() {
//     let fullname = username + "Yusupov";
//     console.log(fullname);
//   }

//   inner();
// }

// outer();

// const func = () => {
//   console.log(this);
// };

// func();

// Array.prototype.greet = function () {
//   console.log(this);

//   console.log("It is coming from prototype");
// };

// const arr = [1, 2, 3, 4, 5];

// arr.greet();

// const special = "@#$%^&*()-"
// let username = "Ulugbek";
// if (username[0] > "A" && username[0] < "Z") {
//   console.log(username[0]);
// }

let colors = ["Orange", "Green", "Red", "Blue"];

console.log(colors);

let nums = new Array();

let names = new Array("Bob", "Alice");

names.push("John");

console.log(names);

nums.push(2);
nums.push(5);
nums.push(3);
nums.push(1);
nums.push(7);
nums.push(7);

console.log(nums);

let original = [1, 2, 3];
let copy = [...original];

console.log(original.__proto__);

let numbers = Array.of(10, 5, 4, 3, 2);

// console.log(numbers);

// console.log(numbers.push(1));
// console.log(numbers.pop());

// let numberss = numbers.map(function (element) {
//   return element ** 2;
// });

// console.log(numberss);
// console.log(numbers);

// numberss = numbers.filter(function (element) {
//   return element > 5;
// });

// console.log(numberss);

// let a = true;

// let status = a == true ? "True" : "Flase";

// function firstElement (arr, n = 1){

//   if (arr.length === 0){
//     return []
//   }
//   if (n < 0){
//     return n
//   }
//   if (arr.length > 0){
//     return arr.slice(0, n)
//   }

// }
// console.log(firstElement([7,9,0,-2]))
// console.log(firstElement([], 3))
// console.log(firstElement([7,9,0,-2], -3))
// task 2

// function last(arr,n){
//   if ( n === undefined){
//     return arr[arr.length-1]

//   }
//   return arr.slice(-n)
// }

// console.log(last([7,9,0,-2]))
// console.log(last([7,9,0,-2],3))
// console.log(last([7,9,0,-2],6))

// let myColor = ["Red","White","Green","Black"]

// let colo = myColor.join(",")
// console.log(colo)

// function insertDashes(n) {
//   let n2 = String(n);
//   let n1 = n2.split("");
//   return n1.join("-");
// }

// console.log(insertDashes(12345));

// function sortArray(arr) {
//   return arr.sort()
// }

// console.log(sortArray([2,3,5,1,3,-4]))

// 6

function findMode(arr) {
  let count = {};
  let maxItem = arr[0];
  let maxCount = 1;

  for (let item of arr) {
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }

    if (count[item] > maxCount) {
      maxItem = item;
      maxCount = count[item];
    }
  }
  return `${maxItem} (${maxCount}) times`;
}

let arr = [3, "a", "a", "a", 2, 3, "a", 3, 2, 4, 9, 3];

console.log(findMode(arr));

let finalWord = [];
function changeLetters(word) {
  // word = word.split('')
  for (let i = 0; i < word.length; i++) {
    // if (word[i] > "A"&&word[i]<"Z"){
    //   word[i]=word[i].toLowerCase()
    // }
    // else {
    //   word[i] = word[i].toUpperCase()
    // }
  }
}
// console.log(changeLetters('hello Sanatbek'));

// let color = ["Blue", "Orange", "Green", "Red", "Black"];

// for (let i = 1; i <= 1004; i++) {
//   let o;
//   if (i % 10 === 1 && i % 100 !== 11) o = "st";
//   else if (i % 10 === 2 && i % 100 !== 12) o = "nd";
//   else if (i % 10 === 3 && i % 100 !== 13) o = "rd";
//   else o = "th";
//   console.log(`${i}${o} color is ${color[(i - 1) % color.length]}`);
// }

// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7];
// function joinArray(arr1, arr2) {
//   let num;
//   let arr3 = [];
//   if (arr1.length > arr2.length) {
//     num = arr1.length;
//   } else num = arr2.length;
//   for (let i = 0; i < num; i++) {
//     arr3[i] = (arr1[i] || 0) + (arr2[i] || 0);
//   }

//   return arr3;
// }
// console.log(joinArray(arr1, arr2));

