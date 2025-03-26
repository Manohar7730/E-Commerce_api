import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:8000/" });

export const allProducts = async () => {
  try {
    const response = await API.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const addProduct = async (product) => {
  try {
    const response = await API.post("/create", product);
    return response.data;
  } catch (error) {
    console.error("Error Adding products:", error);
    throw error;
  }
};
export const deleteProduct = async (id) => {
    try {
      const response = await API.delete(`/delete/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  };

  export const updateProductQuantity = async (id, quantity) => {
    try {
      const response = await API.patch(`/${id}/update_quantity`, null, {
        params: { number: quantity },
      });
      return response.data;
    } catch (error) {
      console.error(
        "Error updating product quantity:",
        error.response?.data || error
      );
      throw error;
    }
  };
