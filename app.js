// task 1
// console.log("5" + 5); //55
// console.log("5" - 5); //0
// console.log("5" * "2"); //10
// console.log("10" / 2); // 5
// console.log("5" + 5); //55
// console.log(5 + true); // 6
// console.log("5" + true); // ""5true""
// console.log("10" - true); // 9
// console.log("5" + null); // "5null"
// console.log(5 + null); // 5
// console.log(5 + undefined); //not a number

// // task 2
// console.log(Number('200') + 50);
// console.log(25+' years old');
// if ("false") {
//    console.log(true);
// }
// console.log("10" - true); // 9

// // task 3
// const celsius = Number(prompt('Type the number: '))
// const fahrenheit = (celsius * 9/5) + 32
// console.log(celsius, fahrenheit);

// task 4
// let totalBudget = Number(prompt('Type me total budget: '))
// let expences = prompt('Type me expences with commas: ')
// print(expences)
// let arrExpences = expences.split(',') // [1, 2, 3]
// arrExpences.forEach(element => {
//    element = Number(element)
//    if (element>0) {
//       totalBudget -= element
//       console.log(`you have ${totalBudget} in total when minus ${element} expences`);
//    }
// });

// task 5
// console.log(!!"false" == !!"true");
// console.log(0 || 'Javascript');
// console.log(" " && 100);
// console.log(null ?? "Fallback");
// console.log(undefined ?? "Default Value");

// // task 6
// let a = Number('42')
// let b = Number('3.14')
// let c = Number('hello')
// let d = null
// let l = undefined

// let sum = a+b+d+l
// console.log(sum);

// ==================== LESSON 2 =============================

// // task 1
// let givenNumber = Number(prompt("give me number: "));
// // 9 / 2 = 4
// // 9 % 2 = 1

// if (givenNumber % 2 == 0) {
//   console.log(`even numbers are ${givenNumber / 2}`);
// } else {
//   console.log(`odd numbers are ${(givenNumber-1) / 2 + 1}`);
// }

// task 2

// let number = prompt('enter the number, i will reverse it');
// let num = Number(number);
// let l = number.length;
// let reversed = '';

// for (let i = 0; i < l; i++) {
//    const daraja = 10 ** i;
//    let digit = Math.trunc(num / daraja) % 10;
//    reversed += digit;
// }

// console.log(Number(reversed));

// ====================================== LESSON 3 =====================================

// CONTROL OPERATORS

// task 2

// n = [3. -7, 2]

// for (let i = 0; i < n.length; i++) {
//    const element = n[i];
//    if (element < 0) {
//       console.log(`the sign is - ${element}`);
//    }
// }

// task 1

// let n1 = 12
// let n2 = 13

// if (n1>n2) {
//    console.log(`n1 is bigger`);
// } else {
//    console.log(`n2 is bigger`);
// }

// task 3
// let n = [0, 12, -4]
// let b = n.sort()
// console.log(b.reverse());

// task 4

// for (let index = 0; index <= 15; index++) {
//    if (index % 2 == 0) {
//       console.log(`${index} is even`);
//    }else{
//       console.log(`${index} is odd`);
//    }
// }

// Task 5
// for (let i = 0; i <= 100; i++) {
//    if (i % 3 == 0) {
//       console.log('bizz');
//    }else if (i % 5) {
//       console.log('fizz');
//    }else if (i % 5 ==0  && i % 3 ==0) {
//       console.log('bizzfizz');
//    }
// }

// task 6
// let n = 371
// let nArr = String(n).split('')
// let nNew = 0
// for (let i = 0; i < nArr.length; i++) {
//    const element = Number(nArr[i]);
//    nNew = nNew + element**3
//    if(nNew == n){
//       console.log('Armstrong number');
//    }
// }

// task 7
// let arrOfObjs = [
//   {
//     name: "David",
//     mark: 80,
//   },
//   {
//     name: "Said",
//     mark: 55,
//   },
//   {
//     name: "Anna",
//     mark: 88,
//   },
//   {
//     name: "Dinya",
//     mark: 99,
//   },
//   {
//     name: "Thomas",
//     mark: 68,
//   },
// ];

// for (let i = 0; i < arrOfObjs.length; i++) {
//   const element = arrOfObjs[i];

//   if (element.mark < 60) {
//     console.log(element.name + " " + "F");
//   } else if (element.mark < 60) {
//     console.log(element.name + " " + "E");
//   } else if (element.mark < 70) {
//     console.log(element.name + " " + "D");
//   } else if (element.mark < 80) {
//     console.log(element.name + " " + "C");
//   } else if (element.mark < 90) {
//     console.log(element.name + " " + "B");
//   } else if (element.mark < 100) {
//     console.log(element.name + " " + "A");
//   }
// }

// ======================================== lesson 4 ========================================
// task 1
// let greeting = (name) => {
//    console.log(`Hello, ${name}`);
// };
// greeting('hello')
// greeting('Aziz')
// greeting('Olma')
// greeting('Sardor')
// greeting('Sanjar')

// Task 2
// const isPrime = (n) => {
//   if (n <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(12))

// task 3

// function countDigits(n) {
//   if (typeof n === "number") {
//     return String(n).length;
//   } else {
//     return "you should write number, no other things";
//   }
// }
// console.log(`this given number have ${countDigits(121233)}`);

// task 4

// function isPolindrome(n) {
//    const reversedN = String(n).split('').reverse().join('')
//    if (reversedN == n) {
//       return (`${n} number is Palindrome`)
//    }else{
//       return (`${n} number is not Palindrome`)
//    }
// }
// console.log(isPolindrome(121));

// Task 5
// function isArmstrong(n) {
//    const arrDigits = String(n).split('')
//    let sumofPoweredDigits = 0
//    arrDigits.forEach(e => sumofPoweredDigits = sumofPoweredDigits + Number(e) ** arrDigits.length)
//    if( sumofPoweredDigits == n){
//       return 'this number is armstrong'
//    }else{
//       return 'this number is not armstrong'
//    }
// }
// console.log(isArmstrong(370));

// Task 6
// function createCounter(start) {
//    let obj ={
//       increment: () => start + 1,
//       discrement: () => start - 1,
//       getCount: () => start
//    }
//    return obj
// }

// console.log(createCounter(3).discrement());

// Task 7
// function orderFood() {
//    let obj = {
//       name: ()=>{
//          return prompt('what is your name: ')
//       },
//       address: ()=>{
//          return prompt('what is your address: ')
//       },
//       food: ()=>{
//          return prompt('what food: ')
//       }
//    }
//    console.log(`Dear ${obj.name()}, your ordered food "${obj.food()}" will be ready in 15 minuts and will be delivered to your address ${obj.address()}`);
// }
// orderFood()

// task 8
// function lazyAdder(a) {
//    return function add5() {
//       return 5 + a;
//    };
// }
// console.log(lazyAdder(123)());

// Home Tasks

// task 1
// function DynamicPricingCalculation(carts) {
//   let countOfCarts = 0;
//   let totatSum = 0;
//   carts.forEach(({ price, id, count }) => {
//     countOfCarts += count;
//     totatSum += price * count;
//   });
//   if (countOfCarts > 5) {
//     return `20% discount for 5+ is ${totatSum * 0.8}`;
//   } else if (countOfCarts > 3) {
//     return `10% discount for 3+ is ${totatSum * 0.9}`;
//   } else {
//     return `total sum is ${totatSum}`;
//   }
// }

// console.log(
//   DynamicPricingCalculation([
//     {
//       price: 4000,
//       id: 1,
//       count: 1,
//     },
//     {
//       price: 6400,
//       id: 2,
//       count: 1,
//     },
//     {
//       price: 14000,
//       id: 3,
//       count: 1,
//     },
//     {
//       price: 4000,
//       id: 4,
//       count: 1,
//     },
//   ]),
// );

// task 2
// function checkPassword(password) {
//    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
//    if (regex.test(password)) {
//       console.log('password is strong');
//    } else {
//       console.log('password is weak');

//    }
// }
// checkPassword('1231!Asas')

// task 3
// function withdrawATM(amount) {
//   if (amount % 10 !== 0) {
//     return "Error: Amount must be a multiple of $10.";
//   }

//   const bills = [100, 50, 20, 10];
//   let result = {};
//   let remaining = amount;

//   bills.forEach(bill => {
//     let count = Math.floor(remaining / bill);
//     if (count > 0) {
//       result[`$${bill}`] = count;
//       remaining -= count * bill;
//     }
//   });

//   return result;
// }

// task 6

// function bankAccount(balance) {
//    return {
//       balance: balance,
//       deposit: (e)=>balance + e,
//       withdraw: (e)=>balance - e,
//       viewBalange: ()=>balance,
//    }
// }
// console.log(bankAccount(1000).withdraw(10))

// TASK 7
// function RoleBasedAccessSystem(role) {
//    switch (role) {
//       case 'admin':
//          console.log('can add, edit, delete content');
//          break;
//       case 'editor':
//          console.log('can add, view');
//          break;
//       default:
//          console.log('can only view');
//          break;
//    }
// }

// task 9

// function dinamicTaxCalculator(income) {
//   if (income > 10000) {
//     console.log("no tax");
//   } else if (income > 5000) {
//     console.log("10% tax");
//   } else {
//     console.log(`20% tax`);
//   }
// }

// ===================== 6 Lesson ================================
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr[0] = 2;
// arr.push(10);
// console.log(arr);

// arr.pop();

// arr.shift();
// arr.unshift(5);

// arr.map((e) => {
//   console.log(e);
// });

// arr.filter((e) => {
//   return e > 5;
// });

// arr.reverse();

// arr.sort();

// arr.slice(2, 3);

// arr.splice(5, 4);

// arr.find(10);

// task 1

// function getFirstElOfArr(arr) {
//   return arr[0];
// }
// console.log(getFirstElOfArr([1, 2, 3]));

// task 2

// function getLastElOfArr(arr, n) {
//   // return arr.reverse().slice(0, n)
//   return arr.slice(arr.length - n);
// }
// console.log(getLastElOfArr([1, 2, 3], 2));

// task 3
// let myColor = ["Red", "Green", "White", "Black"];

// let string = myColor.join(',')
// console.log(string);

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
// let array1 = [1, 0, 2, 3, 4];
// let array2 = [3, 5, 6, 7, 8, 13];

// let newarr = [];

// if (array1.length > array2.length) {
//   newarr = array1.map((e, i) => {
//     if (array1[i] === undefined) {
//       return 0 + array2[i];
//     } else if (array2[i] === undefined) {
//       return 0 + array1[i];
//     } else {
//       return array1[i] + array2[i];
//     }
//   });
// } else {
//   newarr = array2.map((e, i) => {
//     if (array1[i] === undefined) {
//       return 0 + array2[i];
//     } else if (array2[i] === undefined) {
//       return 0 + array1[i];
//     } else {
//       return array1[i] + array2[i];
//     }
//   });
// }
// console.log(newarr);

// ============================= Objects ============================

// task 1
// const students = [
//   { name: "Alice", scores: [80, 90, 100] },
//   { name: "Bob", scores: [50, 60, 70] },
//   { name: "Charlie", scores: [30, 40, 20] },
// ];

// let topStudent = "";
// let topScore = 0;
// students.forEach((e) => {
//   const scores = e.scores;
//   let sum = 0;
//   scores.forEach((e) => {
//     return (sum += e);
//   });
//   const average = sum / scores.length;

//   if (average > topScore) {
//     topStudent = e.name;
//     topScore = average;
//   }
//   console.log(
//     `${e.name}'s average score is ${average}. ${average >= 50 ? "He passed the exam." : "he didnot passed the exam."} The top student is ${topStudent}`,
//   );
// });

// task 2
// const cart = [
//   { id: 1, name: "Laptop", price: 900, quantity: 1 },
//   { id: 2, name: "Mouse", price: 50, quantity: 3 },
//   { id: 3, name: "Keyboard", price: 80, quantity: 1 },
//   { id: 4, name: "Monitor", price: 100, quantity: 2 },
// ];

// let total = 0;
// let discountedTotal;
// let theMostExpensiveItem = cart[0];
// cart.map((e) => {
//   return (total += e.price * e.quantity);
// });
// if (total > 100) {
//   discountedTotal = total * 0.9;
// }
// cart.map(e=>{
//   if (e.price > theMostExpensiveItem.price) {
//     return theMostExpensiveItem = e
//   }
// })

// task 3
// const products = [{ id: 1, name: "Laptop", price: 1200, stock: 10 }];

// function addProduct(newProduct) {
//   return (products = [...products, newProduct]);
// }

// function deleteProduct(productsID) {
//   return (products = products.filter((e) => e.id !== productsID));
// }

// function updateProduct(updatedProduct) {
//   products = products.map((e) => {
//     if (e.id === updatedProduct.id) {
//       return (e = updatedProduct);
//     }
//   });
//   return products;
// }
// function findProduct(productID) {
//   return products.find((e) => e.id === productID);
// }

// task 4
// const posts = [
//   {
//     author: "Ali",
//     likes: 120,
//     comments: [
//       { user: "Vali", message: "Zo'r post!" },
//       { user: "Sami", message: "Gap yo'q" },
//     ],
//     shares: 15,
//   },
//   {
//     author: "Zarina",
//     likes: 250,
//     comments: [{ user: "Ali", message: "Juda yaxshi" }],
//     shares: 40,
//   },
//   {
//     author: "Bekzod",
//     likes: 180,
//     comments: [
//       { user: "Zarina", message: "Like!" },
//       { user: "Ali", message: "Respect" },
//       { user: "Sami", message: "Top" },
//     ],
//     shares: 25,
//   },
// ];
// const getMostLikedPost = (posts) =>
//   posts.reduce((max, post) => (post.likes > max.likes ? post : max));

// console.log("Most liked post:", getMostLikedPost(posts));

// const getTotalEngagement = (posts) =>
//   posts.reduce(
//     (sum, post) => sum + post.likes + post.comments.length + post.shares,
//     0,
//   );
// console.log("Total engagement:", getTotalEngagement(posts));

// Task 5
// const teams = [
//   { name: "Team A", wins: 5, losses: 2, points: 15 },
//   { name: "Team B", wins: 6, losses: 1, points: 18 },
//   { name: "Team C", wins: 4, losses: 3, points: 12 }
// ];
// function sortTeamsByRanking(teams) {
//   return [...teams].sort((a, b) => b.points - a.points);
// }

// const ranking = sortTeamsByRanking(teams);
// console.log(ranking);
// function getBestTeam(teams) {
//   const sorted = sortTeamsByRanking(teams);
//   return sorted[0];
// }

// console.log(getBestTeam(teams));

// task 6
// const inventory = [
//   { itemName: "Laptop", category: "Electronics", stock: 5 },
//   { itemName: "Phone", category: "Electronics", stock: 10 },
//   { itemName: "Shirt", category: "Clothing", stock: 20 },
//   { itemName: "Jeans", category: "Clothing", stock: 8 },
//   { itemName: "Apple", category: "Food", stock: 30 }
// ];
// function totalStockByCategory(category) {
//   return inventory
//     .filter(item => item.category === category)
//     .reduce((sum, item) => sum + item.stock, 0);
// }

// console.log(totalStockByCategory("Electronics"));
// console.log(totalStockByCategory("Clothing"));

// function lowStockItems(threshold = 10) {
//   return inventory.filter(item => item.stock < threshold);
// }

// // console.log(lowStockItems());
// document.body.style.margin = "0";
// document.body.style.fontFamily = "Arial, sans-serif";
// document.body.style.background = "#f5f5f5";

// const tasks = [
//   {
//     id: 1,
//     title: "Task 1",
//     description: "Description for Task 1",
//     status: "pending",
//   },
//   {
//     id: 2,
//     title: "Task 2",
//     description: "Description for Task 2",
//     status: "in progress",
//   },
//   {
//     id: 3,
//     title: "Task 3",
//     description: "Description for Task 3",
//     status: "completed",
//   },
// ];

// const statusColors = {
//   pending: "#f5a623",
//   "in progress": "#1a28ff",
//   completed: "#168a1f",
// };

// const app = document.createElement("div");
// app.style.width = "700px";
// app.style.margin = "30px auto";
// app.style.background = "#fff";
// app.style.padding = "24px";
// app.style.borderRadius = "14px";
// app.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
// document.body.appendChild(app);

// const title = document.createElement("h1");
// title.textContent = "Interactive To-Do List";
// title.style.textAlign = "center";
// title.style.marginBottom = "25px";
// title.style.fontSize = "28px";
// app.appendChild(title);

// const taskList = document.createElement("div");
// taskList.style.display = "flex";
// taskList.style.flexDirection = "column";
// taskList.style.gap = "14px";
// app.appendChild(taskList);

// const addBtn = document.createElement("button");
// addBtn.textContent = "Add Task";
// addBtn.style.width = "100%";
// addBtn.style.marginTop = "20px";
// addBtn.style.padding = "14px";
// addBtn.style.fontSize = "16px";
// addBtn.style.border = "none";
// addBtn.style.borderRadius = "8px";
// addBtn.style.background = "#1877f2";
// addBtn.style.color = "#fff";
// addBtn.style.cursor = "pointer";
// app.appendChild(addBtn);

// const overlay = document.createElement("div");
// overlay.style.position = "fixed";
// overlay.style.top = "0";
// overlay.style.left = "0";
// overlay.style.width = "100%";
// overlay.style.height = "100%";
// overlay.style.background = "rgba(0,0,0,0.45)";
// overlay.style.display = "none";
// overlay.style.justifyContent = "center";
// overlay.style.alignItems = "center";
// document.body.appendChild(overlay);

// const modal = document.createElement("div");
// modal.style.width = "420px";
// modal.style.background = "#fff";
// modal.style.padding = "20px";
// modal.style.borderRadius = "12px";
// modal.style.boxShadow = "0 4px 18px rgba(0,0,0,0.2)";
// overlay.appendChild(modal);

// const modalTitle = document.createElement("h2");
// modalTitle.textContent = "Add Task";
// modalTitle.style.textAlign = "center";
// modalTitle.style.marginBottom = "16px";
// modal.appendChild(modalTitle);

// const inputTitle = document.createElement("input");
// inputTitle.placeholder = "Task Title";
// inputTitle.style.width = "100%";
// inputTitle.style.padding = "12px";
// inputTitle.style.marginBottom = "12px";
// inputTitle.style.border = "1px solid #ccc";
// inputTitle.style.borderRadius = "6px";
// inputTitle.style.boxSizing = "border-box";
// modal.appendChild(inputTitle);

// const inputDesc = document.createElement("textarea");
// inputDesc.placeholder = "Task Description";
// inputDesc.style.width = "100%";
// inputDesc.style.padding = "12px";
// inputDesc.style.marginBottom = "12px";
// inputDesc.style.border = "1px solid #ccc";
// inputDesc.style.borderRadius = "6px";
// inputDesc.style.boxSizing = "border-box";
// inputDesc.style.resize = "none";
// inputDesc.rows = 3;
// modal.appendChild(inputDesc);

// const statusSelect = document.createElement("select");
// statusSelect.style.width = "100%";
// statusSelect.style.padding = "12px";
// statusSelect.style.marginBottom = "12px";
// statusSelect.style.border = "1px solid #ccc";
// statusSelect.style.borderRadius = "6px";
// statusSelect.style.boxSizing = "border-box";

// ["pending", "in progress", "completed"].forEach((status) => {
//   const option = document.createElement("option");
//   option.value = status;
//   option.textContent = status.charAt(0).toUpperCase() + status.slice(1);
//   statusSelect.appendChild(option);
// });
// modal.appendChild(statusSelect);

// const saveBtn = document.createElement("button");
// saveBtn.textContent = "Save Task";
// saveBtn.style.width = "100%";
// saveBtn.style.padding = "12px";
// saveBtn.style.marginBottom = "10px";
// saveBtn.style.border = "none";
// saveBtn.style.borderRadius = "6px";
// saveBtn.style.background = "#1877f2";
// saveBtn.style.color = "#fff";
// saveBtn.style.fontSize = "16px";
// saveBtn.style.cursor = "pointer";
// modal.appendChild(saveBtn);

// const closeBtn = document.createElement("button");
// closeBtn.textContent = "Close";
// closeBtn.style.width = "100%";
// closeBtn.style.padding = "12px";
// closeBtn.style.border = "none";
// closeBtn.style.borderRadius = "6px";
// closeBtn.style.background = "red";
// closeBtn.style.color = "#fff";
// closeBtn.style.fontSize = "16px";
// closeBtn.style.cursor = "pointer";
// modal.appendChild(closeBtn);

// function renderTasks() {
//   taskList.innerHTML = "";

//   tasks.forEach((task) => {
//     const card = document.createElement("div");
//     card.style.background = "#fff";
//     card.style.border = "1px solid #eee";
//     card.style.borderRadius = "12px";
//     card.style.padding = "18px";
//     card.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
//     card.style.position = "relative";

//     const taskTitle = document.createElement("h3");
//     taskTitle.textContent = task.title;
//     taskTitle.style.margin = "0 0 6px 0";
//     taskTitle.style.fontSize = "20px";
//     card.appendChild(taskTitle);

//     const taskDesc = document.createElement("p");
//     taskDesc.textContent = task.description;
//     taskDesc.style.margin = "0 0 14px 0";
//     taskDesc.style.fontSize = "16px";
//     card.appendChild(taskDesc);

//     const badge = document.createElement("span");
//     badge.textContent = task.status;
//     badge.style.position = "absolute";
//     badge.style.top = "16px";
//     badge.style.right = "16px";
//     badge.style.padding = "6px 12px";
//     badge.style.borderRadius = "8px";
//     badge.style.color = "#fff";
//     badge.style.fontSize = "14px";
//     badge.style.background = statusColors[task.status];
//     card.appendChild(badge);

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.style.padding = "10px 16px";
//     deleteBtn.style.border = "none";
//     deleteBtn.style.borderRadius = "6px";
//     deleteBtn.style.background = "red";
//     deleteBtn.style.color = "#fff";
//     deleteBtn.style.cursor = "pointer";

//     deleteBtn.addEventListener("click", () => {
//       const index = tasks.findIndex((t) => t.id === task.id);
//       if (index !== -1) {
//         tasks.splice(index, 1);
//         renderTasks();
//       }
//     });

//     card.appendChild(deleteBtn);
//     taskList.appendChild(card);
//   });
// }

// addBtn.addEventListener("click", () => {
//   overlay.style.display = "flex";
// });

// closeBtn.addEventListener("click", () => {
//   overlay.style.display = "none";
//   inputTitle.value = "";
//   inputDesc.value = "";
//   statusSelect.value = "pending";
// });

// saveBtn.addEventListener("click", () => {
//   const title = inputTitle.value.trim();
//   const description = inputDesc.value.trim();
//   const status = statusSelect.value;

//   if (!title || !description) {
//     alert("Please fill all fields");
//     return;
//   }

//   tasks.push({
//     id: Date.now(),
//     title,
//     description,
//     status,
//   });

//   renderTasks();

//   inputTitle.value = "";
//   inputDesc.value = "";
//   statusSelect.value = "pending";
//   overlay.style.display = "none";
// });

// renderTasks();

// <!-- EVENT PRAPAGATION -->
// <!-- BUBLING and CAPTURING -->

// Event propagation is the process by which an event moves through the DOM tree. It has three phases: capturing, target, and bubbling. In the capturing phase, the event starts from the root and goes down to the target element. In the target phase, the event is at the target element. In the bubbling phase, the event goes back up from the target to the root.

// In the provided code, we have a nested structure of divs and a button. When the button is clicked, the event will first trigger on the button (target phase), then it will bubble up to the parent div, and finally to the grandparent div. If we add event listeners to each of these elements, we can see the order in which they are triggered due to event propagation.
const grandparent = document.getElementById("grantparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");
// Bubbling phase
// grandparent.addEventListener("click", () => {
//   console.log("Grandparent clicked");
// });

// parent.addEventListener("click", () => {
//   console.log("Parent clicked");
// });

// child.addEventListener("click", () => {
//   console.log("Child clicked");
// });

// Capturing phase
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("Grandparent clicked");
//   },
//   true,
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("Parent clicked");
//   },
//   true,
// );
// child.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation(); // Stop the event from propagating further
//     console.log("Child clicked");
//   },
//   true,
// );
