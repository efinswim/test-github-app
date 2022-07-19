import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser, RootObject } from '../../models/models';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    getUsersByName: builder.query<IUser[], string>({
      query: (search: string) => ({
        url: `search/users`,
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: RootObject<IUser>) => response.items
    }),
  }),
});

export const { useGetUsersByNameQuery } = githubApi;
