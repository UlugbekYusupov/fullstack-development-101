// // // // ___________________Lecture 6 (Arrays)_____________________________

// // const numbers = [1,2,3,10,4,5,6];
// // console.log(numbers);

// // // Push
// // numbers.push(12);
// // console.log(numbers);

// // // Pop
// // numbers.pop();
// // console.log(numbers);

// // // Shift
// // numbers.shift();
// // console.log(numbers);

// // // Unshift
// // numbers.unshift(1);
// // console.log(numbers);

// // // Map
// // let number = numbers.map(function(a) {
// //     console.log(`Then numbers is ${a}`);
// // });

// // // Filter
// // let even = numbers.filter(a => a % 2 === 0);
// // console.log(even);

// // // Reduce
// // let sum = numbers.reduce((a, b) => a + b);
// // console.log(sum);

// // // Sort
// // let sortedNumber = numbers.sort();
// // console.log(sortedNumber);

// // // Reverse
// // let reversedNumbers = numbers.reverse();
// // console.log(reversedNumbers);

// // // Slice
// // let numThree = numbers.slice(0, 3);
// // console.log(numThree);

// // // Splice
// // let splicedNum = numbers.splice(1, 2);
// // console.log(splicedNum);
// // console.log(numbers);

// // // Find
// // let firstUnderFive = numbers.find(num => num < 5);
// // console.log(firstUnderFive);

// // // FindIndex
// // let indexOfFirstUpperFive = numbers.findIndex(num => num > 5);
// // console.log(indexOfFirstUpperFive);

// // // Includes
// // let hasFive = numbers.includes(5);
// // console.log(hasFive);

// // // Challenges

// // 1:

// numbers = [1,2,3,4,5,6,7,8,9];

// function first(arr,n) {
//     if (arr.length === 0) {
//         return[];
//     }

//     if (n === undefined) {
//         return arr[0];
//     }

//     if (n < 0) {
//         return n;
//     }
//     return arr.slice(0, n);
// }

// console.log(first(numbers));

// // 2:

// numbers = [1,2,3,4,5,6,7,8,9];

// const lastElement = numbers.length - 1
// function first(arr,n) {
//     if (arr.length === 0) {
//         return[];
//     }

//     if (n === undefined) {
//         return arr[lastElement];
//     }

//     if (n < 0) {
//         return n;
//     }
//     return arr.slice(-n);
// }

// console.log(first(numbers, 4));

// // 3:

// const myColor = ["Red", "Green", "White", "Black"];

// let all = myColor[0];

// for (let i = 1; i < myColor.length; i++) {
//     all += "," + myColor[i];
// }

// console.log(all);

// // 4:

// // const nums = prompt("Enter a number: ");
// // let num = nums[0];

// // for (let i = 1; i < nums.length; i++) {
// //     num += "-" + nums[i];
// // };

// // alert(num);

// // 5:

// const arrayNew = [-3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// let sortedArray = arrayNew.sort();

// console.log(sortedArray);

// // 6:

// let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// let count = {};
// let max = 0;
// let result;

// for (let a of arr) {
//     count[a] = (count[a] || 0) + 1;

//     if (count[a] > max) {
//         max = count[a];
//         result = a;
//     }
// }

// console.log(result);

// // 7:

// const word = "The Quick Brown Fox";

// let reversedWord = "";

// for (let i = 0; i < word.length; i++) {
//     if (word[i] === word[i].toUpperCase()) {
//         reversedWord += word[i].toLowerCase();
//     } else {
//         reversedWord += word[i].toUpperCase();
//     }
// }

// console.log(reversedWord);

// // 8:

const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
const o = ["th","st","nd","rd"];
let index = 0;
let belgi = "";

for (let i = 0; i < color.length; i++) {
    index += 1;

    if (index === 1){
        belgi = o[0];
        console.log(`${index}${belgi} choice is ${color[i]}`);
    } else if (index === 2) {
        belgi = o[1];
        console.log(`${index}${belgi} choice is ${color[i]}`);
    } else if ( index === 3) {
        belgi = o[2];
        console.log(`${index}${belgi} choice is ${color[i]}`);
    } else {
        belgi = o[3];
        console.log(`${index}${belgi} choice is ${color[i]}`);
    };
};

// // 9:

// const array1 = [1,0,2,3,4];
// const array2 = [3,5,6,7,8,13];

// let combinedArray = [];

// for (let i = 0; i < array1.length || i < array2.length; i++) {
//     let num1 = array1[i] || 0;
//     let num2 = array2[i] || 0;

//     combinedArray.push(num1 + num2);
// }

// console.log(combinedArray);