//                        Lecture 7 : Objects in JavaScript

//  object = A collection of related properties and/or methods 
//           Can represent real world objects (people, products, place)
//           object = {key:value,
//                     function()} 


// const person1 = {
//     firstName: "Otabek",
//     lastName: "Haydarov",
//     age: 18,
//     isEmployed: false,
// }

// const person2 = {
//     firstName: "Ulug'bek",
//     lastName: "Zokirov",
//     age: 17,
//     isEmployed: true,
// }

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);


// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);


//            1. Object Literal ({})
let car = {
    brand: "Tesla",
    model: "Model S",
    year: 2024,
    start: function () {
        console.log("Car is starting...");
    }
};
console.log(car.brand);
car.start();

//     2.  Using new Object()
// let person = new Object();
// person.name = "Alice";
// person.age = 25;
// person.greet = function () {
//     return `Hello, my name is  ${this.name}`
// }
// console.log(person.greet());

//         3. Factory Function
// function createPerson(name, age) {
//     return {
//         name,
//         age,
//         greet() {
//             return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
//         }
//     };
// }

// let person1 = createPerson("Alice", 25)
// let person2 = createPerson("Bob", 30)
// console.log(person1.greet());
// console.log(person2.greet());


//            4. Constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age
//     this.greet = function () {
//         return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`
//     }
// }
// let person1 = new Person("Alice", 25);
// let person2 = new Person("Bob", 30)
// console.log(person1.greet());
// console.log(person2.greet());

//     5. Using Object.creat(prototype)

let animal = {
    type: "Mammal",
    makeSound() {
        console.log("Some generic animal sound");
    }
};
let dog = Object.create(animal);
dog.breed = "Golden retriever"
dog.makeSound();
console.log(dog.type);


//      6. Using  ES6 class
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name}`;
    }
}
let person1 = new Person("Ulug'bek", 17);
console.log(person1.greet())


//          7. Singleton Object(Object.freeze())

const config = Object.freeze({
    theme: "dark",
    version: "1.0.0"
})
config.theme = "Light";
console.log(config.theme);


//                      Practice
//        Challenge 1
let students = [
    { name: "Ali", scores: [70,80,90] },
    { name: "Vali", scores: [40,50,45] },
    { name: "Sami", scores: [90,95,85] }
]

let topStudent = "";
let topAverage = 0;

students.forEach(function(student) {

    let sum = 0;

    student.scores.forEach(function(score) {
        sum = sum + score
    });

    let average = sum / student.scores.length;

    console.log(student.name + " average: " + average);

    if (average >= 50) {
        console.log("Status: Passed");
    } else {
        console.log("Status: Failed");
    }

    if (average > topAverage) {
        topAverage = average;
        topStudent = student.name;
    }
})

console.log("Top student is: " + topStudent);


//   Challenge 2
let cart = [
    { id: 1, name: 'Phone', price: 500, quantity: 1 },
    { id: 2, name: "Laptop", price: 900, quantity: 1},
    { id: 3, name: "Mouse", price: 50, quantity: 2}
]

let total = 0
cart.forEach(function(item) {
    let itemTotal = item.price * item.quantity;

    total = total + itemTotal;
})

console.log("Total price: ", total);

if (total > 100) {
    total = total * 0.9
}

console.log("After discount:", total)

//    Challenge 3
let products = [
    { id: 1, name: "Phone", price: 500, stock: 10},
    { id: 2, name: "Laptop", price: 900, stock: 5}
];

function addProduct(product) {
    products.push(product)
}

function updateStock(id, newStock) {
    products.forEach(function(p) {

        if (p.id === id) {
            p.stock = newStock
        }
    })
}

function deleteProduct(id) {

    products = products.filter(function(p) {
        return p.id !== id;
    })
}

function findProduct(name) {
    return products.find(function(p) {
        return p.name === name;
    })
}

// addProduct({ id:3, name:"Mouse", price:50, stock:20 });

// updateStock(1, 15);

// deleteProduct(2);

// console.log(findProduct("Mouse"));


addProduct({ id:3, name:"Laptop", price:50, stock:20 });
updateStock(2,15);
deleteProduct(3);
console.log(findProduct("Laptop"));


//    Challenge 4

let posts = [
    { author: "Ali", likes: 10, comments: 5, shares: 2},
    { author: "Vali", likes: 50, comments: 10, shares: 4},
    { author: "Ali", likes: 20, comments: 8, shares: 4},
]

let mostliked = posts[0];

posts.forEach(function(post) {
    if(post.likes > mostliked.likes) {
        mostliked = post
    }
})

console.log("Most liked post:", mostliked);

let totalEngagement = 0
posts.forEach(function(post) {
    totalEngagement += post.likes + post.comments + post.shares;
})

console.log("Total engagement:", totalEngagement);


//     Challenge 5

let teams = [
    { name: "Team A", wins: 5, losses: 2, points: 15},
    { name: "Team B", wins: 7, losses: 1, points: 21},
    { name: "Team C", wins: 3, losses: 4, points: 9},
]

teams.sort(function(a, b) {
    return b.points - a.points;
})

console.log("Ranking:", teams);
console.log("Best team:", teams[0])


//    Challenge  6
let inventory = [
    { itemName: "Tv", category: "Electronics", stock: 10},
    { itemName: "Phone", category: "Electronics", stock: 20},
    { itemName: "Chair", category: "Furniture", stock: 15},
]

let categoryStock = {};

inventory.forEach(function(item) {
    if(!categoryStock[item.category]) {
        categoryStock[item.category] = 0;
    }

    categoryStock[item.category] += item.stock
})

console.log(categoryStock);











