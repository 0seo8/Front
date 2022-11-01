import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 1,
  selectedOption: 'FF',
}

export const productSlice = createSlice({
  name: 'proudct',
  initialState,
  reducers: {
    resetCount(state, action) {
      state.count = 1
    },
    changeCount(state, action) {
      if (state.count + action.payload * 1 < 1) return
      state.count = state.count + action.payload * 1
    },
    setSecletedOption(state, action) {
      state.selectedOption = action.payload
    },
  },
})

export const { resetCount, changeCount, setSecletedOption } =
  productSlice.actions

export default productSlice.reducer
