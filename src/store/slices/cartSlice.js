import { createSlice } from '@reduxjs/toolkit'
let cartItems = localStorage.getItem('cartItems')
if (!cartItems) {
  cartItems = '[]'
  localStorage.setItem('cartItems', JSON.stringify([]))
}

const initialState = JSON.parse(cartItems)

export const cartsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItems(state, action) {
      let id = state.findIndex((item) => {
        return item.productId === action.payload.productId
      })
      if (id === -1) {
        state.push(action.payload)
      } else {
        state[id].count += action.payload.count
      }
      localStorage.setItem('cartItems', JSON.stringify(state))
    },
    removeCartItems(state, action) {
      state = state.filter(
        (item) => item.productId !== action.payload.productId,
      )
      localStorage.setItem('cartItems', JSON.stringify(state))
    },
  },
})

export const { addCartItems, removeCartItems } = cartsSlice.actions

export default cartsSlice.reducer
