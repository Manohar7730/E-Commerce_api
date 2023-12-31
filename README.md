
# [E-Commerce API Project](https://e-commerce-oy6q.onrender.com/) <-- to view all products in JSON format

A simple CRUD API for products built with Node.js, Express and MongoDB.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Documentation](#api-doc)
- [Contributing](#contributing)
- [Author](#author)
- [Feedback](#feedback)

## Features
<a name="features"></a>

- Create a product
- Get all products
- Get single product
- Update product name and quantity
- Delete product

## Technologies Used
<a name="technologies-used"></a>

- Node.js
- Express.js
- MongoDB (Mongoose)
- POSTMAN

## Installation
<a name="installation"></a>

1. Clone the repository:

```bash
   git clone https://github.com/your-username/e-commerce_api.git
   cd e-commerce_api
  ```

2. Install dependencies:
    
```bash
    npm install
```

3. Set up environment variables:

Create a .env file in the root directory and add the following variables:

```bash
    MONGODB_ATLAS_URI=your_mongodb_uri
```

Replace your_mongodb_uri with your MongoDB Atlas connection string.

4. Run the application:

    ```bash
    npm start
    ```
## Project Struture
<a name="project-structure"></a>

```bash
e-commerce_api/
|-- config/
|   |-- mongoose.js
|-- controllers/
|   |-- productController.js
|-- models/
|   |-- product.js
|-- routers/
|   |-- product.js
|-- .env
|-- .gitignore
|-- index.js
|-- package.json
|-- README.md
```
## Usage
<a name="usage"></a>

1. Get all products:

- Endpoint: GET /
- Description: Get a list of all products.
- Response:
```bash
    {
        "data": {
            "products": [...]
        },
        "message": "All products"
    }
```

2. Get a single product:

- Endpoint: GET /:id
- Description: Get details of a specific product.
- Response:
```bash
    {
        "data": {
            "product": {...}
        }
    }
```

3. Create a product:

- Endpoint: POST /create
- Description: Create a new product.
- Request:
```bash
    {
        "name": "Product Name",
        "quantity": 10
    }
```
- Response:
```bash
    {
        "data": {
        "product": {...}
        },
    "message": "Product Created successfully"
    }
```

4. Delete a product:

- Endpoint: DELETE /delete/:id
- Description: Delete a specific product.
- Response:
```bash
    {
        "message": "Deleted successfully"
    }
```

5. Update the quantity of a product:

- Endpoint: PATCH /:id/update_quantity
- Description: Update the quantity of a specific product.
- Query Parameters:
    - number: New quantity value
- Response:
```bash
    {
        "data": {
        "product": {...}
        },
    "message": "Updated successfully"
    }
```
## API Documentation
<a name="api-doc"></a>

#### Endpoints

- POST /create - Create new product
- GET / - Get all products
- GET /:id - Get single product
- PATCH /:id/update_quantity - Update product
- DELETE /delete/:id - Delete product

## Contributing
<a name="contributing"></a>

Contributions are always welcome!Feel free to open issues or pull requests.


## Authors
<a name="author"></a>

- [@Manohar](https://github.com/Manohar7730)


## Feedback
<a name="feedback"></a>

If you have any feedback, please reach out to us at manohar20century@gmail.com

