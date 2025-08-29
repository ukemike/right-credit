import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

import { baseUrl } from '../baseUrl';
import { setCredentials, logOut } from '../slices/authSlice';
import type { RootState } from '../store';

// Create standard base query
export const baseQuery = fetchBaseQuery({
  baseUrl: `${baseUrl}`,
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).app.auth;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    // headers.set('Content-Type', 'application/json');
    return headers;
  },
});

// Create a separate refresh query that doesn't add auth headers automatically
const refreshQuery = fetchBaseQuery({
  baseUrl: `${baseUrl}`,
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

// Reusable baseQueryWithReauth function
export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const {
      app: {
        auth: { userInfo },
      },
    } = api.getState() as RootState;
    const refreshToken = userInfo?.refresh_token;

    if (!refreshToken) {
      api.dispatch(logOut());
      return result;
    }

    const refreshResult = await refreshQuery(
      {
        url: 'auth/refresh',
        method: 'POST',
        headers: {
          authorization: `Bearer ${refreshToken}`,
        },
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      const { access_token: accessToken } = refreshResult.data as {
        access_token: string;
        message: string;
      };

      const data = {
        ...userInfo,
        token: accessToken,
        refresh_token: refreshToken,
      };

      const payload = {
        data,
        token: accessToken,
      };

      api.dispatch(setCredentials(payload));

      // Update cookies
      Cookies.set('token', accessToken);
      Cookies.set('refresh_token', refreshToken);

      // Retry the original request
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};
