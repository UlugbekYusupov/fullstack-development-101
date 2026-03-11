// Challenge 1
const students = [
    { name: "Alice", scores: [80, 90, 100] },
    { name: "Bob", scores: [50, 60, 70] },
    { name: "Charlie", scores: [30, 40, 20] }
];

let topStudent = null;
let highestAvg = 0;

students.forEach(student => {

    // calculate sum
    const sum = student.scores.reduce((a, b) => a + b, 0);

    // calculate average
    const avg = sum / student.scores.length;

    // check pass
    const passed = avg >= 50;

    console.log(`${student.name} average: ${avg} | Passed: ${passed}`);

    // check top student
    if (avg > highestAvg) {
        highestAvg = avg;
        topStudent = student.name;
    }

});

console.log(`${topStudent} has the highest average: ${highestAvg}`);

// challenge 2
const cart = [
    { id: 1, name: "Laptop", price: 900, quantity: 1 },
    { id: 2, name: "Mouse", price: 50, quantity: 2 },
    { id: 3, name: "Keyboard", price: 100, quantity: 1 }
];

// total price
let total = 0;

cart.forEach(item => {
    total += item.price * item.quantity;
});

// apply discount
if (total > 100) {
    total = total * 0.9;
}

// most expensive item
let mostExpensive = cart[0];

cart.forEach(item => {
    if (item.price > mostExpensive.price) {
        mostExpensive = item;
    }
});

console.log("Total Price:", total);
console.log("Most Expensive Item:", mostExpensive.name);

//challenge 3

const products = [
    { id: 1, name: "Laptop", price: 1200, stock: 10 },
    { id: 2, name: "Phone", price: 700, stock: 15 }
];

function addProduct(product) {
    products.push(product);
}

function updateStock(id, newStock) {
    const product = products.find(p => p.id === id);
    if (product) product.stock = newStock;
}

function deleteProduct(id) {
    return products.filter(p => p.id !== id);
}

function findProduct(name) {
    return products.find(p => p.name === name);
}

addProduct({ id: 3, name: "Tablet", price: 500, stock: 8 });
updateStock(1, 20);

console.log(findProduct("Laptop"));

// challenge 4
const posts = [
    { author: "Alice", likes: 100, comments: 20, shares: 5 },
    { author: "Bob", likes: 200, comments: 50, shares: 10 },
    { author: "Charlie", likes: 150, comments: 30, shares: 8 }
];

function getMostLikedPost(posts) {
    let mostLiked = posts[0];

    for (const post of posts) {
        if (post.likes > mostLiked.likes) {
            mostLiked = post;
        }
    }

    return mostLiked;
}

function getTotalEngagement(posts) {
    let total = 0;

    for (const post of posts) {
        total += post.likes + post.comments + post.shares;
    }

    return total;
}

console.log("Most liked post:", getMostLikedPost(posts));
console.log("Total engagement:", getTotalEngagement(posts));