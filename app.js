// a = +"200";
// console.log(typeof a);
// console.log("5" + 5); // '55'
// console.log("5" - 5); // 0
// console.log("5" * "2"); //   10
// console.log("10" / 2); // 5
// console.log(5 + true); // 6
// console.log("10" - true); // 9
// console.log("5" + true); // '5true'
// console.log(5 + null); // 5
// console.log(5 + undefined); // NaN
// console.log(+"200" + 50); // 250
// console.log(25 + " years old"); // '25 years old'
// console.log("false" == String); // false
// console.log("10" - true); // 9

// // TASK 1
// const celsius = 25;
// // const celsius = 30; Невозможно повторно объявить переменную "celsius" с областью видимости "Блок".
// const fahrenheit = (celsius * 9 / 5) + 32;
// console.log("Celsius:", celsius);
// console.log("Fahrenheit:", fahrenheit);
// const celsius2 = Number(prompt("Enter temperature in Celsius:"));
// const fahrenheit2 = (celsius2 * 9 / 5) + 32;
// console.log("Celsius:", celsius2);
// console.log("Fahrenheit:", fahrenheit2);

// // TASK 2
// let budget = String(prompt("Enter your budget:"));
// let fExpenses = Number(prompt("Enter your first expense:"));
// let sExpenses = Number(prompt("Enter your second expense:"));
// let thExpenses = Number(prompt("Enter your third expense:"));
// let isBudget = budget - (fExpenses + sExpenses + thExpenses);
// if (isBudget < 0) {
//     console.log("You have negative budget:", isBudget);
// }
// else if (isBudget > 0) {
//     console.log("Your budget:", isBudget);
// }

// console.log(!!'false' == !!'true');
// console.log(0 || 'JavaScript');
// console.log(" " && 100);
// console.log(null ?? "Fallback");
// console.log(undefined ?? "Default Value");

// let a ='42'
// let b = '3.14'
// let c ='hello'
// let d = false
// let e = null
// let sum = Number(a) + Number(b) + Number(d) + Number(e);
// console.log(sum);
// let f = {username:'jogn'}
// let g = {username:'jogn'}
// console.log(f == g);

// challenge 1
// let a = 5
// if (a % 2 === 0) {
//     console.log('even numbers', a/2);
//     console.log('odd numbers', a/2);
// }
// else {
//        console.log('even numbers', (a+1)/2);
//     console.log('odd numbers', (a+1)/2);

// }

// challenge 2
// let number = 1234
// let reverse= 0
// while(number>0){
//     let digit = number % 10
//     number = Math.floor(number/10)
//     reverse = reverse * 10 + digit
// }
// console.log(reverse);

// for (let i = 0; i < number.toString().length; i++) {
//     console.log(i);

// }

// PRACTICE
// 1)
// f = 1
// s = 2
// if (f>s) {
//     console.log("f is greater than s");
// } else {
//     console.log("s is greater than f");
// }

// 2)
// let nums = [1,4,-4,2,1]
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//         alert("-");
//     }
// }

// 3)

// let numsSort = [1,4,-4,2,1]
// let a = numsSort.sort((a,b) => b-a)
// console.log(a);

// 4)
// for (let i = 0; i != 15; i++) {
//     if (i % 2 == 0) {
//         console.log('even number', i);
//     }
//     else {
//         console.log('odd number', i);
//     }
// }

// 5)
// for (let i = 1; i <=100; i++){
//       if (i %3 ==0 && i %5 ==0) {
//         console.log('FIZZBUZZ', i);
//     }
//     else if (i %3 ==0) {
//         console.log('FIZZ', i);
//     }
//     else if (i %5 ==0) {
//         console.log('BUZZ', i);
//     }

// }

// 6)
// let num = +prompt()
//     let hundreds = Math.floor(num / 100);
//     let tens = Math.floor((num % 100) / 10);
//     let ones = num % 10;
//     let armstrong = hundreds**3 + tens**3 + ones**3;
//     if (armstrong === num) {
//         console.log(num);
//     }

// 7)
// let students = [
//     { name: "David", marks: 80 },
//     { name: "Vinoth", marks: 77 },
//     { name: "Divya", marks: 88 },
//     { name: "Ishitha", marks: 95 },
//     { name: "Thomas", marks: 68 }
// ];
// let sum = 0;
// for (let student of students) {
//     sum += student.marks;
// }
// let average = sum / students.length;
// let grade;
// if (average < 60) {
//     grade = "F";
// } else if (average < 70) {
//     grade = "D";
// } else if (average < 80) {
//     grade = "C";
// } else if (average < 90) {
//     grade = "B";
// } else {
//     grade = "A";
// }
// console.log(`Average: ${average}`);
// console.log(`Grade: ${grade}`);
// console.log(`Grade: ${grade}`);

// // 1)
// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }
// greet("Mirzoulug'bek")

// let greetLet = function (name) {
//     console.log(`Hello, ${name}!`);
// }
// greetLet("Mirzoulug'bek")

// let greetArrow = (name) => {
//       console.log(`Hello, ${name}!`);
// }
// greetArrow("Mirzoulug'bek")

// let greetConstructor = new Function('name', 'console.log(`Hello, ${name}!`);;');
// greetConstructor("Mirzoulug'bek")
// 2)
// function isPrime(num) {
//     if (num%2==1) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isPrime(7))

// 3)
// function countDigits(num) {
//     return num.toString().length;
// }
// console.log(countDigits(12345))

// 4)
// function isPalindrome(num){
//     let str = num.toString();
//     let reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }
// console.log(isPalindrome(12321))

// 5)
// function isArmstrong(num) {
//    let ones = Math.floor(num % 10);
//    let tens = Math.floor((num % 100) / 10);
//    let hundreds = Math.floor(num / 100);
//    let sum = Math.pow(ones, 3) + Math.pow(tens, 3) + Math.pow(hundreds, 3);
//    return sum === num;
// }
// console.log(isArmstrong(153));

// 6)
// function createCounter(start = 0) {
//   let count = start
//   return {
//     increment() {
//       count++
//       return count
//     },
//     decrement() {
//       count--
//       return count
//     },
//     getCount() {
//       return count
//     }
//   }
// }
// const counter = createCounter(5)
// console.log(counter.getCount())
// console.log(counter.increment())
// console.log(counter.getCount())

// 7)
// function orderFood() {
//     const name = prompt("Enter your name:")
//     const address = prompt("Enter your address: ")
//     const meal = prompt("Enter your meal:")
//     console.log(`Dear ${name}, your ordered food ${meal} will be ready in 15 minutes and will be delivered to ${address}.`)
// }
// orderFood()

// 8)
// function lazyAdder(a) {
//     return function(b) {
//         return a + b;
//     }
// }
// const add5 = lazyAdder(5);
// console.log(add5(10));
// console.log(add5(20));
//challenge 1
// function calculateTotal(price, quantity) {
//   let total = price * quantity;
//   if (quantity >= 5) total *= 0.8;
//   else if (quantity >= 3) total *= 0.9;
//   return total;
// }

// //challenge 2
// function checkPasswordStrength(password) {
//   let score = 0;
//   if (password.length >= 8) score++;
//   if (/[A-Z]/.test(password)) score++;
//   if (/[0-9]/.test(password)) score++;
//   if (/[^A-Za-z0-9]/.test(password)) score++;

//   if (score <= 2) return "Weak";
//   if (score === 3) return "Medium";
//   return "Strong";
// }

// //challenge 3
// function atmWithdraw(amount) {
//   if (amount % 10 !== 0) return "Error";

//   let bills = {};
//   bills[100] = Math.floor(amount / 100);
//   amount %= 100;
//   bills[20] = Math.floor(amount / 20);
//   amount %= 20;
//   bills[10] = Math.floor(amount / 10);

//   return bills;
// }

// //challenge 4
// function trafficLight() {
//   function red() {
//     console.log("Red");
//     setTimeout(green, 5000);
//   }
//   function green() {
//     console.log("Green");
//     setTimeout(yellow, 3000);
//   }
//   function yellow() {
//     console.log("Yellow");
//     setTimeout(red, 2000);
//   }
//   red();
// }

// //challenge 5
// function checkPasswordStrength2(password) {
//   let score = 0;
//   if (password.length >= 8) score++;
//   if (/[A-Z]/.test(password)) score++;
//   if (/[0-9]/.test(password)) score++;
//   if (/[^A-Za-z0-9]/.test(password)) score++;

//   if (score <= 2) return "Weak";
//   if (score === 3) return "Medium";
//   return "Strong";
// }

// //challenge 6
// function bankAccount(initialBalance = 0) {
//   let balance = initialBalance;

//   return {
//     deposit(amount) {
//       balance += amount;
//       return balance;
//     },
//     withdraw(amount) {
//       if (amount > balance) return "Insufficient funds";
//       balance -= amount;
//       return balance;
//     },
//     viewBalance() {
//       return balance;
//     },
//   };
// }

// //challenge 7
// function createUser(role) {
//   return {
//     role,
//     can(action) {
//       const permissions = {
//         admin: ["add", "edit", "delete", "view"],
//         editor: ["edit", "view"],
//         viewer: ["view"],
//       };
//       return permissions[role]?.includes(action) || false;
//     },
//   };
// }

// //challenge8
// function calculateTax(income) {
//   if (income < 10000) return 0;
//   if (income <= 50000) return income * 0.1;
//   return income * 0.2;
// }

// //task1
// function debounce(fn, delay) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => fn.apply(this, args), delay);
//   };
// }

// //task2
// function throttle(fn, interval) {
//   let lastTime = 0;
//   return function (...args) {
//     const now = Date.now();
//     if (now - lastTime >= interval) {
//       lastTime = now;
//       fn.apply(this, args);
//     }
//   };
// }

// //task3
// function taskScheduler() {
//   let tasks = [];

//   return {
//     schedule(task, delay) {
//       const id = setTimeout(task, delay);
//       tasks.push(id);
//     },
//     cancelAll() {
//       tasks.forEach((id) => clearTimeout(id));
//       tasks = [];
//     },
//   };
// }

// task 4

// let inp = prompt('enter the numbers: ')

// let dashed = inp.split('').join('-')
// console.log(dashed);

// task 5
// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// console.log(arr1.sort());

// task 6
// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var mf = 1;
// var m = 0;
// var item;
// for (var i = 0; i < arr1.length; i++) {
//   for (var j = i; j < arr1.length; j++) {
//     if (arr1[i] == arr1[j]) m++;
//     if (mf < m) {
//       mf = m;
//       item = arr1[i];
//     }
//   }
//   m = 0;
// }
// console.log(`${item} ( ${mf} times )`);

// task 7
// let inp = prompt('enter the text: ')
// let reversed = inp.split('').map(e => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join()
// console.log(reversed);

// task 8
// let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

// color.map((e, i)=>{
//    if ((i+1)%10 == 1 && (i+1) !== 11) {
//       console.log(`${i+1}st choice is ${e}`);
//    }else if((i+1)%10 == 2 && (i+1) !== 12){
//       console.log(`${i+1}nd choice is ${e}`);
//    }else if((i+1)%10 == 3 && (i+1) !== 13){
//       console.log(`${i+1}rd choice is ${e}`);
//    }else{
//       console.log(`${i+1}th choice is ${e}`);
//    }
// })
// console.log(1%10 ==1 && !11);

// task 9
// let array_1 = [1, 2, 3, 5, 6];
// let array_2 = [3, 5, 6, 7, 8, 13];

// let newarr = [];

// if (array_1.length > array_2.length) {
//   newarr = array_1.map((e, i) => {
//     if (array_1[i] === undefined) {
//       return 0 + array_2[i];
//     } else if (array_2[i] === undefined) {
//       return 0 + array_1[i];
//     } else {
//       return array_1[i] + array_2[i];
//     }
//   });
// } else {
//   newarr = array_2.map((e, i) => {
//     if (array_1[i] === undefined) {
//       return 0 + array_1[i];
//     } else if (array_2[i] === undefined) {
//       return 0 + array_1[i];
//     } else {
//       return array_1[i] + array_2[i];
//     }
//   });
// }
// console.log(newarr);

// task 4

// let number = prompt("Enter the number: ");
// let result = number.split("").join("-");
// console.log(result);

// task 5

// let newarr1 = [9, -3, 8, 7, 6, 5, 4, 3, 2, 1];
// console.log(newarr1.sort());

// challange 9
// let array_1 = [1, 0, 2, 3, 4];
// let array_2 = [2, 6, 1, 9, 4, 3, 2, 3, 5, 2];
// let final_array = [];

// if (array_1.length > array_2.length) {
//   for (let i = 0; i < array_1.length; i++) {
//     if (array_2[i] === undefined) {
//       final_array.push(array_1[i]);
//     } else {
//       final_array.push(array_1[i] + array_2[i]);
//     }
//   }
// } else {
//   for (let i = 0; i < array_2.length; i++) {
//     if (array_1[i] === undefined) {
//       final_array.push(array_2[i]);
//     } else {
//       final_array.push(array_1[i] + array_2[i]);
//     }
//   }
// }

// console.log(final_array);
// console.log(array_1);
// console.log(array_2);

// OBJECTS
// challange 1
// const students = [
//   {
//     name: "Alice",
//     scores: [80, 90, 100],
//   },
//   {
//     name: "Bob",
//     scores: [50, 60, 70],
//   },
//   {
//     name: "Charlie",
//     scores: [30, 40, 20],
//   },
// ];
// let result = [];
// for (let i = 0; i < students.length; i++) {
//   let average = 0;
//   for (let j = 0; j < students[i].scores.length; j++) {
//     average += students[i].scores[j];
//   }
//   average = average / students[i].scores.length;
//   result.push(average);
// }
// console.log(result);

// challange 2
// const cart = [
//   {
//     id: 1,
//     name: "Laptop",
//     price: 900,
//     quantity: 1,
//   },
//   {
//     id: 2,
//     name: "Mouse",
//     price: 50,
//     quantity: 2,
//   },
//   {
//     id: 3,
//     name: "Keyboard",
//     price: 100,
//     quantity: 1,
//   },
// ];

// let total_price = 0;
// for (let i = 0; i < cart.length; i++) {
//   let price = 0;
//   price = cart[i].price * cart[i].quantity;
//   total_price = total_price + price;
// }
// if (total_price > 100) {
//   total_price = total_price * 0.9;
// }
// console.log(total_price);

// Challenge 2

// const cart = [
//   { id: 1, name: "laptop", price: 900, quantity: 1 },
//   { id: 2, name: "Mouse", price: 50, quantity: 2 },
//   { id: 3, name: "laptop", price: 100, quantity: 1 },
// ];

// totalPrice = 0;

// for (let item of cart) {
//   totalPrice = totalPrice + item.price * item.quantity;
// }

// console.log("\nTotal Price: $" + totalPrice);

// if (totalPrice > 100) {
//   totalPrice = totalPrice * 0.9;
// }
// console.log("Total Price after discount: $" + totalPrice);

// mostExpensiveItem = cart[0];

// for (let item of cart) {
//   if (item.price > mostExpensiveItem.price) {
//     mostExpensiveItem = item;
//   }
// }
// console.log(
//   "Most Expensive Item: " +
//     mostExpensiveItem.name +
//     " ($" +
//     mostExpensiveItem.price +
//     ")",
// );

// items = [];
// for (let item of cart) {
//   console.log(item.name, item.price);
// }

// Challa`nge 3

// Product Inventory Management

// const products = [
//   { id: 1, name: "Laptop", price: 900, quantity: 10 },
//   { id: 2, name: "Mouse", price: 50, quantity: 50 },
//   { id: 3, name: "Keyboard", price: 80, quantity: 30 },
// ];

// function addProduct(newProduct) {
//   products.push(newProduct);
// }
// console.log("Products before adding new product:");
// for (let product of products) {
//   console.log(product.name, product.price, product.quantity);
// }

// addProduct({ id: 4, name: "Monitor", price: 200, quantity: 20 });
// console.log("\nProducts after adding new product:");
// for (let product of products) {
//   console.log(product.name, product.price, product.quantity);
// }

// function updateStock(productId, newQuantity) {
//   for (let product of products) {
//     if (product.id === productId) {
//       product.quantity = newQuantity;
//     }
//   }
// }

// console.log("\nProducts after updating stock:");
// updateStock(2, 40);
// for (let product of cart) {
//   console.log(product.name, product.price, product.quantity);
// }

// function deleteProduct(productId) {
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].id === productId) {
//       delete products[i];
//       break;
//     }
//   }
// }

// deleteProduct(3);
// console.log("\nProducts after deleting a product:");
// for (let product of products) {
//   console.log(product.name, product.price, product.quantity);
// }

// function findProduct(productName) {
//   for (let product of products) {
//     if (product.name === productName) {
//       return product;
//     }
//   }
//   return null;
// }

// findProduct("Laptop");

// Challenge 4
// const posts = [
//   { author: "Alice", content: "Hello World!", likes: 150, comments: 20, shares: 10 },
//   { author: "Bob", content: "JavaScript is awesome!", likes: 200, comments: 30, shares: 5 },
//   { author: "Charlie", content: "I love coding!", likes: 180, comments: 25, shares: 8 },
// ];

// function mostLikedPost() {
//   let topPost = posts[0];
//   for (let post of posts) {
//     if (post.likes > topPost.likes) {
//       topPost = post;
//     }
//   }
//   return topPost;
// }

// console.log("\nMost Liked Post:");
// let topPost = mostLikedPost();
// console.log("Author: " + topPost.author);
// console.log("Content: " + topPost.content);
// console.log("Likes: " + topPost.likes);

// function totalEngagement(post) {
//   return post.likes + post.comments + post.shares;
// }

// console.log("\nTotal Engagement for each post:");
// for (let post of posts) {
//   console.log("Author: " + post.author + ", Total Engagement: " + totalEngagement(post));
// }

// Challenge 5
// Sport Tournament Leaderboard
// const teams = [
//   { name: "Team A", wins: 10, losses: 5, draws: 2 , points: 16},
//   { name: "Team B", wins: 12, losses: 3, draws: 1 , points: 18},
//   { name: "Team C", wins: 8, losses: 7, draws: 3 , points: 38},
// ];

// function SortTeamsByRangking(teams) {
//   teams.sort((a, b) => b.points - a.points);
// }

// console.log("\nLeaderboard:");
// SortTeamsByRangking(teams);
// console.log("ID\tTeam\tWins\tLosses\tDraws\tPoints");
// for (let i = 0; i < teams.length; i++) {
//   let team = teams[i];
//   console.log(i+1,team.name ,"", team.wins ,"     ",team.losses ,"     ",team.draws ,"     ", team.points);
// }

// function BestPerformingTeam(teams) {
//   let bestTeam = teams[0];
//   for (let team of teams) {
//     if (team.points > bestTeam.points) {
//       bestTeam = team;
//     }
//   }
//   return bestTeam;
// }

// console.log("\nBest Performing Team:");
// let bestTeam = BestPerformingTeam(teams);
// console.log("Team: " + bestTeam.name);
// console.log("Points: " + bestTeam.points);

// Challenge 6
// Warehouse Stock Management
// const inventory = [
//   { itemName: "Laptop", category: "Electronics", stock:50},
//   { itemName: "Chair", category: "Furniture", stock: 100 },
//   { itemName: "Table", category: "Furniture", stock: 75 },
//   { itemName: "Headphones", category: "Electronics", stock: 200 },
// ];

// function totalStockByCategory(category) {
//   let totalStock = 0;
//   for (let item of inventory) {
//     if (item.category === category) {
//       totalStock = totalStock + item.stock;
//     }
//   }
//   return totalStock;
// }
// console.log("\nTotal Stock in Electronics: " + totalStockByCategory("Electronics"));
// console.log("Total Stock in Furniture: " + totalStockByCategory("Furniture"));

// const body = document.body;

// body.innerHTML = `
//   <div class="container">
//     <h1>Interactive To-Do List</h1>
//     <div id="taskList"></div>
//     <button id="addBtn" class="add-btn">Add Task</button>
//   </div>
//   <div id="modal" class="modal hidden">
//     <div class="modal-content">
//       <h2>Add Task</h2>
//       <input id="title" placeholder="Task Title">
//       <textarea id="desc" placeholder="Task Description"></textarea>
//       <select id="status">
//         <option value="pending">Pending</option>
//         <option value="progress">In Progress</option>
//         <option value="done">Completed</option>
//       </select>
//       <button id="saveBtn" class="save">Save Task</button>
//       <button id="closeBtn" class="close">Close</button>
//     </div>
//   </div>
// `;

// const modal = document.getElementById("modal");
// const addBtn = document.getElementById("addBtn");
// const closeBtn = document.getElementById("closeBtn");
// const saveBtn = document.getElementById("saveBtn");
// const taskList = document.getElementById("taskList");
// const title = document.getElementById("title");
// const desc = document.getElementById("desc");
// const status = document.getElementById("status");
// addBtn.onclick = () => modal.classList.remove("hidden");
// closeBtn.onclick = () => modal.classList.add("hidden");

// saveBtn.onclick = () => {
//   const task = `
//     <div class="task">
//       <h3>
//         ${title.value}
//         <span class="status ${status.value}">${status.value}</span>
//       </h3>
//       <p>${desc.value}</p>
//       <button class="delete">Delete</button>
//     </div>
//   `;
//   taskList.innerHTML += task;
//   modal.classList.add("hidden");
//   title.value = "";
//   desc.value = "";
// };
// taskList.onclick = (e) => {
//   if (e.target.classList.contains("delete")) {
//     e.target.parentElement.remove();
//   }
// };

const body = document.body;

body.innerHTML = `
  <div class="calculator">
    <div class="display" id="display">0</div>

    <div class="buttons">
      <button class="btn clear" value="C" onclick="clear()">C</button>
      <button class="btn operator" value="/" onclick="Operator(this.value)">/</button>
      <button class="btn operator" value="*" onclick="Operator(this.value)">*</button>
      <button class="btn operator" value="-" onclick="Operator(this.value)">-</button>
      <button class="btn" value="7" onclick="append(this.value)">7</button>
      <button class="btn" value="8" onclick="append(this.value)">8</button>
      <button class="btn" value="9" onclick="append(this.value)">9</button>
      <button class="btn operator" value="+" onclick="Operator(this.value)">+</button>
      <button class="btn" value="4" onclick="append(this.value)">4</button>
      <button class="btn" value="5" onclick="append(this.value)">5</button>
      <button class="btn" value="6" onclick="append(this.value)">6</button>
      <button class="btn equal" value="=" onclick="calculate()">=</button>
      <button class="btn" value="1" onclick="append(this.value)">1</button>
      <button class="btn" value="2" onclick="append(this.value)">2</button>
      <button class="btn" value="3" onclick="append(this.value)">3</button>
      <button class="btn zero" value="0" onclick="append(this.value)">0</button>
    </div>
  </div>
`;

const display = document.querySelector(".display");
let values = [];
let operators = [];
let result = 0;
let count = 0;
operators[count] = "";
values[count] = 0;

const clear = function () {
  display.innerText = `0`;
  values = [];
  result = 0;
};
const append = function (value) {
  values[count] = values[count] * 10 + Number(value);

  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
  console.log(values[count]);
};
const Operator = function (value) {
  operators[count] = value;
  if (display.innerText === "0") {
    display.innerText = "0";
  } else {
    display.innerText += value;
  }
  console.log(operators[count]);
  count++;
  values[count] = 0;
};

const calculate = function () {
  console.log(values);
  console.log(operators);
  if(operators.includes("*")){
    values[operators.indexOf("*")] = values[operators.indexOf("*")] * values[operators.indexOf("*")+1]
    operators.splice(operators.indexOf("*"), 1);
    values.splice(operators.indexOf("*")+1, 1);
  }
  else if(operators.includes("/")){
    values[operators.indexOf("/")] = values[operators.indexOf("/")] * values[operators.indexOf("*")+1]
    operators.splice(operators.indexOf("*"), 1);
    values.splice(operators.indexOf("*")+1, 1);
  }
};
