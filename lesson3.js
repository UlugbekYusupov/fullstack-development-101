// //Task 1
// const nums = [4, 6]
// if (nums[0] > nums[1]) {
//     console.log(nums[0])
// } else {
//     console.log(nums[1])
// }
//
// //Task 2
// const ns = [3, -7, 2]
// for (const n of ns) {
//     if (n < 0) {
//         console.log(n)
//     }
// }
//
// //Task 3
// const numbers = [0, -1, 4]
// numbers.sort((a, b) => b - a)
// console.log(numbers)
//
// //Task 4
// for (let i = 0; i < 16; i++) {
//     if (i % 2 === 0) {
//         console.log(i + "is even")
//     } else {
//         console.log(i + "is odd")
//     }
//
// }
//
// //Task 5
// for (let i = 0; i < 101; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
//
// }
//
// //Task 6
// const num = prompt("Enter a number")
// const leng = num.length
// let res = 0
// for (const numElement of num) {
//     res += (numElement ** leng)
// }
// console.log(num == res ? "Armstrong" : "not Armstrong")

//Task 7
const students = [
    {
        name: "David",
        mark: 80
    },
    {
        name: "Vinoth",
        mark: 77
    },
    {
        name: "Divya",
        mark: 88
    }, {
        name: "Ishitha",
        mark: 95
    }, {
        name: "Thomas",
        mark: 68
    }
]
sum = 0
avg = 0
for (const studentsKey of students) {
    sum += studentsKey.mark
}
avg = sum/students.length

switch (true){
    case avg>60:
        console.log("F")
        break
    case avg<70:
        console.log("D")
        break
    case avg<80:
        console.log("C")
        break
    case avg<90:
        console.log("B")
        break
    case avg<100:
        console.log("A")
        break
}