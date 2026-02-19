/*==============Lesson 1=============*/
/*Task 1*/
console.log("5"+5)
console.log("5"-5)
console.log("5"*"2")
console.log("10" / 2)
console.log(5 + true)
console.log("10"-true)
console.log("5"+true)
console.log(5 + null)
console.log("5"+undefined)

/*Task 2*/
console.log(Number("200")+50)
console.log(25+" years old")

const checkValue = "false"
console.log(checkValue?true:false)

console.log("10"-true) /*Answer is 9 Because true = 1 and string 10 is converted to integer*/

/*Task 3*/
const tempC = 36
const tempF = (tempC*9/5)+32
console.log(tempC)
console.log(tempF)

const tempCUserEntered = prompt("Enter a temperature number in Celsius")
const tempFUSerEntered = (tempCUserEntered*9/5)+32
console.log(tempCUserEntered)
console.log(tempFUSerEntered)

/*Task 4*/
let budget = Number(prompt("Enter a budget:"))
let expense1 = Number(prompt("Enter first expense:"))
let expense2 = Number(prompt("Enter second expense:"))
let expense3 = Number(prompt("Enter third expense:"))
let sumExpense = expense1 + expense2 + expense3;
budget>=0 && (budget-sumExpense>=0)?console.log("Expense removed."):console.log("You overspent.")


/*Task 5*/
console.log(!!"false" == !!"true")
console.log(0 || "Javascript")
console.log(" "&&100)
console.log(null ?? "Fallback")
console.log(undefined ?? "Default Value")

/*Task 6*/
let a = '42'
let b = '3.14'
let c = 'hello'
let d = false
let e =null

let sum = a+b+Number(d)+Number(e)
console.log(sum)