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

// task1 (1)
function greet(name){
    console.log(`hello ${name}`)
}
greet('Aziz')

// task1 (2)
let greet1=function(name){
    return `Helloo ${name}`
}
console.log(greet1('Bexruz'))

// task1 (3)
let greet2=(name) =>{
    return `Hello ${name}`
}
console.log(greet2('Farrux'))


// task2

let d = 0;
function isPrime(a) {
  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      d++;
    }
  }
  if (d == 2) {
    return true;
  } else return false;
}

console.log(isPrime(19));

// task3


// task4
function isPalindrome(n) {
    if (n < 0) return false;

    let original = n;
    let reversed = 0;

    while (n > 0) {
        reversed = reversed * 10 + (n % 10);
        n = Math.floor(n / 10);
    }

    return original === reversed;
}
console.log(isPalindrome(1234))

// task5

let rand=372
let n=0
let randString=String(rand).split("")
for (let i = 0; i < randString.length; i++) {
    let cubed=randString[i]**randString.length
    n+=cubed
}
if(n==rand){
    console.log(`Armstrong`)
}
else{
    console.log(`Not armstrong number`)
}

// #1 Dynamic Pricing Calculation

function setUp() {
  const prodInfo = document.createElement("p");
  prodInfo.textContent = "1 product = $10";
  document.body.appendChild(prodInfo);
}

function calculations() {
  let quantity = Number(inputElement.value);
  let price = 10;
  let discount = 0;
  let sum = quantity * price;

  if (quantity > 3) {
    discount = quantity * price * 0.1;
  } else if (quantity > 5) {
    discount = quantity * price * 0.05;
  } else {
    discount = 0;
  }

  output.textContent = `Overall value is $${sum - discount}`;
}

setUp();

inputElement.addEventListener("input", calculations);

// #2 Password Strength Checker

function checkPasswordStrength(password) {
  let score = 0;

  if (password.length >= 8) {
    score++;
  }

  let hasUpper = false;
  let hasNumber = false;
  let hasSpecial = false;

  const specialChars = "!@#$%^&*()-+";

  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    if (char >= "A" && char <= "Z") {
      hasUpper = true;
    } else if (char >= "0" && char <= "9") {
      hasNumber = true;
    } else if (specialChars.includes(char)) {
      hasSpecial = true;
    }
  }

  if (hasUpper) score++;
  if (hasNumber) score++;
  if (hasSpecial) score++;

  if (score <= 2) {
    output.textContent = "Weak";
  } else if (score === 3) {
    output.textContent = "Medium";
  } else {
    output.textContent = "Strong";
  }
}

inputElement.addEventListener("input", () => {
  checkPasswordStrength(inputElement.value);
});

// #3 ATM Cash Withdrawal System
function withdrawCash(amount) {
  if (amount % 10 !== 0 || amount <= 0) {
    return null;
  }

  let hundreds = 0,
    fifties = 0,
    twenties = 0,
    tens = 0;
  let remaining = amount;

  while (remaining >= 100) {
    hundreds++;
    remaining -= 100;
  }
  while (remaining >= 50) {
    fifties++;
    remaining -= 50;
  }
  while (remaining >= 20) {
    twenties++;
    remaining -= 20;
  }
  while (remaining >= 10) {
    tens++;
    remaining -= 10;
  }

  return { hundreds, fifties, twenties, tens };
}

inputElement.addEventListener("input", () => {
  const amount = Number(inputElement.value);
  const result = withdrawCash(amount);

  if (!result) {
    output.textContent = "Error: Please enter a multiple of $10";
    return;
  }

  output.textContent = `Dispensing:
    $100 x ${result.hundreds}
    $50 x ${result.fifties}
    $20 x ${result.twenties}
    $10 x ${result.tens}`;
});

// #4 traffic light simulation

function startTrafficLight() {
  showRed();
}

function showRed() {
  output.textContent = "STOP: RED";
  output.style.color = "red";

  setTimeout(() => {
    showGreen();
  }, 5000);
}

function showGreen() {
  output.textContent = "GO: GREEN";
  output.style.color = "green";

  setTimeout(() => {
    showYellow();
  }, 3000);
}

function showYellow() {
  output.textContent = "CAUTION: YELLOW";
  output.style.color = "orange";

  setTimeout(() => {
    showRed();
  }, 2000);
}

startTrafficLight();

// #6 banking system

function createBankAccount(initialName, initialBalance) {
  let balance = initialBalance;
  let accountHolder = initialName;

  return {
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Deposited $${amount}. New balance: $${balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    },

    withdraw: function (amount) {
      if (amount > balance) {
        console.log("Insufficient funds!");
      } else if (amount <= 0) {
        console.log("Please enter a valid amount to withdraw.");
      } else {
        balance -= amount;
        console.log(`Withdrew $${amount}. Remaining balance: $${balance}`);
      }
    },
    viewBalance: function () {
      return `Account Holder: ${accountHolder} | Balance: $${balance}`;
    },
  };
}

const myAccount = createBankAccount("Aziz", 100);

myAccount.deposit(50);
myAccount.withdraw(20);
console.log(myAccount.viewBalance());