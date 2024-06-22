import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  // status: "idle",
  loading: false,
  error: null,
};

export const fetchProductsByVariants = createAsyncThunk(
  "cart/fetchProductsByVariants",
  async (_, { rejectWithValue }) => {
    const variantsData = localStorage.getItem("cart");
    try {
      const parsedData = JSON.parse(variantsData); // Ensure data is parsed correctly
      const response = await axios.post(
        "https://e-commerce-2-backend.vercel.app/api/v1/products/variants/",
        parsedData,
        { headers: { "Content-Type": "application/json" } }
      );

      return response.data;
    } catch (error) {
      console.log(error);
      console.log(error.response);
      return rejectWithValue(error.response.data.message);
      // return rejectWithValue(error.response.data.message);
    }
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCartItems(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsByVariants.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchProductsByVariants.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProductsByVariants.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { resetCartItems } = cartSlice.actions;

export default cartSlice.reducer;
