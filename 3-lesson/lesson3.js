// 1
let a = 23
let b = 45
if (a > b) {
    console.log(a)
} else if (a == b) {
    console.log("Same")
} else {
    console.log(b)
}

// 2
let c = 3
let d = -7
let e = 2

if (c < 0 || d < 0 || e < 0) {
    console.log("-")
} else {
    console.log("Not Found")
}

// 3
let f = 0
let g = -1
let h = 4
if (f >= g && f >= h){
    if (g >= h) {
        console.log(f, g, h)
    } else {
        console.log(f, h, g)
    }
} else if (g >= f && g >= h) {
    if (f >= h) {
        console.log(g, f, h)
    } else {
        console.log(g, h, f)
    }
} else {
    if (f >= g) {
        console.log(h, f, g)
    } else {
        console.log(h, g, f)
    }
}

// 4
for (let i = 0; i < 15; i++) {
    if (i % 2 == 0) {
        console.log(i, " is even")
    } else {
        console.log(i, " is odd")
    }
}

// 5
for (let i = 0; i < 100; i++) {
    let str = ""
    if (i % 3 == 0) {
        str += "Fizz"
    }
    if (i % 5 == 0) {
        str += "Buzz"
    }
    if (str) {
        console.log(i, str)
    }
}

// 6
let num = 1634
let num2 = String(num)
let sum = 0
for (let j = 0; j < num2.length; j++) {
    sum += parseInt(num2[j]) ** parseInt(num2.length)
}
if (sum == num) {
    console.log(num)
}

// 7
let base = {
    David: 80,
    Vinoth: 77,
    Divya: 88,
    Ishitha: 95,
    Thomas: 68 
}
let sum2 = 0
for (const i in base) {
    sum2 += i
}
let avg = sum2 / base.length
if (avg < 60) {
    console.log('F')
} else if (avg < 70) {
    console.log('D')
} else if (avg < 80) {
    console.log('C')
} else if (avg < 90) {
    console.log('B')
} else {
    console.log('A')
}