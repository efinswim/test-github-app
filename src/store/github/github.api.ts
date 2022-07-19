import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRepo, IUser, RootObject, UserRoot } from '../../models/models';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getUsersByName: builder.query<IUser[], string>({
      query: (search: string) => ({
        url: `search/users`,
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: RootObject<IUser>) => response.items,
    }),
    getUserRepos: builder.query<IRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
    getUser: builder.query<UserRoot[], string>({
      query: (username: string) => ({
        url: `users/${username}`,
      }),
    }),
  }),
});

export const { useGetUsersByNameQuery, useLazyGetUserReposQuery, useGetUserReposQuery, useGetUserQuery } = githubApi;
