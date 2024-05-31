import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: "idle",
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
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchCart.fulfilled, (state, action) => {
  //         state.items = action.payload;
  //         state.status = "succeeded";
  //       })
  //       .addCase(addToServerCart.fulfilled, (state, action) => {
  //         state.items.push(action.payload);
  //       })
  //       .addCase(removeFromServerCart.fulfilled, (state, action) => {
  //         state.items = state.items.filter((item) => item.id !== action.payload);
  //       });
  //   },
});

export const { addToLocalCart, removeFromLocalCart, loadLocalCart } =
  cartSlice.actions;

export default cartSlice.reducer;
