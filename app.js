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
function calculateTotal(price, quantity) {
  let total = price * quantity
  if (quantity >= 5) total *= 0.8
  else if (quantity >= 3) total *= 0.9
  return total
}

//challenge 2
function checkPasswordStrength(password) {
  let score = 0
  if (password.length >= 8) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++

  if (score <= 2) return "Weak"
  if (score === 3) return "Medium"
  return "Strong"
}

//challenge 3
function atmWithdraw(amount) {
  if (amount % 10 !== 0) return "Error"

  let bills = {}
  bills[100] = Math.floor(amount / 100)
  amount %= 100
  bills[20] = Math.floor(amount / 20)
  amount %= 20
  bills[10] = Math.floor(amount / 10)

  return bills
}

//challenge 4
function trafficLight() {
  function red() {
    console.log("Red")
    setTimeout(green, 5000)
  }
  function green() {
    console.log("Green")
    setTimeout(yellow, 3000)
  }
  function yellow() {
    console.log("Yellow")
    setTimeout(red, 2000)
  }
  red()
}

//challenge 5
function checkPasswordStrength2(password) {
  let score = 0
  if (password.length >= 8) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++

  if (score <= 2) return "Weak"
  if (score === 3) return "Medium"
  return "Strong"
}

//challenge 6
function bankAccount(initialBalance = 0) {
  let balance = initialBalance

  return {
    deposit(amount) {
      balance += amount
      return balance
    },
    withdraw(amount) {
      if (amount > balance) return "Insufficient funds"
      balance -= amount
      return balance
    },
    viewBalance() {
      return balance
    }
  }
}

//challenge 7
function createUser(role) {
  return {
    role,
    can(action) {
      const permissions = {
        admin: ["add", "edit", "delete", "view"],
        editor: ["edit", "view"],
        viewer: ["view"]
      }
      return permissions[role]?.includes(action) || false
    }
  }
}

//challenge 8
function calculateTax(income) {
  if (income < 10000) return 0
  if (income <= 50000) return income * 0.1
  return income * 0.2
}

//task 1
function debounce(fn, delay) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn.apply(this, args), delay)
  }
}

//task 2
function throttle(fn, interval) {
  let lastTime = 0
  return function (...args) {
    const now = Date.now()
    if (now - lastTime >= interval) {
      lastTime = now
      fn.apply(this, args)
    }
  }
}

//bonus
function taskScheduler() {
  let tasks = []

  return {
    schedule(task, delay) {
      const id = setTimeout(task, delay)
      tasks.push(id)
    },
    cancelAll() {
      tasks.forEach(id => clearTimeout(id))
      tasks = []
    }
  }
}