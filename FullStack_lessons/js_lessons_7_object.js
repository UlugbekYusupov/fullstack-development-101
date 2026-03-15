//Challenge 1 

// Challenge 1 - Student Grade Management System
// You have a list of students, each with their name and an array of scores.
// Calculate the average score of each student
// Determine if the student has passed (avg ≥ 50)
// Find the top-performing student


const students = [
  { name: "Alice", scores: [60, 70, 80] },
  { name: "Bob", scores: [40, 50, 30] },
  { name: "Charlie", scores: [90, 85, 95] }
];

let topStudent = "";
let highestAverage = 0;

students.forEach(student => {

  // calculate sum
  let sum = 0;
  student.scores.forEach(score => {
    sum += score;
  });

  // calculate average
  let average = sum / student.scores.length;

  // check pass or fail
  let result = average >= 50 ? "Passed" : "Failed";

  console.log(student.name + " average:", average);
  console.log("Result:", result);
  console.log("-----------");

  // find top student
  if (average > highestAverage) {
    highestAverage = average;
    topStudent = student.name;
  }

});

console.log("Top Student:", topStudent);
console.log("Highest Average:", highestAverage);



// Challenge 2

// Challenge 2 - E-Commerce Cart System
// You have an array of cart items where each item is an object containing id, name, price, and quantity.
// Calculate the total price of all items
// Apply a 10% discount if total price is above $100
// Find the most expensive item


const cart = [
  { id: 1, name: "Laptop", price: 800, quantity: 1 },
  { id: 2, name: "Mouse", price: 20, quantity: 2 },
  { id: 3, name: "Keyboard", price: 50, quantity: 1 }
];

let totalPrice = 0;
let mostExpensive = cart[0];

cart.forEach(item => {

  // calculate item total
  const itemTotal = item.price * item.quantity;

  // add to total price
  totalPrice += itemTotal;

  // check most expensive item
  if (item.price > mostExpensive.price) {
    mostExpensive = item;
  }

});

console.log("Total price:", totalPrice);

// apply discount
if (totalPrice > 100) {
  const discount = totalPrice * 0.10;
  const finalPrice = totalPrice - discount;

  console.log("Discount:", discount);
  console.log("Final price:", finalPrice);
} else {
  console.log("No discount applied");
}

console.log("Most expensive item:", mostExpensive.name);


// Challenge 3 

// Product Inventory Management
// Create an array of product objects (each with id, name, price, and stock). 
// Add a new product (addProduct).
// Update stock of a product (updateStock).
// Delete a product by ID (deleteProduct).
// Find a product by name (findProduct).
// Variation: Use higher-order functions (map(), filter(), reduce()) to manipulate the product list.



let products = [
  { id: 1, name: "Laptop", price: 1200, stock: 10 },
  { id: 2, name: "Phone", price: 800, stock: 20 },
  { id: 3, name: "Headphones", price: 150, stock: 15 }
];

// Add product
function addProduct(product) {
  products.push(product);
}

// Update stock
function updateStock(id, newStock) {
  const product = products.find(p => p.id === id);
  if (product) {
    product.stock = newStock;
  }
}

// Delete product
function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
}

// Find product
function findProduct(name) {
  return products.find(p => p.name.toLowerCase() === name.toLowerCase());
}

// Examples
addProduct({ id: 4, name: "Keyboard", price: 70, stock: 25 });

updateStock(1, 5);

deleteProduct(2);

console.log(findProduct("Laptop"));

// map
const increasedPrices = products.map(p => ({
  ...p,
  price: p.price * 1.1
}));

// filter
const lowStock = products.filter(p => p.stock < 10);

// reduce
const totalValue = products.reduce((total, p) => {
  return total + p.price * p.stock;
}, 0);

console.log(products);
console.log(increasedPrices);
console.log(lowStock);
console.log(totalValue);


// Challenge 4 


// Social Media Post Analytics
// Define an array of post objects, each with author, likes, comments, and shares.
// Implement a function to find the most liked post.
// Implement a function to calculate total engagement (likes + comments + shares) for all posts.
// Variation: Store comments as an array of objects (with user and message).


let posts = [
  {
    author: "Alice",
    likes: 120,
    shares: 10,
    comments: [
      { user: "Bob", message: "Nice post!" },
      { user: "Charlie", message: "Very helpful!" }
    ]
  },
  {
    author: "David",
    likes: 90,
    shares: 15,
    comments: [
      { user: "Alice", message: "Great!" }
    ]
  }
];

// Find most liked post
function findMostLikedPost(posts) {
  return posts.reduce((maxPost, post) =>
    post.likes > maxPost.likes ? post : maxPost
  );
}

// Calculate total engagement
function totalEngagement(posts) {
  return posts.reduce((total, post) =>
    total + post.likes + post.shares + post.comments.length
  , 0);
}

console.log(findMostLikedPost(posts));
console.log("Total Engagement:", totalEngagement(posts));



// Challenge 5

// Sports Tournament Leaderboard
// Define an array of team objects, each with name, wins, losses, and points.
// Implement a function to sort teams by ranking.
// Implement a function to find the best-performing team.
// Variation: Add goal statistics (goalsScored, goalsConceded).



let teams = [
  { name: "Lions", wins: 10, losses: 2, points: 30, goalsScored: 25, goalsConceded: 10 },
  { name: "Tigers", wins: 8, losses: 4, points: 24, goalsScored: 20, goalsConceded: 15 },
  { name: "Eagles", wins: 12, losses: 1, points: 36, goalsScored: 30, goalsConceded: 8 },
  { name: "Sharks", wins: 6, losses: 6, points: 18, goalsScored: 18, goalsConceded: 20 }
];

// Sort leaderboard
function sortLeaderboard(teams) {
  return teams.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }

    return (b.goalsScored - b.goalsConceded) -
           (a.goalsScored - a.goalsConceded);
  });
}

// Find best team
function findBestTeam(teams) {
  return teams.reduce((best, team) =>
    team.points > best.points ? team : best
  );
}

console.log("Leaderboard:", sortLeaderboard(teams));
console.log("Best Team:", findBestTeam(teams));



// Challenge 6 

// Warehouse Stock Management
// Create an array of inventory objects (itemName, category, stock).
// Implement a function to calculate total stock per category.
// Variation: Implement an alert system for low-stock items.


let inventory = [
  { itemName: "Laptop", category: "Electronics", stock: 15 },
  { itemName: "Phone", category: "Electronics", stock: 30 },
  { itemName: "Chair", category: "Furniture", stock: 8 },
  { itemName: "Table", category: "Furniture", stock: 5 },
  { itemName: "Notebook", category: "Stationery", stock: 50 }
];

// Total stock per category
function totalStockPerCategory(items) {
  return items.reduce((result, item) => {

    if (!result[item.category]) {
      result[item.category] = 0;
    }

    result[item.category] += item.stock;

    return result;

  }, {});
}

// Low stock alert
function lowStockAlert(items, threshold = 10) {
  return items.filter(item => item.stock < threshold);
}

// Show alerts
function showLowStockAlerts(items, threshold = 10) {
  items.forEach(item => {
    if (item.stock < threshold) {
      console.log(`⚠️ Low stock alert: ${item.itemName} (${item.stock} left)`);
    }
  });
}

console.log(totalStockPerCategory(inventory));
console.log(lowStockAlert(inventory));
showLowStockAlerts(inventory);
