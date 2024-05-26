import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  gridView: "2",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setGridView(state, action) {
      state.gridView = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setGridView } = productsSlice.actions;

export default productsSlice.reducer;
