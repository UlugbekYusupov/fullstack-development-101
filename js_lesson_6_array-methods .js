//JavaScript Array Methods 

// Task 1 use push() method --- Add one or more elements to the end of an array and return the new length of the array.
let numbers = [1, 2, 3, 4, 5];

numbers.push(6); 
console.log(numbers);

// Task 2 use pop() method --- Remove the last element from an array and return that removed element. This method changes the length of the array.
const cart = ["Phone", "Laptop", "Headphones"];

const removedItem = cart.pop();

console.log("Removed item:", removedItem);
console.log("Cart now:", cart);

// Task 3 use shift() method --- Remove the first element from an array and return that removed element. This method changes the length of the array.
const queue = ["User1", "User2", "User3"];

const servedUser = queue.shift();

console.log("Served:", servedUser);
console.log("Remaining queue:", queue);

// Task 4 use unshift() method--- Add elements to the beginning of an array

const queue1 = ["Task2", "Task3"];

queue1.unshift("VIP Task1");

console.log(queue1);


// Task 5 use map() method--- Create a new array with the results of calling a provided function on every element in the calling array
const num = [1, 2, 3, 4, 5];

const doubled = num.map(num => num * 2);

console.log("Original array:", num);
console.log("Doubled array:", doubled);

// Task 6 use filter() method --- Create a new array with all elements that pass the test implemented by the provided function

const num2 = [1, 2, 3, 4, 5];

// Get only even numbers
const evenNumbers = num2.filter(num => num % 2 === 0);

console.log("Original array:", num2);
console.log("Filtered (even) array:", evenNumbers);

// Task 7 use reduce() method --- Reduce the array to a single value by applying a function to an accumulator and each element in the array

const num3 = [1, 2, 3, 4, 5, 6];

const evenCount = num3.reduce((count, num) => {
    return num % 2 === 0 ? count + 1 : count;
}, 0);

console.log(evenCount); 

// Task 8 use sort() method --- Sorts elements in place and returns the sorted array

const num4 = [4, 2, 5, 1, 3];

num4.sort(); 
console.log(num4); 

const fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

// Task 9 use reverse() method

num3.reverse();
console.log(num3); 


// task 10 use slice() method --- Extract a portion of an array without modifying the original array

const numb5 = [1, 2, 3, 4, 5];

const part = numb5.slice(1, 4);
console.log(part); 
console.log(numb5); 

// Task 11 use splice() method

// Remove 2 elements starting from index 1
numb5.splice(1, 2);
console.log(numb5);

// Add elements
numb5.splice(1, 0, 10, 20);
console.log(numb5);

// Replace elements
numb5.splice(2, 1, 99);
console.log(numb5); 

// task 12 use find() method -- Find First Match

const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "John" },
    { id: 3, name: "Mary" }
];

const user = users.find(u => u.id === 2);
console.log(user); 


// findIndex() method  --- Find Index of First Match

const users1 = ["Ali", "John", "Mary"];

const index = users1.findIndex(name => name === "John");
console.log(index); // 1

// includes()   method --– Check If Exists 

const numbers_1 = [1, 2, 3, 4, 5];

console.log(numbers_1.includes(3)); 
console.log(numbers_1.includes(6)); 




// Practice	

// Challenge 1
// - Write a JavaScript function to get the first elements of an array. Passing the parameter “n” will return the first “n” elements of the array.

function first(array, n) {
    if (array.length === 0) return [];

    if (n === undefined) return array[0];

    if (n < 0) return n;

    if (n > array.length) return array;

    return array.slice(0, n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


// Challenge 2 

// Write a JavaScript function to get the last elements of an array. Passing the parameter “n” will return the last “n” elements of the array.
function last(array, n) {
    if (array.length === 0) return [];

    if (n === undefined) return array[array.length - 1];

    if (n < 0) return n;

    if (n > array.length) return array;

    return array.slice(array.length - n);
}
console.log(last([7, 9, 0, -2]));
console.log(last([],3));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
console.log(last([7, 9, 0, -2],-3));

// Challenge 3 

// Write a simple JavaScript program to join all elements of the following array into a string.
// myColor = ["Red", "Green", "White", "Black"]; - > "Red,Green,White,Black"

const myColor = ["Red", "Green", "White", "Black"];

const colorString = myColor.join(",");

console.log(colorString); 

// Challenge 4

// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each number. 
// For example: 025468 the output should be 0-2-5-4-6-8.

let num_1 = 25468;
let str = num_1.toString(); 
let digits = str.split(''); 
let dashed = digits.join('-');
console.log(dashed);

// Challenge 5

// Write a JavaScript program to sort the items of an array.

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort((a, b) => a - b);
console.log(arr1);
let result = arr1.join(',');


//challenge 6

// Write a JavaScript program to find the most frequent item in an array.

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mostFrequentItem(arr) {
    const frequency = {};
    let maxCount = 0;
    let mostFrequent = null;

    // Count each element
    arr.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;
        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            mostFrequent = item;
        }
    });

    return `${mostFrequent} (${maxCount} times)`;
}

console.log(mostFrequentItem(arr1));


// Challenge 7 

// Write a JavaScript program that accepts a string as input and swaps the case of each character. 


let input = prompt("Enter a string:");

let swapped = "";

for (let i = 0; i < input.length; i++) {
    let char = input[i];
    
    if (char === char.toUpperCase()) {
        swapped += char.toLowerCase();
    } else if (char === char.toLowerCase()) {
        swapped += char.toUpperCase();
    } else {
        swapped += char; 
    }
}
console.log("Swapped case string:", swapped);


// Challenge 8 

//  We have the following arrays :

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let o = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
    let number = i + 1;
    let suffix = o[number] || o[0]; 
    
    if (number === 1) suffix = "st";
    else if (number === 2) suffix = "nd";
    else if (number === 3) suffix = "rd";
    else suffix = "th";
    
    console.log(number + suffix + " choice is " + color[i]);
}

// Challenge 9

// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];

let result1 = [];
let maxLength = Math.max(array1.length, array2.length);

for (let i = 0; i < maxLength; i++) {
    let sum = (array1[i] || 0) + (array2[i] || 0); // if undefined, treat as 0
    result1.push(sum);
}

console.log(result1);
