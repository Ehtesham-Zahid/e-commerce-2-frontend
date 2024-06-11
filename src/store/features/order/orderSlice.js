import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

// Generate pending, fulfilled and rejected action types
export const createOrderAuth = createAsyncThunk(
  "addresses/createOrderAuth",
  async (data, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        "http://localhost:5000/api/v1/orders/createOrderAuth/",
        data,
        config
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const createOrderUnAuth = createAsyncThunk(
  "addresses/createOrderAuth",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/orders/createOrderUnAuth/",
        data
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.error.message);
    }
  }
);
// export const fetchAddresses = createAsyncThunk(
//   "addresses/fetchAddresses",
//   async (_, { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       const response = await axios.get(
//         "http://localhost:5000/api/v1/addresses/",
//         config
//       );
//       console.log(response);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error.response.data.error.message);
//     }
//   }
// );

const addressSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOrderAuth.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(createOrderAuth.fulfilled, (state, action) => {
      state.loading = false;
      //   state.addresses = action.payload;
      state.error = "";
    });
    builder.addCase(createOrderAuth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(createOrderUnAuth.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(createOrderUnAuth.fulfilled, (state, action) => {
      state.loading = false;
      //   state.addresses = action.payload;
      state.error = "";
    });
    builder.addCase(createOrderUnAuth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// export const { addToLocalCart, removeFromLocalCart, loadLocalCart } =
//   addressSlice.actions;

export default addressSlice.reducer;
