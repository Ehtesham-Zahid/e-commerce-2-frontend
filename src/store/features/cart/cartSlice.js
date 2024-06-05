import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  // status: "idle",
  loading: false,
  error: null,
};
// Async actions for server-side operations
// export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId) => {
//   const response = await fetch(`/api/cart/${userId}`);
//   return response.json();
// });

// export const addToServerCart = createAsyncThunk(
//   "cart/addToServerCart",
//   async ({ userId, product }) => {
//     await fetch("/api/cart", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ userId, product }),
//     });
//     return product;
//   }
// );

// export const removeFromServerCart = createAsyncThunk(
//   "cart/removeFromServerCart",
//   async ({ userId, productId }) => {
//     await fetch(`/api/cart/${userId}/${productId}`, {
//       method: "DELETE",
//     });
//     return productId;
//   }
// );

export const fetchProductsByVariants = createAsyncThunk(
  "cart/fetchProductsByVariants",
  async (_, { rejectWithValue }) => {
    const variantsData = localStorage.getItem("cart");
    try {
      const parsedData = JSON.parse(variantsData); // Ensure data is parsed correctly
      const response = await axios.post(
        "http://localhost:5000/api/v1/products/variants/",
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
    addToLocalCart: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    // removeFromLocalCart: (state, action) => {
    //   state.items = state.items.filter((item) => item.id !== action.payload);
    //   localStorage.setItem("cart", JSON.stringify(state.items));
    // },
    // loadLocalCart: (state) => {
    //   state.items = JSON.parse(localStorage.getItem("cart")) || [];
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsByVariants.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchProductsByVariants.fulfilled, (state, action) => {
      state.loading = false;
      (state.items = action.payload), (state.error = "");
    });
    builder.addCase(fetchProductsByVariants.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { addToLocalCart, removeFromLocalCart, loadLocalCart } =
  cartSlice.actions;

export default cartSlice.reducer;
