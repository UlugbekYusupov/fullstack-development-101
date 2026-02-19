// 1
console.log("5" + 5) // 55
console.log("5" - 5) // 0
console.log("5" * "5") //25
console.log("10" / 2) //5
console.log(5 + true) //6
console.log("10" - true) //9
console.log("5" - true) //5true
console.log(5 + null) //5
console.log(5 + undefined) //Nan

// 2
console.log(Number("200") + 50)
console.log(String(25) + " years old")
if ("false") {
    console.log(true)
}
console.log("10" - true)

// 3
// const temperature = 23
const temperature = +prompt("Enter celcius temperature: ", 20)
console.log(temperature)
const fahrenheit = (temperature * 9 / 5 + 32)
console.log(fahrenheit)
// temperature = 20

// 4
// let budget = 10;
let budgeet = +prompt("Enter your budget: ", 10)



// 5
console.log(!!"false" == !! "true")
console.log(0 || "JavaScript")
console.log(" " && 100)
console.log(null ?? "Fallback")
console.log(undefined ?? "Default Value")

// 6
let a = "42"
let b = "3.14"
let c = "hello"
let d = false
let e = null

let sum = a + b + c + d + e
console.log(sum)