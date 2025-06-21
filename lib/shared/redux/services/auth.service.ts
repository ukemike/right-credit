import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReauth } from '../utils/baseQueryWithReauth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Auth', 'User'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: `auth/login`,
        method: 'POST',
        body,
      }),
    }),

    register: builder.mutation({
      query: (body) => ({
        url: `auth/register`,
        method: 'POST',
        body,
      }),
    }),

    refresh: builder.mutation({
      query: () => ({
        url: `auth/refresh`,
        method: 'POST',
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: `auth/logout`,
        method: 'POST',
      }),
    }),

    resetPassword: builder.mutation({
      query: (body) => ({
        url: `auth/reset_password/${body.token}`,
        method: 'POST',
        body,
      }),
    }),

    forgotPassword: builder.mutation({
      query: (body) => ({
        url: `auth/forgot_password`,
        method: 'POST',
        body,
      }),
    }),

    updateProfile: builder.mutation({
      query: (body) => ({
        url: `users/update_profile`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    getUser: builder.query({
      query: () => ({
        url: `users/user`,
        method: 'GET',
      }),
      providesTags: ['User'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useRefreshMutation,
  useLogoutMutation,
  useResetPasswordMutation,
  useForgotPasswordMutation,
  useUpdateProfileMutation,
  useGetUserQuery,
} = authApi;
