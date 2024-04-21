/**
 * @openapi
 * /products:
 *  get:
 *    tags:
 *      - products
 *    summary: Get all the products
 *    description: Get all the products with product details
 *    operationId: getProducts
 *    responses:
 *      200:
 *        description: List of products
 *        content:
 *          'application/json':
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: number
 *                  example: 200
 *                data:
 *                  type: array
 *                  items:
 *                    $ref: '#/definitions/Product'
 *      500:
 *        description: Internal server error
 *        content:
 *           'application/json':
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 * /products/{productId}:
 *  get:
 *    tags:
 *      - products
 *    summary: Get product details
 *    description: Get product details by product id
 *    operationId: getProductsById
 *    parameters:
 *      - name: productId
 *        in: path
 *        description: product id
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      200:
 *        description: List of products
 *        content:
 *          'application/json':
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: number
 *                  example: 200
 *                data:
 *                  $ref: '#/definitions/Product'
 *      500:
 *        description: Internal server error
 *        content:
 *           'application/json':
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 */
