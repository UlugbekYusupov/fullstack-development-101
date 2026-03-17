// // LECTURE 2

// // var a = undefined;
// // console.log(a);
// // var a=40;

// // let user = {
// //     username: "Ulugbek",
// //     age : 30,
// // }

// // PRACTICE 
// // challange 1
// console.log("5" + 5);
// console.log("5"-5);
// console.log("5"*"2");
// console.log("10"/2);
// console.log(5 + true);
// console.log("10"-true);
// console.log(5 + null);
// console.log(5 + undefined);

// // challange 2

// let result1 = Number("200") + 50; 
// console.log(result1);
// let result2 = String(25) + " years old";
// console.log(result2)
// let result3 = Boolean("false");
// console.log(result3); 
// console.log(10 - true);

// // challange 3
// const celsius = 25; 
// const fahrenheit = (celsius * 9 / 5) + 32;
// console.log("Celsius:", celsius);
// console.log("Fahrenheit:", fahrenheit);

// //challange 4
// // let budget = Number(prompt("Enter your total budget:"));
// // let rent = Number(prompt("Enter rent expense:"));
// // let food = Number(prompt("Enter food expense:"));
// // let transport = Number(prompt("Enter transport expense:"));
// // let totalExpenses = rent + food + transport;
// // let remainingBudget = budget - totalExpenses;

// // console.log("Remaining Budget:", remainingBudget);

// // if (remainingBudget < 0) {
// //     console.log("Warning: You spent too much!");
// // } else {
// //     console.log(`You are within budget. Your balance is ${remainingBudget.toFixed(2)}`);
// // }

// // challange 5
// console.log(!!"false" == !!"true");
// console.log(0 || "JavaScript");
// console.log("" && 100);
// console.log(null ?? "Fallback");
// console.log(undefined ?? "Default Value");


// // challange 6
// let a = "42";
// let b = "3.14";
// let c = "hello"; 
// let d = false;
// let e = null;

// let sum = Number(a) + Number(b) + Number(d) + Number(e);

// console.log(sum); 

// LECTURE 3
// console.log(10%3)

// let age = 20;
// let status = age >= 18 ? "Adult" : "Minor"; 
// console.log(status);

// PRACTICE
// challange 1

// let limit = Number(prompt("Enter a number to count up to:"));

// let evenCount = 0;
// let oddCount = 0;

// for (let i = 1; i <= limit; i++) {
//     if (i % 2 === 0) {
//         evenCount++; 
//     } else {
//         oddCount++; 
//     }
// }

// console.log(`Between 1 and ${limit}:`);
// console.log("Even numbers found:", evenCount);
// console.log("Odd numbers found:", oddCount);

// challange 2
// let num = Number(prompt("Enter a number to reverse:"));
// let reversed = 0;

// while (num > 0) {
//     let lastDigit = num % 10;        
//     reversed = (reversed * 10) + lastDigit; 
//     num = Math.floor(num / 10);     
// }

// console.log("Reversed Number:", reversed);

// challange 3

// let inputNum = Number(prompt("Enter a number to find its largest digit:"));
// let largest = 0;

// while (inputNum > 0) {
//     let digit = inputNum % 10; 
    
//     if (digit > largest) {     
//         largest = digit;       
//     }
    
//     inputNum = Math.floor(inputNum / 10); 
// }
// console.log("The largest digit is:", largest);

// challenge 4

// let num4 = Number(prompt("Enter a number to sum its digits:"));
// let digitSum = 0;

// while (num4 > 0) {
//     digitSum += num4 % 10; // Extract and add in one step
//     num4 = Math.floor(num4 / 10); 
// }
// console.log("Total sum of digits:", digitSum);

// challenge 5

// let num5 = Number(prompt("Enter a number to check if it's Prime:"));
// let isPrime = num5 > 1; 

// for (let i = 2; i <= Math.sqrt(num5); i++) {
//     if (num5 % i === 0) {
//         isPrime = false;
//         break; 
//     }
// }

// console.log(isPrime ? `${num5} is a Prime number` : `${num5} is NOT a Prime number`);





// LECTURE 4

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 10);

// const user = {
//     username: "Ulugbek",
//     age: 30,
//     country: "UZbekistan",
// };

// const keys = Object.keys(user);
// const values = Object.values(user);

// for (const key in user) {
//     const element = user [key];
//     console.log(element);
// }

// for (const element of keys) {
//   console.log(element);
// }


// HW practice
// 1
// let n1 = 10, n2 = 20;
// console.log(n1 > n2 ? n1 : n2);

// 2
// let x = 3, y = -7, z = 2;
// let prod = x*y*z;
// if (prod > 0) alert("The sign is +"); else if (prod < 0) alert("The sign is -");

// 3
// let a=0, b=-1, c=4;
// if (c > a && c > b) {
//     if (a > b) alert(`${c}, ${a}, ${b}`);
//     else alert(`${c}, ${b}, ${a}`);
// }

// 4
// for (let i = 0; i <= 15; i++) {
//     console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd`);
// }

// 5
// for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) console.log("FizzBuzz");
//     else if (i % 3 === 0) console.log("Fizz");
//     else if (i % 5 === 0) console.log("Buzz");
//     else console.log(i);
// }

// 6
// for (let i = 100; i <= 999; i++) {
//     let s = 0, t = i;
//     while (t > 0) { s += (t % 10) ** 3; t = Math.floor(t / 10); }
//     if (s === i) console.log(i + " is Armstrong");
// }

// 7
// const students = [
//     { name: "David", marks: 80 },
//     { name: "Vinoth", marks: 77 },
//     { name: "Divya", marks: 88 },
//     { name: "Ishitha", marks: 95 },
//     { name: "Thomas", marks: 68 }
// ];

// let totalMarks = 0;

// for (let i = 0; i < students.length; i++) {
//     totalMarks += students[i].marks;
// }

// const average = totalMarks / students.length;
// console.log("Average Grade: " + average);

// if (average < 60) {
//     console.log("Grade: F");
// } else if (average < 70) {
//     console.log("Grade: D");
// } else if (average < 80) {
//     console.log("Grade: C");
// } else if (average < 90) {
//     console.log("Grade: B");
// } else if (average < 100) {
//     console.log("Grade: A");
// }

// LECTURE 5
// FUNCTIONS
// 1.funstion declaration
// function sum  (a, b){
//     return a + b;
// }

// console.log(sum(2,5));

// 2. function expression
// let sum = function(a,b){
//     return a+b;
// }
// console.log(sum(2,3));

//3. Arrow function
// let sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(2,7));

// 4. IIFE function
// (function (a,b) {
//     return a+b;
// }) (2,3) //5

// 5. Function constructor
// let sum = new Function (
//     'a',
//     'b',
//     'return a + b'
// );
// console.log(sum (2,3));


// function outer(){

// }

// Array.prototype.greet = function(){
//     console.log(this);
//     console.log("It is coming from prototype");
// }


// Practice Challenges

// ---First challenge ---
// 1st way
// function greet(name) {
//     return `Hello, ${name}`;
// }
// console.log(greet('Rayhona'));
// 2nd way
// let greet = function (name) {
//     return `Hello, ${name}`;
// }
// console.log(greet('Rayhona'));
// 3rd way
// let greet = (name) => {
//     return `Helloooo, ${name}`;
// }
// console.log(greet('Rayhonaaa'));
// 4th way
// let greet = new Function(
//     'name',
//     'return "Hello, " + name +"!"'
// );
// console.log(greet('Rayhona'));

// ---Second challenge---
// function isPrime(a){
//     for (let i = 2; i <= Math.sqrt(a); i++) {
//         if (a % i === 0) 
//             return false;
//     }
//     return true
// }
// console.log(isPrime(7));

// ---Third challenge---
// function countDigits(n) {
//     return Math.abs(n).toString().length
// }

// console.log(countDigits(8765));

// ---Fourth Challenge---
// function isPalindrome(n) {
//     let str = n.toString();
//     let reversedStr = "";
//     for (let i = str.length - 1; i>=0; i--) {
//         reversedStr += str[i];
//     }
//     if (str == reversedStr){
//         return true; 
//     }
//     else {

//         return false;
//     }
// }
// console.log(isPalindrome(1234321));

// ---Fifth challenge---
// function isArmstrong(n) {
//     let  str = n.toString();
//     let power = str.length;
//     let sum = 0;

//     for (let i = 0; i< str.length; i++){
//         let digit = parseInt(str[i]);

//         sum += Math.pow(digit, power);
//     }
//     return sum === n;
// }
// console.log(isArmstrong(987654));

// ---Sixth challenge---
// function createCounter() {
//     let count = 0; 
//     return {
//         increment: () => ++count,
//         decrement: () => --count,
//         getCount: () => count
//     };
// }
// const counter = createCounter();
// console.log(counter.increment()); 
// console.log(counter.increment()); 
// console.log(counter.decrement()); 
// console.log(counter.getCount());  

// ---Seventh Challange---

// function orderFood() {

//     const name = prompt("What is your name?");
//     const address = prompt("What is your address?");
//     const food = prompt("What would you like to order?");
    
//     return `Dear ${name}, your order (${food}) will be ready in 15 minutes and will be delivered to your address: ${address}.`;
// }

// console.log(orderFood());

// ---Eightth challange---
// function lazyAdder(a) {
//     return function(b) {
//         return a + b;
//     };
// }
// const add10 = lazyAdder(10);
// console.log(add10(5)); 


// ASSIGNMENT HW

// challange 1
// function calculateTotal(quantity, pricePerItem) {
//     let subtotal = quantity * pricePerItem;
//     let discount = 0;

//     if (quantity >= 5) {
//         discount = 0.20; // 20%
//     } else if (quantity >= 3) {
//         discount = 0.10; // 10%
//     }

//     return subtotal - (subtotal * discount);
// }

// console.log(calculateTotal(3, 500));

//challange 2

// function checkPassword(password) {
//     let score = 0;
//     if (password.length >= 8) score++;
//     if (/[A-Z]/.test(password)) score++;
//     if (/[0-9]/.test(password)) score++;
//     if (/[^A-Za-z0-9]/.test(password)) score++;

//     if (score >= 4) return "Strong";
//     if (score >= 2) return "Medium";
//     return "Weak";
// }

// console.log(checkPassword());

// challange 3

// function atmWithdrawal(amount) {
//     if (amount % 10 !== 0) return "Error: Must be multiple of 10";
    
//     let hundreds = Math.floor(amount / 100);
//     amount %= 100;
    
//     let twenties = Math.floor(amount / 20);
//     amount %= 20;
    
//     let tens = Math.floor(amount / 10);
    
//     return `${hundreds}x$100, ${twenties}x$20, ${tens}x$10`;
// }

// console.log(atmWithdrawal(450));

// challange 4

// function startTrafficLight() {
//     function showRed() {
//         console.log("Red");
//         setTimeout(showGreen, 5000); 
//     }
//     function showGreen() {
//         console.log("Green");
//         setTimeout(showYellow, 3000); 
//     }
//     function showYellow() {
//         console.log("Yellow");
//         setTimeout(showRed, 2000); 
//     }
//     showRed();
// }

// console.log(startTrafficLight());

// challange 5

// function checkPasswordStrength(password) {
//     let hasUpper = /[A-Z]/.test(password);
//     let hasNumber = /[0-9]/.test(password);
//     let hasSpecial = /[^A-Za-z0-9]/.test(password);
//     let isLongEnough = password.length >= 8;

//     if (isLongEnough && hasUpper && hasNumber && hasSpecial) return "Strong";
//     if (isLongEnough && (hasUpper || hasNumber || hasSpecial)) return "Medium";
//     return "Weak";
// }

// console.log(checkPasswordStrength());

// challange 6

// function bankAccount(initialBalance) {
//     let balance = initialBalance; // Private variable

//     return {
//         deposit: (amount) => { balance += amount; },
//         withdraw: (amount) => {
//             if (amount <= balance) balance -= amount;
//             else console.log("Insufficient funds");
//         },
//         viewBalance: () => balance
//     };
// }

// challange 7

// function getPermissions(role) {
//     const actions = {
//         admin: ["add", "edit", "delete", "view"],
//         editor: ["edit", "view"],
//         viewer: ["view"]
//     };
//     return () => actions[role] || ["None"];
// }

// challange 8

// function calculateTax(income) {
//     if (income < 10000) return 0;
//     if (income <= 50000) return income * 0.10;
//     return income * 0.20;
// }

// console.log(calculateTax(11800));


// // LECTURE 6

// LESSON : ARRAYS

// let colors = ["Red", "Green", "Blue"];
// console.log(colors);

// let nums = new Array(5);
// nums.push(2);
// nums.push(5);
// nums.push(7);
// nums.push(3);
// nums.push(4);
// nums.push(9);
// nums.push(23);

// console.log(nums.length);

// let names = new Array("Alice", "Bob");
// names.push("John")
// console.log(names);

// let original = [1,2,3];
// let copy = [...original];

// console.log(copy);


// let numbers = Array.of(5,4,3,2)
// console.log(numbers);

// ARRAY METHOD

// console.log(numbers.push(1));
// console.log(numbers.pop());

// let numberss =  numbers.map(function (element){
//     return element **2; 
// })
// console.log(numberss);

// --filter--
// let nums = [2,5,8,3,4,7,2,4,9];
// let result = nums.filter((nums) => nums > 5);

// console.log(result);

// --reduce--
// const array = [1, 2, 3, 4];

// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);

// --sort()--
// const months = ["March", "Jan", "Feb", "Dec"];
// months.sort();
// console.log(months);

// --reverse()--
// const array = ["one", "two", "three"];
// console.log("array:", array);

// const reversed = array.reverse();
// console.log("reversed:", reversed);

// --slice()--

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));
// console.log(animals.slice(1, 5));
// console.log(animals.slice(-2));
// console.log(animals.slice(2, -1));
// console.log(animals.slice());

// --splice()--
// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// console.log(months);

// months.splice(4, 1, "May");
// console.log(months);


// PRACTICE CHALLANGES

// First ->
// arr = [2,5,8,3,7,4]
// function first(arr, n) {
//     if (n === undefined) return arr[0];
//     if (n < 0) return [];
//     return arr.slice(0, n);
// }
// console.log(first(arr, 4));


// Second ->

// arr = [7,9,0,-2];
// function last(arr, n) {
//     if (n === undefined) return arr[arr.length - 1];
//     if (n < 0) return [];
//     return arr.slice(-n);
// }
// console.log(last(arr,2));

// Third ->
// myColor= ["Red", "Green", "White", "Black"]
// function joinArray(myColor) {
//     return myColor.join(",");
// }
// console.log(joinArray(myColor));

// Fourth ->
// num = 25468;
// function withDashes(num) {
//     return num.toString().split('').join('-');
// }

// console.log(withDashes(25468));

// Fifth ->
// let arr1 = [3,8,7,6,5,3,2,3,6,5,8,-4,-3,2,1];
// function sortArray(arr1) {
//     return arr1.sort();
// }
// console.log(sortArray(arr1));

// Sixth ->
// function findMostFrequent(arr1) {
//     let counts = {};
//     let maxCount = 0;
//     let mostFrequent;

//     for (let item of arr1) {
//         counts[item] = (counts[item] || 0) + 1;
//         if (counts[item] > maxCount) {
//             maxCount = counts[item];
//             mostFrequent = item;
//         }
//     }
//     return mostFrequent;
// }

// console.log(findMostFrequent(arr1));

// Seventh ->
// const str = ["RaYHoNa"]
// function swapCase(str) {
//     return str.split('').map(char => {
//         return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
//     }).join('');
// }

// console.log(swapCase("RaYHoNa"));

// Eightth ->
// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let o = ["st", "nd", "rd", "th"]
// function showChoices(colors, o) {
//     colors.forEach((color, index) => {
//         console.log(`${index + 1}${o[index]} choice is ${color}.`);
//     });
// }
// console.log(showChoices(colors, o));

// Nineth ->
// let arr1 = [1,0,2,3,4];
// let arr2 = [3,5,6,7,8,13];
// function sumArrays(arr1, arr2) {
//     return arr1.map((val, index) => val + arr2[index]);
// }
// console.log(sumArrays(arr1, arr2));


// Lecture 7 OBJECTS 


// 1. Object Literal ({})

// let car = {
//     brand: "Tesla",
//     model: "Model S",
//     year: 2024,
//     start: function () {
//         console.log("Car is starting...");
//     }
// };
// console.log(car.brand);
// car.start();

// 2. Using new object ();
// let person = new Object();
// person.name = "Alice";
// person.age = 25;
// person.greet = function() {
//     return `Hello, my name is ${this.name}`;
// };
// console.log(person.greet());

// 3.Factory Function
// function createPerson(name, age) {
//     return {
//         name,
//         age,
//         greet (){
//             return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
//         }
//     };
// }
// let person1 = createPerson("Alice", 25);
// let person2 = createPerson("Bob", 30);
// console.log(person1.greet());
// console.log(person2.greet());

// 4. Constructor Function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function () {
//         return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
//     };
// }

// let person1 = new Person("Alice", 25);
// let person2 = new Person("Bob", 40);
// console.log(person1.greet());
// console.log(person2.greet());

// LECTURE 7 HW 

// challange 1
// const students = [
//     { name: "Alice", scores: [80, 90, 100]},
//     { name: "Bob", scores: [50, 60, 70]},
//     { name: "Charlie", scores: [30, 40, 20]}
// ];

// console.log(students);

// const studentStats = students.map(s => {
//     let avg = s.scores.reduce((sum, score) => sum + score, 0) / s.scores.length;
//     return { ...s, avg, passed: avg >= 50 };
// });

// const topStudent = studentStats.reduce((top, current) => 
//     current.avg > top.avg ? current : top
// );

// console.log(`${topStudent.name} has the highest average: ${topStudent.avg}`);


// // Challange 2
// const cart = [
//     { id: 1, name: "Laptop", price: 900, quantity: 1},
//     { id: 2, name: "Mouse", price: 50, quantity: 2},
//     { id: 3, name: "Keyboard", price: 100, quantity: 1}
// ];
// console.log(cart);

// let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

// if (total > 100) {
//     total = total * 0.9;
// }

// const mostExpensive = cart.reduce((max, item) => 
//     item.price > max.price ? item : max
// );

// console.log(`Total Price: ${total} (after discount)`);
// console.log(`Most Expensive Item: ${mostExpensive.name}`);

// challange 3
// let inventory = [
//     { id: 1, name: "Laptop", price: 1000, stock: 5 },
//     { id: 2, name: "Mouse", price: 25, stock: 50 }
// ];

// console.log(inventory);


// function addProduct(product) {
//     inventory.push(product);
// }

// function updateStock(id, newStock) {
//     let product = inventory.find(p => p.id === id);
//     if (product) product.stock = newStock;
// }

// function deleteProduct(id) {
//     inventory = inventory.filter(p => p.id !== id);
// }

// function findProduct(name) {
//     return inventory.find(p => p.name === name);
// }



// challange 4
let posts = [
    { 
        author: "Alice", 
        likes: 10, 
        shares: 1,

        comments: [
            { user: "Bob", message: "Great post!" },
            { user: "Charlie", message: "Agreed!" }
        ] 
    },
    { 
        author: "Bob", 
        likes: 50, 
        shares: 3,
        comments: [{ user: "Alice", message: "Nice!" }] 
    }
];

function getMostLiked() {
    return posts.reduce((prev, current) => (current.likes > prev.likes ? current : prev));
}

function getTotalEngagement() {
    return posts.reduce((total, post) => {

        return total + post.likes + post.shares + post.comments.length;
    }, 0);
}


const topPost = getMostLiked();
console.log(`The most liked post is by ${topPost.author} with ${topPost.likes} likes.`);

const totalEngagement = getTotalEngagement();
console.log("Total Engagement Across All Posts:", totalEngagement);

console.log(`First comment on Alice's post is from ${posts[0].comments[0].user}: "${posts[0].comments[0].message}"`);

// // challange 5

// let teams = [
//     { name: "Lions", wins: 5, losses: 1, points: 15 },
//     { name: "Tigers", wins: 7, losses: 0, points: 21 },
//     { name: "Bears", wins: 2, losses: 4, points: 6 }
// ];

// function sortTeamsByPoints() {
//     return teams.sort((a, b) => b.points - a.points);
// }

// function getBestTeam() {
//     let sorted = sortTeamsByPoints();
//     return sorted[0];
// }

// // challange 6

// const warehouse = [
//     { itemName: "Laptop", category: "Electronics", stock: 2 },
//     { itemName: "Monitor", category: "Electronics", stock: 15 },
//     { itemName: "Desk", category: "Furniture", stock: 1 }
// ];

// function getTotalStock(category) {
//     return warehouse
//         .filter(item => item.category === category)
//         .reduce((sum, item) => sum + item.stock, 0);
// }

// function checkLowStock() {
//     const lowStockItems = warehouse.filter(item => item.stock < 5);
//     lowStockItems.forEach(item => {
//         console.log(`ALERT: ${item.itemName} is low on stock! (${item.stock} left)`);
//     });
// }




































