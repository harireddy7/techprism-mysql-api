import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import productRouter from '../routes/products';
import cartRouter from '../routes/cart';
import reviewsRouter from '../routes/reviews';
import openApiDefinition from '../swagger/openApiDefinition';

const apiRouter = express.Router();

apiRouter.use((req, _, next) => {
	console.log(`${req.method.toUpperCase()}:: ${req.originalUrl}`);
	next();
});

// SWAGGER DOCS
const swaggerSpec = swaggerJSDoc({
	definition: openApiDefinition,
	apis: ['src/swagger/routes/*.js'],
});

apiRouter.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// ROUTES
apiRouter.use('/products', productRouter);
apiRouter.use('/cart', cartRouter);
apiRouter.use('/reviews', reviewsRouter);

export default apiRouter;
