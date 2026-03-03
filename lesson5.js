// Task 1
name = prompt('Enter a name: ')

function greet1(name){
    return "Hello " + name
}
console.log(greet1(name))

let greet2 = function(name){
    return "Hello " + name
}
console.log(greet2(name))

let greet3 = (name) =>{
    return "Hello " + name
}
console.log(greet3(name))

let greet4 = new Function(
    'name',
    'return "Hello " + name'
)
console.log(greet4(name))

// Task 2
let num = prompt("Enter a number")

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(num));

// Task 3
let num = prompt("Enter a number")

const countDigits=(num)=>{
    console.log(num.length)
}
countDigits(num)

// Task 4
let num = prompt("Enter a number")
const isPalindrome=(num) => {
    return num === num.split("").reverse().join("")
}
console.log(isPalindrome(num))

// Task 5
const num = prompt("Enter a number")
const isArmstrong =(num)=>{
    const leng = num.length
    let res = 0
    for (const numElement of num) {
        res += (numElement ** leng)
    }
    console.log(num == res ? "Armstrong" : "not Armstrong")
}
isArmstrong(num)

// Task 6

function createCounter(start) {
    let count = start;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        getCount() {
            return count;
        }
    };
}
let counter  = createCounter(12);
counter.increment();
console.log(counter.getCount());

// Task 7
const orderFood=()=>{
    const name = prompt("Enter your name");
    const address = prompt("Enter your address");
    const food = prompt("What do you want?");

    return `Dear ${name}, your ordered food ${food} will be ready in 15 minuts and will be delivered to your address ${address}`
}
console.log(orderFood())

// Task 8
const lazyAdder=(n)=>{
    return (function (num){
        return num+n;
    })
}
const add5 = lazyAdder(5);
console.log(add5(10));
console.log(add5(20));

Assignment
// Task 1
const dynamicPricingCalculation=(itemsCount)=>{
    if(itemsCount <= 0 ) return false;
    if(itemsCount > 5){
        return "20% Discount"
    }else if(itemsCount > 3){
        return "10% Discount"
    }
}
console.log(dynamicPricingCalculation(4))

// Task 2
const passwordStrengthChecker=(pw)=>{
    if(pw.length>=8 && /[A-Z]/.test(pw) && /[0-9]/.test(pw) && /[!@#$%^&*(),.?":{}|<>]/.test(pw)){
        return "Strong"
    }else if(pw.length>=8 && /[A-Z]/.test(pw) && /[0-9]/.test(pw)){
        return "Medium"
    }else if(pw.length>=8){
        return "Weak"
    }else{
        return "Password must be at least 8 characters"
    }
}
console.log(passwordStrengthChecker("ffffffffF2."))

// Task 3
const atm=(amount)=>{
    if (amount%10!==0) return false
    banknotes = [100,50,20,10]
    for (const n of banknotes) {
        if(amount%n>=0){
            let count = Math.floor(amount/n)
            count>0?console.log(`${n} dan ${count} ta`): null
            amount-=(n*count)
        }
    }

}
atm(350)

// Task 4
function trafficLight() {
    console.log("Red");
    setTimeout(() => {
        console.log("Green");
        setTimeout(() => {
            console.log("Yellow");
            setTimeout(trafficLight, 2000);
        }, 3000);
    }, 5000);
}

trafficLight();

// Task 5
function checkPassword(p) {
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/\d/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;

    return score <= 2 ? "Weak" : score === 3 ? "Medium" : "Strong";
}
console.log(checkPassword("Abc12345"));

// Task 6
function bankAccount(initial = 0) {
    let balance = initial;

    return {
        deposit: amount => balance += amount,
        withdraw: amount => amount <= balance
            ? balance -= amount
            : "Insufficient funds",
        getBalance: () => balance
    };
}

const acc = bankAccount(100);

acc.deposit(50);
acc.withdraw(30);
console.log(acc.getBalance());

// Task 7
function createUser(role) {
    const permissions = {
        admin: ["add", "edit", "delete", "view"],
        editor: ["edit", "view"],
        viewer: ["view"]
    };

    return {
        can: action => permissions[role]?.includes(action)
    };
}

const user = createUser("editor");

console.log(user.can("edit"));
console.log(user.can("delete"))

// Task 8
function calculateTax(income) {
    if (income < 10000) return 0;
    if (income <= 50000) return income * 0.1;
    return income * 0.2;
}
console.log(calculateTax(8000));
console.log(calculateTax(20000));
console.log(calculateTax(60000));