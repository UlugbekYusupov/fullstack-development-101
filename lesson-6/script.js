
//  Challenge 1
// function first(arr, n) {
//     if (n === undefined) return arr[0];
//     if (n < 0) return [];

//     return arr.slice(0, n);
// }
// console.log(first([7, 9, 0, -2])); 
// console.log(first([], 3));            
// console.log(first([7, 9, 0, -2], 3));   
// console.log(first([7, 9, 0, -2], 6));  
// console.log(first([7, 9, 0, -2], -3));

// // Challenge 2
// function last(arr, n) {
//   if (n === undefined) return arr[arr.length - 1];

//   return arr.slice(-n);
// }
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2], 6));

// // Challenge 3
// const myColor = ["Red", "Green", "White", "Black"];

// console.log(myColor.join(", "));

// // Challenge 4
// let dashNumber = (input) => {
//     return input.toString().split('').join('-');
// }
// console.log(dashNumber("025468"));

// // Challenge 5
// var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// arr1.sort((a,b ) => a - b);
// console.log(arr1.join(","));

// //Challenge 7
// function swapCase(str) {
//     return str.split('').map(char => {
//         if (char === char.toUpperCase()) {
//             return char.toLowerCase(); 
//         } else {
//             return char.toUpperCase();
//         }
//     }).join('');
// }
// console.log(swapCase("tHE qUICK bROWN fOX")); 

// // Challenge 8
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const suffixes = ["th", "st", "nd", "rd"];

// colors.forEach((color, index) => {
//     const position = index + 1;
//     const suffix = (position <= 3) ? suffixes[position] : suffixes[0];
    
//     console.log(`${position}${suffix} choice is ${color}.`);
// });

// Challenge 9
// const array1 = [1, 0, 2, 3, 4];
// const array2 = [3, 5, 6, 7, 8, 13];

// function sumArrays(arr1, arr2) {
//     const maxLength = Math.max(arr1.length, arr2.length);
//     const result = [];

//     for (let i = 0; i < maxLength; i++) {
//         const val1 = arr1[i] || 0;
//         const val2 = arr2[i] || 0;
        
//         result.push(val1 + val2);
//     }
//     return result;
// }
// console.log(sumArrays(array1, array2));