import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  furiganaFirst: '',
  furiganaLast: '',
  phoneNumber: '',
  zipcode: '',
  city: '',
  street: '',
  country: 'Japan(+81)',
}

export const shippingInfoSlice = createSlice({
  name: 'shippingInfo',
  initialState,
  reducers: {
    resetInfo(state, action) {
      return (state = initialState)
    },
    changeInfo(state, action) {
      const { value, name } = action.payload
      return (state = {
        ...state,
        [name]: value,
      })
    },
  },
})

export const { resetInfo, changeInfo } = shippingInfoSlice.actions

export default shippingInfoSlice.reducer
