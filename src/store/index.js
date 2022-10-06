import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { cartApi } from './api/cartApiSlice'
import { magazineApi } from './api/magazineSlice'
import { questionApi } from './api/questionSlice'
import userReducer from './slices/userSlice'
import productReducer from './slices/productSlice'

const rootReducer = combineReducers({
  [cartApi.reducerPath]: cartApi.reducer,
  [magazineApi.reducerPath]: magazineApi.reducer,
  [questionApi.reducerPath]: questionApi.reducer,
  user: userReducer,
  product: productReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      cartApi.middleware,
      magazineApi.middleware,
      questionApi.middleware,
    ]),
})

setupListeners(store.dispatch)
