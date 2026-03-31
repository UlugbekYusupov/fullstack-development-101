const cart = [
  {id : 1, name: "Laptop", price: 100, quantity: 10},
  {id : 2, name: "Mouse", price: 50, quantity: 20},
  {id : 3, name: "Keyboard", price: 80, quantity: 15},
]

totalPrice = 0;
for (let product in cart) {
  totalPrice += product.price * product.quantity;
}

console.log("Total price of products in cart:", getTotalPrice(cart));

if (totalPrice > 1000) {
  totalPrice = totalPrice * 0.9;
}
console.log("Total price after discount:", totalPrice);

mostExpensiveItem = cart[0];
for (let product in cart){
  if (product.price > mostExpensiveItem.price){
    mostExpensiveItem = product;
  }

}

console.log("Most expensive item:", mostExpensiveItem.name, "($"+mostExpensiveItem.price+")");  