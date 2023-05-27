import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiKey from "../constants/apiKey";

const now = new Date();
const year = now.getFullYear();
const monthOriginal = now.getMonth() + 1;
const month = String(monthOriginal).padStart(2, "0");
const date = String(now.getDate()).padStart(2, "0");
const today = `${year}-${month}-${date}`;

const baseQuery = {
  serializeQueryArgs: ({ endpointName }) => endpointName,
  merge: (currentCache, newItems) => {
    currentCache.results.push(...newItems.results);
  },
  forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
};

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getTrending: builder.query({
      ...baseQuery,
      query: ({ type, page }) =>
        `trending/${type}/day?language=en-US&api_key=${apiKey}&page=${page}`,
    }),
    getLatestMovies: builder.query({
      ...baseQuery,
      query: (page) => {
        return `discover/movie?api_key=${apiKey}&sort_by=primary_release_date.desc&primary_release_year=${year}&primary_release_date.lte=${today}&region=us&with_release_type=2&page=${page}`;
      },
    }),
    getLatestTvShows: builder.query({
      ...baseQuery,
      query: (page) => {
        return `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=primary_release_date.desc&watch_region=us&air_date.lte=${year}-${month}-${date}&language=en-US&page=${page}`;
      },
    }),
    getComingSoonMovies: builder.query({
      ...baseQuery,
      query: (page) => {
        return `discover/movie?api_key=${apiKey}&sort_by=primary_release_date.desc&primary_release_year=${year}&primary_release_date.gte=${today}&primary_release_date.lte=${year}-${String(
          monthOriginal + 3
        ).padStart(2, "0")}-01&region=us&with_release_type=2&page=${page}`;
      },
    }),
    searchByKeywords: builder.query({
      query: (query) => {
        return `search/multi?api_key=${apiKey}&query=${query}`;
      },
      transformResponse: (response, meta, arg) => response.results,
    }),
    getDetails: builder.query({
      query: ({ type, id }) => {
        return `${type}/${id}?api_key=${apiKey}&language=en-US`;
      },
    }),
  }),
});

export const {
  useGetTrendingQuery,
  useGetLatestMoviesQuery,
  useGetLatestTvShowsQuery,
  useGetComingSoonMoviesQuery,
  useSearchByKeywordsQuery,
  useGetDetailsQuery,
} = moviesApi;
