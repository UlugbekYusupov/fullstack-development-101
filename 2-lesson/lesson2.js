// 1
let even = 0;
let odd = 0;
for (let i = 1; i < 51; i++) {
    i % 2 == 0 ? even += 1 : odd += 1
}
console.log("Even: ", even)
console.log("Odd: ", odd)

// 2
let num = 1234
let new_num = 0
while (num > 0) {
    let last = num % 10;     
    new_num = (new_num * 10) + last; 
    num = parseInt(num / 10)
}

console.log(new_num);

// 3
let num2 = 1234
let max = 0
while (num2 > 0) {
    let last = num2 % 10;
    last > max ? max = last : null
    num2 = parseInt(num2 / 10)
}

console.log(max);

// 4
let num3 = 1234
let s = 0
while (num3 > 0) {
    s += num3 % 10;
    num3 = parseInt(num3 / 10)
}

console.log(s);

// 5
let num4 = 1234
let c = 0
while (num4 > 0) {
    c += 1;
    num4 = parseInt(num4 / 10)
}

console.log(c);