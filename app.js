// task1
console.log("5"+5); //55
console.log("5"-5); //0
console.log("5"*"2"); //10
console.log("5"/2); //2.5
console.log(5+true); //6
console.log("10"-true); //9
console.log("5"+true); //5true
console.log(5+null); //5
console.log(5+undefined); //NaN

// task2
let x="200"
let result=Number(x)+500
console.log(result)

let y=25
let yResult=String(y)+ ' years old'
console.log(yResult)

// task3
const temp=Number(prompt('Enter a temperature in Celcius'))
const tempResult=temp*9/5+32
console.log(temp)
console.log(tempResult)

// task4
let budget=Number(prompt('Your amount of budget'))
let expence1=Number(prompt('1st expence'))
let expence2=Number(prompt('2nd expence'))
let expence3=Number(prompt('3rd expence'))
const budgetResult=budget-expence1-expence2-expence3
console.log(budgetResult)

// task5
console.log(!!"false"==!!"true") // true
console.log(0||"JavaScript") // JavaScript
console.log(" " && 100) // 100
console.log(null ?? "Fallback") // Fallback
console.log(undefined ?? "Default Value") // Default Value

// task6
let a = "42";
let b = "3.14";
let c = "hello";
let d = false;
let e = null;

a=Number(a)
b=Number(b)
d=Number(d)
e=Number(e)

let sum = a+b+d+e

console.log(sum)