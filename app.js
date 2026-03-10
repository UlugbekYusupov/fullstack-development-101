// console.log('5' + 5)
// console.log('5' - 5)
// console.log('5' * 5)
// console.log('10' / 5)
// console.log(5 + true)
// console.log(5 - true)
// console.log('5' + true)
// console.log(5 + null)
// console.log(5 + undefined)


// console.log(Number('200') + 50)
// console.log(String(200) + "years old")
// if ('false') {
//     console.log('True')
// }
// else{
//     console.log('False')
// }

// console.log(Boolean(0))


// const temperature = prompt("Enter the tempeature in Celsius: ")
// const fahrenheit = (temperature * 9 / 5) + 32
// console.log(`${temperature}°C is equal to ${fahrenheit}°F`)

// let budget = prompt("Enter your budget: ")
// for (let i = 0; i < 3; i++) {
//     if (budget < 0) {
//         alert("You have exceeded your budget!")
//     }
//     budget -= Number(prompt("Enter an expense: "))
// }
// budget = budget.toFixed(2)
// console.log(`Remaining budget: ${budget}`)



// console.log(!!"false" == !!"true")
// console.log(0||"Javascript")
// console.log(" " && 100)
// console.log(null ?? "Fallback")
// console.log(undefined ?? "Default value")

// let a = "42"
// let b = "3.14"
// let c = "Hello"
// let d = false
// let e = null

// let sum = Number(a) + Number(b) + Number(d) + Number(e)
// console.log(sum)

// let num = Number(prompt("Enter a number: "))
// let sum_odd = 0
// let sum_even = 0
// for (let i = 1; i <= num; i+=2) {
//     sum_odd += 1
// }
// for (let i = 2; i <= num; i+=2) {
//     sum_even += 1
// }
// console.log(`Sum of odd numbers: ${sum_odd}`)
// console.log(`Sum of even numbers: ${sum_even}`)

// let num = Number(prompt("Enter a number: "))
// let reversed = 0
// while (num > 0) {
//     let digit = num % 10
//     reversed = (reversed * 10) + digit
//     num = Math.floor(num / 10)
// }
// console.log(`Reversed number: ${reversed}`)

// let num = Number(prompt("Enter a number: "))
// let largest = 0
// while (num > 0) {
//     let digit = num % 10
//     if (digit > largest) {
//         largest = digit
//     }
//     num = Math.floor(num / 10)
// }
// console.log(`Largest digit: ${largest}`)

// feb 24 ====================================================================

// a = Number(prompt("Enter a number: "))
// b = Number(prompt("Enter another number: "))
// if (a > b) {
//     console.log(`${a} is greater than ${b}`)
// }
// else if (b > a) {
//     console.log(`${b} is greater than ${a}`)
// }
// else {
//     console.log("Both numbers are equal")
// }

// numbers = [2, -7, 4]
// for (i in numbers) {
//     if (numbers[i] < 0){
//         alert("your number is " + numbers[i])
//     }
// }
// let num1 = Number(prompt("Enter first number: "))
// let num2 = Number(prompt("Enter second number: "))
// let num3 = Number(prompt("Enter third number: "))

// if (num1 > num2 && num1 > num3) {
//     console.log(`Largest: ${num1}`)
// } else if (num2 > num1 && num2 > num3) {
//     console.log(`Largest: ${num2}`)
// } else {
//     console.log(`Largest: ${num3}`)
// }

// for (let i = 1; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }

// num = Number(prompt("Enter a number: "))
// let sum = 0;
// let temp = num;
// while (temp > 0) {
//     let digit = temp % 10;
//     sum += digit ** 3;
//     temp = Math.floor(temp / 10);
// }
// if (sum === num) {
//     console.log(num);
// }


// let students = {
//     "David": 80,
//     "Vinoth": 77,
//     "Divya": 88,
//     "Ishitha": 95,
//     "Thomas": 68
// }
// let totalMarks = 0
// let studentCount = 0

// for (let student in students) {
//     totalMarks += students[student]
//     studentCount++
// }

// let averageMarks = totalMarks / studentCount
// console.log(`Average Marks: ${averageMarks}`)

// let grade
// if (averageMarks >= 90) {
//     grade = 'A'
// } else if (averageMarks >= 80) {
//     grade = 'B'
// } else if (averageMarks >= 70) {
//     grade = 'C'
// } else if (averageMarks >= 60) {
//     grade = 'D'
// } else {
//     grade = 'F'
// }
// console.log(`Grade: ${grade}`)

// ===============================================================
// feb 26 lecture 1

// challenge 1
// function greet(name){
//     console.log(`Hello, ${name}!`)
// }
// greet("Alice")

// let greet = function(name) {
//     console.log(`Hello, ${name}!`)
// }
// greet("Bob")

// let greet = (name) => {
//     console.log(`Hello, ${name}!`)
// }
// greet("Charlie")

// let greet = new Function("name", "console.log(`Hello, ${name}!`)")
// greet("David")

// (function(name) {
//     console.log(`Hello, ${name}!`)
// })("Eve")

// challange 2

// function isPrime(num) {
//     if (num <= 1) return false
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false
//     }
//     return true
// }
// console.log(isPrime(7)) // true
// console.log(isPrime(10)) // false

// challenge 3

// function countDigits(num) {
//     let count = 0
//     while (num > 0) {
//         num = Math.floor(num / 10)
//         count++
//     }
//     return count
// }
// console.log(countDigits(12345)) // 5
// console.log(countDigits(0)) // 1

// challenge 4

// function isPalindrome(num) {
//     let original = num
//     let reversed = 0
//     while (num > 0) {
//         let digit = num % 10
//         reversed = (reversed * 10) + digit
//         num = Math.floor(num / 10)
//     }
//     return original === reversed
// }
// console.log(isPalindrome(121)) // true
// console.log(isPalindrome(-121)) // false
// console.log(isPalindrome(10)) // false


// challenge 5

// function isArmstrong(num) {
//     let original = num
//     let sum = 0
//     let digits = String(num).length
//     while (num > 0) {
//         let digit = num % 10
//         sum += digit ** digits
//         num = Math.floor(num / 10)
//     }
//     return original === sum
// }
// console.log(isArmstrong(153)) // true
// console.log(isArmstrong(9474)) // true
// console.log(isArmstrong(123)) // false


// challenge 6

// function createCounter(start) {
//   let count = start;

//   return {
//     increment() {
//       count++;
//     },
//     decrement() {
//       count--;
//     },
//     getCount() {
//       return count;
//     }
//   };
// }
// let a = createCounter(5)
// a.increment()
// a.increment()
// a.decrement()
// console.log(a.getCount())

// challenge 7

// function orderFood(name, address, food) {
//     console.log(`Order placed: ${food} for ${name} at ${address}`)
// }
// orderFood(prompt("Enter your name: "), prompt("Enter your address: "), prompt("Enter the food you want to order: "))

// challenge 8

// function lazyAdder(num){
//     return function(b){
//         num+=b
//         return num
//     }
// }
// const add5 = lazyAdder(5)
// console.log(add5(10))
// console.log(add5(15))
// console.log(add5(32))

// assigbnment 1

// function shoppingCart() {
//     let total = 0
//     let itemcount = 0
//     function addItem(price) {
//         total += price
//         itemcount++
//     }
//     function getTotal() {
//         if (itemcount > 5){
//             return total * 0.8
//         } else if (itemcount > 3) { 
//             return total * 0.9
//         } else {
//             return total
//         }
//     }
//     return {
//         addItem,
//         getTotal
//     }
// }

// let cart = shoppingCart()
// cart.addItem(100)
// cart.addItem(200)
// cart.addItem(300)
// cart.addItem(400)
// console.log(cart.getTotal())

// assignment 2

// function checkPassword(psw){
//     let points = 0
//     if (psw.length() >= 8){
//         points++
//     }
//     for(i in psw){
//         if (psw[i] < "A" && psw[i] > "Z"){
//             points++
//             break
//         }
//     }
//     for (i in psw){
//         if (psw[i] < "0" && psw[i] > "9"){
//             points++
//             break
//         }
//     }
//     let specialChars = "!@#$%^&*()_+{}|:<>?-=[]\\;',./"
//     for (i in psw){
//         if (specialChars.includes(psw[i])){
//             points++
//             break
//         }
//     }
//     if (points >= 4){
//         console.log("Strong password")
//     } else if (points >= 3){
//         console.log("Moderate password")
//     } else {
//         console.log("Weak password")
//     }
    
// }

// assignment 3

// function atm(wdw){
//     if (wdw % 10 !== 0){
//         console.log("Invalid amount. Please enter a multiple of 10.")
//         return
//     }
//     let notes = [100, 50, 20, 10]
//     let result = {}
//     for (let note of notes){
//         if (wdw >= note){
//             result[note] = Math.floor(wdw / note)
//             wdw = wdw % note
//         }
//     }
//     console.log("Dispensed notes:")
//     for (let note in result){
//         console.log(`${note}: ${result[note]}`)
//     }
// }
// atm(Number(prompt("Enter the amount to withdraw: ")))

// assignment 4

// function trafficLight() {
//     console.log("Red");
//     setTimeout(() => {
//         console.log("Green");
//         setTimeout(() => {
//             console.log("Yellow");
//             setTimeout(trafficLight, 2000);
//         }, 3000);
//     }, 5000);
// }

// trafficLight();


// assignemnt 5

// function checkPassword(p) {
//     let score = 0;
//     if (p.length >= 8) score++;
//     if (/[A-Z]/.test(p)) score++;
//     if (/\d/.test(p)) score++;
//     if (/[^A-Za-z0-9]/.test(p)) score++;

//     return score <= 2 ? "Weak" : score === 3 ? "Medium" : "Strong";
// }
// console.log(checkPassword("Abc12345"));


// function bankAccount(initial = 0) {
//     let balance = initial;

//     return {
//         deposit: amount => balance += amount,
//         withdraw: amount => amount <= balance
//             ? balance -= amount
//             : "Insufficient funds",
//         getBalance: () => balance
//     };
// }

// const acc = bankAccount(100);

// acc.deposit(50);
// acc.withdraw(30);
// console.log(acc.getBalance());

// function createUser(role) {
//     const permissions = {
//         admin: ["add", "edit", "delete", "view"],
//         editor: ["edit", "view"],
//         viewer: ["view"]
//     };

//     return {
//         can: action => permissions[role]?.includes(action)
//     };
// }

// const user = createUser("editor");

// console.log(user.can("edit"));
// console.log(user.can("delete"))


// function calculateTax(income) {
//     if (income < 10000) return 0;
//     if (income <= 50000) return income * 0.1;
//     return income * 0.2;
// }
// console.log(calculateTax(8000));
// console.log(calculateTax(20000));
// console.log(calculateTax(60000));

// mar 5

// challenge 1
// function getFirstElement(arr, n) {
//     return arr.slice(0, n)
// }

// // challenge 2
// function getLastElement(arr, n) {
//     return arr.slice(-n)
// }

// // challenge 3
// function joinList(arr) {
//     return arr.join(", ")
// }

// // challenge 4
// function dashedNumbers(n) {
//     let stringNumber = String(n)
//     let dashedNumber = ""
//     for (let i = 0; i < stringNumber.length; i++) {
//         dashedNumber += "-" + stringNumber[i]
//     }
//     return dashedNumber.slice(1)
// }

// // challenge 5
// function sortArr(arr) {
//     arr.sort()
//     return arr
// }

// // challenge 6
// function findMostFrequent(arr) {
//     const counts = {};
//     let maxCount = 0;
//     let mostFrequentItem;


//     for (const item of arr) {
//         counts[item] = (counts[item] || 0) + 1;

//         if (counts[item] > maxCount) {
//             maxCount = counts[item];
//             mostFrequentItem = item;
//         }
//     }

//     return mostFrequentItem;
// }


// // challenge 7
// function caseSwap(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toUpperCase()) {
//             str = str.replace(str[i], str[i].toLowerCase())
//         }
//         else {
//             str = str.replace(str[i], str[i].toUpperCase())
//         }
//     }
//     return str
// }

// // challenge 8
// function colorsInOrder(arr, orders) {

//     for (let i = 0; i < arr.length; i++) {
//         let s = orders[i + 1] || orders[0];
//         console.log(`${i + 1}${s} choice is ${arr[i]}.`);
//     }
// }

// // challenge 9
// function eachSum(arr1, arr2) {
//     let res = []
//     for (let i = 0; i < arr1.length; i++) {
//         res.push(arr1[i] + arr2[i])
//     }
//     return res
// }

// function getOrdinal(n) {
//     if (n % 100 >= 11 && n % 100 <= 13) return "th";

//     switch (n % 10) {
//         case 1: return "st";
//         case 2: return "nd";
//         case 3: return "rd";
//         default: return "th";
//     }
// }

// function displayColors() {
//     const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

//     for (let i = 1; i <= 1000; i++) {
//         const color = colors[(i - 1) % colors.length];
//         const ordinal = getOrdinal(i);

//         console.log(`${i}${ordinal} choice is ${color}.`);
//     }
// }

// displayColors();


// function displayColors() {
//     const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

//     for (let i = 1; i <= 1000; i++) {
//         let suffix = "th";

//         if (i % 10 === 1 && i % 100 !== 11) suffix = "st";
//         else if (i % 10 === 2 && i % 100 !== 12) suffix = "nd";
//         else if (i % 10 === 3 && i % 100 !== 13) suffix = "rd";

//         console.log(`${i}${suffix} choice is ${colors[(i - 1) % colors.length]}`);
//     }
// }

// displayColors();

// // console.log(add5(20));
// //challenge 1
// function calculateTotal(price, quantity) {
//   let total = price * quantity
//   if (quantity >= 5) total *= 0.8
//   else if (quantity >= 3) total *= 0.9
//   return total
// }

// //challenge 2
// function checkPasswordStrength(password) {
//   let score = 0
//   if (password.length >= 8) score++
//   if (/[A-Z]/.test(password)) score++
//   if (/[0-9]/.test(password)) score++
//   if (/[^A-Za-z0-9]/.test(password)) score++

//   if (score <= 2) return "Weak"
//   if (score === 3) return "Medium"
//   return "Strong"
// }

// //challenge 3
// function atmWithdraw(amount) {
//   if (amount % 10 !== 0) return "Error"

//   let bills = {}
//   bills[100] = Math.floor(amount / 100)
//   amount %= 100
//   bills[20] = Math.floor(amount / 20)
//   amount %= 20
//   bills[10] = Math.floor(amount / 10)

//   return bills
// }

// //challenge 4
// function trafficLight() {
//   function red() {
//     console.log("Red")
//     setTimeout(green, 5000)
//   }
//   function green() {
//     console.log("Green")
//     setTimeout(yellow, 3000)
//   }
//   function yellow() {
//     console.log("Yellow")
//     setTimeout(red, 2000)
//   }
//   red()
// }

// //challenge 5
// function checkPasswordStrength2(password) {
//   let score = 0
//   if (password.length >= 8) score++
//   if (/[A-Z]/.test(password)) score++
//   if (/[0-9]/.test(password)) score++
//   if (/[^A-Za-z0-9]/.test(password)) score++

//   if (score <= 2) return "Weak"
//   if (score === 3) return "Medium"
//   return "Strong"
// }

// //challenge 6
// function bankAccount(initialBalance = 0) {
//   let balance = initialBalance

//   return {
//     deposit(amount) {
//       balance += amount
//       return balance
//     },
//     withdraw(amount) {
//       if (amount > balance) return "Insufficient funds"
//       balance -= amount
//       return balance
//     },
//     viewBalance() {
//       return balance
//     }
//   }
// }

// //challenge 7
// function createUser(role) {
//   return {
//     role,
//     can(action) {
//       const permissions = {
//         admin: ["add", "edit", "delete", "view"],
//         editor: ["edit", "view"],
//         viewer: ["view"]
//       }
//       return permissions[role]?.includes(action) || false
//     }
//   }
// }

// //challenge 8
// function calculateTax(income) {
//   if (income < 10000) return 0
//   if (income <= 50000) return income * 0.1
//   return income * 0.2
// }

// //task 1
// function debounce(fn, delay) {
//   let timeout
//   return function (...args) {
//     clearTimeout(timeout)
//     timeout = setTimeout(() => fn.apply(this, args), delay)
//   }
// }

// //task 2
// function throttle(fn, interval) {
//   let lastTime = 0
//   return function (...args) {
//     const now = Date.now()
//     if (now - lastTime >= interval) {
//       lastTime = now
//       fn.apply(this, args)
//     }
//   }
// }

// //bonus
// function taskScheduler() {
//   let tasks = []

//   return {
//     schedule(task, delay) {
//       const id = setTimeout(task, delay)
//       tasks.push(id)
//     },
//     cancelAll() {
//       tasks.forEach(id => clearTimeout(id))
//       tasks = []
//     }
//   }
// }

// let final = [];

// function changeLetters(str) {
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char === char.toUpperCase()) {
//       char = char.toLowerCase();
//     } else {
//       char = char.toUpperCase();
//     } 
//     final.push(char);7
//   }
//   console.log(final.join('')); 
// }

// changeLetters('Hello, World!');


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




// const posts = [
//     { author: "Alice", likes: 100, comments: 20, shares: 5 },
//     { author: "Bob", likes: 200, comments: 50, shares: 10 },
//     { author: "Charlie", likes: 150, comments: 30, shares: 8 }
// ];

// const findMostLikedPost = () => {
//     return posts.reduce((most, post) => 
//         post.likes > most.likes ? post : most
//     );
// };

// const totalEngagement = () => {
//     return posts.reduce((total, post) => 
//         total + post.likes + post.comments + post.shares, 0
//     );
// };

// const postsWithCommentsArray = [
//     { author: "Alice", likes: 100, comments: [{user: "user1", message: "Great!"}], shares: 5 },
//     { author: "Bob", likes: 200, comments: [{user: "user2", message: "Nice!"}], shares: 10 }
// ];

// console.log("Most liked:", findMostLikedPost());
// console.log("Total engagement:", totalEngagement());




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