import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://project-gutenberg-free-books-api1.p.rapidapi.com",

        prepareHeaders: (headers) => {
            headers.set("Accept", "application/json");
            headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPIDAPI_KEY);
            headers.set("X-RapidAPI-Host", "project-gutenberg-free-books-api1.p.rapidapi.com");

            return headers;
        },
    }),

    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/books",
        }),
    }),
});

export const { useGetBooksQuery } = bookApi;