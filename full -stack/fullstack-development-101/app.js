// var a = undefined;
// console.log(a);
// var a = 40;

// let user = {
//   username: "Ulugbek",
//   age: 30,
// };

// console.log(
//   {
//     username: "Ulugbel",
//   } ==
//     {
//       username: "Ulugbel",
//     }
// );

// let number = 1234;
// let reverse = 0;

// while (number > 0) {
//   let digit = number % 10;
//   number = Math.floor(number / 10);
//   reverse = reverse * 10 + digit;
// }

// console.log(reverse);

// task 1.1

// let number = Number(prompt("Enter the Number"));
// let count = 0;
// while (number > 0) {
//   number = Math.floor(number / 10);
//   count++;
// }

// console.log(count);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

const user = {
  username: "Ulugbek",
  age: 30,
  country: "Uzbekistan",
};

const keys = Object.keys(user);
const values = Object.values(user);

for (const key in user) {
  const element = user[key];
  console.log(element);
}

// 2:Getting started with Javascript
// ---CHallenge 1---
// console.log("5" + 5);        
// console.log("5" - 5);        
// console.log("5" * "2");      
// console.log("10" / 2);       
// console.log(5 + true);       
// console.log("10" - true);    
// console.log("5" + true);     
// console.log(5 + null);       
// console.log(5 + undefined);  

// // ---Challenge 2---
// // 1
// let num = Number("200") + 50;
// console.log(num);
// // 2
// let str = String(25) + " years old";
// console.log(str); 
// // 3
// console.log(Boolean("false")); 
// // 4
// console.log("10" - true);

// ---










































// Control statements
// 1
// let num1 = 15;
// let num2 = 30;

// if (num1 > num2) {
//     console.log("The largest is: " + num1);
// } else {
//     console.log("The largest is: " + num2);
// }

// // 2
// let x = 3, y = -7, z = 2;

// if (x * y * z > 0) {
//     alert("The sign is +");
// } else if (x * y * z < 0) {
//     alert("The sign is -");
// } else {
//     alert("The result is 0");
// }

// // 3
// let a = 0, b = -1, c = 4;

// if (a > b && a > c) {
//     if (b > c) { alert(a + ", " + b + ", " + c); }
//     else { alert(a + ", " + c + ", " + b); }
// } else if (b > a && b > c) {
//     if (a > c) { alert(b + ", " + a + ", " + c); }
//     else { alert(b + ", " + c + ", " + a); }
// } else {
//     if (a > b) { alert(c + ", " + a + ", " + b); }
//     else { alert(c + ", " + b + ", " + a); }
// }

// // 4
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// // 5
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// // 6
// console.log("Armstrong numbers:");
// for (let i = 100; i <= 999; i++) {
//     // Split the number into digits
//     let digits = i.toString().split("");
//     let d1 = Number(digits[0]);
//     let d2 = Number(digits[1]);
//     let d3 = Number(digits[2]);

//     // Check if the sum of cubes equals the number
//     if (Math.pow(d1, 3) + Math.pow(d2, 3) + Math.pow(d3, 3) === i) {
//         console.log(i); // This will find 153, 370, 371, 407
//     }
// }


// // 7
// // 1. Data Setup
// const students = [
//     { name: "David", marks: 80 },
//     { name: "Vinoth", marks: 77 },
//     { name: "Divya", marks: 88 },
//     { name: "Ishitha", marks: 95 },
//     { name: "Thomas", marks: 68 }
// ];

// // 2. Compute Average
// let totalMarks = 0;
// for (let i = 0; i < students.length; i++) {
//     totalMarks += students[i].marks;
// }
// let average = totalMarks / students.length;

// console.log("Average Grade: " + average);

// // 3. Determine Grade based on Range
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
// console.log("5" + 5);
// let limit=10;
// let evens=0;
// let odds=0;

// for( let i=0; i<=limit; i++){
//     if (i%2==0){
//         evens++;
//     }
//     else {
//         odds++;
//     }
// }
// console.log("Evens :", evens, "Odds :", odds);

// for(let i=0; i<10; i++){
//     console.log(i);
// }
// let i=0;
// while (i<10){
//     console.log(i);
//     i++;
// }
// let j=0;
// do {
//     console.log(j);
//     j++;
//  } while (j<10);

// const user = {

// }
// 1
// // let a = 5;
// let b = 9;

// if (a > b) {
//     console.log("Largest is: " + a);
// } else {
//     console.log("Largest is: " + b);
// }

// // 2
// let x=3;
// let y=-7;
// let z=2;

// let product = x*y*z;

// if(product>0){
//     console.log("The sign is +");
// } else{
//     console.log("The sign is -");
// }

// // 3
// let g = 0;
// let p = -1;
// let c = 4;

// let numbers = [g,p, c];
// numbers.sort(function(x, y) {
//     return y - x;
// });

// console.log(numbers.join(", "));


// // 4
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// // 5














// ===================================================================
//  2.26.2026
// ===================================================================

// // Challenge 1
// function greet(name) {
//     return "Hello," +name + "!";
// }
// // const greet = function(name){
// //     return "Hello,"+name+"!";
// // }
// // const greet = (name) => {
// //     return "Hello ," + name + "!";
// // };

// // const greet = name => "Hello,"+name + "!";


// // Challenge 2
// function isPrime(n){
//     if(n<=1) return false;

//     for (let i=2; i<=Math.sqrt(n); i++){
//        if(n%i===0){
//         return false;
//        }
//     }
//     return true;
// } 

// // Challenge 3
// function countDigits(n){
//     return Math.abs(n).toString().length;
// }
   
// function countDigits(n){
//     n=Math.abs(n);
//     let count = 0;
    
//     if (n===0) return 1;

//     while (n>0){
//         count++;
//         n=Math.floor(n/10);
//     }
//     return count;
// }
//  console.log(isPrime(11));
//  console.log(countDigits(0));


// // Challenge 4
// function isPalindrome(n){
//     let original =n;
//     let reversed =0;

//     while(n>0){
//         let digit = n%10;
//         reversed = reversed*10+digit;
//         n=Math.floor(n/10);
//     }
//     return original ===reversed;
// }

// console.log(isPalindrome(12321));

// // Challenge 5
// function isArmstrong(n){
//     let original =n;
//     let digits=n.toString().length;
//     let sum=0;

//     while (n>0){
//         let digit =n%10;
//         sum+= digit**digits;
//         n=Math.floor(n/10);
//     }
//     return sum===original;
// }
// console.log(isArmstrong(153))

// // Challenge 6
// function createCounter(start){
//     let count=start;

//     return {
//         increment(){
//             count++;
//         },
//         decrement(){
//             count--;
//         },
//         getCount(){
//             return count;
//         }
//     };
// }
// console.log(createCounter(0))

// // Challenge 7
// function orderFood(){
//     const  name=prompt("Enter your name: ");
//     const food=prompt("Enter food name:");
//     const address=prompt("enter ur address:" );

//     console.log('Dear ${name}, Your food is ready, ${food} will be delivered in 15 minutes to your address ${address}')

// }
// console.log(orderFood());

// // Challenge 8
// function lazyadder(a){
//     return function(b) {
//        return a+b;
//     }
// }
// const add=lazyadder(6)
// console.log(add(5));
// console.log(add(2))

// // Assignment
// // 1
// function calculateTotal(price, quantity) {
//     let total = price * quantity;

//     if (quantity >= 5) {
//         total *= 0.8; // 20% discount
//     } else if (quantity >= 3) {
//         total *= 0.9; // 10% discount
//     }

//     return total;
// }

// console.log(calculateTotal(100, 3)); 

// // 2
// function checkPassword(password) {
//     let strength = 0;

//     if (password.length >= 8) strength++;
//     if (/[A-Z]/.test(password)) strength++;
//     if (/[0-9]/.test(password)) strength++;
//     if (/[^A-Za-z0-9]/.test(password)) strength++;

//     if (strength <= 2) return "Weak";
//     if (strength === 3) return "Medium";
//     return "Strong";
// }

// console.log(checkPassword("Hello123!"));

// // 3
// function withdraw(amount) {
//     if (amount % 10 !== 0) {
//         return "Error: Amount must be multiple of 10";
//     }

//     let bills = {};

//     bills["100"] = Math.floor(amount / 100);
//     amount %= 100;

//     bills["50"] = Math.floor(amount / 50);
//     amount %= 50;

//     bills["20"] = Math.floor(amount / 20);
//     amount %= 20;

//     bills["10"] = Math.floor(amount / 10);

//     return bills;
// }

// console.log(withdraw(130));

// // 4
// function trafficLight() {
//     console.log("Red");

//     setTimeout(() => {
//         console.log("Green");

//         setTimeout(() => {
//             console.log("Yellow");

//             setTimeout(() => {
//                 trafficLight(); // restart cycle
//             }, 2000);

//         }, 3000);

//     }, 5000);
// }

// trafficLight();

// // 5
// function checkPassword(password) {

//     const hasUppercase = /[A-Z]/.test(password);
//     const hasNumber = /[0-9]/.test(password);
//     const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
//     const isLongEnough = password.length >= 8;

//     let score = 0;

//     if (isLongEnough) score++;
//     if (hasUppercase) score++;
//     if (hasNumber) score++;
//     if (hasSpecial) score++;

//     if (score <= 2) return "Weak";
//     if (score === 3) return "Medium";
//     if (score === 4) return "Strong";
// }

// // 6
// function bankAccount(initialBalance) {
//     let balance = initialBalance; // private variable

//     return {
//         deposit(amount) {
//             if (amount > 0) {
//                 balance += amount;
//                 console.log(`Deposited: $${amount}`);
//             }
//         },

//         withdraw(amount) {
//             if (amount <= balance) {
//                 balance -= amount;
//                 console.log(`Withdrawn: $${amount}`);
//             } else {
//                 console.log("Insufficient funds");
//             }
//         },

//         viewBalance() {
//             console.log(`Current Balance: $${balance}`);
//         }
//     };
// }
// const myAccount = bankAccount(1000);
// myAccount.deposit(500);
// myAccount.withdraw(200);
// myAccount.viewBalance();

// // 7
// function createUser(role) {

//     const permissions = {
//         admin: ["add", "edit", "delete", "view"],
//         editor: ["edit", "view"],
//         viewer: ["view"]
//     };

//     return {
//         role,
//         can(action) {
//             if (permissions[role].includes(action)) {
//                 console.log(`Allowed: ${action}`);
//             } else {
//                 console.log(`Access denied for ${action}`);
//             }
//         }
//     };
// }
// const adminUser = createUser("admin");
// adminUser.can("delete"); // allowed
// adminUser.can("edit");   // allowed

// const viewerUser = createUser("viewer");
// viewerUser.can("delete"); // denied

// // 8
// function calculateTax(income) {
//     if (income < 10000) {
//         return 0;
//     } else if (income <= 50000) {
//         return income * 0.10;
//     } else {
//         return income * 0.20;
//     }
// }
// console.log(calculateTax(8000));   // 0
// console.log(calculateTax(30000));  // 3000
// console.log(calculateTax(70000));  // 14000



// // 9
// function debounce(fn, delay) {
//     let timeoutId;

//     return function (...args) {
//         clearTimeout(timeoutId);

//         timeoutId = setTimeout(() => {
//             fn.apply(this, args);
//         }, delay);
//     };
// }
// const search = debounce(() => {
//     console.log("Searching...");
// }, 1000);

// search();
// search();
// search(); // Only runs once after 1 second




// // 10
// function throttle(fn, interval) {
//     let lastTime = 0;

//     return function (...args) {
//         const now = Date.now();

//         if (now - lastTime >= interval) {
//             lastTime = now;
//             fn.apply(this, args);
//         }
//     };
// }

// // 11
// function taskScheduler() {
//     let tasks = [];

//     return {
//         schedule(task, delay) {
//             const id = setTimeout(() => {
//                 task();
//                 tasks = tasks.filter(t => t !== id);
//             }, delay);

//             tasks.push(id);
//         },

//         cancelAll() {
//             tasks.forEach(id => clearTimeout(id));
//             tasks = [];
//             console.log("All tasks cancelled");
//         }
//     };
// }
// const scheduler = taskScheduler();

// scheduler.schedule(() => console.log("Task 1"), 2000);
// scheduler.schedule(() => console.log("Task 2"), 4000);

// // scheduler.cancelAll(); // cancels everything


// // LECTURE 6
// // 1
// function first(arr, n) {
//     if (arr.length === 0) 
//         return [];

//     if (n === undefined) 
//         return arr[0];

//     if (n < 0) 
//         return n;

//     return arr.slice(0, n);
// }

// // 2
// function last(arr, n) {
//     if (arr.length === 0) 
//         return [];

//     if (n === undefined) 
//         return arr[arr.length - 1];

//     return arr.slice(-n);
// }

// // 3
// let myColor = ["Red", "Green", "White", "Black"];

// let result = myColor.join(",");
// console.log(result);

// // 4
// function insertDashes(num) {
//     return num.toString().split("").join("-");
// }

// console.log(insertDashes(25468)); 

// // 5
// var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// arr1.sort(function(a, b) {
//     return a - b;
// });

// console.log(arr1);

// // 6
// function mostFrequent(arr) {
//     let counter = {};
//     let maxCount = 0;
//     let mostFrequentItem;

//     for (let item of arr) {
//         counter[item] = (counter[item] || 0) + 1;

//         if (counter[item] > maxCount) {
//             maxCount = counter[item];
//             mostFrequentItem = item;
//         }
//     }

//     return `${mostFrequentItem} ( ${maxCount} times )`;
// }

// var arr1 = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3];
// console.log(mostFrequent(arr1));

// // 7
// function swapCase(str) {
//     let result = "";

//     for (let char of str) {
//         if (char === char.toUpperCase()) {
//             result += char.toLowerCase();
//         } else {
//             result += char.toUpperCase();
//         }
//     }

//     return result;
// }

// console.log(swapCase("The Quick Brown Fox"));

// // 8
// function getOrdinal(n) {
//     if (n % 100 >= 11 && n % 100 <= 13) return n + "th";

//     switch (n % 10) {
//         case 1: return n + "st";
//         case 2: return n + "nd";
//         case 3: return n + "rd";
//         default: return n + "th";
//     }
// }

// let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

// for (let i = 0; i < color.length; i++) {
//     console.log(`${getOrdinal(i + 1)} choice is ${color[i].trim()}.`);
// }


// // 9
// function sumArrays(arr1, arr2) {
//     let maxLength = Math.max(arr1.length, arr2.length);
//     let result = [];

//     for (let i = 0; i < maxLength; i++) {
//         let val1 = arr1[i] || 0;
//         let val2 = arr2[i] || 0;

//         result.push(val1 + val2);
//     }

//     return result;
// }



// let array1 = [1,0,2,3,4];
// let array2 = [3,5,6,7,8,13];

// console.log(sumArrays(array1, array2));

// LECTURE 7
// Task 1
const students = [
  { name: "Alice", scores: [80, 90, 100] },
  { name: "Bob", scores: [50, 60, 70] },
  { name: "Charlie", scores: [30, 40, 20] }
];

let topStudent = "";
let highestAverage = 0;

for (let i = 0; i < students.length; i++) {

  let scores = students[i].scores;
  let sum = 0;

  // calculate total score
  for (let j = 0; j < scores.length; j++) {
    sum += scores[j];
  }

  let avg = sum / scores.length;

  // check pass or fail
  if (avg >= 50) {
    console.log(students[i].name + " passed with average " + avg);
  } else {
    console.log(students[i].name + " failed with average " + avg);
  }

  // check highest average
  if (avg > highestAverage) {
    highestAverage = avg;
    topStudent = students[i].name;
  }
}

console.log(topStudent + " has the highest average: " + highestAverage);



// 2
const cart=[
    {id:1,name:"Laptop", price: 900, quantity:1},
    {id:2, name: "Mouse", price: 50, quantity: 2},
    {id:3, name: "Keyboard", price: 100, quantity:1}
];

let totalPrice=0;
let mostExpensive=cart[0];

for (let i=0; i<cart.length; i++){
    let itemTotal=cart[i].price*cart[i].qunatity;
    totalPrice+=itemTotal;

    if(cart[i].price>mostExpensive.price){
        mostExpensive=cart[i];

    }
}
if (totalPrice>100){
    totalPrice = totalPrice*0.9;
}
console.log("Total Price:", totalPrice)
console.log("Most expensive item:", mostExpensive.name);



// 3
let products = [
  { id: 1, name: "Laptop", price: 1200, stock: 10 },
  { id: 2, name: "Phone", price: 700, stock: 15 },
];

// 1. Add a new product (addProduct)
const addProduct = (newProduct) => {
  products.push(newProduct);
};

// 2. Update stock of a product (updateStock)
const updateStock = (id, newStock) => {
  products = products.map(product => 
    product.id === id ? { ...product, stock: newStock } : product
  );
};

// 3. Delete a product by ID (deleteProduct)
const deleteProduct = (id) => {
  products = products.filter(product => product.id !== id);
};

// 4. Find a product by name (findProduct)
const findProduct = (name) => {
  return products.find(product => product.name.toLowerCase() === name.toLowerCase());
};

// --- Testing the functions ---
addProduct({ id: 3, name: "Keyboard", price: 100, stock: 5 });
updateStock(1, 12); // Laptop stock becomes 12
deleteProduct(2);   // Removes Phone
const found = findProduct("Laptop");

console.log(products);
console.log("Found:", found);






























// ==========================================================================