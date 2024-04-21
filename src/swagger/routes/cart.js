/**
 * @openapi
 * /cart/{userId}:
 *  get:
 *    tags:
 *      - cart
 *    description: Get cart items of an user
 *    summary: Get cart items by user id
 *    operationId: getCartByUserId
 *    parameters:
 *      - name: userId
 *        in: path
 *        description: user id
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      200:
 *        description: List of cart items
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
 *                    $ref: '#/definitions/CartItem'
 *      500:
 *        description: Internal server error
 *        content:
 *           'application/json':
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 * /cart/{userId}/{productId}:
 *  post:
 *    tags:
 *      - cart
 *    description: Add a product to user's cart
 *    summary: Add product to cart by user id
 *    operationId: addToCart
 *    parameters:
 *      - name: userId
 *        in: path
 *        description: user id
 *        required: true
 *        schema:
 *          type: number
 *      - name: productId
 *        in: path
 *        description: product id
 *        required: true
 *        schema:
 *          type: number
 *    requestBody:
 *      required: true
 *      description: create a new review for a product
 *      content:
 *        'application/json':
 *          schema:
 *            $ref: '#/definitions/UpsertCart'
 *    responses:
 *      201:
 *        content:
 *          'application/json':
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: number
 *                  example: 201
 *                data:
 *                  $ref: '#/definitions/CartItem'
 *      500:
 *        description: Internal server error
 *        content:
 *           'application/json':
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 *  put:
 *    tags:
 *      - cart
 *    description: Update quantity of product in user's cart
 *    summary: Update product quantity in user's cart
 *    operationId: updateCart
 *    parameters:
 *      - name: userId
 *        in: path
 *        description: user id
 *        required: true
 *        schema:
 *          type: number
 *      - name: productId
 *        in: path
 *        description: product id
 *        required: true
 *        schema:
 *          type: number
 *    requestBody:
 *      required: true
 *      description: create a new review for a product
 *      content:
 *        'application/json':
 *          schema:
 *            $ref: '#/definitions/UpsertCart'
 *    responses:
 *      201:
 *        content:
 *          'application/json':
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: number
 *                  example: 201
 *                data:
 *                  $ref: '#/definitions/CartItem'
 *      500:
 *        description: Internal server error
 *        content:
 *           'application/json':
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 *  delete:
 *    tags:
 *      - cart
 *    description: Delete product from user's cart
 *    summary: Delete a product from user's cart
 *    operationId: deleteFromCart
 *    parameters:
 *      - name: userId
 *        in: path
 *        description: user id
 *        required: true
 *        schema:
 *          type: number
 *      - name: productId
 *        in: path
 *        description: product id
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      204:
 *        content:
 *          'application/json':
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: number
 *                  example: 204
 *                data:
 *                  type: string
 *                  example: deleted
 *      500:
 *        description: Internal server error
 *        content:
 *           'application/json':
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 */
