//                                  Lecture 6
//                            Arrays

let colors = ["red","green","blue"];
console.log(colors);

let nums = new Array(5);
let names = new Array("Ulugbek","Alex");
console.log(names);

names.push("john");
console.log(names)


let original = [1,2,3];
let copy = [...original]

console.log(original.__proto__);
console.log(copy);

let numbers = Array.of(5,4,3,2,1);
console.log(numbers);

console.log(numbers.push(1)); //  6 - length
console.log(numbers.pop());
console.log(numbers) 

let numberss = numbers.map(function(element) {
    return element ** 2;
});
console.log(numberss);


       //   Map array method
const array = [1,4,9,16];
const mapped = array.map((x) => x * 2);

console.log(mapped);

        //  Array.prototype.pop()
const plants = ["cabbage","tomato","potato","cauliflower"];

console.log(plants.pop());
console.log(plants);

plants.pop();
console.log(plants);

//            Reduce array type
// const array = [1,2,3,4];
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue,
// );

// console.log(sumWithInitial);

//                 Reverse() array type
// const array = ['one','two','three'];
// console.log("array:", array);

// const reversed = array.reverse();
// console.log("reversed:", reversed);

//                      Shift() array type
// const array = [1,2,3];

// const firstElement = array.shift();

// console.log(array);
// console.log(firstElement);

//                      Slice()  array type

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(3));

console.log(animals.slice(2, 4));

console.log(animals.slice(1, 5));

console.log(animals.slice(-2));

console.log(animals.slice(2, -1));

console.log(animals.slice());


//                     Sort()  array type
// const months = ["March", "Jan", "Feb", "Dec"];
// months.sort();
// console.log(months);

// const array = [1, 30, 4, 21, 100000];
// array.sort();
// console.log(array);



// Challenge 1
function first(arr,n) {
    if (arr.length === 0) {
        return[];
    }

    if (n === undefined) {
        return arr[0];
    }

    if (n < 0) {
        return n;
    }
    return arr.slice(0, n);
}

console.log(first([11,2,3,4,5]));

//  Challenge 2

function last(arr, n) {
    if (arr.length === 0) {
        return [];
    }

    if (n === undefined) {
        return arr[arr.length - 1];
    }

    return arr.slice(Math.max(arr.length - n, 0));
}
console.log(last([2,3,4,5,-8]));

// Challenge 3
// let myColor = ["Red","Green","White","Black"];

// let result = myColor.join(",");
// console.log(result);

// Challenge 4
// function insertDash(num) {
//     let str = num.toString();
//     let result = "";

//     for (let i=0; i<str.length; i++) {
//         result += str[i];

//         if (
//             str[i] % 2 === 0 &&
//             str[i+1] % 2 === 0
//         ) {
//             result += "-";
//         }
//     }
//     return result;
// }
// console.log(insertDash(283468));  // output: 2-834-6-8


//    Challenge 5
// var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// arr1.sort(function(a,b) {
//     return a - b;
// });
// console.log(arr1);


//    Second way
function sortArray(arr) {
    return arr.sort()
}
console.log(sortArray([2,3,4,5,1,3,-4,-3]))

// Challenge 6
function mostFrequent(arr) {

    let count = {};
    let max = 0;
    let most;

    for (let i = 0; i < arr.length; i++) {

        let item = arr[i];
        count[item] = (count[item] || 0) + 1;

        if (count[item] > max) {
            max = count[item];
            most = item;
        }
    }

    return most + " (" + max + "items)";
}

var arr1 = [3,'a','a','a',2,2,2,2,3,3,2,4,9,3];
console.log(mostFrequent(arr1));


//  Challenge 7
function swapCase(str) {
    let result = "";

    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
    }
    return result;
}
console.log(swapCase("The Quick Brown Fox"));

//  Challenge 8
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let o = ["th","st","nd","rd"];

for (let i = 0; i < color.length; i++) {

    let position = i + 1;
    let ordinal;

    if (position === 1) {
        ordinal = position + o[1];
    } 
    else if (position === 2) {
        ordinal = position + o[2];
    } 
    else if (position === 3) {
        ordinal = position + o[3];
    }
    else {
        ordinal = position + o[0];
    }
    console.log(ordinal + " color " + color[i]);
    
}


//  Challeng 9
let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];

let result = [];

let maxLength = Math.max(array1.length, array2.length);

for (let i = 0; i < maxLength; i++) {

    let val1 = array1[i] || 0;
    let val2 = array2[i] || 0;

    result.push(val1 + val2);
}
console.log(result);






