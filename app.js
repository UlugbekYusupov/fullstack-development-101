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
