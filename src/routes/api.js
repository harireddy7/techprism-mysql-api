import express from 'express';
import productRouter from '../routes/products';
import cartRouter from '../routes/cart';
import reviewsRouter from '../routes/reviews';

const apiRouter = express.Router();

apiRouter.use((req, _, next) => {
	console.log(`${req.method.toUpperCase()}:: ${req.originalUrl}`);
	next();
});

// ROUTES
apiRouter.use('/products', productRouter);
apiRouter.use('/cart', cartRouter);
apiRouter.use('/reviews', reviewsRouter);

export default apiRouter;
