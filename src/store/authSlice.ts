import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", data)

      localStorage.setItem("token", res.data.token)

      return res.data
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Invalid username or password"
      )
    }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null as unknown,
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default authSlice.reducer
