import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  user: null,
  loading: false,
  token: null,
  error: "",
  success: false,
};

// Generate pending, fulfilled and rejected action types
export const login = createAsyncThunk(
  "authentication/login",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/users/login/`,
        loginData
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.user._id);
      //   localStorage.setItem("email", response.data.user.email);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const signup = createAsyncThunk(
  "authentication/signup",
  async (signupData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/users/signup/`,
        signupData
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.user._id);
      // localStorage.setItem("email", response.data.user.email);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const googleAuth = createAsyncThunk(
  "authentication/googleAuth",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/users/googleAuth`,
        data
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.user._id);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "authentication/forgotPassword",
  async ({ email, toast }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/users/forgotPassword`,
        { email }
      );

      toast.success("Email Sent!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "authentication/resetPassword",
  async ({ resetToken, resetPasswordData }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/v1/users/resetPassword/${resetToken}`,
        resetPasswordData
      );

      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    resetError(state) {
      state.error = "";
    },
    logout(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      state.token = null;
      state.user = null;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = "";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(googleAuth.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(googleAuth.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = "";
    });
    builder.addCase(googleAuth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(forgotPassword.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(forgotPassword.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(resetPassword.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Export actions generated by createSlice
export const { resetError, logout } = authSlice.actions;

export default authSlice.reducer;
