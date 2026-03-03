// Taksks
// Five types of functions


// 1.

// function greet(name) {
//     console.log(`Hello, ${name}!`)
// }

// greet("Alice")

// //2.

// let greet  = function(name) {
//     console.log(`Hello, ${name}!`)
// }

// greet("Bob")

// //3.

// let greet = (name) => {
//     console.log(`Hello, ${name}!`)
// }

// greet("Charlie")


// //4.

// let greet = new Function(
//     "name",
//     "console.log(`Hello, ${name}!`)"
// )

// greet("Dave")


//////////////////////////////////////////////////////////////////////////////


//Challenge2.

// function isPrime(num) {
//     if (num <=1) {
//         return false;
//     } else {
//         for (let i = 2; i < num; i ++) {
//             if (num % i == 0) {
//                 return false;
//             }
            
//         }
//         return true;
        
//     }
// }

// console.log(isPrime(11))


// // Challenge3.

// function countDigits(num) {
//     const numStr = num.toString();
//     return numStr.length;
// }


// console.log(countDigits(1948595))


// //Challenge4.

// function isPalindrome(text) {
//     const reversedStr = text.split("").reverse().join("");
//     return reversedStr === text;
// }

// console.log(isPalindrome("true"))


// //Challenge5.

// function isArmstrong(num) {
//     const numStr = num.toString();
//     const numDigits = numStr.length;
//     let sum = 0;
//     for (let i = 0; i < numDigits; i++) {
//         sum += Math.pow(Number(numStr[i]), numDigits);
//     }
//     return sum === num;
// }

// console.log(isArmstrong(153))


// //Challenge6.

// function createCounter(start) {
//     let count = start;
//     let increment = function() {
//         count++;
//     }
//     let decrement = function() {
//         count--;
//     }
//     let getCount = function() {
//         return count;
//     }
//     return {
//         increment,
//         decrement,
//         getCount
//     }

// }

// const counter = createCounter(5);
// counter.increment();
// counter.increment();
// console.log(counter.getCount())


// //Challenge7.

// // function orderFood(name, address, item) {
// //     name = prompt("Enter your name: ");
// //     address = prompt("Enter your address: ");
// //     item = prompt("Enter the food item you want to order: ");

// //     return `Dear ${name}, your ordered food item ${item} will be ready in 15 minutes and will be delivered to ${address} soon.`
// // }

// // console.log(orderFood())


// //Challenge8.

// function lazyAdder(a) {
//     return function(b) {
//         return a + b;
//     }

// }

// const add5 = lazyAdder(5);
// console.log(add5(10))
// console.log(add5(20))


//////////////////////////////////////////////////////////

//Assignments

//Challenge1



// task 1
function DynamicPricingCalculation(carts) {
  let countOfCarts = 0;
  let totatSum = 0;
  carts.forEach(({ price, id, count }) => {
    countOfCarts += count;
    totatSum += price * count;
  });
  if (countOfCarts > 5) {
    return `20% discount for 5+ is ${totatSum * 0.8}`;
  } else if (countOfCarts > 3) {
    return `10% discount for 3+ is ${totatSum * 0.9}`;
  } else {
    return `total sum is ${totatSum}`;
  }
}

console.log(
  DynamicPricingCalculation([
    {
      price: 4000,
      id: 1,
      count: 1,
    },
    {
      price: 6400,
      id: 2,
      count: 1,
    },
    {
      price: 14000,
      id: 3,
      count: 1,
    },
    {
      price: 4000,
      id: 4,
      count: 1,
    },
  ]),
);

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

// function dinamicTaxCalculator(income) {
//     if (income > 10000) {
//       console.log("no tax");
//     } else if (income > 5000) {
//       console.log("10% tax");
//     } else {
//       console.log(`20% tax`);
//     }
//   }

