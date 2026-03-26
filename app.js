// // a = +"200";
// // console.log(typeof a);
// // console.log("5" + 5); // '55'
// // console.log("5" - 5); // 0
// // console.log("5" * "2"); //   10
// // console.log("10" / 2); // 5
// // console.log(5 + true); // 6
// // console.log("10" - true); // 9
// // console.log("5" + true); // '5true'
// // console.log(5 + null); // 5
// // console.log(5 + undefined); // NaN
// // console.log(+"200" + 50); // 250
// // console.log(25 + " years old"); // '25 years old'
// // console.log("false" == String); // false
// // console.log("10" - true); // 9

// // // TASK 1
// // const celsius = 25;
// // // const celsius = 30; Невозможно повторно объявить переменную "celsius" с областью видимости "Блок".
// // const fahrenheit = (celsius * 9 / 5) + 32;
// // console.log("Celsius:", celsius);
// // console.log("Fahrenheit:", fahrenheit);
// // const celsius2 = Number(prompt("Enter temperature in Celsius:"));
// // const fahrenheit2 = (celsius2 * 9 / 5) + 32;
// // console.log("Celsius:", celsius2);
// // console.log("Fahrenheit:", fahrenheit2);


// // // TASK 2
// // let budget = String(prompt("Enter your budget:"));
// // let fExpenses = Number(prompt("Enter your first expense:"));
// // let sExpenses = Number(prompt("Enter your second expense:"));
// // let thExpenses = Number(prompt("Enter your third expense:"));
// // let isBudget = budget - (fExpenses + sExpenses + thExpenses);
// // if (isBudget < 0) {
// //     console.log("You have negative budget:", isBudget);
// // }
// // else if (isBudget > 0) {
// //     console.log("Your budget:", isBudget);
// // }

// // console.log(!!'false' == !!'true');
// // console.log(0 || 'JavaScript');
// // console.log(" " && 100);
// // console.log(null ?? "Fallback");
// // console.log(undefined ?? "Default Value");

// // let a ='42'
// // let b = '3.14'
// // let c ='hello'
// // let d = false
// // let e = null
// // let sum = Number(a) + Number(b) + Number(d) + Number(e);
// // console.log(sum); 
// // let f = {username:'jogn'}
// // let g = {username:'jogn'}
// // console.log(f == g);  


// // challenge 1
// // let a = 5
// // if (a % 2 === 0) {
// //     console.log('even numbers', a/2);
// //     console.log('odd numbers', a/2);
// // } 
// // else {
// //        console.log('even numbers', (a+1)/2);
// //     console.log('odd numbers', (a+1)/2);
    
// // }



// // challenge 2
// // let number = 1234
// // let reverse= 0
// // while(number>0){
// //     let digit = number % 10
// //     number = Math.floor(number/10)
// //     reverse = reverse * 10 + digit
// // }
// // console.log(reverse);

// // for (let i = 0; i < number.toString().length; i++) {
// //     console.log(i);
    
// // }


// // PRACTICE
// // 1)
// // f = 1
// // s = 2
// // if (f>s) {
// //     console.log("f is greater than s");
// // } else {
// //     console.log("s is greater than f");
// // }

// // 2)
// // let nums = [1,4,-4,2,1]
// // for (let i = 0; i < nums.length; i++) {
// //     if (nums[i] < 0) {
// //         alert("-");
// //     }
// // }

// // 3)

// // let numsSort = [1,4,-4,2,1]
// // let a = numsSort.sort((a,b) => b-a)
// // console.log(a);

// // 4)
// // for (let i = 0; i != 15; i++) {
// //     if (i % 2 == 0) {
// //         console.log('even number', i);
// //     }
// //     else {
// //         console.log('odd number', i);
// //     }
// // }

// // 5)
// // for (let i = 1; i <=100; i++){
// //       if (i %3 ==0 && i %5 ==0) {
// //         console.log('FIZZBUZZ', i);
// //     }
// //     else if (i %3 ==0) {
// //         console.log('FIZZ', i);
// //     }
// //     else if (i %5 ==0) {
// //         console.log('BUZZ', i);
// //     }
    
// // }

// // 6)
// // let num = +prompt()
// //     let hundreds = Math.floor(num / 100);
// //     let tens = Math.floor((num % 100) / 10);
// //     let ones = num % 10;
// //     let armstrong = hundreds**3 + tens**3 + ones**3;
// //     if (armstrong === num) {
// //         console.log(num);
// //     }


// // 7)
// // let students = [
// //     { name: "David", marks: 80 },
// //     { name: "Vinoth", marks: 77 },
// //     { name: "Divya", marks: 88 },
// //     { name: "Ishitha", marks: 95 },
// //     { name: "Thomas", marks: 68 }
// // ];
// // let sum = 0;
// // for (let student of students) {
// //     sum += student.marks;
// // }
// // let average = sum / students.length;
// // let grade;
// // if (average < 60) {
// //     grade = "F";
// // } else if (average < 70) {
// //     grade = "D";
// // } else if (average < 80) {
// //     grade = "C";
// // } else if (average < 90) {
// //     grade = "B";
// // } else {
// //     grade = "A";
// // }
// // console.log(`Average: ${average}`);
// // console.log(`Grade: ${grade}`);

// // // 1)
// // function greet(name) {
// //     console.log(`Hello, ${name}!`);
// // }
// // greet("Mirzoulug'bek")

// // let greetLet = function (name) {
// //     console.log(`Hello, ${name}!`);
// // }
// // greetLet("Mirzoulug'bek")

// // let greetArrow = (name) => {
// //       console.log(`Hello, ${name}!`);
// // }
// // greetArrow("Mirzoulug'bek")

// // let greetConstructor = new Function('name', 'console.log(`Hello, ${name}!`);;');
// // greetConstructor("Mirzoulug'bek")
// // 2)
// // function isPrime(num) {
// //     if (num%2==1) {
// //         return true;
// //     }
// //     else{
// //         return false;
// //     }
// // }
// // console.log(isPrime(7))

// // 3)
// // function countDigits(num) {
// //     return num.toString().length;
// // }
// // console.log(countDigits(12345))

// // 4)
// // function isPalindrome(num){
// //     let str = num.toString();
// //     let reversedStr = str.split('').reverse().join('');
// //     return str === reversedStr;
// // } 
// // console.log(isPalindrome(12321))

// // 5)
// // function isArmstrong(num) {
// //    let ones = Math.floor(num % 10);
// //    let tens = Math.floor((num % 100) / 10);
// //    let hundreds = Math.floor(num / 100);
// //    let sum = Math.pow(ones, 3) + Math.pow(tens, 3) + Math.pow(hundreds, 3);
// //    return sum === num;
// // }
// // console.log(isArmstrong(153));


// // 6)
// // function createCounter(start = 0) {
// //   let count = start 
// //   return {
// //     increment() {
// //       count++
// //       return count
// //     },
// //     decrement() {
// //       count--
// //       return count
// //     },
// //     getCount() {
// //       return count
// //     }
// //   }
// // }
// // const counter = createCounter(5)
// // console.log(counter.getCount())
// // console.log(counter.increment())
// // console.log(counter.getCount()) 

// // 7)
// // function orderFood() {
// //     const name = prompt("Enter your name:")
// //     const address = prompt("Enter your address: ")
// //     const meal = prompt("Enter your meal:")
// //     console.log(`Dear ${name}, your ordered food ${meal} will be ready in 15 minutes and will be delivered to ${address}.`)
// // }
// // orderFood()

// // 8)
// // function lazyAdder(a) {
// //     return function(b) {
// //         return a + b;
// //     }
// // }
// // const add5 = lazyAdder(5);
// // console.log(add5(10));
// // // console.log(add5(20));
// // //challenge 1
// // function calculateTotal(price, quantity) {
// //   let total = price * quantity
// //   if (quantity >= 5) total *= 0.8
// //   else if (quantity >= 3) total *= 0.9
// //   return total
// // }

// // //challenge 2
// // function checkPasswordStrength(password) {
// //   let score = 0
// //   if (password.length >= 8) score++
// //   if (/[A-Z]/.test(password)) score++
// //   if (/[0-9]/.test(password)) score++
// //   if (/[^A-Za-z0-9]/.test(password)) score++

// //   if (score <= 2) return "Weak"
// //   if (score === 3) return "Medium"
// //   return "Strong"
// // }

// // //challenge 3
// // function atmWithdraw(amount) {
// //   if (amount % 10 !== 0) return "Error"

// //   let bills = {}
// //   bills[100] = Math.floor(amount / 100)
// //   amount %= 100
// //   bills[20] = Math.floor(amount / 20)
// //   amount %= 20
// //   bills[10] = Math.floor(amount / 10)

// //   return bills
// // }

// // //challenge 4
// // function trafficLight() {
// //   function red() {
// //     console.log("Red")
// //     setTimeout(green, 5000)
// //   }
// //   function green() {
// //     console.log("Green")
// //     setTimeout(yellow, 3000)
// //   }
// //   function yellow() {
// //     console.log("Yellow")
// //     setTimeout(red, 2000)
// //   }
// //   red()
// // }

// // //challenge 5
// // function checkPasswordStrength2(password) {
// //   let score = 0
// //   if (password.length >= 8) score++
// //   if (/[A-Z]/.test(password)) score++
// //   if (/[0-9]/.test(password)) score++
// //   if (/[^A-Za-z0-9]/.test(password)) score++

// //   if (score <= 2) return "Weak"
// //   if (score === 3) return "Medium"
// //   return "Strong"
// // }

// // //challenge 6
// // function bankAccount(initialBalance = 0) {
// //   let balance = initialBalance

// //   return {
// //     deposit(amount) {
// //       balance += amount
// //       return balance
// //     },
// //     withdraw(amount) {
// //       if (amount > balance) return "Insufficient funds"
// //       balance -= amount
// //       return balance
// //     },
// //     viewBalance() {
// //       return balance
// //     }
// //   }
// // }

// // //challenge 7
// // function createUser(role) {
// //   return {
// //     role,
// //     can(action) {
// //       const permissions = {
// //         admin: ["add", "edit", "delete", "view"],
// //         editor: ["edit", "view"],
// //         viewer: ["view"]
// //       }
// //       return permissions[role]?.includes(action) || false
// //     }
// //   }
// // }

// // //challenge 8
// // function calculateTax(income) {
// //   if (income < 10000) return 0
// //   if (income <= 50000) return income * 0.1
// //   return income * 0.2
// // }

// // //task 1
// // function debounce(fn, delay) {
// //   let timeout
// //   return function (...args) {
// //     clearTimeout(timeout)
// //     timeout = setTimeout(() => fn.apply(this, args), delay)
// //   }
// // }

// // //task 2
// // function throttle(fn, interval) {
// //   let lastTime = 0
// //   return function (...args) {
// //     const now = Date.now()
// //     if (now - lastTime >= interval) {
// //       lastTime = now
// //       fn.apply(this, args)
// //     }
// //   }
// // }

// // //bonus
// // function taskScheduler() {
// //   let tasks = []

// //   return {
// //     schedule(task, delay) {
// //       const id = setTimeout(task, delay)
// //       tasks.push(id)
// //     },
// //     cancelAll() {
// //       tasks.forEach(id => clearTimeout(id))
// //       tasks = []
// //     }
// //   }
// // }

// // let final = [];

// // function changeLetters(str) {
// //   for (let i = 0; i < str.length; i++) {
// //     let char = str[i];
// //     if (char === char.toUpperCase()) {
// //       char = char.toLowerCase();
// //     } else {
// //       char = char.toUpperCase();
// //     } 
// //     final.push(char);7
// //   }
// //   console.log(final.join('')); 
// // }

// // changeLetters('Hello, World!');


// const students = [
//     { name: "Alice", scores: [80, 90, 100] },
//     { name: "Bob", scores: [50, 60, 70] },
//     { name: "Charlie", scores: [30, 40, 20] }
// ];
// const studentsWithAvg = students.map(student => {
//     const avg = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
//     return {
//         name: student.name,
//         average: avg,
//         passed: avg >= 50
//     };
// });
// const topStudent = studentsWithAvg.reduce((best, current) => 
//     current.average > best.average ? current : best
// );
// console.log(`${topStudent.name} has the highest average: ${topStudent.average}`);


// const cart = [
//     { id: 1, name: "Laptop", price: 900, quantity: 1 },
//     { id: 2, name: "Mouse", price: 50, quantity: 2 },
//     { id: 3, name: "Keyboard", price: 100, quantity: 1 }
// ];

// const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
// const finalTotal = total > 100 ? total * 0.9 : total;

// const mostExpensive = cart.reduce((most, item) => 
//     item.price > most.price ? item : most
// );

// console.log(`Total Price: $${finalTotal} (after discount)`);
// console.log(`Most expensive item: ${mostExpensive.name} - $${mostExpensive.price}`);




// let products = [
//     { id: 1, name: "Laptop", price: 1200, stock: 10 },
//     { id: 2, name: "Phone", price: 700, stock: 15 },
// ];

// const addProduct = (newProduct) => {
//     products = [...products, { ...newProduct, id: products.length + 1 }];
// };

// const updateStock = (productId, newStock) => {
//     products = products.map(product => 
//         product.id === productId ? { ...product, stock: newStock } : product
//     );
// };

// const deleteProduct = (productId) => {
//     products = products.filter(product => product.id !== productId);
// };

// const findProduct = (productName) => {
//     return products.find(product => 
//         product.name.toLowerCase() === productName.toLowerCase()
//     );
// };

// addProduct({ name: "Tablet", price: 500, stock: 8 });
// updateStock(1, 5);
// console.log(findProduct("Phone"));
// deleteProduct(2);
// console.log(products);



// const teams = [
//     { name: "Team A", wins: 5, losses: 2, points: 15 },
//     { name: "Team B", wins: 6, losses: 1, points: 18 },
//     { name: "Team C", wins: 4, losses: 3, points: 12 }
// ];

// const sortTeamsByRanking = () => {
//     return [...teams].sort((a, b) => b.points - a.points);
// };

// const findBestTeam = () => {
//     return teams.reduce((best, team) => 
//         team.points > best.points ? team : best
//     );
// };

// const teamsWithGoals = [
//     { name: "Team A", wins: 5, losses: 2, points: 15, goalsScored: 20, goalsConceded: 10 },
//     { name: "Team B", wins: 6, losses: 1, points: 18, goalsScored: 25, goalsConceded: 8 }
// ];

// const bestGoalDifference = teamsWithGoals.reduce((best, team) => {
//     const goalDiff = team.goalsScored - team.goalsConceded;
//     const bestGoalDiff = best.goalsScored - best.goalsConceded;
//     return goalDiff > bestGoalDiff ? team : best;
// });

// console.log("Rankings:", sortTeamsByRanking());
// console.log("Best team:", findBestTeam());
// console.log("Best goal difference:", bestGoalDifference);


// ! to-do list app
// * Practice 1

// const app_title = document.createElement("h1");
// const toDo_container = document.createElement("ol");
// const addTaskBtn = document.createElement("button");
// const addTaskModalBg = document.createElement("div");
// const addTaskModal = document.createElement("div");
// const inputEl = document.createElement("input");
// const addTaskBtn2 = document.createElement("button");
// const body = document.querySelector("body");

// let tasks = [
//   { id: 1, title: "My First task", isDone: false },
//   { id: 2, title: "Do some Coding", isDone: false },
//   { id: 3, title: "Something else", isDone: false },
// ];

// body.append(app_title, toDo_container, addTaskBtn, addTaskModalBg);
// addTaskModalBg.appendChild(addTaskModal);
// addTaskModal.append(inputEl, addTaskBtn2);

// app_title.textContent = "To-Do App";
// app_title.style.textAlign = "center";
// app_title.style.fontWeight = "900";
// app_title.style.fontSize = "3rem";
// app_title.style.color = "red";

// toDo_container.style.width = "400px";
// toDo_container.style.border = "1px solid #0002";
// toDo_container.style.background = "#0001";
// toDo_container.style.boxShadow = "0 5px 15px -5px #0002";
// toDo_container.style.padding = "20px";
// toDo_container.style.borderRadius = "10px";
// toDo_container.style.display = "grid";
// toDo_container.style.gap = "10px";

// body.style.minHeight = "100vh";
// body.style.display = "grid";
// body.style.placeContent = "center";
// body.style.gap = "1.5rem";

// addTaskBtn.textContent = "Add task";
// addTaskBtn.style.padding = "10px 20px";
// addTaskBtn.style.borderRadius = "8px";
// addTaskBtn.style.background = "skyblue";
// addTaskBtn.style.cursor = "pointer";
// addTaskBtn.style.border = "none";
// addTaskBtn.style.fontSize = "1rem";

// addTaskBtn.onmousedown = () => {
//   addTaskBtn.style.scale = 0.95;
// };
// addTaskBtn.onmouseup = () => {
//   addTaskBtn.style.scale = 1;
// };

// addTaskModalBg.style.position = "fixed";
// addTaskModalBg.style.inset = "0";
// addTaskModalBg.style.background = "#0006";
// addTaskModalBg.style.zIndex = "1";
// addTaskModalBg.style.display = "none";
// addTaskModalBg.style.placeContent = "center";
// addTaskModalBg.style.backdropFilter = "blur(10px)";

// addTaskModal.style.width = "400px";
// addTaskModal.style.padding = "20px";
// addTaskModal.style.background = "#f4f4f4";
// addTaskModal.style.borderRadius = "10px";
// addTaskModal.style.boxShadow = "0 5px 15px -5px #0003";
// addTaskModal.style.display = "grid";
// addTaskModal.style.gap = "1rem";

// inputEl.style.height = "40px";
// inputEl.style.paddingLeft = "7px";

// addTaskBtn2.textContent = "Add task";
// addTaskBtn2.style.background = "limegreen";
// addTaskBtn2.style.padding = "7px 20px";
// addTaskBtn2.style.borderRadius = "7px";
// addTaskBtn2.style.border = "none";
// addTaskBtn2.style.cursor = "pointer";

// function initApp() {
//   toDo_container.innerHTML = "";

//   tasks.forEach((task) => {
//     const taskCard = document.createElement("li");

//     taskCard.innerHTML = `
//     <h1>${task.title}</h1>
//     <ul>
//       <button id="delete">Delete</button>
//       <button id="done">Done</button>
//     </ul>
//   `;

//     taskCard.style.display = "flex";
//     taskCard.style.padding = "10px";
//     taskCard.style.justifyContent = "space-between";
//     taskCard.style.border = "1px solid #0002";
//     taskCard.style.borderRadius = "8px";
//     taskCard.style.background = "#0001";
//     taskCard.style.boxShadow = "0 3px 10px #0001";

//     const headerText = taskCard.querySelector("h1");
//     const ul = taskCard.querySelector("ul");
//     const buttons = taskCard.querySelectorAll("button");

//     headerText.style.fontSize = "1.2rem";
//     ul.style.display = "grid";
//     ul.style.gap = "5px";
//     buttons.forEach((button) => {
//       button.style.padding = "5px 17px";
//       button.style.borderRadius = "5px";
//       button.style.cursor = "pointer";

//       button.onmousedown = () => {
//         button.style.scale = 0.95;
//       };
//       button.onmouseup = () => {
//         button.style.scale = 1;
//       };
//     });

//     if (task.isDone) {
//       headerText.style.textDecoration = "line-through";
//       headerText.style.opacity = 0.5;

//       buttons[1].textContent = "Undone";
//     }

//     const deleteBtn = taskCard.querySelector("#delete");
//     const editBtn = taskCard.querySelector("#done");

//     deleteBtn.onclick = () => deleteTask(task.id);
//     editBtn.onclick = () => editTask(task.id);

//     taskCard.onclick = () => {
//       task.isDone = !task.isDone;
//       initApp();
//     };

//     toDo_container.appendChild(taskCard);
//   });
// }

// initApp();

// function toggleModal(e) {
//   if (e.target !== addTaskModalBg) {
//     return;
//   }
//   addTaskModalBg.style.display = "none";
// }

// addTaskModalBg.onclick = toggleModal;
// addTaskBtn.onclick = () => {
//   addTaskModalBg.style.display = "grid";
// };

// function deleteTask(id) {
//   tasks = tasks.filter((task) => task.id !== id);
//   initApp();
// }

// function addTask() {
//   const title = inputEl.value.trim();

//   if (title === "") {
//     alert("Please enter a task name.");
//     return;
//   }

//   const newTask = {
//     id: Date.now(),
//     title: title,
//     isDone: false,
//   };

//   tasks.push(newTask);

//   initApp();
//   inputEl.value = "";
//   addTaskModalBg.style.display = "none";
// }

// addTaskBtn2.onclick = addTask;

// ! Password strenth check
// * Practice 2

// const passwordContainer = document.createElement("div");
// const appTitle = document.createElement("h1");
// const passwordInp = document.createElement("input");
// const passwordStatus = document.createElement("span");

// document.body.append(passwordContainer);
// passwordContainer.append(appTitle, passwordInp, passwordStatus);

// function UiInit() {
//   passwordContainer.style.width = "400px";
//   passwordContainer.style.padding = "20px";
//   passwordContainer.style.boxShadow = "0 7px 15px -5px #0003";
//   passwordContainer.style.borderRadius = "10px";
//   passwordContainer.style.background = "#fff";
//   passwordContainer.style.border = "1px solid #0001";
//   passwordContainer.style.display = "grid";
//   passwordContainer.style.gap = "1rem";

//   appTitle.textContent = "Password checker";
//   appTitle.style.textAlign = "center";
//   appTitle.style.fontFamily = "Arial";

//   passwordInp.style.height = "35px";
//   passwordInp.style.borderRadius = "8px";
//   passwordInp.style.background = "#0001";
//   passwordInp.style.boxShadow = "0 5px 10px -3px #0002";
//   passwordInp.style.border = "1px solid #0001";
//   passwordInp.style.paddingLeft = "7px";
//   passwordInp.style.fontSize = "1rem";

//   passwordStatus.textContent = "Weak";
//   passwordStatus.style.width = "fit-content";
//   passwordStatus.style.padding = "8px 25px";
//   passwordStatus.style.margin = "auto";
//   passwordStatus.style.borderRadius = "8px";
//   passwordStatus.style.background = "#fd2c3d";
//   passwordStatus.style.fontFamily = "Arial";
//   passwordStatus.style.fontWeight = "700";
//   passwordStatus.style.color = "#fff";
// }
// UiInit();

// function checkPasswordInit() {
//   const password = passwordInp.value;
//   let strength = 0;

//   if (password.length >= 8) {
//     strength++;
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

//   if (hasUpper) strength++;
//   if (hasNumber) strength++;
//   if (hasSpecial) strength++;

//   if (password.length === 0) {
//     passwordStatus.textContent = "Empty";
//     passwordStatus.style.background = "#aaa";
//   } else if (strength <= 2) {
//     passwordStatus.textContent = "Weak";
//     passwordStatus.style.background = "#fd2c3d";
//   } else if (strength === 3) {
//     passwordStatus.textContent = "Medium";
//     passwordStatus.style.background = "#fedf42";
//   } else {
//     passwordStatus.textContent = "Strong";
//     passwordStatus.style.background = "#2aff3f";
//   }
// }

// passwordInp.addEventListener("input", () => {
//   checkPasswordInit();
// });

// ! Password strenth check
// * Practice 3

// const calcContainer = document.createElement("div");
// const calcDisplay = document.createElement("span");
// const calcButtonGrid = document.createElement("div");

// let currentInput = "";
// let previousInput = "";
// let operator = null;

// document.body.append(calcContainer);
// calcContainer.append(calcDisplay, calcButtonGrid);

// const labels = [
//   "7",
//   "8",
//   "9",
//   "/",
//   "4",
//   "5",
//   "6",
//   "*",
//   "1",
//   "2",
//   "3",
//   "-",
//   "0",
//   "(",
//   ")",
//   "+",
//   ".",
//   "c",
//   "=",
// ];

// labels.forEach((label) => {
//   const calcBtn = document.createElement("button");
//   calcBtn.textContent = label;
//   calcBtn.style.width = "100%";
//   calcBtn.style.height = "60px";
//   calcBtn.style.cursor = "pointer";
//   calcBtn.style.borderRadius = "8px";
//   calcBtn.style.border = "1px solid #0003";
//   calcBtn.style.fontSize = "1.3rem";
//   calcBtn.style.fontWeight = "700";

//   calcBtn.style.boxShadow = "0 3px 8px #0001";

//   calcButtonGrid.append(calcBtn);
// });

// function uiSetup() {
//   calcContainer.style.width = "400px";
//   calcContainer.style.background = "#fff";
//   calcContainer.style.padding = "20px";
//   calcContainer.style.display = "grid";
//   calcContainer.style.gap = "10px";
//   calcContainer.style.boxShadow = "0 5px 15px -3px #0002";
//   calcContainer.style.borderRadius = "10px";

//   calcDisplay.style.width = "100%";
//   calcDisplay.style.height = "70px";
//   calcDisplay.style.background = "#0002";
//   calcDisplay.style.boxShadow = "inset 3px 5px 10px #0002";
//   calcDisplay.style.fontSize = "1.3rem";
//   calcDisplay.style.padding = "6px";
//   calcDisplay.style.borderRadius = "8px";

//   calcButtonGrid.style.width = "100%";
//   calcButtonGrid.style.display = "grid";
//   calcButtonGrid.style.gridTemplateColumns = "repeat(4, 1fr)";
//   calcButtonGrid.style.gap = "6px";
//   calcButtonGrid.style.marginTop = "10px";

//   calcButtonGrid.lastElementChild.style.gridColumn = "3/5";
//   calcButtonGrid.lastElementChild.style.background = "orange";
// }

// uiSetup();

// ! Traffic light simulator
// * Practice 4

// // ? UI
// const light_container = document.createElement("div");
// const greenLight = document.createElement("div");
// const yellowLight = document.createElement("div");
// const redLight = document.createElement("div");

// document.body.appendChild(light_container);
// light_container.append(greenLight, yellowLight, redLight);

// function lightUi() {
//   light_container.style.width = "200px";
//   light_container.style.display = "grid";
//   light_container.style.gap = "1rem";
//   light_container.style.padding = "20px";
//   light_container.style.borderRadius = "10px";
//   light_container.style.background = "#121212";

//   greenLight.style.width = "100%";
//   greenLight.style.aspectRatio = "1";
//   greenLight.style.borderRadius = "50%";
//   greenLight.style.background = "#14ff2b";

//   yellowLight.style.width = "100%";
//   yellowLight.style.aspectRatio = "1";
//   yellowLight.style.borderRadius = "50%";
//   yellowLight.style.background = "#ffda1e";

//   redLight.style.width = "100%";
//   redLight.style.aspectRatio = "1";
//   redLight.style.borderRadius = "50%";
//   redLight.style.background = "#ff1024";
// }
// lightUi();

// function startTrafficCycle() {
//   greenLight.style.opacity = "1";
//   yellowLight.style.opacity = "0.2";
//   redLight.style.opacity = "0.2";

//   setTimeout(() => {
//     greenLight.style.opacity = "0.2";
//     yellowLight.style.opacity = "1";
//     redLight.style.opacity = "0.2";

//     setTimeout(() => {
//       greenLight.style.opacity = "0.2";
//       yellowLight.style.opacity = "0.2";
//       redLight.style.opacity = "1";

//       setTimeout(() => {
//         startTrafficCycle();
//       }, 3000);
//     }, 1000);
//   }, 3000);
// }

// startTrafficCycle();

// ! homework
// ? authentication

// const authCont = document.createElement("form");
// const authContTitle = document.createElement("h1");
// const authNameInp = document.createElement("input");
// const authEmailInp = document.createElement("input");
// const authPasswordInp = document.createElement("input");
// const authSubmitBtn = document.createElement("button");
// const authSwitchBtn = document.createElement("button");

// let users = [];

// document.body.appendChild(authCont);
// authCont.append(
//   authContTitle,
//   authNameInp,
//   authEmailInp,
//   authPasswordInp,
//   authSubmitBtn,
//   authSwitchBtn,
// );

// const allInputs = [authNameInp, authEmailInp, authPasswordInp];
// const allbuttons = [authSubmitBtn, authSwitchBtn];

// function authUI() {
//   authCont.style.width = "450px";
//   authCont.style.borderRadius = "15px";
//   authCont.style.padding = "20px";
//   authCont.style.background = "#fff";
//   authCont.style.display = "grid";
//   authCont.style.gap = "6px";
//   authCont.style.border = "1px solid #0002";
//   authCont.style.boxShadow = "0 5px 15px #0001";

//   authContTitle.textContent = "Sign up";
//   authContTitle.style.textAlign = "center";
//   authContTitle.style.paddingBottom = "20px";

//   authNameInp.placeholder = "Enter Name";
//   authNameInp.type = "text";
//   authEmailInp.placeholder = "Enter Email";
//   authEmailInp.type = "email";
//   authPasswordInp.placeholder = "Enter Password";
//   authPasswordInp.type = "password";

//   allInputs.forEach((inpElement) => {
//     inpElement.style.width = "100%";
//     inpElement.style.height = "40px";
//     inpElement.style.border = "2px solid #0003";
//     inpElement.style.borderRadius = "10px";
//     inpElement.style.paddingLeft = "10px";
//     inpElement.style.outlineColor = "#256eff";
//     inpElement.style.marginBlock = "3px";
//     inpElement.style.boxShadow = "0 0 10px #0001";
//   });

//   authSubmitBtn.textContent = "Submit";
//   authSubmitBtn.style.width = "100%";
//   authSubmitBtn.style.height = "45px";
//   authSubmitBtn.style.borderRadius = "10px";
//   authSubmitBtn.style.background = "#256eff";
//   authSubmitBtn.style.color = "#fff";
//   authSubmitBtn.style.fontSize = "1rem";
//   authSubmitBtn.style.fontWeight = "700";
//   authSubmitBtn.style.border = "none";
//   authSubmitBtn.style.marginTop = "20px";
//   authSubmitBtn.style.cursor = "pointer";

//   authSwitchBtn.textContent = "Already have an account?";
//   authSwitchBtn.style.height = "45px";
//   authSwitchBtn.style.color = "#256eff";
//   authSwitchBtn.style.fontSize = "1rem";
//   authSwitchBtn.style.fontWeight = "700";
//   authSwitchBtn.style.border = "none";
//   authSwitchBtn.style.borderRadius = "10px";
//   authSwitchBtn.style.cursor = "pointer";

//   allbuttons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//       event.preventDefault();
//     });

//     button.addEventListener("mouseenter", () => {
//       button.style.filter = "brightness(0.9)";
//     });
//     button.addEventListener("mouseleave", () => {
//       button.style.filter = "brightness(1)";
//     });

//     button.addEventListener("mousedown", () => {
//       button.style.scale = "0.95";
//       button.style.transitionDuration = "50ms";
//     });
//     button.addEventListener("mouseup", () => {
//       button.style.transitionDuration = "0.3s";
//       button.style.scale = "1";
//     });
//   });
// }

// authUI();

// function switchToLogIn() {
//   authCont.classList.toggle("active");

//   if (authCont.classList.contains("active")) {
//     authContTitle.textContent = "Sign up";
//     authNameInp.style.display = "block";
//     authSwitchBtn.textContent = "Already have an account?";
//   } else {
//     authSwitchBtn.textContent = "Don't have an account?";
//     authContTitle.textContent = "Log in";
//     authNameInp.style.display = "none";
//   }
// }

// authSubmitBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (authCont.classList.contains("active")) {
//     checkAuth();
//   } else {
//     addUser();
//   }
// });

// function checkAuth() {
//   const emailInp = authEmailInp.value.trim();
//   const passwInp = authPasswordInp.value.trim();

//   const user = users.find((u) => u.email === emailInp && u.pass === passwInp);

//   if (user) {
//     alert("Welcome back, " + user.name);
//   } else {
//     alert("Account not found or password incorrect.");
//     authPasswordInp.value = "";
//   }
// }

// function addUser() {
//   const nameInp = authNameInp.value.trim();
//   const emailInp = authEmailInp.value.trim();
//   const passwInp = authPasswordInp.value.trim();

//   if (!nameInp || !emailInp || !passwInp) {
//     alert("Please fill all the inputs.");
//     return;
//   }

//   const newUser = {
//     name: nameInp,
//     email: emailInp,
//     pass: passwInp,
//   };

//   users.push(newUser);
//   alert("Account created successfully!");

//   authNameInp.value = "";
//   authEmailInp.value = "";
//   authPasswordInp.value = "";
// }

// authSwitchBtn.addEventListener("click", switchToLogIn);

// ! homework 2
// ? team ranking table

const Container = document.createElement("div");
const tableTitle = document.createElement("h1");
const tableRankSortBtn = document.createElement("button");
const tableBestSortBtn = document.createElement("button");
const tableCont = document.createElement("table");
const addTeamBtn = document.createElement("button");

document.body.appendChild(Container);
Container.append(
  tableTitle,
  tableRankSortBtn,
  tableBestSortBtn,
  tableCont,
  addTeamBtn,
);

const buttons = document.querySelectorAll("button");

let tableData = [
  {
    id: "Rank",
    team: "Team",
    wins: "Wins",
    loss: "Losses",
    points: "Points",
  },
  {
    id: "1",
    team: "Team A",
    wins: "5",
    loss: "2",
    points: "15",
  },
  {
    id: "2",
    team: "Team B",
    wins: "3",
    loss: "4",
    points: "9",
  },
  {
    id: "3",
    team: "Team C",
    wins: "7",
    loss: "1",
    points: "21",
  },
];

function styleUI() {
  Container.style.padding = "20px";
  Container.style.border = "1px solid #0003";
  Container.style.borderRadius = "20px";
  Container.style.boxShadow = "0 5px 15px -5px #0001";
  Container.style.display = "flex";
  Container.style.flexDirection = "column";
  Container.style.background = "#fff";
  Container.style.gap = "10px";

  tableTitle.textContent = "Tournament Leaderboard 🏆";
  tableTitle.style.fontSize = "2rem";
  tableTitle.style.lineHeight = "1.6";
  tableTitle.style.textAlign = "center";

  buttons.forEach((button) => {
    button.style.width = "100%";
    button.style.padding = "10px";
    button.style.background = "#256eff";
    button.style.color = "#fff";
    button.style.fontSize = "1rem";
    button.style.fontWeight = "600";
    button.style.borderRadius = "10px";
    button.style.boxShadow = "0 5px 10px #0001";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.textTransform = "capitalize";

    button.addEventListener("mouseover", () => {
      button.style.background = "#1555d6";
    });
    button.addEventListener("mouseout", () => {
      button.style.background = "#256eff";
    });
    button.addEventListener("mousedown", () => {
      button.style.scale = "0.95";
      button.style.transitionDuration = "50ms";
    });
    button.addEventListener("mouseup", () => {
      button.style.scale = "1";
      button.style.transitionDuration = "300ms";
    });
  });

  tableRankSortBtn.textContent = "Sort by ranking";
  tableBestSortBtn.textContent = "Highlight best team";
  addTeamBtn.textContent = "Add Team";
}

styleUI();

function fillTable() {
  tableCont.style.borderCollapse = "collapse";
  tableCont.style.overflow = "hidden";
  tableCont.style.borderRadius = "10px";
  tableCont.style.marginBlock = "10px";
  tableCont.style.boxShadow = "0 5px 15px -3px #0001";
  tableCont.innerHTML = "";

  tableData.forEach((data) => {
    tableCont.innerHTML += `
    <tr>
      <td>${data.id}</td>
      <td>${data.team}</td>
      <td>${data.wins}</td>
      <td>${data.loss}</td>
      <td>${data.points}</td>
    </tr>
    `;
  });

  const tableRow = tableCont.querySelectorAll("tr");
  const frstTableRow = tableCont.querySelectorAll("tr")[0];
  const tableDataa = tableCont.querySelectorAll("td");

  frstTableRow.style.background = "#256eff";
  frstTableRow.style.color = "#fff";
  frstTableRow.style.fontWeight = "700";

  tableRow.forEach((tr) => {
    tr.style.borderCollapse = "collapse";
  });
  tableDataa.forEach((td) => {
    td.style.border = "1px solid #0002";
    td.style.padding = "5px 10px";
  });
}

fillTable();

function newTeamCont() {
  const modalBackdrop = document.createElement("div");
  const newTeamModal = document.createElement("div");
  const newTeamModalTitle = document.createElement("h1");
  const newTeamInpName = document.createElement("input");
  const newTeamInpWins = document.createElement("input");
  const newTeamInpLosses = document.createElement("input");
  const newTeamInpPoints = document.createElement("input");
  const addBtn = document.createElement("button");
  const exitModalBtn = document.createElement("button");

  document.body.appendChild(modalBackdrop);
  modalBackdrop.append(newTeamModal, exitModalBtn);
  newTeamModal.append(
    newTeamModalTitle,
    newTeamInpName,
    newTeamInpWins,
    newTeamInpLosses,
    newTeamInpPoints,
    addBtn,
  );

  let inputs = [
    newTeamInpName,
    newTeamInpWins,
    newTeamInpLosses,
    newTeamInpPoints,
  ];

  let numInputs = [newTeamInpWins, newTeamInpLosses, newTeamInpPoints];

  modalBackdrop.style.position = "fixed";
  modalBackdrop.style.zIndex = "10";
  modalBackdrop.style.inset = "0";
  modalBackdrop.style.background = "#0003";
  modalBackdrop.style.backdropFilter = "blur(20px)";
  modalBackdrop.style.display = "none";
  modalBackdrop.style.placeContent = "center";
  modalBackdrop.style.overflow = "hidden";
  modalBackdrop.style.overscrollBehavior = "contain";

  newTeamModal.style.background = "#fff";
  newTeamModal.style.display = "flex";
  newTeamModal.style.width = "400px";
  newTeamModal.style.flexDirection = "column";
  newTeamModal.style.padding = "20px";
  newTeamModal.style.borderRadius = "10px";
  newTeamModal.style.gap = "10px";
  newTeamModal.style.border = "1px solid #0003";
  newTeamModal.style.boxShadow = "0 5px 15px -5px #0002";

  newTeamModalTitle.textContent = "Add new team";
  newTeamModalTitle.style.fontSize = "2rem";
  newTeamModalTitle.style.lineHeight = "1.6";
  newTeamModalTitle.style.textAlign = "center";
  newTeamModalTitle.style.textTransform = "capitlize";

  inputs.forEach((input) => {
    input.style.width = "100%";
    input.style.height = "35px";
    input.style.borderRadius = "8px";
    input.style.outline = "none";
    input.style.border = "1px solid gray";
    input.style.paddingLeft = "8px";
  });

  numInputs.forEach((numput) => {
    numput.type = "number";
  });

  newTeamInpName.placeholder = "Team Name";
  newTeamInpWins.placeholder = "Wins";
  newTeamInpName.type = "text";
  newTeamInpLosses.placeholder = "Losses";
  newTeamInpPoints.placeholder = "Points";

  addBtn.textContent = "Add team";
  addBtn.style.width = "100%";
  addBtn.style.padding = "10px";
  addBtn.style.background = "#256eff";
  addBtn.style.color = "#fff";
  addBtn.style.fontSize = "1rem";
  addBtn.style.fontWeight = "600";
  addBtn.style.borderRadius = "10px";
  addBtn.style.boxShadow = "0 5px 10px #0001";
  addBtn.style.border = "none";
  addBtn.style.cursor = "pointer";
  addBtn.style.textTransform = "capitalize";

  addBtn.addEventListener("mouseover", () => {
    addBtn.style.background = "#1555d6";
  });
  addBtn.addEventListener("mouseout", () => {
    addBtn.style.background = "#256eff";
  });
  addBtn.addEventListener("mousedown", () => {
    addBtn.style.scale = "0.95";
    addBtn.style.transitionDuration = "50ms";
  });
  addBtn.addEventListener("mouseup", () => {
    addBtn.style.scale = "1";
    addBtn.style.transitionDuration = "300ms";
  });

  exitModalBtn.textContent = "X";
  exitModalBtn.style.position = "absolute";
  exitModalBtn.style.zIndex = "1";
  exitModalBtn.style.top = "20px";
  exitModalBtn.style.right = "20px";
  exitModalBtn.style.background = "red";
  exitModalBtn.style.color = "#fff";
  exitModalBtn.style.borderRadius = "50%";
  exitModalBtn.style.width = "30px";
  exitModalBtn.style.aspectRatio = "1";
  exitModalBtn.style.border = "none";
  exitModalBtn.style.fontWeight = "700";
  exitModalBtn.style.cursor = "pointer";

  function toggleNewTeam() {
    if (modalBackdrop.classList.contains("active")) {
      modalBackdrop.style.display = "none";
      modalBackdrop.classList.remove("active");
    } else {
      modalBackdrop.style.display = "grid";
      modalBackdrop.classList.add("active");
    }
  }

  function addTeam() {
    let nameInput = newTeamInpName.value;
    let winsInput = newTeamInpWins.value;
    let lossInput = newTeamInpLosses.value;
    let pointInput = newTeamInpPoints.value;

    if (
      nameInput.trim() === "" ||
      winsInput.trim() === "" ||
      lossInput.trim() === "" ||
      pointInput.trim() === ""
    ) {
      alert("Please fill all the inputs");
    } else {
      const newTeam = {
        id: tableData.length + 1,
        team: nameInput,
        wins: Number(winsInput),
        loss: Number(lossInput),
        points: Number(pointInput),
      };

      tableData.push(newTeam);

      fillTable();

      newTeamInpName.value = "";
      newTeamInpWins.value = "";
      newTeamInpLosses.value = "";
      newTeamInpPoints.value = "";

      toggleNewTeam();
    }
  }

  addTeamBtn.addEventListener("click", toggleNewTeam);
  exitModalBtn.addEventListener("click", toggleNewTeam);
  addBtn.addEventListener("click", addTeam);
}

newTeamCont();
