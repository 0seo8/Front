import { apiSlice } from '../api/apiSlice'

export const refundApi = apiSlice.injectEndpoints({
  tagTypes: ['Refunds'],
  endpoints: (builder) => ({
    //환불 상품 불러오기
    getRefundItems: builder.query({
      query: () => 'refunds',
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Refunds', id })), 'Refunds']
          : ['Refunds'],
    }),
  }),
})

export const { useGetRefundItemsQuery } = refundApi
