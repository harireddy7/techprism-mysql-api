import express from 'express';
import {
	getCartByUserId,
	upsertCart,
	deleteFromCart,
} from '../controllers/cart';

const router = express.Router();

// ROUTES
router
	.route('/:userId')
	.get(getCartByUserId)
	.post(upsertCart)
	.put(upsertCart)
	.delete(deleteFromCart);

export default router;
