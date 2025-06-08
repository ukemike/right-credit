/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

type AuthState = {
  userInfo: any | null;
  token: string | null;
  isSetupComplete: boolean;
  setupStep: number;
  createCustomerStep: number;
};

const initialState: AuthState = {
  userInfo: null,
  token: null,
  isSetupComplete: false,
  setupStep: 1,
  createCustomerStep: 1,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { data, token } }: PayloadAction<{ data: any; token: any }>
    ) => {
      state.token = token;
      state.userInfo = data;
    },

    setUser: (state, { payload }: PayloadAction<any>) => {
      state.userInfo = payload;
    },

    updateUser: (state, { payload }: PayloadAction<any>) => {
      state.userInfo = { ...state.userInfo, ...payload };
    },

    logOut: (state) => {
      state.userInfo = null;
      localStorage.removeItem('persist:root');
      Cookies.remove('token');
      window.location.href = '/auth/login';
      return initialState;
    },

    setSetupComplete: (state) => {
      state.isSetupComplete = true;
    },

    setSetupStep: (state, { payload }: PayloadAction<number>) => {
      state.setupStep = payload;
    },

    setCreateCustomerStep: (state, { payload }: PayloadAction<number>) => {
      state.createCustomerStep = payload;
    },
  },
});

export const {
  setCredentials,
  logOut,
  setUser,
  updateUser,
  setSetupComplete,
  setSetupStep,
  setCreateCustomerStep,
} = authSlice.actions;

export default authSlice.reducer;
