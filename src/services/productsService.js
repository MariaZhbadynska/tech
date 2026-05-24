import { products } from "../data/products";

const getAllProducts = async () => {
  const savedProducts = localStorage.getItem("products");

  if (savedProducts) {
    return JSON.parse(savedProducts);
  }

  return products.map((product) => ({ ...product }));
};

const getProduct = async (id) => {
  const product = products.find((product) => product.id === id);
  return product ? { ...product } : null;
};

const updateProduct = async (id, updatedData) => {
  const index = products.findIndex((p) => p.id === id);

  if (index !== -1) {
    products[index] = {
      ...products[index],
      ...updatedData,
    };

    return products[index];
  }

  return null;
};

const pushProduct = async (product) => {
  products.push(product);
  return product;
};

const deleteProduct = async (id) => {
  const index = products.findIndex((p) => p.id === id);

  if (index !== -1) {
    products.splice(index, 1);
  }

  return { success: true };
};

export {
  getAllProducts,
  getProduct,
  updateProduct,
  pushProduct,
  deleteProduct,
};