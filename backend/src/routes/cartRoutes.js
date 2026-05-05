import express from 'express'
import {
	addToCart,
	removeCArtItem,
	updateCartItem,
	viewCart,
} from '../controllers/cartController.js'

const router = express.Router()

router.get('/', viewCart)
router.post('/items', addToCart)
router.put('/items/:id', updateCartItem)
router.delete('/items/:id', removeCArtItem)

export default router
