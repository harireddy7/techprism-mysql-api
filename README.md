# techprism-mysql-api

Rest API layer with express and mysql db

## Libraries

1. express
2. mysql2
3. swagger

## APIs


### Products

```
GET /api/v1/products

GET /api/v1/products/:productId
```

### Reviews

```
GET /api/v1/reviews/:productId/:userId

POST /api/v1/products/:productId/:userId

PUT /api/v1/products/:productId/:userId

DELETE /api/v1/products/:productId/:userId
```

### Cart

```
GET /api/v1/cart/:userId

POST /api/v1/products/:userId/:productId

PUT /api/v1/products/:userId/:productId

DELETE /api/v1/products/:userId/:productId
```

# Setup

```sh
git clone https://github.com/harireddy7/techprism-mysql-api.git

yarn
```

Create .env at the root and add the following content

```.env
DB_HOST=localhost
DB_USER=
DB_PASSWORD=
DB_DB_NAME=
PORT=5000
API_VERSION=v1
```
Spin up the dev server

```sh
yarn dev
```

## Swagger Docs

Swagger docs are available at [localhost:5000/api/v1/docs](http://localhost:5000/api/v1/docs)
