import { apiSlice } from '../api/apiSlice'

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query({
      query: (data) => {
        console.log(data)
        return {
          url: 'tags',
          method: 'Get',
          body: data,
        }
      },
    }),
  }),
})

export const { useGetTagsQuery } = categoryApi
