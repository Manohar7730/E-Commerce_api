
# [E-Commerce API Project](https://e-commerce-oy6q.onrender.com/) <-- to view all products in JSON format

A lightweight and scalable RESTful API for managing e-commerce products, built with Node.js, Express, and MongoDB. Deployed live on Render for real-time testing.

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

- Node.js (v18.x)
- Express.js (v4.x)
- MongoDB (Mongoose v7.x)
- Postman (for testing)

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
|-- config/                # Database configuration
|   |-- mongoose.js       # MongoDB connection setup
|-- controllers/          # Business logic for API endpoints
|   |-- productController.js
|-- models/              # Database schemas
|   |-- product.js      # Product schema
|-- routers/             # API routes
|   |-- product.js      # Product routes
|-- .env                # Environment variables
|-- .gitignore          # Files to ignore in Git
|-- index.js            # Main server file
|-- package.json        # Project dependencies and scripts
|-- README.md           # Project documentation

```
## Usage
<a name="usage"></a>

1. Get all products:

- Endpoint: GET /
- Description: Get a list of all products.
- Response (Status: 200 OK):
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
- Request (Status: 201 Created): {
                                     "data": {
                                         "product": {...}
                                     },
                                     "message": "Product Created successfully"
                                 }
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

| Method | Endpoint                  | Description                     |
|--------|---------------------------|---------------------------------|
| GET    | `/`                       | Fetch all products             |
| GET    | `/:id`                    | Fetch product by ID            |
| POST   | `/create`                 | Create a new product           |
| DELETE | `/delete/:id`             | Delete a product by ID         |
| PATCH  | `/:id/update_quantity`    | Update product quantity        |

## Contributing
<a name="contributing"></a>

Contributions are always welcome!Feel free to open issues or pull requests.

## License
This project is licensed under the ISC License.

## Authors
<a name="author"></a>

- [@Manohar](https://github.com/Manohar7730)


## Feedback
<a name="feedback"></a>

If you have any feedback, please reach out to us at manohar20century@gmail.com

