import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: [] as any[],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
