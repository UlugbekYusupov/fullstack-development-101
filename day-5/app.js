// Challenge 1
const students = [
  { name: "Alice", scores: [85, 90, 78] },
  { name: "Bob", scores: [45, 52, 48] },
  { name: "Charlie", scores: [92, 88, 95] },
  { name: "Diana", scores: [60, 65, 70] },
];


function getAverage(scores) {
  let total = 0;
  let count = scores.length;
  
  for (let score of scores) {
    total = total + score;
  }
  
  let average = total / count;
  return average;
}


console.log("Student Results:");

for (let student of students) {
  let avg = getAverage(student.scores);
  avg = Math.round(avg * 100) / 100;
  
  let status;
  if (avg >= 50) {
    status = "Passed";
  } else {
    status = "Failed";
  }
  
  console.log(student.name + ": " + avg + " - " + status);
}




let topStudent = students[0];
let topAvg = getAverage(topStudent.scores);

for (let i = 1; i < students.length; i++) {
  let currentStudent = students[i];
  let currentAvg = getAverage(currentStudent.scores);
  
  if (currentAvg > topAvg) {
    topStudent = currentStudent;
    topAvg = currentAvg;
  }
}

topAvg = Math.round(topAvg * 100) / 100;
console.log("\nTop Performer: " + topStudent.name + " (" + topAvg + ")");






// Challenge 2

const cart = [
  {id:1, name:"laptop", price: 900, quantity: 1 },
  {id:2, name:"Mouse", price: 50, quantity: 2},
  {id:3, name:"laptop", price: 100, quantity: 1},
];


totalPrice = 0;

for (let item of cart) {
  totalPrice = totalPrice + (item.price * item.quantity);
}

console.log("\nTotal Price: $" + totalPrice);


if (totalPrice > 100) {
  totalPrice = totalPrice * 0.9;
}
console.log("Total Price after discount: $" + totalPrice);


mostExpensiveItem = cart[0];

for (let item of cart) {  
  if (item.price > mostExpensiveItem.price) {
    mostExpensiveItem = item;
  }
}
console.log("Most Expensive Item: " + mostExpensiveItem.name + " ($" + mostExpensiveItem.price + ")");

items = [];
for (let item of cart) {
  console.log(item.name,item.price);
}



// Challa`nge 3

// Product Inventory Management

const products = [
  { id: 1, name: "Laptop", price: 900, quantity: 10 },
  { id: 2, name: "Mouse", price: 50, quantity: 50 },
  { id: 3, name: "Keyboard", price: 80, quantity: 30 },
];

function addProduct(newProduct) {
  products.push(newProduct);
}
console.log("Products before adding new product:");
for (let product of products) {
  console.log(product.name, product.price, product.quantity);
}

addProduct({ id: 4, name: "Monitor", price: 200, quantity: 20 });
console.log("\nProducts after adding new product:");
for (let product of products) {
  console.log(product.name, product.price, product.quantity);
}

function updateStock(productId, newQuantity) {
  for (let product of products) {
    if (product.id === productId) {
      product.quantity = newQuantity;
    }
  }
}

console.log("\nProducts after updating stock:");
updateStock(2, 40);
for (let product of cart) {
  console.log(product.name, product.price, product.quantity);
}



function deleteProduct(productId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      delete products[i];
      break;
    }
  }
}

deleteProduct(3);
// console.log("\nProducts after deleting a product:");
// for (let product of products) {
//   console.log(product.name, product.price, product.quantity);
// }


function findProduct(productName) {
  for (let product of products) {
    if (product.name === productName) {
      return product;
    }
  }
  return null;
}

findProduct("Laptop");



// Challenge 4
// Social Media Post Analytics
const posts = [
  { author: "Alice", content: "Hello World!", likes: 150, comments: 20, shares: 10 },
  { author: "Bob", content: "JavaScript is awesome!", likes: 200, comments: 30, shares: 5 },
  { author: "Charlie", content: "I love coding!", likes: 180, comments: 25, shares: 8 },
];

function mostLikedPost() {
  let topPost = posts[0];
  for (let post of posts) {
    if (post.likes > topPost.likes) {
      topPost = post;
    }
  }
  return topPost;
}

console.log("\nMost Liked Post:");
let topPost = mostLikedPost();
console.log("Author: " + topPost.author);
console.log("Content: " + topPost.content);
console.log("Likes: " + topPost.likes);


function totalEngagement(post) {
  return post.likes + post.comments + post.shares;
}

console.log("\nTotal Engagement for each post:");
for (let post of posts) {
  console.log("Author: " + post.author + ", Total Engagement: " + totalEngagement(post));
}

// Challenge 5
// Sport Tournament Leaderboard
const teams = [
  { name: "Team A", wins: 10, losses: 5, draws: 2 , points: 16},
  { name: "Team B", wins: 12, losses: 3, draws: 1 , points: 18},
  { name: "Team C", wins: 8, losses: 7, draws: 3 , points: 38},
];


function SortTeamsByRangking(teams) {
  teams.sort((a, b) => b.points - a.points);
}

console.log("\nLeaderboard:");
SortTeamsByRangking(teams);
console.log("ID\tTeam\tWins\tLosses\tDraws\tPoints");
for (let i = 0; i < teams.length; i++) {
  let team = teams[i];
  console.log(i+1,team.name ,"", team.wins ,"     ",team.losses ,"     ",team.draws ,"     ", team.points);
}

function BestPerformingTeam(teams) {
  let bestTeam = teams[0];  
  for (let team of teams) {
    if (team.points > bestTeam.points) {
      bestTeam = team;
    }
  }
  return bestTeam;
}

console.log("\nBest Performing Team:");
let bestTeam = BestPerformingTeam(teams);
console.log("Team: " + bestTeam.name);
console.log("Points: " + bestTeam.points);


// Challenge 6
// Warehouse Stock Management
const inventory = [
  { itemName: "Laptop", category: "Electronics", stock:50},
  { itemName: "Chair", category: "Furniture", stock: 100 },
  { itemName: "Table", category: "Furniture", stock: 75 },
  { itemName: "Headphones", category: "Electronics", stock: 200 },
];


function totalStockByCategory(category) {
  let totalStock = 0;    
  for (let item of inventory) {
    if (item.category === category) {
      totalStock = totalStock + item.stock;
    }
  }
  return totalStock;
} 
console.log("\nTotal Stock in Electronics: " + totalStockByCategory("Electronics"));
console.log("Total Stock in Furniture: " + totalStockByCategory("Furniture"));

