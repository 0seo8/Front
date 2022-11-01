import { apiSlice } from '../api/apiSlice'

export const magazineApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //카드 상품 불러오기
    getMagazines: builder.query({
      query: () => 'magazines',
    }),
    getMagazine: builder.query({
      query: (id) => `magazines/${id}`,
    }),
  }),
})

export const { useGetMagazineQuery, useGetMagazinesQuery } = magazineApi
