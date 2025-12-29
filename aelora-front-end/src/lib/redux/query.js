import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";  // RTK Query imports

const baseUrl = "http://localhost:8000/api";  // Base URL for the API

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",  // Optional: a unique key to identify the API slice
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),  // Base query using fetch 
  // Define the available endpoints  
  endpoints: (build) => ({
    getEnergyGenerationRecordsBySolarUnit: build.query({
      query: (id) => `/energy-generation-records/solar-unit/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEnergyGenerationRecordsBySolarUnitQuery } = api;
