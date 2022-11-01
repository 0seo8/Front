import { apiSlice } from './apiSlice'

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getSimpleProducts: builder.query({
      query: (queryString) => ({
        url: `/products/list?${queryString}`,
        method: 'POST',
      }),
    }),
    getTagItems: builder.query({
      query: (tag) => `/tags/${tag}`,
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetSimpleProductsQuery,
  useGetTagItemsQuery,
} = productApi
