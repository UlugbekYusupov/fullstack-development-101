//challenge 1
// function greet(givenName){
//     return "Hello cutie " + givenName;
// }
//
// let greetVar = function (givenName){
//     return "Hello ugly " + givenName;
// }
// let great = (givenName)=>{
//     return "Hello pretty " + givenName;
// }
// let greуet = new Function('givenName','return \'Welcome \' + givenName ');
//
// console.log(greet("Sardor"));
// console.log(greetVar("Sardor"));
// console.log(great("Sardor"));
// console.log(greyet("Sardor"));

//challenge 2
// function isPrime(number){
//     let counter = 0;
//     for (let i = 1; i<=number/2; i++){
//         if(number%i===0){
//             counter++;
//         }
//     }
//     return counter>1;
// }
//
// console.log(isPrime(19));

//challenge 3
// function countDigits(n) {
//     n = Math.abs(n);
//
//     if (n === 0) return 1;
//
//     let count = 0;
//     while (n > 0) {
//         count++;
//         n = Math.floor(n / 10);
//     }
//
//     return count;
// }
//
// console.log(countDigits(1212222));

//challenge 4
// function isPalindrome(n) {
//     let original = n;
//     let reversed = 0;
//
//     while (n > 0) {
//         let digit = n % 10;
//         reversed = reversed * 10 + digit;
//         n = Math.floor(n / 10);
//     }
//
//     return original === reversed;
// }
//
// console.log(isPalindrome(2121));

//challenge 5
// function isArmstrong(n) {
//     let temp = n;
//     let digits = 0;
//
//     // Count digits
//     while (temp > 0) {
//         digits++;
//         temp = Math.floor(temp / 10);
//     }
//
//     temp = n;
//     let sum = 0;
//
//     // Calculate Armstrong sum
//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += Math.pow(digit, digits);
//         temp = Math.floor(temp / 10);
//     }
//
//     return sum === n;
// }
//
// console.log(isArmstrong(341));

//challenge 6
// function createCounter(start){
//     let count= start
//     return {
//         increment: ()=>{
//             count++;
//         },
//         decrement: ()=>{
//             count--
//         },
//         getCount: () => {
//             return count;
//         }
//     }
// }
//
// let counter = createCounter(19);
// counter.increment()
// console.log(counter.getCount());
// counter.decrement()
// console.log(counter.getCount())

//challenge 7
// function order(name, address, meal)  {
//     return {
//         order: function () {
//             return `Dear ${name}, your ordered food ${meal} will be ready in 15 minutes and will be delivered to your address: ${address}.`;
//         }
//     };
// };
//
// // Usage
// const myOrder = order("Sanjar", "Tashkent, Chilonzor", "Lavash");
//
// console.log(myOrder.order());

//challenge 8
// function lazyAdder(a){
//     return function add(b){
//         return a+b;
//     }
// }
// const add = lazyAdder(5);
// console.log(add(10));

