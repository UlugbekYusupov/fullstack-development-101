import { v4 as uuidv4 } from 'uuid'
export const users = []
export const products = [
	{
		id: uuidv4(),
		name: 'Sample Product 1',
		description: 'This is a sample product.',
		price: 19.99,
		category: 'Sample Category',
		stock: 100,
		image_url: 'https://via.placeholder.com/150',
	},
	{
		id: uuidv4(),
		name: 'Sample Product 2',
		description: 'This is another sample product.',
		price: 29.99,
		category: 'Sample Category',
		stock: 50,
		image_url: 'https://via.placeholder.com/150',
	},
	{
		id: uuidv4(),
		name: 'Sample Product 3',
		description: 'This is yet another sample product.',
		price: 39.99,
		category: 'Sample Category',
		stock: 25,
		image_url: 'https://via.placeholder.com/150',
	},
]
export const cartItems = []
