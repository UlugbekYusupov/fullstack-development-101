// // Objects
// // Challenge 1
// const students = [
//     {name: "Alice", scores:[80, 90, 100]},
//     {name: "Bob", scores:[50, 60, 70]},
//     {name: "Charlie", scores:[30, 40, 50]}
// ];

// function calculateAverage(scores) {
//   const sum = scores.reduce((acc, score) => acc + score, 0);
//   return sum / scores.length;
// }

// const results = students.map(student => {
//   const avg = calculateAverage(student.scores);

//   return {
//     name: student.name,
//     average: avg,
//     passed: avg >= 50
//   };
// });

// console.log(results);

// // Challenge 2
// const cart = [
//   { id: 1, name: "Laptop", price: 800, quantity: 1 },
//   { id: 2, name: "Mouse", price: 20, quantity: 2 },
//   { id: 3, name: "Keyboard", price: 50, quantity: 1 }
// ];

// const totalPrice = cart.reduce((total, item) => {
//   return total + item.price * item.quantity;
// }, 0);

// console.log(totalPrice);

// const finalPrice = totalPrice > 100
//   ? totalPrice * 0.9
//   : totalPrice;

// console.log(finalPrice);

// const mostExpensive = cart.reduce((max, item) => {
//   return item.price > max.price ? item : max;
// });

// console.log(mostExpensive);

const cart = [
  { id: 1, name: "Laptop", price: 800, quantity: 1 },
  { id: 2, name: "Mouse", price: 20, quantity: 2 },
  { id: 3, name: "Keyboard", price: 50, quantity: 1 }
];

const totalPrice = cart.reduce((total, item) => {
  return total + item.price + item.quantity;
}, 0);

console.log(totalPrice);

const finalPrice = 

// // Challenge 3
// let products = [
//   { id: 1, name: "Phone", price: 500, stock: 10 },
//   { id: 2, name: "Tablet", price: 700, stock: 5 }
// ];

// function addProduct(product) {
//   products.push(product);
// }

// function deleteProduct(id) {
//   products = products.filter(product => product.id !== id);
// }

// function findProduct(name) {
//   return products.find(product =>
//     product.name.toLowerCase() === name.toLowerCase()
//   );
// }

// // Challenge 4
// const posts = [
//   {
//     author: "Ali",
//     likes: 120,
//     shares: 30,
//     comments: 4
//   },
//   {
//     author: "Vali",
//     likes: 200,
//     shares: 50,
//     comments: 9
//   }
// ];

// function mostLikedPost(posts) {
//   return posts.reduce((best, post) =>
//     post.likes > best.likes ? post : best
//   );
// }

// console.log(mostLikedPost(posts));

// function totalEngagement(posts) {
//   return posts.reduce((total, post) => {
//     return total + post.likes + post.shares + post.comments.length;
//   }, 0);
// }

// console.log(totalEngagement(posts));

// // Challenge 5
// const teams = [
//   { name: "Team A", wins: 10, losses: 3, points: 30 },
//   { name: "Team B", wins: 8, losses: 5, points: 24 },
//   { name: "Team C", wins: 12, losses: 1, points: 36 }
// ];

// function rankTeams(teams) {
//   return [...teams].sort((a, b) => b.points - a.points);
// }

// console.log(rankTeams(teams));

// function bestTeam(teams) {
//   return teams.reduce((best, team) =>
//     team.points > best.points ? team : best
//   );
// }

// // Challenge 6
// const inventory = [
//   { itemName: "Apple", category: "Fruit", stock: 50 },
//   { itemName: "Banana", category: "Fruit", stock: 10 },
//   { itemName: "Carrot", category: "Vegetable", stock: 30 }
// ];

// function totalStockByCategory(items) {
//   return items.reduce((acc, item) => {

//     if (!acc[item.category]) {
//       acc[item.category] = 0;
//     }

//     acc[item.category] += item.stock;

//     return acc;

//   }, {});
// }

// console.log(totalStockByCategory(inventory));

// function lowStock(items, threshold = 20) {
//   return items.filter(item => item.stock < threshold);
// }

// console.log(lowStock(inventory));