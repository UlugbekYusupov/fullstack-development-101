import { v4 as uuidv4 } from 'uuid'
import { cartItems, products } from '../data/db.js'

export function viewCart(req, res) {
	const userId = req.headers['x-user-id']
	const userCart = cartItems.find(item => item.user.id == userId)
	if (!userCart) {
		newCart = {
			id: uuidv4(),
			user_id: userId,
			products: [],
			quantity: 0,
		}
		cartItems.push(newCart)
		return res.status(200).json(newCart)
	}
	const cartWithProducts = {
		...userCart,
		products: userCart.products.map(item => {
			const product = products.find(p => p.id == item.product_id)
			return {
				name: product.name,
				price: product.price,
				image_url: product.image_url,
				quantity: item.quantity,
			}
		}),
	}
	return res.status(200).json(cartWithProducts)
}

export function addToCart(req, res) {
	const userId = req.headers['x-user-id']
	const { productId, quantity } = req.body
	const product = products.find(p => p.id == productId)

	if (!product) {
		return res.status(404).json({ message: 'Product not found' })
	}

	let userCart = cartItems.find(item => item.user_id == userId)
	if (!userCart) {
		userCart = {
			id: uuidv4(),
			user_id: userId,
			products: [],
			quantity: 0,
		}
		cartItems.push(userCart)
	}
	const existingProducts = userCart.products.find(
		p => p.product_id == productId,
	)

	if (existingProducts) {
		existingProducts.quantity += 1
	} else {
		userCart.products.push({
			id: productId,
			quantity: 1,
		})
	}
	userCart.quantity = userCart.products.reduce(
		(total, item) => total + item.quantity,
		0,
	)
	return res
		.status(200)
		.json({ message: 'Product added to cart successfully!' })
}

export function updateCartItem(req, res) {
	const userId = req.headers['x-user-id']
	const productId = req.params.productId
	const { quantity } = req.body

	if (quantity < 1 || !quantity) {
		return res.status(400).json({ message: 'Invalid quantity' })
	}
	const product = products.find(p => p.id == productId)
	if (!product) {
		return res.status(404).json({ message: 'Product not found' })
	}

	if (quantity > product.stock) {
		return res.status(400).json({ message: 'Not enough stock' })
	}

	const userCart = cartItems.find(item => item.user_id == userId)
	if (!userCart) {
		return res.status(404).json({ message: 'Cart not found' })
	}

	const cartProduct = userCart.products.find(p => p.product_id == productId)
	if (!cartProduct) {
		return res.status(404).json({ message: 'Product not in cart' })
	}
	cartProduct.quantity = quantity

	userCart.quantity = userCart.products.reduce(
		(total, item) => total + item.quantity,
		0,
	)
	return res.status(200).json({ message: 'Cart item updated successfully!' })
}
export function removeCartItem(req, res) {
	const userId = req.headers['x-user-id']
	const productId = req.params.productId
	if (!cartItems.find(item => item.user_id == userId)) {
		return res.status(404).json({ message: 'Cart not found' })
	}
	const cartProduct = userCart.products.find(p => p.product_id == productId)
	if (!cartProduct) {
		return res.status(404).json({ message: 'Product not found in cart' })
	}
	userCart.products.splice(cartProductIndex, 1)
	userCart.quantity = userCart.products.reduce(
		(total, item) => total + item.quantity,
		0,
	)
	return res
		.status(200)
		.json({ message: 'Product removed from cart successfully!' })
}
