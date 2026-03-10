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


// //-----------------------------------------------7-DARS-----------------------------------------

// ! //////////////// Objects homework
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


