# Mysql Express API

## Tables


1. users

2. user_addresses

3. cart_items

4. products

5. reviews

6. orders

7. order_items

## Schemas

### user

```
name      string
email     string
password  string
role      string
```

### address

```
userId      string
type        string
address     string
city        string
state       string
postalCode  string
country     string
```

### cartItem

```
userId    string
productId string
quantity  string
```

### product

```
name        string
imageUrl    string
brand       string
category    string
description string
price       number
rating      number
stock       number
```

### review

```
userId    string
productId string
comment   string
rating    number
```

### order

```
userId          string
shippingAddres  string
totalPrice      number
paymentStatus   boolean
paymentDate     date
deliveryStatus  boolean
deliveryDate    date
paymentId       string
```

### orderItem

```
orderId     string
productId   string
quantity    number
price       number
```

### payment

```
paymentId       string
orderId         string
paymentOrderId  string
signature       string
```

## APIs

### PRODUCT

1. Get all products ✅
   
2. Get product details by Id ✅

### CART

1. Get cart by user ✅
   
2. Add or Update product to cart ✅
   
3. Delete product from cart ✅
   
4. checkout from cart
   
5. Save order and payment

### REVIEW

1. Get reviews by product ✅
   
2. Add or Update review ✅
   
3. Delete review ✅

### ORDERS

1. Show order by user(sorted desc)

### AUTH

1. Signup
   
2. Signin
   
3. Signout

### PROFILE

1. Update personal info
   
2. update password
   
3. update address

## Process


### seeder.js
create db, table with dummy data

### APIs
create APIs that select, update, delete data from tables in db

