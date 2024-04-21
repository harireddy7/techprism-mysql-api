import express from 'express';
import {
	getCartByUserId,
	addToCart,
	updateCart,
	deleteFromCart,
} from '../controllers/cart';

const router = express.Router();

// ROUTES
router.route('/:userId').get(getCartByUserId);

router
	.route('/:userId/:productId')
	.post(addToCart)
	.put(updateCart)
	.delete(deleteFromCart);

export default router;
