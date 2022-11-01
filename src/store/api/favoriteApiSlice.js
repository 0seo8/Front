import { apiSlice } from '../api/apiSlice'

export const favoriteApi = apiSlice.injectEndpoints({
  tagTypes: ['Favorites'],
  endpoints: (builder) => ({
    getFavoriteItems: builder.query({
      query: () => 'favorites',
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Favorties', id })),
              'Favorties',
            ]
          : ['Favorties'],
    }),
    deleteFavoriteItem: builder.mutation({
      query: (data) => ({
        url: `favorites`,
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Favorties'],
    }),
    addFavoriteItem: builder.mutation({
      query: (data) => ({
        url: 'favorites',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Favorties'],
    }),
  }),
})

export const {
  useGetFavoriteItemsQuery,
  useDeleteFavoriteItemMutation,
  useAddFavoriteItemMutation,
} = favoriteApi
