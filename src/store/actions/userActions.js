import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../../api/ApiService";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }) => {
    const token = await ApiService.LoginUser(email, password);
    return token;
  }
);

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (token) => {
    const userProfile = await ApiService.getUserProfile(token);
    return userProfile;
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async ({ token, updatedProfile }, { rejectWithValue }) => {
    try {
      const data = await ApiService.updateUserProfile(token, updatedProfile);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
