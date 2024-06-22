import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

// Generate pending, fulfilled and rejected action types
export const createOrderAuth = createAsyncThunk(
  "orders/createOrderAuth",
  async (data, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        "https://e-commerce-2-backend.vercel.app/api/v1/orders/createOrderAuth/",
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
  "orders/createOrderUnAuth",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://e-commerce-2-backend.vercel.app/api/v1/orders/createOrderUnAuth/",
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

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        "https://e-commerce-2-backend.vercel.app/api/v1/orders/",
        config
      );
      console.log("ORDERS: ", response);
      return response.data.data.orders;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOrderAuth.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(createOrderAuth.fulfilled, (state, action) => {
      state.loading = false;
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
    builder.addCase(createOrderUnAuth.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(createOrderUnAuth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchOrders.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
      state.error = "";
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default orderSlice.reducer;
