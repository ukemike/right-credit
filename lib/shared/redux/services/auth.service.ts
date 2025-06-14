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
      invalidatesTags: ['Auth'],
    }),

    register: builder.mutation({
      query: (body) => ({
        url: `auth/register`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),

    refresh: builder.mutation({
      query: () => ({
        url: `auth/refresh`,
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),

    logout: builder.mutation({
      query: () => ({
        url: `auth/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),

    resetPassword: builder.mutation({
      query: (body) => ({
        url: `auth/reset_password/${body.token}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),

    forgotPassword: builder.mutation({
      query: (body) => ({
        url: `auth/forgot_password`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
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
