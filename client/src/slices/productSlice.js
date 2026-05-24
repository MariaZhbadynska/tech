import { v4 as uuidv4 } from "uuid";
import {
  deleteProduct,
  getAllProducts,
  getProduct,
  pushProduct,
  updateProduct,
} from "../services/productsService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const saveProductsToLocalStorage = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await getAllProducts();
    return response;
  },
);

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (id) => {
    const response = await getProduct(id);
    return response;
  },
);

export const updateProductById = createAsyncThunk(
  "products/updateProduct",
  async ({ id, updatedData }) => {
    const response = await updateProduct(id, updatedData);
    return response;
  },
);

export const deleteProductById = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await deleteProduct(id);
    return id;
  },
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async ({
    image,
    name,
    price,
    tab,
    storageOptions,
    specifications,
    catalog,
    brandtype,
    modeltype,
    activeColor,
    activeStorage,
    inCart = false,
    isFav = false,
    colors,
  }) => {
    const product = {
      id: uuidv4(),
      image,
      name,
      price,
      tab,
      storageOptions,
      specifications,
      catalog,
      brandtype,
      modeltype,
      activeColor,
      activeStorage,
      inCart,
      isFav,
      colors,
    };

    const response = await pushProduct(product);
    return response;
  },
);

const initialState = {
  data: [],
  selectedProduct: null,
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      })

      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);

        saveProductsToLocalStorage(state.data);
      })

      .addCase(deleteProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter(
          (product) => product.id !== action.payload,
        );

        saveProductsToLocalStorage(state.data);
      })

      .addCase(updateProductById.fulfilled, (state, action) => {
        state.isLoading = false;

        const index = state.data.findIndex(
          (product) => product.id === action.payload.id,
        );

        if (index !== -1) {
          state.data[index] = action.payload;
        }

        saveProductsToLocalStorage(state.data);
      });
  },
});

export default productsSlice.reducer;