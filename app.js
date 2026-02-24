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
let a=12
let b=4
if (a>b){
    console.log(a)
}
else{
    console.log(b)
}

// task2
let ls=[3,-7,2]
for (let i = 0; i < ls.length; i++) {
    if (ls[i]<0){
        const signed = ls[i];
        console.log(signed)
    }
}

// task3
let ls2=[0,-1,4]
let ls2Result=ls2.sort()
console.log(ls2Result)

// task4
for (let i = 0; i <= 15; i++) {
    if (i%2==0){
        console.log(`${i} is even`)
    }
    else {
        console.log(`${i} is odd`)
    }
}

// task5
for (let i = 1; i <= 100; i++) {
    if (i%3==0){
        console.log(`Fizz`)
    }
    else if (i%5==0) {
        console.log(`Buzz`)
    }
    else if (i%3==0 && i%5==0){
        console.log(`FizzBuzz`)
    }
}

// task6
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