// Challenge 1


// 1
function greet(name) {
  console.log("Hello, " + name);
}
greet("John");

// 2

let greet2 = function (name){
  console.log("Hello, " + name);
}
greet2("Ldiya")

// 3

let greet3 = (name) => {
  console.log("Hello, " + name);
}
greet3("David")

// 4
let greet4  = new Function (
  'name',
  'console.log("Hello, " + name)'
)

greet4("Simon")




// Challenge 2

// 1
function isPrime(num){
  if (num <= 1) {
    return false
  }else{
    for (let i = 2; i < (num**0.5)+1 ; i++) {
      if (num % i == 0) {
        return false
      }
      
    }
  
    return true
  }
}

console.log(isPrime(11))



// 2
let isPrime2 = function (num){
  if (num <= 1) {
    return false
  }else{
    for (let i = 2; i < (num**0.5)+1 ; i++) {
      if (num % i == 0) {
        return false
      }
      
    }
  
    return true
  }
}

console.log(isPrime2(12))

// 3
let isPrime3 = (num) => {
  if (num <= 1) {
    return false
  }else{
    for (let i = 2; i < (num**0.5)+1 ; i++) {
      if (num % i == 0) {
        return false
      }
      
    }
  
    return true
  }
}

console.log(isPrime3(19))




// Challenge 3


// 1
function countDigit(num) {
  count = 0
  for (let i = 0; i < String(num+1).length; i++) {
    count+=1  
  }

  console.log(count)
}

countDigit(23345)
countDigit(23)

// 2
let countDigit2 = function (num){
  count = 0
  for (let i = 0; i < String(num+1).length; i++) {
    count+=1  
  }

  console.log(count)
}
countDigit2(3458930)
countDigit2(2)

// 3
let countDigit3 = (num) => {
  count = 0
  for (let i = 0; i < String(num+1).length; i++) {
    count+=1  
  }

  console.log(count)
}
countDigit3(234573894)



// Challenge 4

function isPalindrome(input) {
  let text = ""
  for (let i = String(input).length -1 ; i >= 0; i--) {
    text+=String(input)[i]
    
  }

  if (text == input) {
    console.log("Palindrome")
  }else{
    console.log("Not Palindrome")
  }
}

isPalindrome('kiyik')


// Challenge 5

function isArmstrong(num) {
  num = String(num)
  let sum = 0
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i])**num.length
  }

  if (sum == Number(num)) {
    console.log("Armstrong")
  } else {
    console.log("Not Armstrong")
  }
  
}

isArmstrong(153)


// Challenge 6
function createCounter(start) {

  let object = {
    incerement: () => start + 1,
    decrement: () => start -1,
    getCount: () => start


  }

  return object
  
}
console.log(createCounter(6).incerement())
console.log(createCounter(6).decrement())
console.log(createCounter(6).getCount())



// Challenge 7

function orderFood(name,address,food) {
  return "Dear " + name + " your ordered food " + food + " will be ready in 15 minuts and will be delivered to your address: " + address
}

console.log(orderFood("Sunnatbek","Sergeli street","shashlik"))


// Challenge 8

function lazyAdder(a) {
  return function(b){
    return a + b;
  };
  
}

const add9 = lazyAdder(9)
const add100 = lazyAdder(100)
console.log(add9(1))
console.log(add9(14))
console.log(add100(99))


// Assignment 1:

function addPer(number_of_product, total_price) {
  if (number_of_product >= 5) {
    total_price -= (total_price*20)/100
  }
  else if (number_of_product >= 3) {
    total_price -= (total_price*10)/100
  }

  return total_price
}

// function addPer(quantity, price) {
//   if (quantity >= 5) return price * 0.8;
//   if (quantity >= 3) return price * 0.9;
//   return price;
// }

product1 = addPer(4,100)
console.log(product1)



// Assignment 2
function hasUpperCase(str) {
  return /[A-Z]/.test(str);
}
function hasNumber(str) {
  return /\d/.test(str);
}

function hasSpecialCharacter(str) { 
  const regex = /[^a-zA-Z0-9]/; 
  return regex.test(str);
}

let password = prompt("Enter password: ")

function CheckPassword(password) {
  let strength = 0;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
  if (password.length >=8) strength++;


  if (strength==4){
    return ("Strong password")
  }
  else if (strength>=2){
    return("Medium password")

  }

  return "Weak"

}
console.log(CheckPassword(password))



// Assignment 3

function withdraw(amount) {
  if (amount % 10 !== 0) {
    return "Error: Amount must be multiple of 10";
  }

  let bills = [100, 50, 20, 10];
  let result = {};

  for (let bill of bills) {
    let count = Math.floor(amount / bill);
    if (count > 0) {
      result[bill] = count;
      amount = amount % bill;
    }
  }

  return result;
}


console.log(withdraw(230));



// Assignment 4

function trafficLight() {
  console.log("Red");

  setTimeout(() => {
    console.log("Green");

    setTimeout(() => {
      console.log("Yellow");

      setTimeout(() => {
        trafficLight(); 
      }, 2000);

    }, 3000);

  }, 5000);
}

trafficLight();







// Assignment 6


function bankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposite(amount){
      balance += amount
    },

    withdraw(amount){
      if (amount <= balance) {
        balance -= amount;
      
      }else{
        console.log("Insufficient funds");
      }
    },

    getBalance(){
      return balance;

    }
  };

}


const account = bankAccount(1000)
account.deposite(120); // Add money
console.log(account.getBalance());
account.withdraw(500);  // Withdraw money
console.log(account.getBalance());


// Assignment 7
function checkAccess(role, action) {
  let roles =  {
    admin : ['view','edit','delete','add'],
    editor : ['edit','view'],
    viewer : ['view']
  };

  return roles[role].includes(action);
}

console.log(checkAccess('viewer','edit'));


// Assignment 8

function calculateTax(salary) {
  let tax = 0;

  if (salary >= 50000) {
    tax = salary * 0.20;
  } 
  else if (salary >= 10000) {
    tax = salary * 0.10;
  }

  return tax;
}

console.log("Tax",calculateTax(500000));