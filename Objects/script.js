// Challenge 1
// const students = [
//     { nam: "Alice", scores: [80,90,100] },
//     { nam: "Bob", scores: [50,60,70] },
//     { nam: "Charilie", scores: [30,40,20] }
// ]

// function averageScore (obj) {
//     for (let i = 0; i < obj.length; i++) {
//         let summ = 0;
//         for (let j = 0; j < obj[i].scores.length; ++j) {
//             summ += obj[i].scores[j]
//         }
//         let avgs = summ/obj[i].scores.length
//         obj[i].average = avgs;
//     }
//     for (let i =0; i < obj.length; i++) {
//         if (obj[i].average >= 50) {
//             console.log(`${obj[i].nam} : ${obj[i].average} => Passed`)
//         }
//         else {
//             console.log(`${obj[i].nam} : ${obj[i].average} => Failed`)
//         }
//     }
// }

// averageScore(students);


// Challenge 2
// const cart = [
//     { id: 1, name: "Laptop", price: 900, quantity: 1 },
//     { id: 2, name: "Mouse", price: 50, quantity: 2 },
//     { id: 3, name: "Keyboard", price: 100, quantity: 1 }
// ]

// let total = 0;
// for (let i = 0; i < cart.length; i++) {
//     total += cart[i].price;
// }
// let withDiscount = total;
// if (total > 100) {
//     withDiscount = total * 0.9;
// }
// const maxPriceProduct = cart.reduce((prev, current) => {
//     return (prev.price > current.price) ? prev : current;
// });

// console.log(`Your total price will be : ${total}`)
// console.log(`And with 10% discount off it will be : ${withDiscount}`)
// console.log(`Most expensice item: ${maxPriceProduct.name}`)


// Challenge 3

// const products = [
//   { id: 1, name: "Laptop", price: 900, quantity: 10 },
//   { id: 2, name: "Mouse", price: 50, quantity: 50 },
//   { id: 3, name: "Keyboard", price: 80, quantity: 30 },
// ];

// function addProduct(newProduct) {
//   products.push(newProduct);
// }
// console.log("Products before adding new product:");
// for (let product of products) {
//   console.log(product.name, product.price, product.quantity);
// }

// addProduct({ id: 4, name: "Monitor", price: 200, quantity: 20 });
// console.log("\nProducts after adding new product:");
// for (let product of products) {
//   console.log(product.name, product.price, product.quantity);
// }

// function updateStock(productId, newQuantity) {
//   for (let product of products) {
//     if (product.id === productId) {
//       product.quantity = newQuantity;
//     }
//   }
// }

// console.log("\nProducts after updating stock:");
// updateStock(2, 40);
// for (let product of cart) {
//   console.log(product.name, product.price, product.quantity);
// }


// function deleteProduct(productId) {
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].id === productId) {
//       delete products[i];
//       break;
//     }
//   }
// }

// deleteProduct(3);
// console.log("\nProducts after deleting a product:");
// for (let product of products) {
//   console.log(product.name, product.price, product.quantity);
// }


// function findProduct(productName) {
//   for (let product of products) {
//     if (product.name === productName) {
//       return product;
//     }
//   }
//   return null;
// }

// findProduct("Laptop");



// Challenge 4

// const posts = [
//   { author: "Alice", content: "Hello World!", likes: 150, comments: 20, shares: 10 },
//   { author: "Bob", content: "JavaScript is awesome!", likes: 200, comments: 30, shares: 5 },
//   { author: "Charlie", content: "I love coding!", likes: 180, comments: 25, shares: 8 },
// ];

// function mostLikedPost() {
//   let topPost = posts[0];
//   for (let post of posts) {
//     if (post.likes > topPost.likes) {
//       topPost = post;
//     }
//   }
//   return topPost;
// }

// console.log("\nMost Liked Post:");
// let topPost = mostLikedPost();
// console.log("Author: " + topPost.author);
// console.log("Content: " + topPost.content);
// console.log("Likes: " + topPost.likes);


// function totalEngagement(post) {
//   return post.likes + post.comments + post.shares;
// }

// console.log("\nTotal Engagement for each post:");
// for (let post of posts) {
//   console.log("Author: " + post.author + ", Total Engagement: " + totalEngagement(post));
// }

// Challenge 5

// const teams = [
//   { name: "Team A", wins: 10, losses: 5, draws: 2 , points: 16},
//   { name: "Team B", wins: 12, losses: 3, draws: 1 , points: 18},
//   { name: "Team C", wins: 8, losses: 7, draws: 3 , points: 38},
// ];


// function SortTeamsByRangking(teams) {
//   teams.sort((a, b) => b.points - a.points);
// }

// console.log("\nLeaderboard:");
// SortTeamsByRangking(teams);
// console.log("ID\tTeam\tWins\tLosses\tDraws\tPoints");
// for (let i = 0; i < teams.length; i++) {
//   let team = teams[i];
//   console.log(i+1,team.name ,"", team.wins ,"     ",team.losses ,"     ",team.draws ,"     ", team.points);
// }

// function BestPerformingTeam(teams) {
//   let bestTeam = teams[0];  
//   for (let team of teams) {
//     if (team.points > bestTeam.points) {
//       bestTeam = team;
//     }
//   }
//   return bestTeam;
// }

// console.log("\nBest Performing Team:");
// let bestTeam = BestPerformingTeam(teams);
// console.log("Team: " + bestTeam.name);
// console.log("Points: " + bestTeam.points);


// Challenge 6

// const inventory = [
//   { itemName: "Laptop", category: "Electronics", stock:50},
//   { itemName: "Chair", category: "Furniture", stock: 100 },
//   { itemName: "Table", category: "Furniture", stock: 75 },
//   { itemName: "Headphones", category: "Electronics", stock: 200 },
// ];


// function totalStockByCategory(category) {
//   let totalStock = 0;    
//   for (let item of inventory) {
//     if (item.category === category) {
//       totalStock = totalStock + item.stock;
//     }
//   }
//   return totalStock;
// } 
// console.log("\nTotal Stock in Electronics: " + totalStockByCategory("Electronics"));
// console.log("Total Stock in Furniture: " + totalStockByCategory("Furniture"));