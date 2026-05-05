const carts = [
	{
		userId: 'user123',
		items: [
			{ productId: 'p1', quantity: 2, price: 100 },
			{ productId: 'p2', quantity: 1, price: 50 },
		],
	},
]

// Birinchi foydalanuvchining birinchi mahsuloti nomini olish
console.log(carts[0].items[0].productId) // Natija: "p1"

// Savatchadagi umumiy summani hisoblash (Best practice)
const total = carts[0].items.reduce(
	(sum, item) => sum + item.price * item.quantity,
	0,
)
console.log(`Umumiy summa: ${total}`) // Natija: 250
