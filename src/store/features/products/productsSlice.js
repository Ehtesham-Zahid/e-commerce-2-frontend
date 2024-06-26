import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  productsByCategory: [],
  currentVariation: {},
  currentCategory: null,
  loading: false,
  error: null,
  gridView: "2",
  searchedProducts: [],
};

// Generate pending, fulfilled and rejected action types
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://e-commerce-2-backend.vercel.app/api/v1/products"
      );

      return response.data.allProducts;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async ({ category, sort, limit }, { rejectWithValue }) => {
    // Default limit is 4

    try {
      const response = await axios.get(
        `https://e-commerce-2-backend.vercel.app/api/v1/products/category/${category}?sort=${sort}&limit=${limit}`
      );

      return response.data.products;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setGridView(state, action) {
      state.gridView = action.payload;
    },
    setCategory(state, action) {
      state.currentCategory = action.payload;
    },
    setSearchedProducts(state, action) {
      action.payload.length === 0
        ? (state.searchedProducts = [])
        : (state.searchedProducts = state.allProducts.filter((product) =>
            product.title.toLowerCase().includes(action.payload.toLowerCase())
          ));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchProductsByCategory.pending, (state) => {
      state.loading = true;

      state.error = "";
    });
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.productsByCategory = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProductsByCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { setGridView, setCategory, setSearchedProducts } =
  productsSlice.actions;

export default productsSlice.reducer;
