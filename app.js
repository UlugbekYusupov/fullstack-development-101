// console.log(fullName)
// var fullName = "Ali";

// console.log(age)
// let age = 25;


// Challenge 1
console.log("5" + 5);
console.log("5" - 5); // converts it self to number (coercion)
console.log("5" * "2"); // converts it self to number (coercion)
console.log("5" / 2); // converts it self to number (coercion)
console.log( 5 + true) // true is converted to 1 and false is converted to 0 (coercion)
console.log("10" - false) // false is converted to 0 (coercion)
console.log("5" + true) // true is converted to 1 (coercion)
console.log(5 + null) // null is converted to 0 (coercion)
console.log(5 + undefined) // undefined is converted to NaN (coercion)

// Challenge 2

console.log(Number("200") + 50);
console.log(String(25) + " years old")
console.log(Boolean("false")) // any non empty string is converted to true (coercion)
console.log("10" - true) // true is converted to 1 (coercion) so it becomes "10" - 1 which is 9


// Challenge 3

const temperature = +prompt("Enter the temperature in celsius: ");
// const temperature cannot be reassigned


const farenheit = (temperature * 9/5) + 32;

console.log(`The temperature in celsius is ${temperature}°C`);
console.log(`The temperature in farenheit is ${farenheit}°F`);


// // Challenge 4


let totalBudget = +prompt("Enter your total budget: ");

let expense1 = +prompt("Enter your first expense: ");
let expense2 = +prompt("Enter your second expense: ");
let expense3 = +prompt("Enter your third expense: ");

let spent = totalBudget - (expense1 + expense2 + expense3);

if (spent < 0) {
    alert("You have " + spent + " left in your budget");
    
} else {
    console.log("You have " + spent.toFixed(2) + " left in your budget");
}


//Challange 5

console.log(!!"false" == !!"true") // both are true because they are non empty strings (coercion)
console.log( 0 || "Javascript") 
console.log(" " && 100) // both are true because they are non empty strings and non zero numbers (coercion) so it returns the last value which is 100
console.log(null ?? "Fallback") // null is considered as nullish value so it returns the fallback value which is "Fallback"
console.log(undefined ?? "Default Value") // undefined is considered as nullish value so it returns the fallback value which is "Default Value"


//Challenge 6

let a = "42"
let b = "3.14"
let c = "hello"
let d = false
let e = null

let sum = Number(a) + Number(b)+ Number(d) + Number(e);

console.log(sum)



