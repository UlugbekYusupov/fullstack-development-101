//CHALLANGE 1
// let students = [
//   { name: "Ali", scores: [70, 80, 90] },
//   { name: "Vali", scores: [40, 45, 50] },
//   { name: "Hasan", scores: [90, 95, 92] }
// ];

// for (let i = 0; i < students.length; i++) {
//   let sum = 0;

//   for (let j = 0; j < students[i].scores.length; j++) {
//     sum += students[i].scores[j];
//   }

//   let avg = sum / students[i].scores.length;

//   console.log(students[i].name + " average:", avg);

//   if (avg >= 50) {
//     console.log("Passed");
//   } else {
//     console.log("Failed");
//   }
// }

// let topStudent = students[0];
// let bestAvg = 0;

// for (let i = 0; i < students.length; i++) {
//   let sum = 0;

//   for (let j = 0; j < students[i].scores.length; j++) {
//     sum += students[i].scores[j];
//   }

//   let avg = sum / students[i].scores.length;

//   if (avg > bestAvg) {
//     bestAvg = avg;
//     topStudent = students[i];
//   }
// }

// console.log("Top student:", topStudent.name);




//CHALLANGE 2
// let cart = [
//   { id: 1, name: "Laptop", price: 800, quantity: 1 },
//   { id: 2, name: "Mouse", price: 20, quantity: 2 },
//   { id: 3, name: "Keyboard", price: 50, quantity: 1 }
// ];

// let total = 0;

// for (let i = 0; i < cart.length; i++) {
//   total += cart[i].price * cart[i].quantity;
// }

// if (total > 100) {
//   total = total * 0.9;
// }

// console.log("Total price:", total);


// let expensive = cart[0];

// for (let i = 1; i < cart.length; i++) {
//   if (cart[i].price > expensive.price) {
//     expensive = cart[i];
//   }
// }

// console.log("Most expensive:", expensive.name);




//CHALLANGE 3
// let products = [
//   { id: 1, name: "Phone", price: 500, stock: 10 },
//   { id: 2, name: "Tablet", price: 300, stock: 5 }
// ];

// function addProduct(product) {
//   products.push(product);
// }

// function updateStock(id, newStock) {
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].id === id) {
//       products[i].stock = newStock;
//     }
//   }
// }

// function deleteProduct(id) {
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].id === id) {
//       products.splice(i, 1);
//     }
//   }
// }

// function findProduct(name) {
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].name === name) {
//       return products[i];
//     }
//   }
// }

// addProduct({ id: 3, name: "Laptop", price: 900, stock: 4 });

// updateStock(1, 20);

// console.log(findProduct("Laptop"));

// deleteProduct(2);

// console.log(products);




//CHALLANGE 4
// let posts = [
//   { author: "Ali", likes: 50, comments: 10, shares: 5 },
//   { author: "Vali", likes: 120, comments: 20, shares: 10 },
//   { author: "Hasan", likes: 80, comments: 15, shares: 8 }
// ];

// let mostLiked = posts[0];

// for (let i = 1; i < posts.length; i++) {
//   if (posts[i].likes > mostLiked.likes) {
//     mostLiked = posts[i];
//   }
// }

// console.log("Most liked post:", mostLiked);

// let engagement = 0;

// for (let i = 0; i < posts.length; i++) {
//   engagement += posts[i].likes + posts[i].comments + posts[i].shares;
// }

// console.log("Total engagement:", engagement);




//CHALLANGE 5
// let teams = [
//   { name: "Team A", wins: 10, losses: 2, points: 30 },
//   { name: "Team B", wins: 8, losses: 4, points: 24 },
//   { name: "Team C", wins: 12, losses: 1, points: 36 }
// ];

// teams.sort(function(a, b) {
//   return b.points - a.points;
// });

// console.log(teams);

// let bestTeam = teams[0];

// console.log("Best team:", bestTeam.name);



//CHALLANGE 6
// let inventory = [
//   { itemName: "Apple", category: "Fruit", stock: 30 },
//   { itemName: "Banana", category: "Fruit", stock: 10 },
//   { itemName: "Carrot", category: "Vegetable", stock: 20 }
// ];

// let fruitStock = 0;
// let vegetableStock = 0;

// for (let i = 0; i < inventory.length; i++) {
//   if (inventory[i].category === "Fruit") {
//     fruitStock += inventory[i].stock;
//   } else if (inventory[i].category === "Vegetable") {
//     vegetableStock += inventory[i].stock;
//   }
// }

// console.log("Fruit stock:", fruitStock);
// console.log("Vegetable stock:", vegetableStock);

// for (let i = 0; i < inventory.length; i++) {
//   if (inventory[i].stock < 15) {
//     console.log("Low stock:", inventory[i].itemName);
//   }
// }