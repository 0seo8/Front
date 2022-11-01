import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  gender: 'women',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setGender(state, action) {
      state.gender = action.payload
    },
  },
})

export const { setGender } = userSlice.actions

export default userSlice.reducer
