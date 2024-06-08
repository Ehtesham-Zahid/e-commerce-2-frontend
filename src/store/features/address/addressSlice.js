import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  addresses: [],
  primaryAddress: {},
  loading: false,
  error: null,
};

// Generate pending, fulfilled and rejected action types
export const fetchAddresses = createAsyncThunk(
  "addresses/fetchAddresses",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        "http://localhost:5000/api/v1/addresses/",
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

export const fetchPrimaryAddress = createAsyncThunk(
  "addresses/fetchPrimaryAddress",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        "http://localhost:5000/api/v1/addresses/primary",
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

export const deleteAddress = createAsyncThunk(
  "addresses/deleteAddress",
  async (addressId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.delete(
        `http://localhost:5000/api/v1/addresses/${addressId}`,
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

const addressSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAddresses.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchAddresses.fulfilled, (state, action) => {
      state.loading = false;
      state.addresses = action.payload;
      state.error = "";
    });
    builder.addCase(fetchAddresses.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchPrimaryAddress.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchPrimaryAddress.fulfilled, (state, action) => {
      state.loading = false;
      state.primaryAddress = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPrimaryAddress.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteAddress.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteAddress.fulfilled, (state, action) => {
      state.loading = false;
      //   state.primaryAddress = action.payload;
      state.error = "";
    });
    builder.addCase(deleteAddress.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// export const { addToLocalCart, removeFromLocalCart, loadLocalCart } =
//   addressSlice.actions;

export default addressSlice.reducer;
