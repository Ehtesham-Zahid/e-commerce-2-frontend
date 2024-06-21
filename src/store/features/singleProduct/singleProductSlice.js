import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  singleProduct: {},
  currentVariation: {},
  loading: false,
  error: null,
};

export const fetchSingleProduct = createAsyncThunk(
  "singleProduct/fetchSingleProduct",
  async ({ productId, color }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://e-commerce-2-backend.vercel.app/api/v1/products/${productId}`
      );
      console.log(response);
      return {
        product: response.data,
        variation: response.data.variations.find(
          (variation) => variation.color == color
        ),
      };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.loading = true;

      state.error = "";
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.singleProduct = action.payload.product;
      state.currentVariation = action.payload.variation;
      state.error = "";
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { setGridView, setCategory } = singleProductSlice.actions;

export default singleProductSlice.reducer;
