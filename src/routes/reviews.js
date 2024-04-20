import express from 'express';
import {
	getReviewsByProduct,
	upsertReview,
	deleteReview,
} from '../controllers/reviews';

const router = express.Router();

// ROUTES
router
	.route('/:productId')
	.get(getReviewsByProduct)
	.post(upsertReview)
	.put(upsertReview)
	.delete(deleteReview);

export default router;
