// var username = 'Ulugbek';
// var username = 'Otabek';
// console.log(username);

// let user = { //reference data type
//     username: 'Ulugbek',
//     age: 18,
// };

//Lecture 2  /  19.02.2026
//Challenge 1
// console.log('5' + 5);
// console.log('5' - 5);
// console.log('5' * '2');
// console.log('10' / 2);
// console.log(5 + true);
// console.log('10' - true);
// console.log('5' + true);
// console.log(5 + null);
// console.log(5 + undefined);


// Challenge 2
// let num1 = Number('200');
// let result1 = num1 + 50;
// console.log(result1);

// let age = 25;
// let ageString = String(age);
// let result2 = ageString + ' years old';
// console.log(result2);

// let boolValue = Boolean('false');
// console.log(boolValue);

// let result4 = '10' - true;
// console.log(result4)



//Challenge 3: Temprature Converter
// const celsius = 25;
// const fahrenheit = (celsius * 9/5)+32;
// console.log(celsius)
// console.log(fahrenheit)

//Challenge 4: Budget Calculator
// let totalBudget = Number(prompt('Enter your total budget: '));
// let expense1 = Number(prompt('Enter expense 1:'));
// let expense2 = Number(prompt('Enter expense 2:'));
// let expense3 = Number(prompt('Enter expense 3:'));

// let totalExpenses = expense1 + expense2 + expense3;

// let remainingBudget = totalBudget - totalExpenses;

// console.log("Total Budget: $" + totalBudget.toFixed(2));
// console.log("Total Expenses: $" + totalExpenses.toFixed(2));
// console.log("Remaining Budget: $" + remainingBudget.toFixed(2));

// if (remainingBudget < 0) {
//     alert(Warning: You have overspent your budget! ${remainingBudget});
// } else {
//     alert(You are within your budget. ${reaminingBudget});
// }


//Challenge 5: Logical Coercion Trickery
// console.log(!!"false" == !!"true");
// console.log(0 || "JavaScript");
// console.log(" " && 100);
// console.log(null ?? "Fallback");
// console.log(undefined ?? "Default Value");

//Challenge 6: Convert Velues Properly
// let a = '42';
// let b = '3.14';
// let c = 'hello';
// let d = false;
// let e = null;

// // Convert all to numbers and add then together
// let sum = Number(a) + Number(b) + Number(d) + Number(e);

// console.log(sum);


//Lecture 3  /  19.02.2026
//Challenge-1
// let number = Number(prompt('Enter a number:'));
// let evenCount = 0;
// let oddCount = 0;

// for (let i = 1; i <= number; i++){
//     if (i % 2 === 0){
//         evenCount++;
//     }else{
//         oddCount++;
//     }
// }

// console.log("Total even numbers:", evenCount);
// console.log("Total odd numbers:", oddCount);


//Challenge-2
// let number = Number(prompt('Enter a number: '));
// let reversed = 0;
// let isNegative = false;

// if (number < 0) {
//     isNegative = true;
//     number = -number;
// }

// while (number > 0) {
//     let digit = number % 10;
//     reversed = reversed * 10 + digit;
//     number = Math.floor(number / 10);
// }

// if (isNegative) {
//     reversed = -reversed;
// }

// console.log('Reversed number:', reversed);


//Challenge - 3
// let number = Number(prompt('Enter a number:'));
// if (number < 0) {
//     number = -number;
// }

// let largestDigit = 0;
// while (number > 0) {
// let digit = number % 10;
// if (digit > largestDigit) {
//     largestDigit = digit;
// }
// number = Math.floor(number/10);
// }
// console.log('Largest digit:', largestDigit)

//Challenge - 4
// let number = Number(prompt("Enter a number:"));
// if (number < 0) {
//     number = -number;
// }
// let sum = 0;
// while (number > 0) {
//     let digit = number % 10;
//     sum = sum + digit;
//     number = Math.floor(number / 10);
// }
// console.log("Sum of digits:", sum);


//Challenge-5
// let number = Number(prompt("Enter a number:"));
// if (number < 0) {
//     number = -number;
// }
// if (number === 0) {
//     console.log("Digit count: 1");
// } else {
//     let count = 0;
//     while (number > 0) {
//         count++;
//         number = Math.floor(number / 10);
//     }
//     console.log("Digit count:", count);
// }


// Lecture 4  / 24.02.2026 Control Structures
//       Practice

// for(let i = 0; i<10; i++) {
//     console.log(i);
// }

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }


// const user = {
//     username: "Ulug'bek",
//     age: 18,
//     country: "Uzbekistan",
// };

// for (const key in user) {
//     const element = user[key];
//     console.log(element, value);
// }


// Practice 1
// let num1 = 10;
// let num2 = 25;

// if (num1 > num2) {
//     console.log(num1);
// } else {
//     console.log(num2)
// }

// Practice 2
// let num1 = 3;
// let num2 = 5;
// let num3 = 8;

// let product = num1 * num2 * num3;

// if (product > 0) {
//     alert("The sign is +");
// } else if(product < 0) {
//     alert("The sign is -");
// } else {
//     alert("The sign is 0");
// }

// Practice 3
// const numbers = [0, -1, 4];
// let sortedNumbers = numbers.sort();
// let reversedNumbers = sortedNumbers.reverse();
// alert(reversedNumbers);

// Challenge 4
// for (let i = 0; i<=15; i++) {

//     if (i%2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// Challenge 5
// for(let i = 1; i<100; i++) {

//     if ( i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     else if (i % 3 === 0) {
//         console.log("Fizz")
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz")
//     }
//     else {
//         console.log(i)
//     }
// }

// Practice 6
// let number = prompt("Enter a number");
// let armstrong = 0;
// const daraja = number.length;

// let  i = 0;

// while (i < number.length) {
//     let digit = Number(number[i]);
//     armstrong += digit ** daraja;
//     i++;
// }

// if (armstrong === Number(number)) {
//     console.log(`The number (${number}) is armstrong`);
// } else {
//     console.log(`The number (${number}) is not armstrong`);
// }

// Practice 7
// let students = [
//     { name: "David", marks: 80 },
//     { name: "Vinoth", marks: 77 },
//     { name: "Divya", marks: 88 },
//     { name: "Ishitha", marks: 95 },
//     { name: "Thomas", marks: 68 }
// ];

// let total = 0;

// for (let i = 0; i < students.length; i++) {
//     total += students[i].marks;
// }

// let average = total / students.length;

// console.log("Average Marks: " + average);

// let grade;

// if (average < 60) {
//     grade = "F";
// } 
// else if (average < 70) {
//     grade = "D";
// } 
// else if (average < 80) {
//     grade = "C";
// } 
// else if (average < 90) {
//     grade = "B";
// } 
// else {
//     grade = "A";
// }

// console.log("Grade: " + grade);



//Lecture 5: Functions,Closures and  Scopes in JavaScript

//                               Types of  Functions
// 1: Function Declaration
// function sum (a,b) {
//     return a+ b;
// }
// sum(2,3)

// 2: Function Expression
// let sum = function (a,b) {
//     return a+b;
// };
// console.log(sum(2,3));

// 3: Arrow function
// let sum = (a,b) => {
//     return  a + b;
// };
// console.log(sum(2,3));


//                            Closures
// function outer() {
//     let count = 0;

//     return function inner() {
//         count++;
//         console.log(count);
//     };
// }

// const counter = outer();
// counter();
// counter();
// counter();



//                    Practice exercises of Lecture 4

// Challenge 1
//  1: Function Declaration
// function greet1(name) {
//     return "Hello, " + name + "!";
// };
// console.log(greet1("Ulug'bek"));

// 2: Function Expression 
// const greet2 = function(name) {
//     return "Hello, " + name;
// };
// console.log(greet2("Ulug'bek"));

// 3: Arrow function
// const greet3 = (name) => {
//     return "Hello, " + name;
// };
// console.log(greet3("Ulug'bek"));

// 4: Arrow function (Very short)
// const greet4 = name => "Hello, " + name;
// console.log(greet4("Ulug'bek"))

// 5: IIFE(Immediately Invoked Function Expression)
// const greet5 = (function() {
//     return function(name) {
//         return "Hello, " + name;
//     };
// })();
// console.log(greet5("Ulug'bek"));


// Challenge 2
// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n === 2) return true;
//     if (n%2 === 0) return false;

//     for(let i=3; i<= Math.sqrt(n); i+=2) {
//         if (n%i===0) return false;
//     }

//     return true;
// }

// console.log(isPrime(2));   
// console.log(isPrime(7));   
// console.log(isPrime(10)); 
// console.log(isPrime(13));  
// console.log(isPrime(1));


// Challenge 3
// function countDigits(n) {

//     return Math.abs(n).toString().length;
// }

// console.log(countDigits(12345));   
// console.log(countDigits(7));      
// console.log(countDigits(-9876));   
// console.log(countDigits(1000000)); 

// Challenge 4
// function isPalindrome(n) {
//     const str = Math.abs(n).toString();
//     const reversed = str.split("").reverse().join("");
//     return str === reversed;
// }

// console.log(isPalindrome(121));   
// console.log(isPalindrome(1331));  
// console.log(isPalindrome(123));   
// console.log(isPalindrome(12321)); 
// console.log(isPalindrome(-121));
// console.log(isPalindrome(325325))

//  Challenge 5
// function isArmstrong(n) {
//     let original = n;

//     let temp = n;
//     let digitCount = 0;
//     while (temp > 0) {
//         temp = Math.floor(temp / 10);
//         digitCount++
//     }

//     let sum = 0;
//     temp = n;

//     while (temp > 0) {
//         let lastDigit = temp % 10;
//         let power = 1;
//         for (let i = 0; i < digitCount; i++) {
//             power = power * lastDigit;
//         }

//         sum = sum + power;
//         temp = Math.floor(temp/10);
//     }
//     return sum === original;
// }

// console.log(isArmstrong(153)); 
// console.log(isArmstrong(370));  
// console.log(isArmstrong(100)); 


// Challenge 6
// function createCounter(start) {
//     let count = start;

//     return {
//         increment: function() {
//             count = count + 1;
//             console.log("Hisob: " + count);
//         },
//         decrement: function() {
//             count = count - 1;
//             console.log("Hison: " + count);
//         },
//         getCount: function() {
//             return count;
//         }
//     };
// }

// const counter = createCounter(20);
// counter.increment();             
// counter.increment();             
// counter.decrement();   
// counter.increment();          
// console.log(counter.getCount());

// Challenge 7
// function orderFood(name, address, food) {
//     return "Dear " + name + ", your ordered food " + food + " will be ready in 15 minutes and will be delivered to your address: " + address;
// }

// console.log(orderFood("Ali", "Toshkent, Chilonzor 5", "Plov"));

// Challenge 8
// function lazyAdder(a) {
//     return function(b) {
//         return a + b;
//     };
// }

// const add5 = lazyAdder(5);
// console.log(add5(10));
// console.log(add5(20));

// const add100 = lazyAdder(100);
// console.log(add100(50));


//                                  Assignment

// Challenge 1
// function calculateTotal(price, quantity) {
//     let total = price * quantity;
//     let discount = 0;

//     if (quantity >= 5) {
//         discount = 20;
//     }else if (quantity >= 3) {
//         discount = 10;
//     }else {
//         discount = 0;
//     }
//     let discountAmount = total * discount/100;

//     let finalPrice = total -discountAmount;

//      console.log("Mahsulot narxi: $" + price);
//     console.log("Miqdori: " + quantity + " ta");
//     console.log("Chegirmasiz narx: $" + total);
//     console.log("Chegirma: " + discount + "%  ($" + discountAmount + ")");
//     console.log("To'lash kerak: $" + finalPrice);
//     console.log("---");

//     return finalPrice;
// }
// calculateTotal(50, 2); 
// calculateTotal(50, 3);  
// calculateTotal(50, 5);  
// calculateTotal(30, 7); 

// Challenge 2
// function checkPassword(password) {

//     let hasLength = password.length >= 8;

//     let hasUpperCase = false;
//     for (let i=0; i<password.length; i++) {
//         let char = password[i];
//         if(char >= 'A' && char <= 'Z') {
//             hasUpperCase = true;
//         }
//     }

//     let hasNumber = false;
//     for(let i = 0; i<password.length; i++) {
//         let char = password[i];
//         if (char >= '0' && char <= '9') {
//             hasNumber = true;
//         }
//     }

//     let hasSpecial = false;
//     let specialChars = "!@#$%^&_*";

//     for (let i=0; i<password.length; i++) {
//         let char = password[i];

//         for (let j=0; j<specialChars.length; j++) {
//             if (char === specialChars[j]) {
//                 hasSpecial = true;
//             }
//         }
//     }

//     let score = 0;
//     if (hasLength)  score = score+1;
//     if(hasUpperCase) score = score+1;
//     if(hasNumber) score = score+1;
//     if(hasSpecial) score = score+1;

//     let result = "";
//     if (score === 4) {
//         result = "Strong";
//     } else if (score >= 2) {
//         result = "Medium";
//     }else{
//         result = "Weak";
//     }

//         console.log("Parol: " + password);
//     console.log("8+ belgi:       " + hasLength);
//     console.log("Katta harf:     " + hasUpperCase);
//     console.log("Raqam:          " + hasNumber);
//     console.log("Maxsus belgi:   " + hasSpecial);
//     console.log("Natija: " + result);
//     console.log("---");

//     return result;  
// }

// checkPassword("ulugbek");             
// checkPassword("ulugbek11");       
// checkPassword("Ulugbek08");       
// checkPassword("Uz_20081108");


//  Challenge 3

// function atm(amount) {
//     if (amount % 10 !== 0) {
//         console.log("Xato: "+ amount + " dollar 10 ning karralisi emas!")
//         return;
//     }
//     let hundreds = Math.floor(amount/100);
//     amount = amount - hundreds * 100;

//     let fifties =Math.floor(amount/50);
//     amount = amount - fifties * 50;

//     let twenties = Math.floor(amount/20);
//     amount = amount - twenties * 20

//     let tens = Math.floor(amount/10);

//       console.log("Berildi:");
//     if (hundreds > 0) console.log("  $100 x " + hundreds);
//     if (fifties  > 0) console.log("  $50  x " + fifties);
//     if (twenties > 0) console.log("  $20  x " + twenties);
//     if (tens     > 0) console.log("  $10  x " + tens);
// }

// console.log("\n=== CHALLENGE 3: BANKOMAT ===");
// atm(130);  
// atm(250);  
// atm(180);  
// atm(135);  
// atm(370);  


// Challenge 4
// function startTrafficLight() {
//     function showRed() {
//         console.log("Red - To'xta! (5 soniya)");
//         setTimeout(function() {
//             showYellow();
//         }, 5000);
//     }

//     function showYellow() {
//         console.log("Yellow - Tayyorlan! 3(soniya)");
//         setTimeout(function() {
//             showGreen();
//         }, 3000);
//     }

//     function showGreen() {
//         console.log("Green - Yur! (2 soniya");
//         setTimeout(function() {
//             showRed();
//         }, 2000)
//     }
//     showRed();
// }
// console.log("Svetofor yoqildi!");
// startTrafficLight();


// Challenge 5
// function isLongEnough(password) {
//     if (password.length >= 8) {
//         return true;
//     }
//     return false;
// }

// function hasUpperCase(password) {
//     for(let i = 0; i<password.length; i++) {
//         let char = password[i];
//         if (char >= 'A' && char <= 'Z') {
//             return true;
//         }
//     }
//     return false;
// }

// function hasDigit(password) {
//     for(let i=0; i < password.length; i++) {
//         let char = password[i];
//         if (char >= '0' && char <= '9') {
//             return true;
//         }
//     }
//     return false;
// }

// function hasSpecialChar(password) {
//     let specialChars = "!@#$%^&_*";
//     for (let i = 0; i < password.length; i++) {
//         for (let j = 0; j < specialChars.length; j++) {
//             if (password[i] === specialChars[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// function checkPasswordStrength(password) {
//     let score = 0;
//     if(isLongEnough(password))  score = score + 1;
//     if (hasUpperCase(password)) score = score + 1;
//     if (hasDigit(password))         score = score + 1;
//     if (hasSpecialChar(password))   score = score + 1;

//        console.log("Parol: " + password + "score: " + score + "/4");

//     if (score === 4) {
//         return "Strong";
//     } else if (score >= 2) {
//         return "Medium";
//     } else {
//         return "Weak";
//     }
// }

// console.log(checkPasswordStrength("ulugbek"));
// console.log(checkPasswordStrength("ulugbek8"));
// console.log(checkPasswordStrength("Ulugbek11"));
// console.log(checkPasswordStrength("Ulugbek_2008"));

//  Challenge 6
// function BankAccount(startingBalance) {
//     let balance = startingBalance;

//     return {
//         deposit: function(amount) {
//             if (amount <= 0) {
//                 console.log("XATO: Qo'yiladigan pul 0 dan katta bo'lishi kerak!");
//                 return;
//             }
//             balance = balance + amount;
//             console.log("+" + amount + "$ qo'yildi. Balans: " + balance + "$");
//         },
//         withdraw: function(amount) {
//             if(amount <= 0) {
//                 console.log("XATO: Olinadigan pul 0 dan katta bo'lishi kerak!");
//                 return;
//             }
//             if (amount > balance) {
//                 console.log("XATO: Yetarli pul yo'q! Balans: " + balance + "$");
//                 return;
//             }
//             balance = balance = amount;
//             console.log("-" + amount + "$ olindi. Balans: " + balance + "$");
//         },
//         getBalance: function() {
//             console.log("Joriy balans: " + balance + "$");
//             return balance;
//         }
//     };
// }

// const myAccount = BankAccount(100); 

// myAccount.getBalance();     
// myAccount.deposit(50);       
// myAccount.withdraw(30);     
// myAccount.withdraw(200);     
// myAccount.deposit(-10);      
// myAccount.getBalance();

//  Challenge 7
// function createUser(name,role) {
//     return {
//         name: name,
//         role: role,

//         doAction: function(action) {
//             let adminActions   = ["add", "edit", "delete", "view"];
//             let editorActions  = ["edit", "view"];
//             let viewerActions  = ["view"];

//             let allowedActions = [];
//                  if (role === "admin") {
//                 allowedActions = adminActions;
//             } else if (role === "editor") {
//                 allowedActions = editorActions;
//             } else if (role === "viewer") {
//                 allowedActions = viewerActions;
//             } else {
//                 console.log("XATO: Bunday rol mavjud emas!");
//                 return;
//             }
//             let isAllowed = false;

//             for(let i = 0; i<allowedActions.length; i++) {
//                 if (allowedActions[i] === action) {
//                     isAllowed = true;
//                 }
//             }

//             if (isAllowed) {
//                 console.log(name + " (" + role + ") → '" + action + "'  Ruxsat bor!")
//             }else {
//                 console.log(name + " (" + role + ") → '" + action + "'  Ruxsat yo'q!")
//             }
//         }
//     };
// }

// const admin  = createUser("Ali",    "admin");
// const editor = createUser("Kamola", "editor");
// const viewer = createUser("Jasur",  "viewer");

// admin.doAction("add");    
// admin.doAction("delete");  

// editor.doAction("edit");    
// editor.doAction("delete");  

// viewer.doAction("view");  
// viewer.doAction("edit");    
// viewer.doAction("add");


//  Challenge 8
function calculateTax(salary) {
    let taxPercent = 0;
    let taxAmount = 0;
    let netSalary = 0;

    if (salary < 10000) {
        taxPercent = 0;
    }else if (salary <= 50000) {
        taxPercent = 10;
    }else {
        taxPercent = 20;
    }

    taxAmount = salary * taxPercent / 100;

    netSalary = salary - taxAmount;
     console.log("Maosh:          $" + salary);
    console.log("Soliq foizi:    " + taxPercent + "%");
    console.log("Soliq summasi:  $" + taxAmount);
    console.log("Qo'lga tegadi:  $" + netSalary);
    console.log("---");

    return netSalary;
}

calculateTax(5000);   // 0%  soliq → $5000
calculateTax(30000);  // 10% soliq → $27000
calculateTax(80000);