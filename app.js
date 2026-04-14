// // // var a = undefined;
// // // console.log(a);
// // // var a = 40;

// // // let user = {
// // //   username: "Ulugbek",
// // //   age: 30,
// // // };

// // // console.log(
// // //   {
// // //     username: "Ulugbel",
// // //   } ==
// // //     {
// // //       username: "Ulugbel",
// // //     }
// // // );

// // // let number = 1234;
// // // let reverse = 0;

// // // while (number > 0) {
// // //   let digit = number % 10;
// // //   number = Math.floor(number / 10);
// // //   reverse = reverse * 10 + digit;
// // // }

// // // console.log(reverse);

// // // task 1.1

// // // let number = Number(prompt("Enter the Number"));
// // // let count = 0;
// // // while (number > 0) {
// // //   number = Math.floor(number / 10);
// // //   count++;
// // // }

// // // console.log(count);

// // // for (let i = 0; i < 10; i++) {
// // //   console.log(i);
// // // }

// // // let i = 0;
// // // while (i < 10) {
// // //   console.log(i);
// // //   i++;
// // // }

// // // let j = 0;
// // // do {
// // //   console.log(j);
// // //   j++;
// // // } while (j < 10);

// // // const user = {
// // //   username: "Ulugbek",
// // //   age: 30,
// // //   country: "Uzbekistan",
// // // };

// // // const keys = Object.keys(user);
// // // const values = Object.values(user);

// // // for (const key in user) {
// // //   const element = user[key];
// // //   console.log(element);
// // // }

// // // for (const element of keys) {
// // //   console.log(element);
// // // }

// // // function armstrong(n, k) {
// // //   let s = k;
// // //   while (s < 0) {

// // //   }
// // // }

// // // const n = prompt();
// // // let k = n.length;

// // // console.log(armstrong(n, k));

// // // function sum(a, b) {
// // //   return a + b;
// // // }

// // // console.log(sum(2, 5));

// // // let summ = function (a, b) {
// // //   return a + b;
// // // };

// // // console.log(summ(3, 4));

// // // let handleClick = () => {};

// // // (function () {})();

// // // let total = new Function("a", "b", "return a + b");

// // // total(2, 3);

// // // function outer() {
// // //   let username = "Ulugbek";

// // //   function inner() {
// // //     let fullname = username + "Yusupov";
// // //     console.log(fullname);
// // //   }

// // //   inner();
// // // }

// // // outer();

// // // const func = () => {
// // //   console.log(this);
// // // };

// // // func();

// // // Array.prototype.greet = function () {
// // //   console.log(this);

// // //   console.log("It is coming from prototype");
// // // };

// // // const arr = [1, 2, 3, 4, 5];

// // // arr.greet();

// // // const special = "@#$%^&*()-"
// // // let username = "Ulugbek";
// // // if (username[0] > "A" && username[0] < "Z") {
// // //   console.log(username[0]);
// // // }

// // let colors = ["Orange", "Green", "Red", "Blue"];

// // console.log(colors);

// // let nums = new Array();

// // let names = new Array("Bob", "Alice");

// // names.push("John");

// // console.log(names);

// // nums.push(2);
// // nums.push(5);
// // nums.push(3);
// // nums.push(1);
// // nums.push(7);
// // nums.push(7);

// // console.log(nums);

// // let original = [1, 2, 3];
// // let copy = [...original];

// // console.log(original.__proto__);

// // let numbers = Array.of(10, 5, 4, 3, 2);

// // // console.log(numbers);

// // // console.log(numbers.push(1));
// // // console.log(numbers.pop());

// // // let numberss = numbers.map(function (element) {
// // //   return element ** 2;
// // // });

// // // console.log(numberss);
// // // console.log(numbers);

// // // numberss = numbers.filter(function (element) {
// // //   return element > 5;
// // // });

// // // console.log(numberss);

// // // let a = true;

// // // let status = a == true ? "True" : "Flase";

// // // function firstElement (arr, n = 1){

// // //   if (arr.length === 0){
// // //     return []
// // //   }
// // //   if (n < 0){
// // //     return n
// // //   }
// // //   if (arr.length > 0){
// // //     return arr.slice(0, n)
// // //   }

// // // }
// // // console.log(firstElement([7,9,0,-2]))
// // // console.log(firstElement([], 3))
// // // console.log(firstElement([7,9,0,-2], -3))
// // // task 2

// // // function last(arr,n){
// // //   if ( n === undefined){
// // //     return arr[arr.length-1]

// // //   }
// // //   return arr.slice(-n)
// // // }

// // // console.log(last([7,9,0,-2]))
// // // console.log(last([7,9,0,-2],3))
// // // console.log(last([7,9,0,-2],6))

// // // let myColor = ["Red","White","Green","Black"]

// // // let colo = myColor.join(",")
// // // console.log(colo)

// // // function insertDashes(n) {
// // //   let n2 = String(n);
// // //   let n1 = n2.split("");
// // //   return n1.join("-");
// // // }

// // // console.log(insertDashes(12345));

// // // function sortArray(arr) {
// // //   return arr.sort()
// // // }

// // // console.log(sortArray([2,3,5,1,3,-4]))

// // // 6

// // function findMode(arr) {
// //   let count = {};
// //   let maxItem = arr[0];
// //   let maxCount = 1;

// //   for (let item of arr) {
// //     if (count[item]) {
// //       count[item]++;
// //     } else {
// //       count[item] = 1;
// //     }

// //     if (count[item] > maxCount) {
// //       maxItem = item;
// //       maxCount = count[item];
// //     }
// //   }
// //   return `${maxItem} (${maxCount}) times`;
// // }

// // let arr = [3, "a", "a", "a", 2, 3, "a", 3, 2, 4, 9, 3];

// // console.log(findMode(arr));

// // let finalWord = [];
// // function changeLetters(word) {
// //   // word = word.split('')
// //   for (let i = 0; i < word.length; i++) {
// //     // if (word[i] > "A"&&word[i]<"Z"){
// //     //   word[i]=word[i].toLowerCase()
// //     // }
// //     // else {
// //     //   word[i] = word[i].toUpperCase()
// //     // }
// //   }
// // }
// // // console.log(changeLetters('hello Sanatbek'));

// // // let color = ["Blue", "Orange", "Green", "Red", "Black"];

// // // for (let i = 1; i <= 1004; i++) {
// // //   let o;
// // //   if (i % 10 === 1 && i % 100 !== 11) o = "st";
// // //   else if (i % 10 === 2 && i % 100 !== 12) o = "nd";
// // //   else if (i % 10 === 3 && i % 100 !== 13) o = "rd";
// // //   else o = "th";
// // //   console.log(`${i}${o} color is ${color[(i - 1) % color.length]}`);
// // // }

// // // const arr1 = [1, 2, 3, 4];
// // // const arr2 = [5, 6, 7];
// // // function joinArray(arr1, arr2) {
// // //   let num;
// // //   let arr3 = [];
// // //   if (arr1.length > arr2.length) {
// // //     num = arr1.length;
// // //   } else num = arr2.length;
// // //   for (let i = 0; i < num; i++) {
// // //     arr3[i] = (arr1[i] || 0) + (arr2[i] || 0);
// // //   }

// // //   return arr3;
// // // }
// // // console.log(joinArray(arr1, arr2));

// // let car = {
// //   brand: "Tesla",
// //   model: "Model S",
// //   year: 2026,
// //   start: function () {
// //     console.log("Car is starting...");
// //   },
// // };

// // console.log(car.brand);

// // car.start();

// // let person = new Object();

// // person.name = "Alice";
// // person.age = 25;
// // person.greet = function () {
// //   return `Hello, my name is ${this.name}`;
// // };

// // console.log(person.greet());

// // // console.log(this)

// // function createPerson(name, age) {
// //   return {
// //     name,
// //     age,
// //     greet() {
// //       return `Hi, I'm ${this.name} and I'm ${this.age} years old!`;
// //     },
// //   };
// // }

// // let person1 = createPerson("Ulugbek", 30);
// // console.log(person1.greet());

// // function Person(name, age) {
// //   this.name = name;
// //   this.age = age;
// //   this.greet = function () {
// //     return `Hi, I'm ${this.name} and I'm ${this.age} years old!`;
// //   };
// // }

// // let person2 = new Person("Ulugbek", 29);
// // console.log(person2.greet());

// // let animal = {
// //   type: "mammals",
// //   makeSound: function () {
// //     console.log("Some generic animal sound");
// //   },
// // };

// // let dog = Object.create(animal);
// // dog.breed = "Golden Retriever";
// // dog.makeSound();
// // console.log(dog.type);

// // class Persons {
// //   constructor(name, age) {
// //     ((this.name = name), (this.age = age));
// //   }

// //   greet() {
// //     return `Hello I'm ${this.name} and I'm ${this.age} years old`;
// //   }
// // }

// // let person3 = new Persons("Alice", 29);

// // console.log(person3.greet());

// // const config = Object.freeze({
// //   theme: "dark",
// //   version: "1.0.0",
// // });

// // config.theme = "light";
// // console.log(config.theme);

// // const target = {
// //   country: "Uzbekistan",
// //   name: "Kimdir",
// // };

// // const source = {
// //   name: "Ulugbek",
// //   age: 30,
// // };

// // Object.assign(target, source);

// // console.log(target);

// // const products = [
// //   { id: 1, name: "Apple", price: "$2" },
// //   { id: 2, name: "Banana", price: "$1" },
// //   { id: 3, name: "Orange", price: "$4" },
// // ];

// // products.map(function (product) {
// //   console.log(product.name, product.price);
// // });

// // // Challange 1
// // let students = [
// //   { name: "Alice", scores: [80, 90, 100] },
// //   {
// //     name: "Bob",
// //     scores: [50, 60, 70],
// //   },
// //   {
// //     name: "Charlie",
// //     scores: [30, 40, 20],
// //   },
// // ];
// // let top_average = 0;
// // let average = [];
// // let top_student = "";
// // for (let i = 0; i < students.length; i++) {
// //   let total = 0;
// //   const element = students[i].scores;
// //   for (let j = 0; j < element.length; j++) {
// //     total += element[j];
// //   }
// //   average[i] = total / element.length;
// //   if (average[i] >= 50) {
// //     console.log("Student passed !!!");
// //   }
// //   if (average[i] > top_average) {
// //     top_average = average[i];
// //     top_student = students[i].name;
// //   }
// // }
// // console.log(top_student + " has the highest score with " + top_average);

// // // E-Commerce

// // const cart = [
// //   { id: 1, name: "laptop", price: 900, quantity: 2 },
// //   { id: 2, name: "air-condition", price: 100, quantity: 1 },
// //   { id: 3, name: "iphone", price: 300, quantity: 2 },
// // ];

// // function products(arr) {
// //   let totalPrice = 0;

// //   for (let product of arr) {
// //     totalPrice += product.price * product.quantity;
// //   }

// //   if (totalPrice > 100) {
// //     totalPrice = totalPrice * 0.9;
// //   }

// //   let mostExpensiveItem = cart[0];

// //   for (let product of cart) {
// //     if (product.price > mostExpensiveItem.price) {
// //       mostExpensiveItem = product;
// //     }
// //   }

// //   let text =
// //     "Total price: " +
// //     totalPrice +
// //     "(after discount)." +
// //     "Most expensive product is " +
// //     mostExpensiveItem.name;
// //   return text;
// // }

// // console.log(products(cart));

// // // task 3

// // function productInventoryManagement() {
// //   const products = [
// //     { id: 1, name: "Laptop", price: 300, stock: 1 },
// //     { id: 2, name: "Phone", price: 200, stock: 2 },
// //   ];
// //   function addProduct() {
// //     const itemName = window.prompt("Enter the product name: ");
// //     const itemprice = Number(window.prompt("Enter the price of the product: "));
// //     const itemStock = Number(window.prompt("Enter the stock of the product: "));

// //     const newProduct = {
// //       id: productInventoryManagement.length + 1,
// //       price: itemprice,
// //       stock: itemStock,
// //     };

// //     products.push(newProduct);
// //     console.log(`${itemName} is added Successully `);
// //   }

// //   function updateStock(id) {
// //     // const idP=Number(window.prompt("Enter the product id : "))
// //     for (let i = 0; i < products.length; i++) {
// //       if (products[i].id === id) {
// //         const stockLevel = Number(window.prompt("Enter the new stock level: "));
// //         products[i].stock = stockLevel;
// //         console.log("Updated Successfully ");
// //       }
// //     }
// //   }

// //   function deleteProdct(id) {
// //     const index = products.findIndex((item) => item.id === id);
// //     if (index !== -1) {
// //       products.splice(index, 1);
// //       console.log("Dleleted Successfully ");
// //     } else {
// //       console.log("Failed ");
// //     }
// //   }
// //   function findProduct(id) {
// //     if (id == -1) return;
// //     return products.find((item) => item.id === id);
// //   }

// //   return { addProduct, updateStock, deleteProdct, findProduct };
// // }

// // const product1 = productInventoryManagement();
// // product1.addProduct();

// // // challenge 4

// // const post = [
// //   {author: "Alice", likes: 100, comments: 20, shares: 5},
// //   {author: "Bob", likes: 200, comments: 50, shares: 15}
// // ];

// // if (post[0].likes > post[1].likes){
// //   console.log("the most liked post is ", post[0].author, "'s")
// // }else{
// //   console.log("the most liked post is ", post[1].author, "'s")
// // }
// // function total(){
// //   console.log(post[0].likes + post[0].comments + post[0].shares)
// //   console.log(post[1].likes + post[1].comments + post[1].shares)
// // }

// // total()

// // const h1 = document.getElementById("id");

// // h1.classList.add("test");

// // const p = document.getElementsByTagName("p");

// // p[0].innerHTML = "bu inner html orqali ozgartirildi";
// // const buttons = document.getElementsByClassName("btn");

// // const container = document.querySelectorAll(".container");

// // console.log(h1);
// // console.log(buttons[0]);
// // console.log(p);
// // console.log(container);

// // const root = document.getElementById("root");

// // // const newPara = document.createElement("p");
// // // newPara.textContent = "This is new paragraph";
// // // root.appendChild(newPara);

// const button = document.createElement("button");
// button.textContent = "Click me";
// button.classList.add("btn");
// document.body.appendChild(button);

// button.addEventListener("mouseover", function () {
//   console.log("Button is clicked");
// });

// const tasks = [
//   {
//     id: 1,
//     title: "Task 1",
//     description: "Nofsdlkfmsldkf",
//     status: "Pending",
//   },
//   {
//     id: 2,
//     title: "Task 1",
//     description: "Nofsdlkfmsldkf",
//     status: "Pending",
//   },
//   {
//     id: 3,
//     title: "Task 1",
//     description: "Nofsdlkfmsldkf",
//     status: "Pending",
//   },
// ];

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// Event bubling
// child.addEventListener("click", function () {
//   console.log("Child is ckicled");
// });

// parent.addEventListener("click", function () {
//   console.log("Parent is ckicled");
// });

// grandparent.addEventListener("click", function () {
//   console.log("grandparent is ckicled");
// });

// Event capturing
parent.addEventListener("click", function (event) {
  console.log("Parent is clicked");
});

child.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Child is clicked");
});

document.getElementById("list").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked: ", event.target.textContent);
  }
});
