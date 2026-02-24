// Challenge 1

let a = 14
let b = 5
let text = "Max: "
if (a>b) {
  console.log(text,a)
} else {
  console.log(text,b)
}


// Challenge 2
let array = [2,4,67,-8,3]
let minus = 0
for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    minus++
    console.log("-")
    break
  }

  
  
}

if (minus == 0) {
  console.log("There is no minus number!")
}


// Challenge 3

let abs = [1,3,2]
let max = 0
let min = 0
let middle = 0

for (let i = 0; i < abs.length; i++) {
  const element = abs[i];
  if (element > max) {
    max = element
  }
  if (element < min) {
    min = element
  }
}

for (let i = 0; i < abs.length; i++) {
  if (abs[i] !== max && abs[i] !== min) {
    middle = abs[i]
  }
}
console.log(max,middle,min)


// Challenge 4


for (let i = 0; i < 15; i++) {
  if (i%2==0) {
    console.log(String(i),'is even')
  } else {
    console.log(String(i),'is odd')
    
  }
  
}


// Challenge 5

for (let i = 0; i < 100; i++) {
  if (i%3==0 & i%5==0) {
    console.log(i,"FizzBuzz")
  }
  if (i%3==0) {
    console.log(i,"Fizz")
  }
  if (i%5==0) {
    console.log(i,"Buzz")
  }
}

// Challenge 6
let num = prompt("Enter any number")
let ArmStrong = 0
for (let i = 0; i < num.length; i++) {
  const element = num[i]**3;
  ArmStrong+=element
  
}

if (ArmStrong == num) {
  console.log("ArmStrong number!")
}else{
  console.log("Not ArmStrong number!")
}

// Challenge 7

