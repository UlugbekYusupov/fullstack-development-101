// // // // _____________________________Lecture 6 (Arrays)_____________________________

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

// let array1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// function mostFrequent(arr) {
//     let count = {};
//     let max = 0;
//     let item;

//     for (let i = 0; i < arr.length; i++) {
//         count[arr[i]] = (count[arr[i]] || 0) + 1;

//         if (count[arr[i]] > max) {
//             max = count[arr[i]];
//             item = arr[i];
//         }
//     }

//     return item + " ( " + max + " times )";
// }


// console.log(mostFrequent(array1));

// // 7:

// const word = "The Quick Brown Fox";

// function something(arr) {

//     let reversedWord = "";

//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === word[i].toUpperCase()) {
//             reversedWord += word[i].toLowerCase();
//         } else {
//             reversedWord += word[i].toUpperCase();
//         };
//     };
//     return reversedWord;
// };

// console.log(something(word));

// // // 8:

// const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const o = ["th","st","nd","rd"];
// let index = 0;
// let belgi = "";

// for (let i = 0; i < color.length; i++) {
//     index += 1;

//     if (index === 1){
//         belgi = o[0];
//         console.log(`${index}${belgi} choice is ${color[i]}`);
//     } else if (index === 2) {
//         belgi = o[1];
//         console.log(`${index}${belgi} choice is ${color[i]}`);
//     } else if ( index === 3) {
//         belgi = o[2];
//         console.log(`${index}${belgi} choice is ${color[i]}`);
//     } else {
//         belgi = o[3];
//         console.log(`${index}${belgi} choice is ${color[i]}`);
//     };
// };

// // 9:

// const array1 = [1,0,2,3,4];
// const array2 = [3,5,6,7,8,13];

// function something (arr1, arr2) {
//     let combinedArray = [];

//     for (let i = 0; i < array1.length || i < array2.length; i++) {
//         let num1 = array1[i] || 0;
//         let num2 = array2[i] || 0;

//         combinedArray.push(num1 + num2);
//     };
//     return combinedArray;
// }

// console.log(something(array1, array2));

// // // // ____________________________ Lecture 7 (Objects) ________________________________

// let car = {
//     brand: "Tesla",
//     model: "Model S",
//     year: 2024,
//     start: function() {
//         console.log("Car is starting...");
//     }
// };

// console.log(car['brand']);
// car.start();


// // Practises

// // 1:

// const students = [
//     { name: "Alice", scores: [80, 90, 100] },
//     { name: "Bob", scores: [50, 60, 70] },
//     { name: "Charlie", scores: [30, 40, 20] }
// ];

// function averageGrade() {

//     let result = [];

//     for (const student of students) {
//         let score = 0;

//         for (const grade of student.scores) {
//             score += grade;
//         }

//         let average = score / student.scores.length;

//         result.push({
//             name: student.name,
//             average: average
//         });
//     }

//     return result;
// }

// function isPassed() {

//     const averages = averageGrade();

//     let result = [];

//     for (const student of averages) {

//         let status = student.average >= 50 ? "Passed" : "Failed";

//         result.push({
//             name: student.name,
//             average: student.average,
//             status: status
//         });
//     }

//     return result;
// }

// const result = isPassed();

// for (const student of result) {
//     console.log(student.name, student.average, student.status);
// }

// // 2:

// const cart = [
//     { id: 1, name: "Laptop", price: 80, quantity: 1 },
//     { id: 2, name: "Mouse", price: 20, quantity: 2 },
//     { id: 3, name: "Keyboard", price: 40, quantity: 1 }
// ];

// const totalPrice = cart.reduce((total, item) =>
//     total + item.price * item.quantity, 0);

// let finalPrice = totalPrice;

// if (totalPrice > 100) {
//     finalPrice = totalPrice - totalPrice * 0.1;
// }

// const mostExpensive = cart.reduce((max, item) =>
//     item.price > max.price ? item : max
// );

// console.log(`Total: ${totalPrice}`);
// console.log(`After Discount: ${finalPrice}`);
// console.log('Most Expensive:', mostExpensive);

// // 3:

// let products = [
//     { id: 1, name: "Phone", price: 500, stock: 10 },
//     { id: 2, name: "Tablet", price: 300, stock: 5 }
// ];

// function addProduct(product) {
//     products.push(product);
// }

// function updateStock(id, newStock) {
//     const product = products.find(p => p.id === id);
//     if (product) product.stock = newStock;
// }

// function deleteProduct(id) {
//     products = products.filter(p => p.id !== id);
// }
// function findProduct(name) {
//     return products.find(p => p.name === name);
// }

// addProduct({ id: 3, name: "Laptop", price: 900, stock: 4 });
// updateStock(1, 20);
// deleteProduct(2);

// console.log(findProduct("Laptop"));
// console.log(products);

// // 4:

// const posts = [
//     { author: "Ali", likes: 120, comments: 30, shares: 10 },
//     { author: "Vali", likes: 200, comments: 40, shares: 20 },
//     { author: "Sami", likes: 150, comments: 25, shares: 15 }
// ];

// const mostLiked = posts.reduce((max, post) =>
//     post.likes > max.likes ? post : max
// );

// const totalEngagement = posts.reduce((sum, post) =>
//     sum + post.likes + post.comments + post.shares, 0);

// console.log("Most liked:", mostLiked);
// console.log("Total engagement:", totalEngagement);

// // 5:

// const teams = [
//     { name: "Team A", wins: 5, losses: 1, points: 15 },
//     { name: "Team B", wins: 4, losses: 2, points: 12 },
//     { name: "Team C", wins: 6, losses: 0, points: 18 }
// ];

// const ranking = teams.sort((a, b) => b.points - a.points);

// const bestTeam = ranking[0];

// console.log("Ranking:", ranking);
// console.log("Best Team:", bestTeam);

// // 6:

// const inventory = [
//     { itemName: "Apple", category: "Food", stock: 50 },
//     { itemName: "Banana", category: "Food", stock: 20 },
//     { itemName: "Laptop", category: "Electronics", stock: 5 },
//     { itemName: "Mouse", category: "Electronics", stock: 15 }
// ];

// const stockByCategory = inventory.reduce((acc, item) => {
//     acc[item.category] = (acc[item.category] || 0) + item.stock;
//     return acc;
// }, {});

// const lowStock = inventory.filter(item => item.stock < 10);

// console.log("Stock by Category:", stockByCategory);
// console.log("Low Stock Items:", lowStock);
