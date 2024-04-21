import express from 'express';
import {
	getReviewsByProductId,
	createReview,
	updateReview,
	deleteReview,
} from '../controllers/reviews';

const router = express.Router();

// ROUTES
router
	.route('/:productId/:userId')
	.post(createReview)
	.put(updateReview)
	.delete(deleteReview);

router.route('/:productId').get(getReviewsByProductId);

export default router;
