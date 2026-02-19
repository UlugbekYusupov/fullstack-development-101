console.log('5' + 5)
console.log('5' - 5)
console.log('5' * 5)
console.log('10' / 5)
console.log(5 + true)
console.log(5 - true)
console.log('5' + true)
console.log(5 + null)
console.log(5 + undefined)


console.log(Number('200') + 50)
console.log(String(200) + "years old")
if ('false') {
    console.log('True')
}
else{
    console.log('False')
}

console.log(Boolean(0))


const temperature = prompt("Enter the tempeature in Celsius: ")
const fahrenheit = (temperature * 9 / 5) + 32
console.log(`${temperature}°C is equal to ${fahrenheit}°F`)

let budget = prompt("Enter your budget: ")
for (let i = 0; i < 3; i++) {
    if (budget < 0) {
        alert("You have exceeded your budget!")
    }
    budget -= Number(prompt("Enter an expense: "))
}
budget = budget.toFixed(2)
console.log(`Remaining budget: ${budget}`)



console.log(!!"false" == !!"true")
console.log(0||"Javascript")
console.log(" " && 100)
console.log(null ?? "Fallback")
console.log(undefined ?? "Default value")

let a = "42"
let b = "3.14"
let c = "Hello"
let d = false
let e = null

let sum = Number(a) + Number(b) + Number(d) + Number(e)
console.log(sum)
