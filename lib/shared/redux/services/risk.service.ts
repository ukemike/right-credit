import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReauth } from '../utils/baseQueryWithReauth';

export const riskApi = createApi({
  reducerPath: 'riskApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Risk'],
  endpoints: (builder) => ({
    createRisk: builder.mutation({
      query: (body) => ({
        url: `risk_analysis/create`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Risk'],
    }),

    listRiskAnalysis: builder.query({
      query: (params) => ({
        url: `risk_analysis/list_risk_analysis`,
        method: 'GET',
        params,
      }),
      providesTags: ['Risk'],
    }),

    getRiskAnalysis: builder.query({
      query: (params) => ({
        url: `risk_analysis/get_analysis`,
        method: 'GET',
        params,
      }),
      providesTags: ['Risk'],
    }),

    listRisksByState: builder.query({
      query: (params) => ({
        url: `risk_analysis/list_risk_analysis`,
        method: 'GET',
        params,
      }),
      providesTags: ['Risk'],
    }),

    getRiskAnalysisById: builder.query({
      query: (id) => ({
        url: `risk_analysis/get_analysis/mock/${id}`,
        method: 'GET',
      }),
      providesTags: ['Risk'],
    }),

  }),
});

export const {
  useCreateRiskMutation,
  useListRiskAnalysisQuery,
  useGetRiskAnalysisQuery,
  useListRisksByStateQuery,
  useGetRiskAnalysisByIdQuery,
} = riskApi;
