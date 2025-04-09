// import { createAsyncThunk } from "@reduxjs/toolkit";
// import Http from "../../../Helper/Http";
// import Axios from "axios";

// export const userLogin = createAsyncThunk(
//   "user/login",
//   async (datas, { rejectWithValue }) => {
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json", // Set the Content-Type header to JSON
//         },
//       };
//       const data = await Axios.post(`/api/v1/auth/login`, datas, config);
//       localStorage.setItem("userToken", data.data.token);
//       return data.data;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// export const userRegister = createAsyncThunk(
//   "user/register",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json", // Set the Content-Type header to JSON
//         },
//       };
//       const data = await Axios.post(`/api/v1/auth/register`, userData, config);
//       return data.data;
//     } catch (error) {
//       console.log(error);
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
// export const forgotPassword = createAsyncThunk(
//   "user/forgetpassword",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const data = await Http.post(`/api/v1/auth/forgot-password`, userData);
//       return data.data;
//     } catch (error) {
//       console.log(error);
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// export const userAll = createAsyncThunk(
//   "user/all",
//   async (allUser, { rejectWithValue }) => {
//     try {
//       const data = await Http.get(`/api/v1/auth/getallusers`);
//       return data.data.users;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
// export const LoggedInUser = createAsyncThunk(
//   "user/me",
//   async (alluser, { rejectWithValue }) => {
//     try {
//       const data = await Http.get("/api/v1/auth/me");
//       return data.data.user;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
// export const getUserById = createAsyncThunk(
//   "user/id",
//   async (id, { rejectWithValue }) => {
//     try {
//       const data = await Http.get(`/user/userById/${id}`);
//       return data.data;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
// export const editUserById = createAsyncThunk(
//   "user/edit",
//   async (item, { rejectWithValue }) => {
//     try {
//       const data = await Http.put(`/user/${item.id}`, item.formdata);
//       return data.data;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";
import Http from "../../../Helper/Http";
import Axios from "axios";

// ✅ Send OTP to email
export const sendOtp = createAsyncThunk(
  "user/sendOtp",
  async ({ email }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // Send POST request to backend API to trigger OTP email
      const data = await Axios.post(`/api/v1/auth/send-otp`, { email }, config);
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// ✅ User Login
export const userLogin = createAsyncThunk(
  "user/login",
  async (datas, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = await Axios.post(`/api/v1/auth/login`, datas, config);
      localStorage.setItem("userToken", data.data.token);
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// ✅ Register User
export const userRegister = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = await Axios.post(`/api/v1/auth/register`, userData, config);
      return data.data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// ✅ Forgot Password (new password submission after OTP)
export const forgotPassword = createAsyncThunk(
  "user/forgetpassword",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await Http.post(`/api/v1/auth/forgot-password`, userData);
      return data.data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// ✅ Get All Users (Admin)
export const userAll = createAsyncThunk(
  "user/all",
  async (allUser, { rejectWithValue }) => {
    try {
      const data = await Http.get(`/api/v1/auth/getallusers`);
      return data.data.users;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// ✅ Get Current Logged-in User
export const LoggedInUser = createAsyncThunk(
  "user/me",
  async (alluser, { rejectWithValue }) => {
    try {
      const data = await Http.get("/api/v1/auth/me");
      return data.data.user;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// ✅ Get User by ID
export const getUserById = createAsyncThunk(
  "user/id",
  async (id, { rejectWithValue }) => {
    try {
      const data = await Http.get(`/user/userById/${id}`);
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// ✅ Edit User by ID
export const editUserById = createAsyncThunk(
  "user/edit",
  async (item, { rejectWithValue }) => {
    try {
      const data = await Http.put(`/user/${item.id}`, item.formdata);
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

