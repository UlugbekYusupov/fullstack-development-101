//Practice
//PUSH 
// let arr = [1, 2, 3];

// arr.push(4);

// console.log(arr);

//POP
// let arr = [1, 2, 3];

// let removed = arr.pop();

// console.log(removed); 
// console.log(arr);   

//SHIFT
// let arr = [1, 2, 3];

// let removed = arr.shift();

// console.log(removed);
// console.log(arr);     

//UNSHIFT
// let arr = [2, 3];

// arr.unshift(1);

// console.log(arr); 

//MAP
// let numbers = [1, 2, 3];

// let doubled = numbers.map(n => n * 2);

// console.log(doubled); 
// console.log(numbers); 


//FILTER
// let numbers = [1, 2, 3, 4, 5];

// let even = numbers.filter(n => n % 2 === 0);

// console.log(even);

//REDUCE
// let numbers = [1, 2, 3, 4];

// let sum = numbers.reduce((acc, curr) => acc + curr, 0);

// console.log(sum); 


//SORT
// let arr = [5, 2, 8, 1];

// arr.sort((a, b) => a - b);

// console.log(arr);

//REVERCE
// let arr = [1, 2, 3];

// arr.reverse();

// console.log(arr);


//SLICE
// let arr = [1, 2, 3, 4];

// let part = arr.slice(1, 3);

// console.log(part);


//SPLICE
// let arr = [1, 2, 3, 4];

// arr.splice(1, 2);

// console.log(arr);

//FIND
// let numbers = [5, 12, 8, 130];

// let found = numbers.find(n => n > 10);

// console.log(found); 

//FINDINDEX
// let numbers = [5, 12, 8, 130];

// let index = numbers.findIndex(n => n > 10);

// console.log(index); 


//INCLUDES
// let arr = ["apple", "banana", "orange"];

// console.log(arr.includes("banana"));
// console.log(arr.includes("grape")); 



// CHALLANGE 1
// function first(arr, n) {
//   if (n === undefined) return arr[0];
//   if (n < 0) return n;
//   return arr.slice(0, n);
// }

// console.log(first([7,9,0,-2]))

//CHALLANGE 2
// function last(arr, n) {
//   if (n === undefined) return arr[arr.length - 1];
//   return arr.slice(arr.length - n);
// }


//CHALLANGE 3
// let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join(","));



//CHALLANGE 4
// function insertDashes(num) {
//   return num.toString().split("").join("-");
// }


//CHALLANGE 5
// let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// arr1.sort((a, b) => a - b);
// console.log(arr1);


//CHALLANGE 6
// function mostFrequent(arr) {
//   let maxCount = 0;
//   let maxItem;

//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;

//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) count++;
//     }

//     if (count > maxCount) {
//       maxCount = count;
//       maxItem = arr[i];
//     }
//   }

//   return maxItem + " (" + maxCount + " times)";
// }


//CHALLANGE 7
// function swapCase(str) {
//   let chars = str.split("");

//   for (let i = 0; i < chars.length; i++) {
//     if (chars[i] === chars[i].toUpperCase()) {
//       chars[i] = chars[i].toLowerCase();
//     } else {
//       chars[i] = chars[i].toUpperCase();
//     }
//   }

//   return chars.join("");
// }



//CHALLANGE 8
// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// for (let i = 0; i < color.length; i++) {
//   let number = i + 1;
//   let suffix = "th";

//   if (number === 1) suffix = "st";
//   else if (number === 2) suffix = "nd";
//   else if (number === 3) suffix = "rd";

//   console.log(number + suffix + " choice is " + color[i] + ".");
// }




//CHALLANGE 9
// function sumArrays(arr1, arr2) {
//   let maxLength = arr1.length > arr2.length ? arr1.length : arr2.length;
//   let result = [];

//   for (let i = 0; i < maxLength; i++) {
//     let val1 = arr1[i] !== undefined ? arr1[i] : 0;
//     let val2 = arr2[i] !== undefined ? arr2[i] : 0;
//     result[result.length] = val1 + val2;
//   }

//   return result;
// }