import { v4 as uuidv4 } from 'uuid'
import { products } from '../data/db.js'

export function getProducts(req, res) {
	try {
		if (products.length === 0) {
			return res.status(404).json({ error: 'No products found!' })
		}
		return res
			.status(200)
			.json({ message: 'Products retrieved successfully!', products })
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}
export function getProductById(req, res) {
	try {
		const product = products.find(p => p.id === req.params.id)
		if (!product) {
			return res.status(404).json({ error: error.message })
		}
		return res
			.status(200)
			.json({ message: 'Product retrieved successfully!', product })
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}
export function createProduct(req, res) {
	try {
		const { name, description, price, stock, category, image_url } = req.body
		if (!name || !description || price == 0) {
			return res.status(400).json({ error: 'All fields are required!' })
		}
		const newProduct = {
			id: uuidv4(),
			name,
			description,
			price,
			stock,
			category,
			image_url,
		}
		products.push(newProduct)
		return res
			.status(201)
			.json({ message: 'Product created successfully!', product: newProduct })
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}
export function updateProduct(req, res) {
	try {
		const product = products.find(p => p.id === req.params.id)
		if (!product) {
			return res.status(404).json({ error: 'Product not found!' })
		}
		const { name, description, price, stock, category, image_url } = req.body
		if (!name || !description || price == 0) {
			return res.status(400).json({ error: 'All fields are required!' })
		}
		product.name = name ?? product.name
		product.description = description ?? product.description
		product.price = price ?? product.price
		product.stock = stock ?? product.stock
		product.category = category ?? product.category
		product.image_url = image_url ?? product.image_url
		return res
			.status(200)
			.json({ message: 'Product updated successfully!', product })
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}
export function deleteProduct(req, res) {
	try {
		const productIndex = products.findIndex(p => p.id === req.params.id)
		if (productIndex === -1 && productIndex === undefined) {
			return res.status(404).json({ error: 'Product not found!' })
		}
		const deletedProduct = products.splice(productIndex, 1)[0]
		return res.status(200).json({
			message: 'Product deleted successfully!',
			product: deletedProduct,
		})
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}
