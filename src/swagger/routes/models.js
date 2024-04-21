// MODELS

/**
 * @openapi
 * definitions:
 *  Product:
 *    type: object
 *    properties:
 *       name:
 *        type: string
 *        example: Oneplus 11 pro
 *       brand:
 *        type: string
 *        example: oneplus
 *       category:
 *        type: string
 *        example: mobile
 *       description:
 *        type: string
 *        example: performante oneplus 11 pro mobile phone
 *       imageUrl:
 *        type: string
 *       price:
 *        type: number
 *        example: 49999
 *       rating:
 *        type: number
 *        example: 4.1
 *       stock:
 *        type: number
 *        example: 25
 *       createdAt:
 *        type: string
 *        example: 2024-04-14T14:22:47.000Z
 */

/**
 * @openapi
 * definitions:
 *  Review:
 *    type: object
 *    properties:
 *      user_id:
 *        type: number
 *        example: 2
 *      product_id:
 *        type: number
 *        example: 5
 *      username:
 *        type: string
 *        example: barryallen
 *      comment:
 *        type: string
 *        example: it's a nice product!
 *      rating:
 *        type: number
 *        example: 4.5
 */

/**
 * @openapi
 * definitions:
 *  CartItem:
 *    type: object
 *    properties:
 *      user_id:
 *        type: number
 *        example: 2
 *      product_id:
 *        type: number
 *        example: 12
 *      name:
 *        type: string
 *        example: barryallen
 *      price:
 *        type: number
 *        example: 2999
 *      quantity:
 *        type: number
 *        example: 2
 */

// REQUEST BODY

/**
 * @openapi
 * definitions:
 *  UpsertReview:
 *    type: object
 *    properties:
 *      comment:
 *        type: string
 *        example: cool product!
 *      rating:
 *        type: number
 *        example: 0.5
 */

/**
 * @openapi
 * definitions:
 *  UpsertCart:
 *    type: object
 *    properties:
 *      quantity:
 *        type: number
 *        example: 2
 */

/**
 * @openapi
 * definitions:
 *  ApiResponse:
 *    type: object
 *    properties:
 *      code:
 *        type: number
 *        example: 200
 *      data:
 *        type: object
 */

/**
 * @openapi
 * definitions:
 *  ErrorResponse:
 *    type: object
 *    properties:
 *      code:
 *        type: number
 *        example: 500
 *      message:
 *        type: string
 *        example: Internal server error
 */
