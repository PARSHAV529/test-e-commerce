import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async ({ limit, skip }: { limit: number; skip: number }) => {
    const res = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    )
    return res.data
  }
)

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [] as unknown[],
    total: 0,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload.products
        state.total = action.payload.total
      })
  },
})

export default productSlice.reducer
