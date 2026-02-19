// Task 1
let number = prompt("Enter a number")
number % 2 === 0? console.log(`Odd: ${number/2} Even:${number/2}`): console.log(`Odd: ${(number/2)+0.5} Even:${(number/2)-0.5}`)

// Task 2
let numberCh2 = prompt("Enter a number")
let reversedNumber = 0
while (numberCh2 > 0){
    let lastNum = numberCh2 % 10;
    reversedNumber = reversedNumber * 10 + lastNum;
    numberCh2 = Math.floor(numberCh2 / 10)
}
console.log(reversedNumber)

// Task 3
let numberCh3 = prompt("Enter a number")
let largeNumber = 0
while (numberCh3 > 0){
    let lastNum = numberCh3 % 10;
    lastNum>largeNumber?largeNumber=lastNum:largeNumber
    numberCh3 = Math.floor(numberCh3 / 10)
}
console.log(largeNumber)

// Task 4
let numberCh4 = prompt("Enter a number")
let sumNumber = 0
while (numberCh4 > 0){
    let lastNum = numberCh4 % 10;
    sumNumber+=lastNum
    numberCh4 = Math.floor(numberCh4 / 10)
}
console.log(sumNumber)

// Task 5
let numberCh5 = prompt("Enter a number")
let countNumber = 0
while (numberCh5 > 0){
    countNumber++
    numberCh5 = Math.floor(numberCh5 / 10)
}
console.log(countNumber)