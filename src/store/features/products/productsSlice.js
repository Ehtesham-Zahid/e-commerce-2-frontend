import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allProducts: [],
  productsByCategory: [],
  currentVariation: {},
  currentCategory: null,
  loading: false,
  error: null,
  gridView: "2",
};

// Generate pending, fulfilled and rejected action types
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/products");
      console.log(response);
      return response.data.allProducts;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async ({ category, sort, limit }, { rejectWithValue }) => {
    // Default limit is 4
    console.log(category);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/products/category/${category}?sort=${sort}&limit=${limit}`
      );
      console.log(sort);
      console.log(response);
      return response.data.products;
    } catch (error) {
      console.log(error);
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

export const { setGridView, setCategory } = productsSlice.actions;

export default productsSlice.reducer;
