import express from 'express';
import { getProducts, getProductById } from '../controllers/products';

const router = express.Router();

// ROUTES
router.route('/').get(getProducts);
router.route('/:productId').get(getProductById);

export default router;
