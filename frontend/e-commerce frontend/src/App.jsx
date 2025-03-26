import React, { useEffect, useState } from "react";
import {
  allProducts,
  addProduct,
  deleteProduct,
  updateProductQuantity,
} from "./API";

export default function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch all products on component mount
  useEffect(() => {
    setLoading(true);
    allProducts()
      .then((data) => {
        setProducts(data.data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch products. Please try again later.");
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#333" }}>E-Commerce Product Manager</h1>

      {/* Error Display */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Loading Indicator */}
      {loading && <p>Loading products...</p>}

      {/* All Products Section */}
      <div id="all-products">
        <h2>All Products</h2>
        {products.length > 0
          ? products.map((product) => (
              <div
                key={product._id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "10px",
                  margin: "10px 0",
                }}
              >
                <h3 style={{ color: "#555" }}>{product.name}</h3>
                <p>Quantity: {product.quantity}</p>

                {/* Delete Product Button */}
                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                  onClick={() => {
                    deleteProduct(product._id)
                      .then(() => {
                        setProducts((prev) =>
                          prev.filter((p) => p._id !== product._id)
                        );
                      })
                      .catch((err) => {
                        alert("Failed to delete product.");
                        console.error("Error deleting product:", err);
                      });
                  }}
                >
                  Delete
                </button>

                {/* Update Product Quantity Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const newQuantity = parseInt(e.target.quantity.value, 10);

                    if (isNaN(newQuantity) || newQuantity < 0) {
                      alert("Please enter a valid quantity.");
                      return;
                    }

                    updateProductQuantity(product._id, newQuantity)
                      .then(() => {
                        setProducts((prev) =>
                          prev.map((p) =>
                            p._id === product._id
                              ? { ...p, quantity: newQuantity }
                              : p
                          )
                        );
                        e.target.reset(); // Reset the input field
                      })
                      .catch((err) => {
                        alert("Failed to update quantity. Please try again.");
                        console.error("Error updating product quantity:", err);
                      });
                  }}
                >
                  <input
                    type="number"
                    name="quantity"
                    placeholder="New quantity"
                    style={{ marginRight: "10px", padding: "5px" }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Update Quantity
                  </button>
                </form>
              </div>
            ))
          : !loading && <h3>No products found</h3>}
      </div>

      {/* Add Product Section */}
      <div id="add-product" style={{ marginTop: "30px" }}>
        <h2>Add a New Product</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const product = {
              name: e.target.name.value.trim(),
              quantity: parseInt(e.target.quantity.value.trim(), 10),
            };

            if (
              !product.name ||
              isNaN(product.quantity) ||
              product.quantity < 0
            ) {
              alert("Please enter valid product details.");
              return;
            }

            addProduct(product)
              .then((data) => {
                setProducts((prev) => [...prev, data.data.product]);
                e.target.reset(); // Reset form after submission
              })
              .catch((err) => {
                alert("Failed to add product. Please try again.");
                console.error("Error adding product:", err);
              });
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Product name"
            style={{ marginRight: "10px", padding: "5px" }}
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            style={{ marginRight: "10px", padding: "5px" }}
            min="0"
            required
          />
          <button
            type="submit"
            style={{
              backgroundColor: "green",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}