// Challenge 1


// 1
function greet(name) {
  console.log("Hello, " + name);
}
greet("John");

// 2

let greet2 = function (name){
  console.log("Hello, " + name);
}
greet2("Ldiya")

// 3

let greet3 = (name) => {
  console.log("Hello, " + name);
}
greet3("David")

// 4
let greet4  = new Function (
  'name',
  'console.log("Hello, " + name)'
)

greet4("Simon")




// Challenge 2

// 1
function isPrime(num){
  if (num <= 1) {
    return false
  }else{
    for (let i = 2; i < (num**0.5)+1 ; i++) {
      if (num % i == 0) {
        return false
      }
      
    }
  
    return true
  }
}

console.log(isPrime(11))



// 2
let isPrime2 = function (num){
  if (num <= 1) {
    return false
  }else{
    for (let i = 2; i < (num**0.5)+1 ; i++) {
      if (num % i == 0) {
        return false
      }
      
    }
  
    return true
  }
}

console.log(isPrime2(12))

// 3
let isPrime3 = (num) => {
  if (num <= 1) {
    return false
  }else{
    for (let i = 2; i < (num**0.5)+1 ; i++) {
      if (num % i == 0) {
        return false
      }
      
    }
  
    return true
  }
}

console.log(isPrime3(19))




// Challenge 3


// 1
function countDigit(num) {
  count = 0
  for (let i = 0; i < String(num+1).length; i++) {
    count+=1  
  }

  console.log(count)
}

countDigit(23345)
countDigit(23)

// 2
let countDigit2 = function (num){
  count = 0
  for (let i = 0; i < String(num+1).length; i++) {
    count+=1  
  }

  console.log(count)
}
countDigit2(3458930)
countDigit2(2)

// 3
let countDigit3 = (num) => {
  count = 0
  for (let i = 0; i < String(num+1).length; i++) {
    count+=1  
  }

  console.log(count)
}
countDigit3(234573894)



// Challenge 4

function isPalindrome(input) {
  let text = ""
  for (let i = String(input).length -1 ; i >= 0; i--) {
    text+=String(input)[i]
    
  }

  if (text == input) {
    console.log("Palindrome")
  }else{
    console.log("Not Palindrome")
  }
}

isPalindrome('kiyik')


// Challenge 5

function isArmstrong(num) {
  num = String(num)
  let sum = 0
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i])**num.length
  }

  if (sum == Number(num)) {
    console.log("Armstrong")
  } else {
    console.log("Not Armstrong")
  }
  
}

isArmstrong(153)


// Challenge 6
function createCounter(start) {

  let object = {
    incerement: () => start + 1,
    decrement: () => start -1,
    getCount: () => start


  }

  return object
  
}
console.log(createCounter(6).incerement())
console.log(createCounter(6).decrement())
console.log(createCounter(6).getCount())



// Challenge 7

function orderFood(name,address,food) {
  return "Dear " + name + " your ordered food " + food + " will be ready in 15 minuts and will be delivered to your address: " + address
}

console.log(orderFood("Sunnatbek","Sergeli street","shashlik"))