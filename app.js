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

function dinamicTaxCalculator(income) {
  if (income > 10000) {
    console.log("no tax");
  } else if (income > 5000) {
    console.log("10% tax");
  } else {
    console.log(`20% tax`);
  }
}
