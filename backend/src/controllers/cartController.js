import { v4 as uuidv4 } from 'uuid'
import { cartItems, products } from '../data/db.js'

export function viewCart(req, res) {
	const userId = req.headers['x-user-id']
	const userCart = cartItems.filter(item => item.user.id == userId)
	const result = userCart.map(item => {
		const product = products.find(p => p.id == item.product_id)
		return {
			...item,
			product,
		}
	})
	return res.status(200).json(result)
}

export function addToCart(req, res) {
	const userId = req.headers['x-user-id']
	const { productId, quantity } = req.body
	const product = products.find(p => p.id == item.product_id)

	if (!product) {
		return res.status(404).json({ message: 'Product not found' })
	}

	if (product.stock < quantity) {
		return res.status(400).json({ message: 'Not enough stock' })
	}

	const existingCart = cartItems.find(
		item => item.user.id == user.Id && item.product_id == productId,
	)

	if (existingCart) {
		existingCart.quantity += quantity
	} else {
		cartItems.push({
			id: uuidv4(),
			user_id: userId,
			products: [{ product_id: productId, quantity }],
		})
	}
	product.stock -= quantity
	return res.status(200).json({ message: 'Product added to cart' })
}

export function updateCartItem(req, res) {}
export function removeCArtItem(req, res) {}
