// // // Lecture 6 (Arrays)

// const numbers = [1,2,3,10,4,5,6];
// console.log(numbers);

// // Push
// numbers.push(12);
// console.log(numbers);

// // Pop
// numbers.pop();
// console.log(numbers);

// // Shift
// numbers.shift();
// console.log(numbers);

// // Unshift
// numbers.unshift(1);
// console.log(numbers);

// // Map
// let number = numbers.map(function(a) {
//     console.log(`Then numbers is ${a}`);
// });

// // Filter
// let even = numbers.filter(a => a % 2 === 0);
// console.log(even);

// // Reduce
// let sum = numbers.reduce((a, b) => a + b);
// console.log(sum);

// // Sort
// let sortedNumber = numbers.sort();
// console.log(sortedNumber);

// // Reverse
// let reversedNumbers = numbers.reverse();
// console.log(reversedNumbers);

// // Slice
// let numThree = numbers.slice(0, 3);
// console.log(numThree);

// // Splice
// let splicedNum = numbers.splice(1, 2);
// console.log(splicedNum);
// console.log(numbers);

// // Find
// let firstUnderFive = numbers.find(num => num < 5);
// console.log(firstUnderFive);

// // FindIndex
// let indexOfFirstUpperFive = numbers.findIndex(num => num > 5);
// console.log(indexOfFirstUpperFive);

// // Includes
// let hasFive = numbers.includes(5);
// console.log(hasFive);

// // Challenges

// 1:

numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers[0]);

// 2:

let lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]);

// 3:

const myColor = ["Red", "Green", "White", "Black"];

let all = "";

for (let i = 0; i < myColor.length; i++) {
    all += myColor[i] + ".";
}

console.log(all);

// 4:

// const nums = prompt("Enter a number: ");
// let num = nums[0];

// for (let i = 1; i < nums.length; i++) {
//     num += "-" + nums[i];
// };

// alert(num);

// 5:

const arrayNew = [-3, 8, 7, 6, 5, -4, 3, 2, 1 ];
let sortedArray = arrayNew.sort();

console.log(sortedArray);

// 6:

let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let result = arr1.reduce((acc, num) => {
    acc.count[num] = (acc.count[num] || 0) + 1;

    if (acc.count[num] > acc.maxCount) {
        acc.maxCount = acc.count[num];
        acc.mostFrequent = num;
    }

    return acc;
}, { count: {}, maxCount: 0, mostFrequent: null });

console.log(result.mostFrequent);

// 7:

const word = "The Quick Brown Fox";

let reversedChar = "";

for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
        reversedChar += word[i].toLowerCase();
    } else {
        reversedChar += word[i].toUpperCase();
    }
}

console.log(reversedChar);

// 8:

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

// 9:

const array1 = [1,0,2,3,4];
const array2 = [3,5,6,7,8,13];

let combinedArray = [];

for (let i = 0; i < array1.length || i < array2.length; i++) {
    let num1 = array1[i] || 0;
    let num2 = array2[i] || 0;

    combinedArray.push(num1 + num2);
}

console.log(combinedArray);