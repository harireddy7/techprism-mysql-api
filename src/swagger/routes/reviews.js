/**
 * @openapi
 * /reviews/{productId}:
 *  get:
 *    tags:
 *      - reviews
 *    summary: Get product reviews
 *    description: Get reviews by product id
 *    operationId: getReviewsByProductId
 *    parameters:
 *      - name: productId
 *        in: path
 *        description: product id
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      200:
 *        description: List of reviews
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
 *                    $ref: '#/definitions/Review'
 *      500:
 *        description: Internal server error
 *        content:
 *           'application/json':
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 * /reviews/{productId}/{userId}:
 *  post:
 *    tags:
 *      - reviews
 *    summary: Create a product review
 *    description: Create a product review
 *    operationId: createReview
 *    parameters:
 *      - name: productId
 *        in: path
 *        description: product id
 *        required: true
 *        schema:
 *          type: number
 *      - name: userId
 *        in: path
 *        description: user id
 *        required: true
 *        schema:
 *          type: number
 *    requestBody:
 *      required: true
 *      description: create a new review for a product
 *      content:
 *        'application/json':
 *          schema:
 *            $ref: '#/definitions/UpsertReview'
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
 *                  $ref: '#/definitions/Review'
 *      500:
 *        description: Internal server error
 *        content:
 *           'application/json':
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 *  put:
 *    tags:
 *      - reviews
 *    summary: Update existing product review
 *    description: Update existing review for a product
 *    operationId: updateReview
 *    parameters:
 *      - name: productId
 *        in: path
 *        description: product id
 *        required: true
 *        schema:
 *          type: number
 *      - name: userId
 *        in: path
 *        description: user id
 *        required: true
 *        schema:
 *          type: number
 *    requestBody:
 *      required: true
 *      description: update existing review for a product
 *      content:
 *        'application/json':
 *          schema:
 *            $ref: '#/definitions/UpsertReview'
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
 *                  $ref: '#/definitions/Review'
 *      500:
 *        description: Internal server error
 *        content:
 *           'application/json':
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 *  delete:
 *    tags:
 *      - reviews
 *    summary: Delete a product review
 *    description: Delete an existing review for a product
 *    operationId: deleteReview
 *    parameters:
 *      - name: productId
 *        in: path
 *        description: product id
 *        required: true
 *        schema:
 *          type: number
 *      - name: userId
 *        in: path
 *        description: user id
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
