//-----------------------------------------------1-DARS-----------------------------------------
// // task1
// console.log("5"+5); //55
// console.log("5"-5); //0
// console.log("5"*"2"); //10
// console.log("5"/2); //2.5
// console.log(5+true); //6
// console.log("10"-true); //9
// console.log("5"+true); //5true
// console.log(5+null); //5
// console.log(5+undefined); //NaN

// // task2
// let x="200"
// let result=Number(x)+500
// console.log(result)

// let y=25
// let yResult=String(y)+ ' years old'
// console.log(yResult)

// // task3
// const temp=Number(prompt('Enter a temperature in Celcius'))
// const tempResult=temp*9/5+32
// console.log(temp)
// console.log(tempResult)

// // task4
// let budget=Number(prompt('Your amount of budget'))
// let expence1=Number(prompt('1st expence'))
// let expence2=Number(prompt('2nd expence'))
// let expence3=Number(prompt('3rd expence'))
// const budgetResult=budget-expence1-expence2-expence3
// console.log(budgetResult)

// // task5
// console.log(!!"false"==!!"true") // true
// console.log(0||"JavaScript") // JavaScript
// console.log(" " && 100) // 100
// console.log(null ?? "Fallback") // Fallback
// console.log(undefined ?? "Default Value") // Default Value

// // task6
// let a = "42";
// let b = "3.14";
// let c = "hello";
// let d = false;
// let e = null;

// a=Number(a)
// b=Number(b)
// d=Number(d)
// e=Number(e)

// let sum = a+b+d+e

// console.log(sum)

//-----------------------------------------------2-DARS-----------------------------------------

//task1

// let givenNum1=prompt('Enter a random number between 10-40')

// let evenCount = 0;
// let oddCount = 0;

// for (let num = 1; num <= givenNum1; num++) {
//     if (num % 2 === 0) {
//         evenCount++;
//     } else {
//         oddCount++;
//     }
// }

// console.log("Even numbers count:", evenCount);
// console.log("Odd numbers count:", oddCount);

// //task2

// let givenNum2=prompt('Enter a number, i will return')
// let reverse=0;
// while(givenNum2>0){
//     let digit=givenNum2%10;
//     givenNum2=Math.floor(givenNum2/10);
//     reverse=reverse*10+digit;
// }
// console.log(reverse)

// //task3

// let num = prompt('Enter a long number. I will find a biggest digit');
// let largest = 0;
// while (num > 0) {
//   let digit = num % 10;
//   if (digit > largest) {
//     largest = digit;
//   }
//   num = Math.floor(num / 10);
// }
// console.log("Largest digit:", largest);


//-----------------------------------------------3-DARS-----------------------------------------



// for...in - object
// for...of - array

//-----------------------------------------------3-DARS-TASKS-----------------------------------------

// task1
// let a=12
// let b=4
// if (a>b){
//     console.log(a)
// }
// else{
//     console.log(b)
// }

// // task2
// let ls=[3,-7,2]
// for (let i = 0; i < ls.length; i++) {
//     if (ls[i]<0){
//         const signed = ls[i];
//         console.log(signed)
//     }
// }

// // task3
// let ls2=[0,-1,4]
// let ls2Result=ls2.sort()
// console.log(ls2Result)

// // task4
// for (let i = 0; i <= 15; i++) {
//     if (i%2==0){
//         console.log(`${i} is even`)
//     }
//     else {
//         console.log(`${i} is odd`)
//     }
// }

// // task5
// for (let i = 1; i <= 100; i++) {
//     if (i%3==0){
//         console.log(`Fizz`)
//     }
//     else if (i%5==0) {
//         console.log(`Buzz`)
//     }
//     else if (i%3==0 && i%5==0){
//         console.log(`FizzBuzz`)
//     }
// }

// // task6
// let rand=372
// let n=0
// let randString=String(rand).split("")
// for (let i = 0; i < randString.length; i++) {
//     let cubed=randString[i]**randString.length
//     n+=cubed
// }
// if(n==rand){
//     console.log(`Armstrong`)
// }
// else{
//     console.log(`Not armstrong number`)
// }


//-----------------------------------------------5-DARS-----------------------------------------

// Functions

// function sum(a,b){
//     return a+b
// }
// console.log(sum(2,3));


// let sum = function(a,b){
//     return a+b
// }
// console.log(sum(2,3));


//-----------------------------------------------5-DARS-TASKS-----------------------------------------

// // task1 (1)
// function greet(name){
//     console.log(`hello ${name}`)
// }
// greet('Aziz')

// // task1 (2)
// let greet1=function(name){
//     return `Helloo ${name}`
// }
// console.log(greet1('Bexruz'))

// // task1 (3)
// let greet2=(name) =>{
//     return `Hello ${name}`
// }
// console.log(greet2('Farrux'))


// // task2

// let d = 0;
// function isPrime(a) {
//   for (let i = 1; i <= a; i++) {
//     if (a % i == 0) {
//       d++;
//     }
//   }
//   if (d == 2) {
//     return true;
//   } else return false;
// }

// console.log(isPrime(19));

// // task3


// // task4
// function isPalindrome(n) {
//     if (n < 0) return false;

//     let original = n;
//     let reversed = 0;

//     while (n > 0) {
//         reversed = reversed * 10 + (n % 10);
//         n = Math.floor(n / 10);
//     }

//     return original === reversed;
// }
// console.log(isPalindrome(1234))

// // task5

// let rand=372
// let n=0
// let randString=String(rand).split("")
// for (let i = 0; i < randString.length; i++) {
//     let cubed=randString[i]**randString.length
//     n+=cubed
// }
// if(n==rand){
//     console.log(`Armstrong`)
// }
// else{
//     console.log(`Not armstrong number`)
// }

// // #1 Dynamic Pricing Calculation

// function setUp() {
//   const prodInfo = document.createElement("p");
//   prodInfo.textContent = "1 product = $10";
//   document.body.appendChild(prodInfo);
// }

// function calculations() {
//   let quantity = Number(inputElement.value);
//   let price = 10;
//   let discount = 0;
//   let sum = quantity * price;

//   if (quantity > 3) {
//     discount = quantity * price * 0.1;
//   } else if (quantity > 5) {
//     discount = quantity * price * 0.05;
//   } else {
//     discount = 0;
//   }

//   output.textContent = `Overall value is $${sum - discount}`;
// }

// setUp();

// inputElement.addEventListener("input", calculations);

// // #2 Password Strength Checker

// function checkPasswordStrength(password) {
//   let score = 0;

//   if (password.length >= 8) {
//     score++;
//   }

//   let hasUpper = false;
//   let hasNumber = false;
//   let hasSpecial = false;

//   const specialChars = "!@#$%^&*()-+";

//   for (let i = 0; i < password.length; i++) {
//     let char = password[i];

//     if (char >= "A" && char <= "Z") {
//       hasUpper = true;
//     } else if (char >= "0" && char <= "9") {
//       hasNumber = true;
//     } else if (specialChars.includes(char)) {
//       hasSpecial = true;
//     }
//   }

//   if (hasUpper) score++;
//   if (hasNumber) score++;
//   if (hasSpecial) score++;

//   if (score <= 2) {
//     output.textContent = "Weak";
//   } else if (score === 3) {
//     output.textContent = "Medium";
//   } else {
//     output.textContent = "Strong";
//   }
// }

// inputElement.addEventListener("input", () => {
//   checkPasswordStrength(inputElement.value);
// });

// // #3 ATM Cash Withdrawal System
// function withdrawCash(amount) {
//   if (amount % 10 !== 0 || amount <= 0) {
//     return null;
//   }

//   let hundreds = 0,
//     fifties = 0,
//     twenties = 0,
//     tens = 0;
//   let remaining = amount;

//   while (remaining >= 100) {
//     hundreds++;
//     remaining -= 100;
//   }
//   while (remaining >= 50) {
//     fifties++;
//     remaining -= 50;
//   }
//   while (remaining >= 20) {
//     twenties++;
//     remaining -= 20;
//   }
//   while (remaining >= 10) {
//     tens++;
//     remaining -= 10;
//   }

//   return { hundreds, fifties, twenties, tens };
// }

// inputElement.addEventListener("input", () => {
//   const amount = Number(inputElement.value);
//   const result = withdrawCash(amount);

//   if (!result) {
//     output.textContent = "Error: Please enter a multiple of $10";
//     return;
//   }

//   output.textContent = `Dispensing:
//     $100 x ${result.hundreds}
//     $50 x ${result.fifties}
//     $20 x ${result.twenties}
//     $10 x ${result.tens}`;
// });

// // #4 traffic light simulation

// function startTrafficLight() {
//   showRed();
// }

// function showRed() {
//   output.textContent = "STOP: RED";
//   output.style.color = "red";

//   setTimeout(() => {
//     showGreen();
//   }, 5000);
// }

// function showGreen() {
//   output.textContent = "GO: GREEN";
//   output.style.color = "green";

//   setTimeout(() => {
//     showYellow();
//   }, 3000);
// }

// function showYellow() {
//   output.textContent = "CAUTION: YELLOW";
//   output.style.color = "orange";

//   setTimeout(() => {
//     showRed();
//   }, 2000);
// }

// startTrafficLight();

// // #6 banking system

// function createBankAccount(initialName, initialBalance) {
//   let balance = initialBalance;
//   let accountHolder = initialName;

//   return {
//     deposit: function (amount) {
//       if (amount > 0) {
//         balance += amount;
//         console.log(`Deposited $${amount}. New balance: $${balance}`);
//       } else {
//         console.log("Deposit amount must be positive.");
//       }
//     },

//     withdraw: function (amount) {
//       if (amount > balance) {
//         console.log("Insufficient funds!");
//       } else if (amount <= 0) {
//         console.log("Please enter a valid amount to withdraw.");
//       } else {
//         balance -= amount;
//         console.log(`Withdrew $${amount}. Remaining balance: $${balance}`);
//       }
//     },
//     viewBalance: function () {
//       return `Account Holder: ${accountHolder} | Balance: $${balance}`;
//     },
//   };
// }

// const myAccount = createBankAccount("Aziz", 100);

// myAccount.deposit(50);
// myAccount.withdraw(20);
// console.log(myAccount.viewBalance());



//-----------------------------------------------6-DARS-----------------------------------------

// let colors=['red','blue','yellow']
// console.log(colors)

// let nums =new Array(5)
// let numbers =new Array(2,4,5,7)

// console.log(numbers)

// nums.push(777)
// nums.push(33)
// nums.push(8)
// nums.push(0)

// console.log(nums)



// let origin=[1,2,3]
// let copyOrigin=[...origin]

// console.log(origin)
// console.log(copyOrigin)



// let nums1=Array.of(5,4,3,2,1)
// console.log(nums1)
// nums1.push(222)
// console.log(nums1.push(222));
// console.log(nums1)

// //-----------------------------------------------6-DARS-TASKS-----------------------------------------

// // task 1
// function getFIRSTeL(arr) {
//   return arr[0];
// }
// console.log(getFIRSTeL([1, 2, 3]));

// // task 2
// function getLastEl(arr, n) {
//   return arr.slice(arr.length - n);
// }
// console.log(getLastEl([1, 2, 3], 2));

// // task 3
// let myColor = ["Red", "Green", "White", "Black"];

// let string = myColor.join(',')
// console.log(string);

// // task4
// let input = prompt('enter the numbers: ')

// let dashed = inp.split('').join('-')
// console.log(dashed);

// // task 5
// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// console.log(arr1.sort());

// // task 6
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

// // task 7
// let inp = prompt('enter the text: ')
// let reversed = inp.split('').map((e, I) => {
//  RETUrN e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join()
// }
// console.log(reversed);

// // task 8
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

// // task 9
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


// //-----------------------------------------------7-DARS-Tasks----------------------------------------

// Objects homework
// task1
// const students = [
//   { name: "Alice", scores: [85, 90, 78] },
//   { name: "Bob", scores: [45, 52, 30] },
//   { name: "Charlie", scores: [92, 88, 95] },
//   { name: "Diana", scores: [60, 55, 62] },
// ];

// let passedStuds = students
//   .filter((student) => {
//     const score = student.scores.reduce((acc, current) => {
//       return acc + current;
//     }, 0);
//     const average = score / student.scores.length;
//     return average >= 50;
//   })
//   .map((student) => {
//     return student.name;
//   });

// console.log(passedStuds);

// task2
// const cart = [
//   { id: 1, name: "Laptop", price: 900, quantity: 1 },
//   { id: 2, name: "Mouse", price: 50, quantity: 2 },
//   { id: 3, name: "Keyboard", price: 100, quantity: 1 },
// ];

// const total = cart
//   .map((item) => {
//     return (subTotal = item.price * item.quantity);
//   })
//   .map((item) => {
//     if (item > 100) {
//       return item * 1.1;
//     } else {
//       return item;
//     }
//   })
//   .reduce((acc, current) => {
//     return acc + current;
//   }, 0);

// console.log(total);

// task3
// let inventory = [
//   { id: 1, name: "Laptop", price: 999, stock: 10 },
//   { id: 2, name: "Mouse", price: 25, stock: 50 },
//   { id: 3, name: "Keyboard", price: 75, stock: 20 },
// ];

// function addProduct(newProduct) {
//   inventory.push(newProduct);
// }
// function deleteProduct(idToDelete) {
//   inventory = inventory.filter((product) => product.id !== idToDelete);
// }
// function findProduct(name) {
//   return inventory.find((product) => product.name === name);
// }

// const found = findProduct("Laptop");
// deleteProduct(1);
// addProduct({ id: 4, name: "Monitor", price: 200, stock: 15 });

// task4
// const posts = [
//   { author: "Alice", likes: 100, comments: 20, shares: 5 },
//   { author: "Bob", likes: 200, comments: 50, shares: 10 },
// ];

// function mostLiked() {
//   const response = posts.sort((a, b) => b.likes - a.likes);
//   console.log(response);
// }

// function totalEngagement() {
//   const result = posts.map((post) => {
//     return {
//       name: post.author,
//       engagement: post.likes + post.comments + post.shares,
//     };
//   });
//   console.table(result);
// }

// mostLiked();
// totalEngagement();

// const teams = [
//   { name: "Team A", wins: 5, losses: 2, points: 15 },
//   { name: "Team B", wins: 6, losses: 1, points: 18 },
// ];

// function sortByRanking() {
//   const result = teams.sort((a, b) => b.wins - a.wins);
//   console.log("Winning team:");
//   console.table(result);
// }
// sortByRanking();

// function sortByPoints() {
//   const result = teams.sort((a, b) => b.points - a.points);
//   console.log("Team with most points:");
//   console.table(result);
// }
// sortByPoints();

// const inventory = [
//   { itemName: "Hammer", category: "Tools", stock: 15 },
//   { itemName: "Drill", category: "Tools", stock: 4 },
//   { itemName: "Plywood", category: "Lumber", stock: 20 },
//   { itemName: "Oak Plank", category: "Lumber", stock: 2 },
//   { itemName: "Screws", category: "Hardware", stock: 100 },
// ];

// function getTotalStockByCategory(items) {
//   return items.reduce((totals, item) => {
//     const { category, stock } = item;
//     if (!totals[category]) {
//       totals[category] = 0;
//     }
//     totals[category] += stock;
//     return totals;
//   }, {});
// }

// const categoryTotals = getTotalStockByCategory(inventory);
// console.log("Stock by Category:", categoryTotals);



// //-----------------------------------------------8-DARS-Tasks----------------------------------------


document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "#f5f5f5";

const tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Description for Task 1",
    status: "pending",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description for Task 2",
    status: "in progress",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description for Task 3",
    status: "completed",
  },
];

const statusColors = {
  pending: "#f5a623",
  "in progress": "#1a28ff",
  completed: "#168a1f",
};

const app = document.createElement("div");
app.style.width = "700px";
app.style.margin = "30px auto";
app.style.background = "#fff";
app.style.padding = "24px";
app.style.borderRadius = "14px";
app.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
document.body.appendChild(app);

const title = document.createElement("h1");
title.textContent = "Interactive To-Do List";
title.style.textAlign = "center";
title.style.marginBottom = "25px";
title.style.fontSize = "28px";
app.appendChild(title);

const taskList = document.createElement("div");
taskList.style.display = "flex";
taskList.style.flexDirection = "column";
taskList.style.gap = "14px";
app.appendChild(taskList);

const addBtn = document.createElement("button");
addBtn.textContent = "Add Task";
addBtn.style.width = "100%";
addBtn.style.marginTop = "20px";
addBtn.style.padding = "14px";
addBtn.style.fontSize = "16px";
addBtn.style.border = "none";
addBtn.style.borderRadius = "8px";
addBtn.style.background = "#1877f2";
addBtn.style.color = "#fff";
addBtn.style.cursor = "pointer";
app.appendChild(addBtn);

const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "rgba(0,0,0,0.45)";
overlay.style.display = "none";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
document.body.appendChild(overlay);

const modal = document.createElement("div");
modal.style.width = "420px";
modal.style.background = "#fff";
modal.style.padding = "20px";
modal.style.borderRadius = "12px";
modal.style.boxShadow = "0 4px 18px rgba(0,0,0,0.2)";
overlay.appendChild(modal);

const modalTitle = document.createElement("h2");
modalTitle.textContent = "Add Task";
modalTitle.style.textAlign = "center";
modalTitle.style.marginBottom = "16px";
modal.appendChild(modalTitle);

const inputTitle = document.createElement("input");
inputTitle.placeholder = "Task Title";
inputTitle.style.width = "100%";
inputTitle.style.padding = "12px";
inputTitle.style.marginBottom = "12px";
inputTitle.style.border = "1px solid #ccc";
inputTitle.style.borderRadius = "6px";
inputTitle.style.boxSizing = "border-box";
modal.appendChild(inputTitle);

const inputDesc = document.createElement("textarea");
inputDesc.placeholder = "Task Description";
inputDesc.style.width = "100%";
inputDesc.style.padding = "12px";
inputDesc.style.marginBottom = "12px";
inputDesc.style.border = "1px solid #ccc";
inputDesc.style.borderRadius = "6px";
inputDesc.style.boxSizing = "border-box";
inputDesc.style.resize = "none";
inputDesc.rows = 3;
modal.appendChild(inputDesc);

const statusSelect = document.createElement("select");
statusSelect.style.width = "100%";
statusSelect.style.padding = "12px";
statusSelect.style.marginBottom = "12px";
statusSelect.style.border = "1px solid #ccc";
statusSelect.style.borderRadius = "6px";
statusSelect.style.boxSizing = "border-box";

["pending", "in progress", "completed"].forEach((status) => {
  const option = document.createElement("option");
  option.value = status;
  option.textContent = status.charAt(0).toUpperCase() + status.slice(1);
  statusSelect.appendChild(option);
});
modal.appendChild(statusSelect);

const saveBtn = document.createElement("button");
saveBtn.textContent = "Save Task";
saveBtn.style.width = "100%";
saveBtn.style.padding = "12px";
saveBtn.style.marginBottom = "10px";
saveBtn.style.border = "none";
saveBtn.style.borderRadius = "6px";
saveBtn.style.background = "#1877f2";
saveBtn.style.color = "#fff";
saveBtn.style.fontSize = "16px";
saveBtn.style.cursor = "pointer";
modal.appendChild(saveBtn);

const closeBtn = document.createElement("button");
closeBtn.textContent = "Close";
closeBtn.style.width = "100%";
closeBtn.style.padding = "12px";
closeBtn.style.border = "none";
closeBtn.style.borderRadius = "6px";
closeBtn.style.background = "red";
closeBtn.style.color = "#fff";
closeBtn.style.fontSize = "16px";
closeBtn.style.cursor = "pointer";
modal.appendChild(closeBtn);

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const card = document.createElement("div");
    card.style.background = "#fff";
    card.style.border = "1px solid #eee";
    card.style.borderRadius = "12px";
    card.style.padding = "18px";
    card.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
    card.style.position = "relative";

    const taskTitle = document.createElement("h3");
    taskTitle.textContent = task.title;
    taskTitle.style.margin = "0 0 6px 0";
    taskTitle.style.fontSize = "20px";
    card.appendChild(taskTitle);

    const taskDesc = document.createElement("p");
    taskDesc.textContent = task.description;
    taskDesc.style.margin = "0 0 14px 0";
    taskDesc.style.fontSize = "16px";
    card.appendChild(taskDesc);

    const badge = document.createElement("span");
    badge.textContent = task.status;
    badge.style.position = "absolute";
    badge.style.top = "16px";
    badge.style.right = "16px";
    badge.style.padding = "6px 12px";
    badge.style.borderRadius = "8px";
    badge.style.color = "#fff";
    badge.style.fontSize = "14px";
    badge.style.background = statusColors[task.status];
    card.appendChild(badge);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.padding = "10px 16px";
    deleteBtn.style.border = "none";
    deleteBtn.style.borderRadius = "6px";
    deleteBtn.style.background = "red";
    deleteBtn.style.color = "#fff";
    deleteBtn.style.cursor = "pointer";

    deleteBtn.addEventListener("click", () => {
      const index = tasks.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        tasks.splice(index, 1);
        renderTasks();
      }
    });

    card.appendChild(deleteBtn);
    taskList.appendChild(card);
  });
}

addBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  inputTitle.value = "";
  inputDesc.value = "";
  statusSelect.value = "pending";
});

saveBtn.addEventListener("click", () => {
  const title = inputTitle.value.trim();
  const description = inputDesc.value.trim();
  const status = statusSelect.value;

  if (!title || !description) {
    alert("Please fill all fields");
    return;
  }

  tasks.push({
    id: Date.now(),
    title,
    description,
    status,
  });

  renderTasks();

  inputTitle.value = "";
  inputDesc.value = "";
  statusSelect.value = "pending";
  overlay.style.display = "none";
});

renderTasks();